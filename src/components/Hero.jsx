import styles from "../styles";
import { discount, robot } from "../assets";
import { GetStarted } from "../components";

const Hero = () => (
  <section
    id="hero"
    className="flex  flex-1 flex-col md:flex-row justify-center items-center"
  >
    <div
      className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}
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
      <h1 className="text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px]">
        Payment method
      </h1>
    </div>

    {/* get started */}

    {/* get started circle */}
    {/* <div
      className=" flex   h-20 w-20 mt-10 md:mt-0 p-16
       items-center justify-center rounded-full border-4 text-gradient border-[bg-blue-gradient]"
    >
      <div className="absolue">
        Get <img className="absolute top-10 right-8" src={discount} />{" "}
        <span>Started</span>
      </div>
    </div> */}
    {/* the image */}
  </section>
);

export default Hero;
