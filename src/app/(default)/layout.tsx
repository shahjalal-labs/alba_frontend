import { FloatingCTA } from "@/components/FloatingCTA";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="">
      <Header />

      <main style={{ minHeight: "calc(100vh - 360px)" }}>{children}</main>
      <Footer />
      <FloatingCTA />
      <WhatsAppButton variant="floating" />
    </div>
  );
};

export default Layout;
