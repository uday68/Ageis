import React, { useState, useRef, useEffect } from "react";
import type { ClipboardEvent, KeyboardEvent, FormEvent } from "react";
import { Link } from "react-router-dom";

const Verification: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState<number>(60);
  // derive resend availability from timer instead of storing state (avoids setState inside effect)
  // const [isResendEnabled, setIsResendEnabled] = useState<boolean>(false);
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft]);

  // derived flag for enabling resend
  const isResendEnabled = timeLeft <= 0;

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  const handleInputChange = (index: number, value: string) => {
    if (!/^\d$/.test(value) && value !== "") return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else if (otp[index] !== "") {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const data = e.clipboardData.getData("text");
    if (data.length === 6 && /^\d+$/.test(data)) {
      const digits = data.split("");
      setOtp(digits);
      inputRefs.current[5]?.focus();
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const code = otp.join("");
    if (code.length === 6) {
      setIsVerifying(true);
      console.log("Verifying code:", code);
      setTimeout(() => {
        setIsVerifying(false);
      }, 1500);
    }
  };

  const handleResend = () => {
    if (!isResendEnabled) return;
    setTimeLeft(60);
    setOtp(["", "", "", "", "", ""]);
    inputRefs.current[0]?.focus();
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      <style>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          display: inline-block;
          line-height: 1;
          text-transform: none;
          letter-spacing: normal;
          word-wrap: normal;
          white-space: nowrap;
          direction: ltr;
        }
        .glass-panel {
          background: rgba(24, 24, 27, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(63, 63, 70, 0.4);
        }
        .otp-input:focus {
          box-shadow: 0 0 15px rgba(166, 200, 255, 0.2);
        }
        @keyframes subtle-pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: subtle-pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .otp-input {
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .otp-input.success {
          border-color: #4edea3;
          box-shadow: 0 0 15px rgba(78, 222, 163, 0.3);
        }
      `}</style>

      <div className="p-4 md:p-6 lg:p-8 w-screen h-screen text-on-background font-body-md flex items-center justify-center relative overflow-hidden">
        {/* Background Elements */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full animate-pulse-slow"></div>
        </div>

        <main className="relative z-10 w-full max-w-md mx-auto flex flex-col items-center justify-center">
          {/* Logo Header */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 bg-primary-container rounded-lg flex items-center justify-center mb-4 shadow-lg shadow-primary/20">
              <span
                className="material-symbols-outlined text-on-primary-container text-2xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield_lock
              </span>
            </div>
            <h1 className="font-headline-md text-headline-md text-primary tracking-tight">Aegis AI</h1>
            <p className="font-label-caps text-label-caps text-on-surface-variant uppercase mt-1">Verification Required</p>
          </div>

          {/* Verification Card */}
          <div className="glass-panel p-8 rounded-xl shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"></div>

            <div className="space-y-6">
              <div className="text-center">
                <h2 className="font-headline-md text-headline-md text-on-surface mb-2">Check your email</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  We sent a 6-digit verification code to <br />
                  <span className="text-primary font-medium">admin@aegis-security.io</span>
                </p>
              </div>

              <form className="space-y-8" onSubmit={handleSubmit}>
                <div className="flex justify-center gap-2">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      ref={(el) => { inputRefs.current[index] = el }}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                      onKeyDown={(e) => handleKeyDown(index, e)}
                      onPaste={handlePaste}
                      className={`otp-input w-12 h-14 bg-surface-container text-center font-headline-md text-headline-md text-primary border border-outline-variant rounded-lg focus:outline-none focus:border-primary transition-all duration-200 ${
                        isVerifying ? "success" : ""
                      }`}
                      placeholder="•"
                      autoComplete="one-time-code"
                    />
                  ))}
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-on-primary font-headline-md text-headline-md py-3 rounded-lg hover:brightness-110 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-primary/10"
                >
                  Verify &amp; Reset
                </button>
              </form>

              <div className="flex flex-col items-center gap-4 pt-2">
                <p className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-2">
                  <span className="font-code-md text-code-md text-primary">
                    {formatTime(timeLeft)}
                  </span>
                  remaining before code expires
                </p>
                <button
                  className={`font-label-caps text-label-caps uppercase tracking-wider transition-colors duration-200 ${
                    isResendEnabled
                      ? "text-primary hover:brightness-110 cursor-pointer"
                      : "text-outline cursor-not-allowed opacity-50"
                  }`}
                  onClick={handleResend}
                  disabled={!isResendEnabled}
                >
                  Resend Code
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 flex justify-center gap-8 px-4">
            <Link
              to="/login"
              className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-lg">arrow_back</span>
              Back to Login
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 font-body-sm text-body-sm text-on-surface-variant hover:text-primary transition-colors"
            >
              Support Center
              <span className="material-symbols-outlined text-lg">contact_support</span>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
};

export default Verification;