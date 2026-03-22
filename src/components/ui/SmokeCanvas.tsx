import { useEffect, useRef } from 'react';
import * as THREE from 'three';

// ── Vertex shader ─────────────────────────────────────────────────────────
// Full-screen quad; no MVP needed with orthographic camera at 0/1 far.
const VERT = /* glsl */`
void main() {
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`;

// ── Fragment shader ───────────────────────────────────────────────────────
// Domain-warped fBm using gradient noise (Perlin-style) + quintic curves.
// Gradient noise has C1 continuity — zero grid/block artifacts.
// Rotation between octaves removes axis-aligned streaking.
const FRAG = /* glsl */`
precision highp float;

uniform float uTime;
uniform vec2  uRes;
uniform vec3  uColor;
uniform float uAlpha;

// Gradient hash — returns unit-circle pseudo-random vector
vec2 ghash(vec2 p) {
  p = vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)));
  return -1.0 + 2.0 * fract(sin(p) * 43758.5453);
}

// Gradient noise with quintic interpolation (C2-continuous, no block artifacts)
float gnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  // Quintic fade — smoother than cubic Hermite
  vec2 u = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(
    mix(dot(ghash(i + vec2(0,0)), f - vec2(0,0)),
        dot(ghash(i + vec2(1,0)), f - vec2(1,0)), u.x),
    mix(dot(ghash(i + vec2(0,1)), f - vec2(0,1)),
        dot(ghash(i + vec2(1,1)), f - vec2(1,1)), u.x),
    u.y
  );
}

// Slight rotation between octaves — breaks axis-aligned patterns
const mat2 ROT = mat2(0.8, -0.6, 0.6, 0.8);

// Fractal Brownian motion — 4 octaves, remapped to [0,1]
float fbm(vec2 p) {
  float val = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    val += amp * gnoise(p);
    p    = ROT * p * 2.01 + vec2(3.1, 1.7);
    amp *= 0.52;
  }
  return val * 0.5 + 0.5;
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  float t  = uTime * 0.04;

  // Single warp layer — organic drift and swirl
  vec2 q = vec2(
    fbm(uv * 2.5 + t),
    fbm(uv * 2.5 + vec2(5.2, 1.3) + t * 0.7)
  );

  // Final density field — warped by q
  float f = fbm(uv * 2.5 + 3.5 * q + vec2(1.7, 9.2) + 0.13 * t);

  // Soft vignette — more smoke at edges, lighter in center
  float radial = length(uv - 0.5) * 1.5;
  float edge   = smoothstep(0.0, 1.0, radial);

  // Wide smoothstep range → gradual, connected wisps; no hard edges
  float fog   = smoothstep(0.18, 0.80, f) * (0.35 + 0.65 * edge);
  float alpha = fog * uAlpha;

  gl_FragColor = vec4(uColor, alpha);
}
`;

// ── Component ─────────────────────────────────────────────────────────────
export function SmokeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // WebGL availability guard
    if (!window.WebGLRenderingContext) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    } catch {
      return; // WebGL unavailable — fall back gracefully
    }

    // Half-resolution render — smoke is soft/volumetric, upscaling invisible;
    // 4× fewer fragment shader invocations = major GPU savings
    const W = Math.floor(window.innerWidth / 2);
    const H = Math.floor(window.innerHeight / 2);
    renderer.setPixelRatio(1);
    renderer.setSize(W, H, false);
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Scene: one full-screen quad
    const scene    = new THREE.Scene();
    const camera   = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const geometry = new THREE.PlaneGeometry(2, 2);

    const isDark    = () => document.documentElement.getAttribute('data-theme') === 'night';
    const getColor  = (): THREE.Vector3 =>
      isDark()
        ? new THREE.Vector3(0.84, 0.78, 0.68)  // warm cream wisps on dark bg
        : new THREE.Vector3(0.08, 0.065, 0.05); // dark ink smoke on paper bg
    const getAlpha  = (): number => isDark() ? 0.22 : 0.42; // light mode needs higher alpha for contrast

    const uniforms: { [key: string]: THREE.IUniform } = {
      uTime:  { value: 0 },
      uRes:   { value: new THREE.Vector2(W, H) },
      uColor: { value: getColor() },
      uAlpha: { value: getAlpha() },
    };

    const material = new THREE.ShaderMaterial({
      vertexShader:   VERT,
      fragmentShader: FRAG,
      uniforms,
      transparent: true,
      depthWrite:  false,
    });

    scene.add(new THREE.Mesh(geometry, material));

    // Animation loop — throttled to 24 fps (smoke moves slowly, imperceptible)
    let rafId: number;
    let lastRender = 0;
    const FRAME_INTERVAL = 1000 / 24;
    const clock = new THREE.Clock();
    const animate = (timestamp: number = 0) => {
      rafId = requestAnimationFrame(animate);
      if (timestamp - lastRender < FRAME_INTERVAL) return;
      lastRender = timestamp;
      uniforms.uTime.value = clock.getElapsedTime();
      renderer.render(scene, camera);
    };
    animate(0);

    // Resize handler
    const onResize = () => {
      const newW = Math.floor(window.innerWidth / 2);
      const newH = Math.floor(window.innerHeight / 2);
      renderer.setSize(newW, newH, false);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      (uniforms.uRes.value as THREE.Vector2).set(newW, newH);
    };
    window.addEventListener('resize', onResize);

    // React to day ↔ night theme switch
    const observer = new MutationObserver(() => {
      uniforms.uColor.value = getColor();
      uniforms.uAlpha.value = getAlpha();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9994,
        pointerEvents: 'none',
      }}
    />
  );
}
