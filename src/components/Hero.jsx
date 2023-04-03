import styles from "../styles";
import { discount, robot } from "../assets";
import { GetStarted } from "../components";

const Hero = () => (
  <section
    id="hero"
    className="flex  flex-1 flex-col   md:flex-row justify-center items-center"
  >
    <div
      className={`${styles.flexStart} flex-1 w-full flex-col grow-1 xl:px-0 sm:px-16 px-6`}
    >
      {/* discount */}
      <div className=" text-white  bg-discount-gradient w-max rounded-[10px] px-4 mb-2 py-[6px]">
        <img className="inline" src={discount} />
        20% <span className="text-dimWhite">Discount for </span>1 month{" "}
        <span className="text-dimWhite">account</span>{" "}
      </div>
      {/* next generation and get started in a row */}
      <div className="flex  justify-between items-cente w-full">
        <h1 className="text-white font-poppins ss:text-[72px] ss:leading-[100px] font-semibold text-[52px]">
          The next <span className="sm:block  text-gradient">Generation</span>{" "}
        </h1>
        <div className="ss:flex hidden md:mr-4 mr-0 text-white">
          <GetStarted />
        </div>
      </div>
      {/* the payment method text */}
      <h1 className="text-white  font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
        Payment method
      </h1>
      {/* then commes the description text */}
      <p
        className={`max-w-[500px] mt-5  text-dimWhite font-poppins font-normal leading-[30px] text-[18px] `}
      >
        Our team of experts uses a methodology to identify the credit cards most
        likely to fit your needs. We examine annual percentage rates, annual
        fees.
      </p>
    </div>
    <div className={`flex flex-1 ${styles.flexCenter} md:my-0 my-10  relative`}>
      <img
        src={robot}
        className="w-[100%] h-[100%] relative z-[5]"
        alt="billing"
      />
      <div className="pink__gradient top-0 absolute w-[40%] h-[40%] z-[1]"></div>
      <div className="white__gradient absolute bottom-40 rounded-full  w-[80%] h-[80%] z-[1]"></div>{" "}
      <div className="blue__gradient absolute w-[40%] h-[40%] right-70"></div>
    </div>
    <div className="ss:hidden">
      <GetStarted />
    </div>
  </section>
);

export default Hero;
