import type { ReactNode } from "react";
import { Header, Footer, CookieConsent, WhatsAppFab } from "./";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative overflow-x-clip min-h-screen">
      <Header />
      <main className="flex-1 pt-8">
        {children}
      </main>
      <Footer />

      <WhatsAppFab />
      <CookieConsent />
    </div>
  );
}