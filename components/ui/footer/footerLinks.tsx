import Link from "next/link";
import React from "react";

type Props = {};

const FooterLinks = (props: Props) => {
  return (
    <div className="flex gap-16 items-start justify-center">
      <div className="flex flex-col items-start gap-1.5 text-base font-normal text-white">
        <Link
          href="/"
          className="hover:text-portfolio-main-primary hover:font-bold"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-portfolio-main-primary hover:font-bold"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-portfolio-main-primary hover:font-bold"
        >
          Contact
        </Link>
      </div>
      <div className="flex flex-col items-start gap-1.5 text-base text-white">
        <Link
          href="/"
          className="hover:text-portfolio-main-primary hover:font-bold"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="hover:text-portfolio-main-primary hover:font-bold"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:text-portfolio-main-primary hover:font-bold"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default FooterLinks;
