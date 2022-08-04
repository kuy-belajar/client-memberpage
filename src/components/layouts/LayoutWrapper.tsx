/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import Header from "@/parts/Header";
import Footer from "@/parts/Footer";

type LayoutWrapperProps = {
  children: ReactNode;
  custom?: boolean;
};

const LayoutWrapper = ({ children, custom = false }: LayoutWrapperProps) => {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        {custom ? children : <main className="flex-1">{children}</main>}
        <Footer />
      </div>
    </>
  );
};

export default LayoutWrapper;
