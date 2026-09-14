import type { ReactNode } from "react";
import { Header, Footer, CookieConsent, WhatsAppFab } from "./";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-x-clip min-h-screen">
      <Header />
      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        {children}
      </main>
      <Footer />

      <WhatsAppFab />
      <CookieConsent />
    </div>
  );
}