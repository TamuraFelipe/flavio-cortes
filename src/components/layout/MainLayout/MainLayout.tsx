import type { JSX, ReactNode } from "react";
import { Header } from "../Header";
import { Footer } from "../Footer";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps): JSX.Element {
  return (
    <div className="h-screen w-screen">
      <Header />

      <main className="space-y-8">{children}</main>

      <Footer />
    </div>
  );
}
