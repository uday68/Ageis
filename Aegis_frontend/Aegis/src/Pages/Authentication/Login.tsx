import React, { useState, type FormEvent } from "react";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Implement login logic here
    console.log("Login submitted");
  };

  return (
    <>
      {/* Inline styles – you can move these to a global CSS file */}
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
        .social-btn {
          transition: all 0.2s ease;
        }
        .social-btn:hover {
          transform: scale(1.05);
          background: rgba(255, 255, 255, 0.05);
        }
        .social-btn:active {
          transform: scale(0.95);
        }
      `}</style>

      <div className="ml-60 bg-background text-on-surface font-body-md min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Background blur circles */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="w-full max-w-275 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side – value proposition (hidden on mobile) */}
          <div className="hidden md:flex flex-col gap-8">
            <div>
              <h1 className="font-display text-display text-on-surface leading-tight mb-4">
                Welcome back.
                <br />
                <span className="ai-gradient-text">Secure.</span>
                <br />
                <span className="ai-gradient-text">Intelligent.</span>
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Sign in to your Aegis AI command center and continue monitoring your infrastructure with autonomous threat detection.
              </p>
            </div>

            {/* Trust badges (optional) */}
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
            </div>

            {/* Quick status preview */}
            <div className="glass-panel p-6 rounded-2xl relative overflow-hidden">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
                  <span className="font-code-md text-code-md text-secondary">SYSTEMS_ONLINE</span>
                </div>
                <span className="text-on-surface-variant text-[10px] font-code-md">100% UPTIME</span>
              </div>
              <div className="flex gap-2">
                <div className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-code-md text-on-surface-variant">API_GW</div>
                <div className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-code-md text-on-surface-variant">AUTH_SVC</div>
                <div className="bg-surface-container-high px-2 py-1 rounded text-[10px] font-code-md text-on-surface-variant">OBSV_ENG</div>
              </div>
            </div>
          </div>

          {/* Right side – Login form */}
          <div className="glass-panel p-8 md:p-10 rounded-4xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>

            <header className="mb-8">
              <h2 className="font-headline-lg text-headline-lg text-on-surface mb-2">Sign in to Aegis AI</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Access your autonomous operations dashboard.</p>
            </header>

            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email */}
              <div className="space-y-2">
                <label className="font-label-caps text-label-caps text-on-surface-variant">Email Address</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2-translate-y-1/2 text-outline-variant transition-colors group-focus-within:text-primary py-3.5">
                    mail
                  </span>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-3 pl-10 pr-4 text-on-surface font-body-md outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all input-glow"
                    placeholder="name@company.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <label className="font-label-caps text-label-caps text-on-surface-variant">Password</label>
                  <a className="font-body-sm text-body-sm text-primary hover:underline transition-colors" href="#">
                    Forgot password?
                  </a>
                </div>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-3 top-1/2-translate-y-1/2 text-outline-variant transition-colors group-focus-within:text-primary py-3.5">
                    lock
                  </span>
                  <input
                    className="w-full bg-surface-container-lowest border border-outline-variant/30 rounded-xl py-3 pl-10 pr-10 text-on-surface font-body-md outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all input-glow"
                    placeholder="••••••••"
                    type={showPassword ? "text" : "password"}
                    required
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2-translate-y-1/2 text-outline-variant hover:text-on-surface transition-colors py-3.5"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 mt-2 btn-ai-action rounded-xl text-on-primary font-bold text-body-lg flex items-center justify-center gap-2"
              >
                Sign In
                <span className="material-symbols-outlined">login</span>
              </button>
            </form>

            {/* Social login */}
            <div className="mt-8">
              <div className="relative flex items-center my-4">
                <div className="grow border-t border-outline-variant/30"></div>
                <span className="px-4 font-body-sm text-body-sm text-outline-variant">Or continue with</span>
                <div className="grow border-t border-outline-variant/30"></div>
              </div>

              <div className="grid grid-cols-3 gap-3">
                <button className="social-btn flex items-center justify-center py-3 px-4 bg-surface-container-low border border-outline-variant/30 rounded-xl hover:bg-surface-container-high transition-colors">
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                </button>

                <button className="social-btn flex items-center justify-center py-3 px-4 bg-surface-container-low border border-outline-variant/30 rounded-xl hover:bg-surface-container-high transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </button>

                <button className="social-btn flex items-center justify-center py-3 px-4 bg-surface-container-low border border-outline-variant/30 rounded-xl hover:bg-surface-container-high transition-colors">
                  <span className="font-code-md text-code-md font-bold text-on-surface">okta</span>
                </button>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="font-body-md text-body-md text-on-surface-variant">
                Don't have an account?{" "}
                <a className="text-primary font-semibold hover:underline transition-all" href="#">
                  Sign up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;