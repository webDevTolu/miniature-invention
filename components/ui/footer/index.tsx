import Social from "./social";
import Newsletter from "./newsletter";
import FooterLinks from "./footerLinks";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-[30px] font-lato w-full bg-[#18181B]">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="flex flex-col md:flex-row md:flex-wrap gap-16 justify-around w-5/6 mx-auto">
          <div className="flex flex-col gap-6">
            <Image src="/images/logo.png" alt="Logo" width={48} height={48} />
            <p className="text-lg font-normal text-white leading-6 capitaliize">
              I design and develop experiences that make people&apos;s lives
              simple
            </p>
            <Social />
          </div>

          <FooterLinks />

          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3 items-start text-base">
              <h4 className="font-bold">Subscribe to my newsletter</h4>
              <p className="text-portfolio-white-text font-normal">
                The latest blogs, news, articles and resources sent to your
                inbox weekly
              </p>
            </div>
            <Newsletter />
          </div>
        </div>
        <p className="flex items-center justify-center w-max text-base text-white/50">
          &copy; {currentYear} webDevTolu. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
