import { ReactNode } from "react";

export const metadata = {
  title: "Pure OS - Intent Canvas",
  description: "The Anti-Gravity Innovation Engine prototype of Pure OS.",
};

export default function PureOSLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white/30 overflow-hidden font-sans">
      {children}
    </div>
  );
}
