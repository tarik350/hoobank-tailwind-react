import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";
const Footer = () => {
  return (
    <footer className="text-white">
      <div className="flex flex-col md:flex-row justify-between md:items-start">
        <div className="">
          <div className="mb-10">
            <img src={logo} />
          </div>
          <p className="text-dimWhite md:mb-6 mb-8 font-normal font-poppins text-[16px] sm:text-[18px] md:mr-[100px] ">
            A new way to make the payments
            <br className="md:block hidden" /> easy, reliable and secure.
          </p>
        </div>

        <div className="flex flex-1 justify-between items-start ">
          {footerLinks.map((footerLink, index) => {
            return (
              <div key={index} className="">
                <h1 className="font-semibold font-poppins text-[16px] sm:text-[18px] leading-[150%] ">
                  {footerLink.title}
                </h1>
                <div className="my-2 ">
                  {footerLink.links.map((link, index) => {
                    return (
                      <p
                        key={index}
                        className={`text-dimWhite ${
                          index === footerLink.links.length - 1 ? "" : "my-4 "
                        }`}
                      >
                        <a href={link.link}>{link.name}</a>
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <div className="bg-black-gradient w-full h-[2px] px-10 my-8"></div>
        <div className="flex justify-between mb-4">
          <p className="text-dimWhite font-normal font-poppins text-[16px] sm:text-[18px]">
            Copyright &copy; 2021 HooBank. All Rights Reserved.
          </p>
          <div className="flex">
            {socialMedia.map((social, index) => {
              return (
                <div key={social.id} className="mx-[8px]">
                  <a href={social.link}>
                    <img src={social.icon} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
