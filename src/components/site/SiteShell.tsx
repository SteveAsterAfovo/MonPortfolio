import type { ReactNode } from "react";
import { Header, Footer, CookieConsent } from "./";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-16 md:pt-20">{children}</main>
      <Footer />

      <CookieConsent />
    </div>
  );
}