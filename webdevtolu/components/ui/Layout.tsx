import { Fragment, ReactNode } from "react";
import Header from "./Header";
import Footer from "./footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
