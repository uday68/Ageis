import React, { useEffect, useRef } from "react";

const LandingPage: React.FC = () => {
  // Refs for the shader containers
  const shaderContainerRef = useRef<HTMLDivElement>(null);
  const threeContainerRef = useRef<HTMLDivElement>(null);

  // WebGL shader (noise background)
  useEffect(() => {
    const container = shaderContainerRef.current;
    if (!container) return;

    const canvas = document.createElement("canvas");
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    container.appendChild(canvas);

    // Sync size
    const syncSize = () => {
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };
    syncSize();
    if (typeof ResizeObserver !== "undefined") {
      new ResizeObserver(syncSize).observe(container);
    }

    const raw = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
    const gl = raw as unknown as WebGLRenderingContext | null;
    if (!gl) return;

        const vs = `attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

    const fs = `precision highp float;
uniform float u_time;
uniform vec2 u_resolution;
varying vec2 v_texCoord;

void main() {
      const vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    float noise = sin(uv.x * 10.0 + u_time * 0.2) * cos(uv.y * 10.0 - u_time * 0.15);
    noise += 0.5 * sin(uv.x * 20.0 - u_time * 0.3) * cos(uv.y * 15.0 + u_time * 0.25);
    vec3 baseColor = vec3(0.047, 0.047, 0.051);
    vec3 accentColor = vec3(0.18, 0.56, 0.98);
    vec3 finalColor = mix(baseColor, baseColor + accentColor * 0.03, noise * 0.5 + 0.5);
    float vignette = 1.0 - length(uv - 0.5) * 0.7;
    finalColor *= vignette;
    gl_FragColor = vec4(finalColor, 1.0);
}`;

    const cs = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src);
      gl.compileShader(s);
      return s;
    };

    const prog = gl.createProgram()!;
    gl.attachShader(prog, cs(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, cs(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const pos = gl.getAttribLocation(prog, "a_position");
    gl.enableVertexAttribArray(pos);
    gl.vertexAttribPointer(pos, 2, gl.FLOAT, false, 0, 0);

    const uTime = gl.getUniformLocation(prog, "u_time");
    const uRes = gl.getUniformLocation(prog, "u_resolution");
        const mouse = { x: canvas.width / 2, y: canvas.height / 2 };

    const onMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width && rect.height) {
        const nx = (event.clientX - rect.left) / rect.width;
        const ny = 1.0 - (event.clientY - rect.top) / rect.height;
        mouse.x = nx * canvas.width;
        mouse.y = ny * canvas.height;
      }
    };
    window.addEventListener("mousemove", onMouseMove);

    const render = (t: number) => {
      if (typeof ResizeObserver === "undefined") syncSize();
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (uTime) gl.uniform1f(uTime, t * 0.001);
      if (uRes) gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      requestAnimationFrame(render);
    };
    render(0);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      container.removeChild(canvas);
    };
  }, []);

  // Three.js network visualization
  useEffect(() => {
    const container = threeContainerRef.current;
    if (!container) return;

    // Load Three.js dynamically if not already loaded
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!(window as any).THREE) {
      const script = document.createElement("script");
      script.src = "https://ajax.googleapis.com/ajax/libs/threejs/r125/three.min.js";
      script.async = true;
      script.onload = () => initThree(container);
      document.body.appendChild(script);
      return () => {
        document.body.removeChild(script);
      };
    } else {
      initThree(container);
    }

    function initThree(container: HTMLDivElement) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const THREE: any = (window as any).THREE;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      container.appendChild(renderer.domElement);

      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x2e90fa,
        transparent: true,
        opacity: 0.2,
      });
      const nodeMaterial = new THREE.MeshPhongMaterial({
        color: 0x2e90fa,
        emissive: 0x2e90fa,
        emissiveIntensity: 0.5,
      });

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
      scene.add(ambientLight);
      const pointLight = new THREE.PointLight(0x2e90fa, 2, 100);
      pointLight.position.set(5, 5, 5);
      scene.add(pointLight);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const nodes: any[] = [];
      const nodeCount = 40;
      const group = new THREE.Group();
      for (let i = 0; i < nodeCount; i++) {
        const geometry = new THREE.SphereGeometry(0.08, 16, 16);
        const node = new THREE.Mesh(geometry, nodeMaterial);
        node.position.x = (Math.random() - 0.5) * 10;
        node.position.y = (Math.random() - 0.5) * 10;
        node.position.z = (Math.random() - 0.5) * 10;
        node.userData = {
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01
          ),
        };
        nodes.push(node);
        group.add(node);
      }
      scene.add(group);

      const maxDistance = 3;
      const linesGeometry = new THREE.BufferGeometry();
      const linePositions = new Float32Array(nodeCount * nodeCount * 6);
      linesGeometry.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
      const lines = new THREE.LineSegments(linesGeometry, lineMaterial);
      scene.add(lines);
      camera.position.z = 8;

      const animate = () => {
        requestAnimationFrame(animate);
        let lineIdx = 0;
        for (let i = 0; i < nodes.length; i++) {
          const nodeA = nodes[i];
          nodeA.position.add(nodeA.userData.velocity);
          if (Math.abs(nodeA.position.x) > 5) nodeA.userData.velocity.x *= -1;
          if (Math.abs(nodeA.position.y) > 5) nodeA.userData.velocity.y *= -1;
          if (Math.abs(nodeA.position.z) > 5) nodeA.userData.velocity.z *= -1;
          for (let j = i + 1; j < nodes.length; j++) {
            const nodeB = nodes[j];
            const dist = nodeA.position.distanceTo(nodeB.position);
            if (dist < maxDistance) {
              linePositions[lineIdx++] = nodeA.position.x;
              linePositions[lineIdx++] = nodeA.position.y;
              linePositions[lineIdx++] = nodeA.position.z;
              linePositions[lineIdx++] = nodeB.position.x;
              linePositions[lineIdx++] = nodeB.position.y;
              linePositions[lineIdx++] = nodeB.position.z;
            }
          }
        }
        linesGeometry.attributes.position.needsUpdate = true;
        linesGeometry.setDrawRange(0, lineIdx / 3);
        group.rotation.y += 0.002;
        group.rotation.x += 0.001;
        renderer.render(scene, camera);
      };
      animate();

      const onResize = () => {
        const w = container.clientWidth || window.innerWidth;
        const h = container.clientHeight || window.innerHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", onResize);

      return () => {
        window.removeEventListener("resize", onResize);
        container.removeChild(renderer.domElement);
      };
    }
  }, []);

  return (
    <>
      <style>{`
        @font-face {
          font-family: 'Geist';
          src: url('https://cdn.jsdelivr.net/font/geist/latest/Geist-Variable.woff2') format('woff2');
        }
        body {
          background-color: #09090b;
          color: #e5e1e4;
          font-family: 'Inter', sans-serif;
          overflow-x: hidden;
        }
        .glass-panel {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.4);
        }
        .glass-card {
          background: rgba(24, 24, 27, 0.4);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(63, 63, 70, 0.3);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .glass-card:hover {
          border-color: #2e90fa;
          background: rgba(30, 30, 34, 0.6);
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(46, 144, 250, 0.15);
        }
        .ai-glow-border {
          position: relative;
        }
        .ai-glow-border::after {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, transparent, rgba(46, 144, 250, 0.3), transparent);
          z-index: -1;
          border-radius: inherit;
        }
        .mono-stat {
          font-family: 'JetBrains Mono', monospace;
        }
        .hero-gradient {
          background: radial-gradient(circle at 50% 50%, rgba(46, 144, 250, 0.08) 0%, transparent 70%);
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .node-pulse {
          animation: pulse 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: .5; transform: scale(1.2); }
        }
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
        }
        @keyframes move {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(500%); }
        }
        .animate-move {
          animation: move 3s linear infinite;
        }
        .animate-move-delay-1 {
          animation-delay: 1s;
        }
        .animate-move-delay-2 {
          animation-delay: 2s;
        }
      `}</style>

      <div className="antialiased selection:bg-primary/30">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-x-0 border-t-0">
          <nav className="max-w-[1600px] mx-auto h-16 flex items-center justify-between px-8">
            <div className="flex items-center gap-12">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-container rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
                    security
                  </span>
                </div>
                <span className="font-headline-md text-headline-md font-bold tracking-tight text-on-surface">Aegis AI</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">
                  Infrastructure
                </a>
                <a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">
                  Agents
                </a>
                <a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">
                  Metrics
                </a>
                <a className="text-body-md text-on-surface-variant hover:text-on-surface transition-colors" href="#">
                  Pricing
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 text-body-md font-medium text-on-surface-variant hover:text-on-surface transition-colors">
                Sign In
              </button>
              <button className="px-5 py-2 bg-primary-container text-on-primary-container rounded-lg text-body-md font-bold hover:opacity-90 transition-opacity">
                Deploy Now
              </button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
          {/* Shader background */}
          <div ref={shaderContainerRef} className="absolute inset-0 w-full h-full opacity-40"></div>

          <div className="max-w-[1600px] mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant mb-6">
                <span className="w-2 h-2 rounded-full bg-secondary node-pulse"></span>
                <span className="font-label-caps text-label-caps text-secondary uppercase">Autonomous SRE Cluster Active</span>
              </div>
              <h1 className="font-display text-[64px] leading-[1.1] font-bold text-on-surface mb-8 tracking-tighter">
                Your Autonomous <br />
                <span className="text-primary">Site Reliability Engineer</span>
              </h1>
              <p className="text-body-lg text-on-surface-variant max-w-lg mb-10 leading-relaxed">
                Aegis AI monitors, investigates, and resolves production incidents without human intervention. The multi-agent brain for modern distributed systems.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-8 py-4 bg-primary-container text-on-primary-container rounded-xl font-bold flex items-center gap-2 hover:scale-[1.02] transition-transform">
                  Start Free Trial
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                <button className="px-8 py-4 glass-panel rounded-xl text-on-surface font-semibold hover:bg-surface-container-high transition-colors">
                  Book Technical Demo
                </button>
              </div>
              <div className="mt-12 flex items-center gap-8 grayscale opacity-50">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-on-surface-variant">terminal</span>
                  <span className="font-code-md text-code-md">npm install @aegis/agent</span>
                </div>
              </div>
            </div>

            <div className="relative h-150">
              {/* Three.js network */}
              <div ref={threeContainerRef} className="absolute inset-0 w-full h-full"></div>

              {/* Overlay cards */}
              <div className="absolute top-10 right-0 w-85 glass-panel p-4 rounded-xl shadow-2xl border-primary/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-error text-sm">error</span>
                    <span className="font-label-caps text-label-caps text-error">CRITICAL INCIDENT</span>
                  </div>
                  <span className="font-code-md text-[10px] text-on-surface-variant">INC-8821</span>
                </div>
                <div className="space-y-3">
                  <div className="p-2 bg-surface-container-lowest rounded border border-outline-variant">
                    <div className="text-[11px] font-bold text-on-surface mb-1">Root Cause Identified</div>
                    <div className="text-[10px] font-code-md text-on-surface-variant">Redis latency spike in us-east-1a</div>
                  </div>
                  <div className="flex items-center gap-2 text-[10px]">
                    <div className="flex-1 h-1 bg-surface-container-highest rounded overflow-hidden">
                      <div className="h-full bg-secondary w-3/4"></div>
                    </div>
                    <span className="text-secondary mono-stat">75% Resolved</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-10 left-0 w-70 glass-panel p-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-sm">psychology</span>
                  </div>
                  <div>
                    <div className="text-[12px] font-bold">Agent Memory</div>
                    <div className="text-[10px] text-on-surface-variant">Processing 1.2M logs/s</div>
                  </div>
                </div>
                <div className="space-y-1">
                  <div className="h-1.5 w-full bg-surface-container-highest rounded"></div>
                  <div className="h-1.5 w-2/3 bg-surface-container-highest rounded"></div>
                  <div className="h-1.5 w-4/5 bg-surface-container-highest rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-12 border-y border-outline-variant/30 bg-surface-container-lowest">
          <div className="max-w-[1600px] mx-auto px-8">
            <p className="text-center font-label-caps text-label-caps text-on-surface-variant mb-8 uppercase tracking-widest">
              Trusted by Modern Engineering Teams
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-40 grayscale contrast-125">
              <span className="font-headline-md font-bold">NETFLIX</span>
              <span className="font-headline-md font-bold">Uber</span>
              <span className="font-headline-md font-bold">stripe</span>
              <span className="font-headline-md font-bold">Cloudflare</span>
              <span className="font-headline-md font-bold">OpenAI</span>
              <span className="font-headline-md font-bold">GitHub</span>
              <span className="font-headline-md font-bold">DATADOG</span>
            </div>
          </div>
        </section>

        {/* Problem Cards */}
        <section className="py-32 max-w-[1600px] mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="glass-card p-8 rounded-2xl md:col-span-1 flex flex-col justify-between h-75">
              <span className="material-symbols-outlined text-primary text-3xl">description</span>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Millions of logs</h3>
                <p className="text-body-md text-on-surface-variant">Structured and unstructured data drowning your SRE teams daily.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl md:col-span-1 flex flex-col justify-between h-75">
              <span className="material-symbols-outlined text-primary text-3xl">monitoring</span>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Thousands of metrics</h3>
                <p className="text-body-md text-on-surface-variant">High-cardinality noise making it impossible to find the signal.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl md:col-span-1 flex flex-col justify-between h-75">
              <span className="material-symbols-outlined text-error text-3xl">notifications_active</span>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Hundreds of alerts</h3>
                <p className="text-body-md text-on-surface-variant">Alert fatigue leads to critical outages being missed in the noise.</p>
              </div>
            </div>
            <div className="glass-card p-8 rounded-2xl md:col-span-1 flex flex-col justify-between h-75">
              <span className="material-symbols-outlined text-on-surface-variant text-3xl">engineering</span>
              <div>
                <h3 className="font-headline-md text-headline-md mb-2">Manual Work</h3>
                <p className="text-body-md text-on-surface-variant">Your best engineers are stuck tailing logs instead of shipping.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Agent Cards */}
        <section className="py-20 bg-surface-container-low">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="mb-16">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">The Autonomous SRE Team</h2>
              <p className="text-body-lg text-on-surface-variant max-w-2xl">Aegis deploys a specialized swarm of agents for every incident.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Log Analysis */}
              <div className="glass-panel p-6 rounded-2xl ai-glow-border">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">analytics</span>
                    </div>
                    <span className="font-bold">Log Analyst Agent</span>
                  </div>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded">ACTIVE</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">Workload</span>
                    <span>4.2 GB/s</span>
                  </div>
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">Accuracy</span>
                    <span>99.94%</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded overflow-hidden">
                    <div className="h-full bg-primary w-[92%]"></div>
                  </div>
                </div>
              </div>

              {/* Metrics Agent */}
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">query_stats</span>
                    </div>
                    <span className="font-bold">Metrics Correlation</span>
                  </div>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded">ACTIVE</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">Response Time</span>
                    <span>&lt; 20ms</span>
                  </div>
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">P99 Latency</span>
                    <span>12ms</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded overflow-hidden">
                    <div className="h-full bg-primary w-[88%]"></div>
                  </div>
                </div>
              </div>

              {/* Root Cause Engine */}
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">search_insights</span>
                    </div>
                    <span className="font-bold">Root Cause Engine</span>
                  </div>
                  <span className="px-2 py-1 bg-secondary/10 text-secondary text-[10px] font-bold rounded">IDLE</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">Confidence</span>
                    <span>98.2%</span>
                  </div>
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">Analysis Rate</span>
                    <span>12M events/s</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded overflow-hidden">
                    <div className="h-full bg-primary w-[98%]"></div>
                  </div>
                </div>
              </div>

              {/* Cross-Stack Linker */}
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">hub</span>
                    </div>
                    <span className="font-bold">Cross-Stack Linker</span>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded">IDLE</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">Link Depth</span>
                    <span>12 levels</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded overflow-hidden">
                    <div className="h-full bg-primary w-[45%]"></div>
                  </div>
                </div>
              </div>

              {/* Auto-Remediation */}
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">rule_settings</span>
                    </div>
                    <span className="font-bold">Auto-Remediation</span>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded">IDLE</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">Success Rate</span>
                    <span>91.4%</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded overflow-hidden">
                    <div className="h-full bg-primary w-[91%]"></div>
                  </div>
                </div>
              </div>

              {/* Post-Mortem AI */}
              <div className="glass-panel p-6 rounded-2xl">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center">
                      <span className="material-symbols-outlined text-primary">description</span>
                    </div>
                    <span className="font-bold">Post-Mortem AI</span>
                  </div>
                  <span className="px-2 py-1 bg-surface-container-highest text-on-surface-variant text-[10px] font-bold rounded">IDLE</span>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between text-[11px] mono-stat">
                    <span className="text-on-surface-variant uppercase">Generation time</span>
                    <span>2s</span>
                  </div>
                  <div className="h-1 bg-surface-container-highest rounded overflow-hidden">
                    <div className="h-full bg-primary w-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section className="py-32 overflow-hidden">
          <div className="max-w-[1600px] mx-auto px-8">
            <h2 className="font-headline-lg text-headline-lg text-center mb-20">The Intelligent Pipeline</h2>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
              <div className="flex flex-col items-center text-center max-w-60 z-10">
                <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">dns</span>
                </div>
                <h4 className="font-bold mb-2">Production Systems</h4>
                <p className="text-body-sm text-on-surface-variant">Microservices, DBs, and Load Balancers</p>
              </div>
              <div className="hidden md:block flex-1 h-0.5 bg-outline-variant relative overflow-hidden">
                <div className="absolute inset-0 bg-primary w-20 animate-move"></div>
              </div>
              <div className="flex flex-col items-center text-center max-w-60 z-10">
                <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-primary text-3xl">storage</span>
                </div>
                <h4 className="font-bold mb-2">Real-time Stream</h4>
                <p className="text-body-sm text-on-surface-variant">Kafka, RabbitMQ, or Firehose</p>
              </div>
              <div className="hidden md:block flex-1 h-0.5 bg-outline-variant relative overflow-hidden">
                <div className="absolute inset-0 bg-primary w-20 animate-move animate-move-delay-1"></div>
              </div>
              <div className="flex flex-col items-center text-center max-w-60 z-10">
                <div className="w-24 h-24 rounded-full bg-primary-container/20 border-2 border-primary-container/40 flex items-center justify-center mb-6 relative">
                  <span className="material-symbols-outlined text-primary text-4xl">psychology</span>
                  <div className="absolute inset-0 rounded-full animate-ping bg-primary/10"></div>
                </div>
                <h4 className="font-bold mb-2">Aegis AI Core</h4>
                <p className="text-body-sm text-on-surface-variant">Multi-Agent Swarm Intelligence</p>
              </div>
              <div className="hidden md:block flex-1 h-0.5 bg-outline-variant relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary w-20 animate-move animate-move-delay-2"></div>
              </div>
              <div className="flex flex-col items-center text-center max-w-60 z-10">
                <div className="w-20 h-20 rounded-full glass-panel flex items-center justify-center mb-6 border-secondary/50">
                  <span className="material-symbols-outlined text-secondary text-3xl">verified</span>
                </div>
                <h4 className="font-bold mb-2">Auto-Resolution</h4>
                <p className="text-body-sm text-on-surface-variant">Zero-Downtime Deployment &amp; Repair</p>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-24 bg-surface-container-lowest">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-[64px] font-bold mono-stat text-on-surface mb-2">100K+</div>
                <div className="text-body-md text-on-surface-variant uppercase tracking-widest">Logs Analyzed Per Second</div>
              </div>
              <div>
                <div className="text-[64px] font-bold mono-stat text-primary mb-2">99.98%</div>
                <div className="text-body-md text-on-surface-variant uppercase tracking-widest">Autonomous Resolution Rate</div>
              </div>
              <div>
                <div className="text-[64px] font-bold mono-stat text-on-surface mb-2">&lt;5 min</div>
                <div className="text-body-md text-on-surface-variant uppercase tracking-widest">Mean Time To Investigation</div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="py-32">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-4">Command Your Infrastructure</h2>
              <p className="text-body-lg text-on-surface-variant">Powerful dashboards meet proactive AI agents.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-8">
                <div className="glass-panel p-1 rounded-2xl overflow-hidden shadow-2xl relative group">
                  <img
                    className="w-full rounded-xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqhjNKv-S_xkf3Ya_JZCCPsgxhWd7BIzl2dwzodMop60LHp2wtMi_3PYkWKdT12bLN6T9_sMZWLnZ16xPpKqJT6JJ2SBXyue6Hla6MK4G4bB4VN-g-T5ACnJazw77lOR2mUaq9C8bRltI2iNGDDK_Bpy3bew2T-Ae9YFInEPfeqLoRdusjVVpiO1AFQdxsaIz5JF9Dq4eYukgS4cLEygPRjwj64x8M8xjA5wIYK5zFzJ9yHrdYlXMc"
                    alt="Dashboard preview"
                  />
                  <div className="absolute top-8 left-8 p-4 glass-panel rounded-lg border-primary/40">
                    <div className="text-[12px] font-bold text-primary mb-1">AI INSIGHT</div>
                    <div className="text-[11px] text-on-surface">
                      Memory leak detected in <code className="bg-surface p-1 rounded">auth-service</code>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-4 grid grid-cols-1 gap-6">
                <div className="glass-panel p-2 rounded-xl">
                  <img
                    className="w-full rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgvsoIFuNsG87rzVfwlJ1RHIksDZsnHNkpdJCnUOZg7O7EHjo-FPl9I8dQ5k8IabjQLmRVNvdUtVMMw7OUbvnidliWutNmWvpJSnRHYbyLinldvPm2XaRTWovN2zGQNybBgUEPVozL6fp0K44PvVNA6ehn8KAPIEEORg18YbnAJ-bt9QauwoDTfV92AFrW8CeNY7xYXn0a5ziYyx8jkqHyS_eY6xyyNsstAtVT-46zRsswxf_I876L"
                    alt="Incident report"
                  />
                </div>
                <div className="glass-panel p-2 rounded-xl">
                  <img
                    className="w-full rounded-lg"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDf52RtIPmSho4e2m-V0_62VLkGKP-MNIvHkQeNCJro2pOHsaJve6PxI7-VXkF9PkT5109A0Xv9X208Anos_cr2KzLmAqAr5-MuPPqwGxsCLoAR06jw5lrKseKcgmnMj1MX5amBdNfHKnzi_BD-1g0WYeB0sdx5haDvI4MGAzpQ-HuK3Yvx8khbeTUmFE5KllI61yC5yJuyaVgSN0y-8iNbrkvMGDUcQv6c5VTynMTfa3R7q_JkzcfH"
                    alt="Terminal output"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-24 max-w-300 mx-auto px-8">
          <h2 className="font-headline-lg text-headline-lg text-center mb-16">Traditional vs. Aegis AI</h2>
          <div className="glass-panel rounded-2xl overflow-hidden border border-outline-variant">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-high">
                  <th className="p-6 text-body-md font-bold uppercase tracking-wider text-on-surface-variant border-b border-outline-variant">
                    Feature
                  </th>
                  <th className="p-6 text-body-md font-bold uppercase tracking-wider text-on-surface-variant border-b border-outline-variant">
                    Traditional Monitoring
                  </th>
                  <th className="p-6 text-body-md font-bold uppercase tracking-wider text-primary border-b border-outline-variant">
                    Aegis Autonomous SRE
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/30">
                <tr>
                  <td className="p-6 font-semibold">Incident Detection</td>
                  <td className="p-6 text-on-surface-variant">Static Thresholds &amp; Alerts</td>
                  <td className="p-6 text-on-surface">Dynamic Anomaly Swarms</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">Investigation</td>
                  <td className="p-6 text-on-surface-variant">Manual Dashboard Diving</td>
                  <td className="p-6 text-on-surface">Instant AI Causal Mapping</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">Response Time</td>
                  <td className="p-6 text-on-surface-variant">15 - 60 Minutes</td>
                  <td className="p-6 text-on-surface">&lt; 3 Minutes</td>
                </tr>
                <tr>
                  <td className="p-6 font-semibold">Night Support</td>
                  <td className="p-6 text-on-surface-variant">On-call Pager (Sleep Deprived)</td>
                  <td className="p-6 text-on-surface">Autonomous Healing (Full Rest)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Pricing */}
        <section className="py-32 bg-surface-container-low">
          <div className="max-w-[1600px] mx-auto px-8">
            <div className="text-center mb-20">
              <h2 className="font-headline-lg text-headline-lg mb-4">Transparent Scale-based Pricing</h2>
              <p className="text-body-lg text-on-surface-variant">Built for teams from Series A to Fortune 500.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter */}
              <div className="glass-card p-10 rounded-2xl flex flex-col">
                <div className="mb-8">
                  <h3 className="text-body-lg font-bold mb-2">Starter</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold mono-stat">$499</span>
                    <span className="text-on-surface-variant">/mo</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Up to 5 Active Agents
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> 100GB Log Ingestion
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Standard AI Models
                  </li>
                  <li className="flex items-center gap-3 text-body-md text-on-surface-variant/40">
                    <span className="material-symbols-outlined text-sm">cancel</span> Custom Agent Memory
                  </li>
                </ul>
                <button className="w-full py-4 glass-panel rounded-xl font-bold hover:bg-surface-container-high transition-colors">
                  Start Free
                </button>
              </div>

              {/* Professional */}
              <div className="glass-card p-10 rounded-2xl flex flex-col relative border-primary shadow-2xl scale-105 bg-surface-container-high/40">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-on-primary text-[10px] font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
                <div className="mb-8">
                  <h3 className="text-body-lg font-bold mb-2">Professional</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold mono-stat">$2,499</span>
                    <span className="text-on-surface-variant">/mo</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Unlimited Agents
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> 1TB Log Ingestion
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Advanced Correlation AI
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> SOC2 Type II Reporting
                  </li>
                </ul>
                <button className="w-full py-4 bg-primary-container text-on-primary-container rounded-xl font-bold hover:opacity-90 transition-opacity">
                  Deploy Pro
                </button>
              </div>

              {/* Enterprise */}
              <div className="glass-card p-10 rounded-2xl flex flex-col">
                <div className="mb-8">
                  <h3 className="text-body-lg font-bold mb-2">Enterprise</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold mono-stat">Custom</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Air-Gapped Deployment
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Fine-tuned Llama 3 Models
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Unlimited Log Volume
                  </li>
                  <li className="flex items-center gap-3 text-body-md">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Dedicated AI Engineer
                  </li>
                </ul>
                <button className="w-full py-4 glass-panel rounded-xl font-bold hover:bg-surface-container-high transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-40 relative">
          <div className="absolute inset-0 hero-gradient"></div>
          <div className="max-w-[1600px] mx-auto px-8 relative z-10 text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tighter">
              Stop Reading Logs.<br />
              <span className="text-primary">Start Solving Incidents.</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6">
              <button className="px-12 py-5 bg-primary-container text-on-primary-container rounded-xl text-xl font-bold hover:scale-105 transition-transform shadow-2xl">
                Deploy Agent Now
              </button>
              <div className="flex -space-x-3 items-center">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center overflow-hidden">
                  <img
                    alt="User"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZIJyW4SgOVqncGAyWg7_CCYjeCaiRJZ4p4qKVYFOLgpU-T-49bcpyX3FQr_psuNUwr6uIQ1KfkUyZy0svGn4GSSjEBdbCZe5n1gaYSmFqlbRIp0CBpvqzVjlelCbF4n-RLp2s1p5VK-sAXE-mXM9WKQ-N6yVR0DEB9KL7PhH7oC00XjHQrRUcsetRdVE2TdXJNcG8MMTS_vTQtULV2b_MyDCs1oZEg3DvFjdSwkKDB5BRiPkdqVFC"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center overflow-hidden">
                  <img
                    alt="User"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-6kjzInlXKwyOtORyucruCeZhvEksX5VWSUu4NBPhYnmlNw-_uzUBzSz_LPv1sBpVNQEr3dP5lLp7EhT0rKyZx7FySioZ19HN-u27mB-P1Q0Lwp2h_6HdAFAoGlMZzRKq8ujqaInilcOfBLhf04uRBImloUXliop_vLAtcvagHeE0Cz_eizliVfbDiB7C5JEBYcg9YI7qryh6zUYorWkRj35VQgGMLRC9CR3PHvin_j3Dj8WVus8j"
                  />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container flex items-center justify-center overflow-hidden">
                  <img
                    alt="User"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgwYQXLQpAYe1A-6Il3TV9TMv7WrlDRKg4Xvi0-UgL_WUSU1qVOr14tSqHlx2t3tIw1qFlE2jAlX63bMZdvwXJ1z5Z03cXWyJjLndUF-0TxGaxnhlspDdFFLZxHJDYeToj_JVt2WWiWBWcRcGneK5970-sXJtVqxmcSZfDulUvoWKw0rvwtSyLD0jfjcQEHg2zq9gOxzCcJDWoLmQt2ZPhWm7Jv30GpjMkuj3X6cDR1PrDslPR-v6l"
                  />
                </div>
                <span className="ml-4 text-on-surface-variant text-body-md">Joined by 2,000+ engineers this week</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 border-t border-outline-variant bg-surface-container-lowest">
          <div className="max-w-[1600px] mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="w-6 h-6 bg-primary-container rounded flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary-container text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>
                    security
                  </span>
                </div>
                <span className="font-bold tracking-tight">Aegis AI</span>
              </div>
              <p className="text-body-sm text-on-surface-variant leading-relaxed">The future of site reliability is autonomous. Built in San Francisco.</p>
            </div>
            <div>
              <h5 className="font-bold mb-6">Product</h5>
              <ul className="space-y-4 text-body-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">Infrastructure</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Multi-Agent Swarms</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Root Cause AI</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Changelog</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Resources</h5>
              <ul className="space-y-4 text-body-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">Documentation</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">API Reference</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">SRE Best Practices</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Whitepaper</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6">Legal</h5>
              <ul className="space-y-4 text-body-sm text-on-surface-variant">
                <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                <li><a className="hover:text-primary transition-colors" href="#">Security (SOC2)</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1600px] mx-auto px-8 mt-20 pt-8 border-t border-outline-variant/30 flex justify-between text-[11px] font-label-caps text-on-surface-variant/60">
            <span>© 2024 AEGIS AI OPERATIONS INC. ALL RIGHTS RESERVED.</span>
            <div className="flex gap-6">
              <span>STATUS: OPERATIONAL</span>
              <span>REGS: us-east-1, eu-west-1, ap-south-1</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;