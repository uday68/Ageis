import React, { useState, useRef } from "react";
import type { FormEvent } from "react";



const Signup: React.FC = () => {
  // State for password visibility (optional)
  const [showPassword, setShowPassword] = useState(false);
  // Refs for input containers (to apply scale effect)
  const inputContainers = useRef<Array<HTMLDivElement | null>>([]);

  // Focus/blur handlers for the micro-interaction
  const handleInputFocus = (index: number) => {
    const container = inputContainers.current[index];
    if (container) {
      container.classList.add("scale-[1.01]");
    }
  };

  const handleInputBlur = (index: number) => {
    const container = inputContainers.current[index];
    if (container) {
      container.classList.remove("scale-[1.01]");
    }
  };

  // Form submit handler
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement sign-up logic here
    console.log("Sign-up submitted");
  };

  return (
    <>
      {/* Custom styles (kept from original) */}
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-panel {
          background: rgba(24, 24, 27, 0.6);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.5);
        }
        .ai-gradient-text {
          background: linear-gradient(135deg, #a6c8ff 0%, #4edea3 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .btn-ai-action {
          background: linear-gradient(135deg, #3192fc 0%, #00a572 100%);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .btn-ai-action:hover {
          filter: brightness(1.1);
          transform: translateY(-1px);
          box-shadow: 0 4px 20px rgba(78, 222, 163, 0.3);
        }
        .input-glow:focus {
          box-shadow: 0 0 0 2px rgba(166, 200, 255, 0.2);
          border-color: #a6c8ff;
        }
      `}</style>

      <div className="bg-background text-on-surface font-body-md overflow-hidden h-screen flex flex-col ml-60">
        {/* TopNavBar */}
        <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md shadow-sm border-b border-outline-variant/20">
          <div className="flex justify-between items-center px-gutter py-4 w-full max-w-max-width mx-auto">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-3xl">shield_with_heart</span>
              <span className="font-headline-md text-headline-md font-bold text-primary">Aegis AI</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200" href="#">
                Solutions
              </a>
              <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200" href="#">
                Platform
              </a>
              <a className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors duration-200" href="#">
                Pricing
              </a>
            </div>
            <div className="flex items-center gap-4">
              <button className="text-on-surface-variant font-body-md text-body-md hover:text-primary transition-colors cursor-pointer active:scale-95">
                Support
              </button>
              <a className="px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-all font-body-md" href="/login">
                Login
              </a>
            </div>
          </div>
        </header>

        <main className="grow flex items-center justify-center relative px-4 pt-16">
          {/* Background blur circles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
          </div>

          <div className="w-full max-w-275 grid md:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left side – value proposition */}
            <div className="hidden md:flex flex-col gap-8">
              <div>
                <h1 className="font-display text-display text-on-surface leading-tight mb-4">
                  Secure. <br />
                  <span className="ai-gradient-text">Autonomous.</span> <br />
                  Observability.
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                  Deploy Aegis AI to monitor, detect, and respond to threats in real-time across your entire cloud infrastructure.
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mt-4">
                <div className="flex items-center gap-3 px-4 py-3 glass-panel rounded-xl">
                  <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    verified_user
                  </span>
                  <div>
                    <p className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Enterprise Secure</p>
                    <p className="text-[10px] text-on-surface-variant">Military-grade Encryption</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 glass-panel rounded-xl">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    security
                  </span>
                  <div>
                    <p className="font-label-caps text-label-caps text-primary uppercase tracking-widest">SOC2 Compliant</p>
                    <p className="text-[10px] text-on-surface-variant">Global Audit Ready</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 glass-panel rounded-xl">
                  <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>
                    bolt
                  </span>
                  <div>
                    <p className="font-label-caps text-label-caps text-tertiary uppercase tracking-widest">AI-Powered</p>
                    <p className="text-[10px] text-on-surface-variant">Autonomous Logic</p>
                  </div>
                </div>
              </div>

              {/* Live Monitoring Preview Card */}
              <div className="glass-panel p-6 rounded-2xl relative overflow-hidden group">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                    <span className="font-code-md text-code-md text-secondary">SYSTEMS_ACTIVE</span>
                  </div>
                  <span className="text-on-surface-variant text-[10px] font-code-md">0.002ms LATENCY</span>
                </div>
                <div className="space-y-2">
                  <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-secondary w-3/4 rounded-full"></div>
                  </div>
                  <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-1/2 rounded-full"></div>
                  </div>
                </div>
                <div className="mt-4 flex gap-2">
                  <div className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-code-md text-on-surface-variant">NODE_01</div>
                  <div className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-code-md text-on-surface-variant">NODE_07</div>
                  <div className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-code-md text-on-surface-variant">NODE_22</div>
                </div>
              </div>
            </div>

            {/* Right side – Signup form */}
            <div className="glass-panel p-8 md:p-10 rounded-4xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <header className="mb-8">
                <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Start your autonomous operations</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">Join the next generation of security professionals.</p>
              </header>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-4">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Full Name</label>
                    <div
                      className="relative group transition-transform duration-200"
                      ref={(el) => { inputContainers.current[0] = el }}
                    >
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant transition-colors group-focus-within:text-primary">
                        person
                      </span>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-3 pl-10 pr-4 text-on-surface font-body-md outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all input-glow"
                        placeholder="John Doe"
                        type="text"
                        onFocus={() => handleInputFocus(0)}
                        onBlur={() => handleInputBlur(0)}
                      />
                    </div>
                  </div>

                  {/* Professional Email */}
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Professional Email</label>
                    <div
                      className="relative group transition-transform duration-200"
                      ref={(el) => { inputContainers.current[1] = el }}
                    >
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant transition-colors group-focus-within:text-primary">
                        mail
                      </span>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-3 pl-10 pr-4 text-on-surface font-body-md outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all input-glow"
                        placeholder="name@company.com"
                        type="email"
                        onFocus={() => handleInputFocus(1)}
                        onBlur={() => handleInputBlur(1)}
                      />
                    </div>
                  </div>

                  {/* Company Name */}
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Company Name</label>
                    <div
                      className="relative group transition-transform duration-200"
                      ref={(el) => { inputContainers.current[2] = el }}
                    >
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant transition-colors group-focus-within:text-primary">
                        business
                      </span>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-3 pl-10 pr-4 text-on-surface font-body-md outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all input-glow"
                        placeholder="Aegis Global"
                        type="text"
                        onFocus={() => handleInputFocus(2)}
                        onBlur={() => handleInputBlur(2)}
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label className="font-label-caps text-label-caps text-on-surface-variant">Password</label>
                    <div
                      className="relative group transition-transform duration-200"
                      ref={(el) => { inputContainers.current[3] = el }}
                    >
                      <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline-variant transition-colors group-focus-within:text-primary">
                        lock
                      </span>
                      <input
                        className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-3 pl-10 pr-4 text-on-surface font-body-md outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all input-glow"
                        placeholder="••••••••"
                        type={showPassword ? "text" : "password"}
                        onFocus={() => handleInputFocus(3)}
                        onBlur={() => handleInputBlur(3)}
                      />
                      {/* Optional password toggle button */}
                      <button
                        type="button"
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <span className="material-symbols-outlined text-[20px]">
                          {showPassword ? "visibility_off" : "visibility"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  className="w-full py-4 mt-4 btn-ai-action rounded-xl text-on-primary font-bold text-body-lg flex items-center justify-center gap-2"
                  type="submit"
                >
                  Create Free Account
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </form>

              <div className="mt-8 flex flex-col items-center gap-6">
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Already have an account? <a className="text-primary hover:underline font-semibold transition-all" href="#">
                    Log in
                  </a>
                </p>
                <p className="text-center text-[11px] text-outline max-w-70 leading-relaxed">
                  By signing up, you agree to our <a className="underline hover:text-on-surface transition-colors" href="#">
                    Terms of Service
                  </a> and <a className="underline hover:text-on-surface transition-colors" href="#">
                    Privacy Policy
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-surface-container-lowest border-t border-outline-variant/10 w-full py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center px-margin-desktop gap-4 w-full">
            <span className="font-label-caps text-label-caps text-on-surface-variant">AEGIS AI OPS</span>
            <p className="font-body-sm text-body-sm text-secondary text-center md:text-left">
              © 2024 Aegis AI Operations. Secure & Autonomous Monitoring.
            </p>
            <div className="flex gap-6">
              <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">
                Privacy Policy
              </a>
              <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">
                Terms of Service
              </a>
              <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">
                Security Compliance
              </a>
              <a className="text-on-surface-variant font-body-sm text-body-sm hover:text-secondary transition-colors opacity-80 hover:opacity-100" href="#">
                Status
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Signup;