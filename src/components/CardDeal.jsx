import Button from "./Button";
import {
  scan,
  analysis,
  down,
  paypal,
  visa,
  spotify,
  appleLogo,
} from "../assets";
import { months } from "../constants";

const logos = [paypal, visa, spotify, appleLogo];

const ScanCard = () => (
  <div className="bg-black-gradient sm:p-4 p-2 w-max rounded-2xl flex flex-col justify-center items-center">
    <div className="bg-black w-max p-2 rounded-xl">
      <img className="object-contain" src={scan} />
    </div>
    <h3 className="sm:pt-[12px] pt-[8px] sm:pb-[4px] pb-[2px] font-poppins font-semibold text-[14px] sm:text-[14px] leading-[120%] xs:leading-[160%]">
      Scan Credit Cards
    </h3>
    <p className=" flex flex-1 flex-col items-center text-dimWhite font-poppins font-normal text-[10px]  sm:text-[12px] leading-[120%] xs:leading-[160%]">
      <span> Scan your credit card in </span>
      <span>4 minutes.</span>
    </p>
  </div>
);

const AnalysisCard = () => (
  <div className="bg-black-gradient sm:w-max  rounded-2xl font-poppins flex-col sm:p-8 p-4">
    <div className="flex justify-between">
      <h2 className="text-[12px] sm:text-[24px] leading-[120%] xs:leading-[160%] font-bold ">
        Online Analysis
      </h2>
      <div className="flex items-center ml-[6px] sm:ml-[10px] justify-between">
        <p className="sm:px-[10px] px-[8px] text-[10px] sm:text-[14px]">
          1 Month
        </p>
        <img className="object-contain" src={down} />
      </div>
    </div>

    <div className="flex justify-between ">
      <p className="text-green-gradient sm:text-[22px] text-[12px]">
        <span className="  font-medium">$ 2,334,67</span>
        <br /> <span className="text-[12px] sm:text-[22px]">Income</span>
      </p>
      <p className="text-[#00D9F5] flex flex-col justify-end items-end">
        <span className="sm:text-[22px] text-[12px] leading-[120%] sm:leading-[160%]  font-medium">
          $ 5.31M
        </span>
        <span className="text-[12px] sm:text-[22px]">Expenses</span>
      </p>
    </div>

    <div className="flex justify-center sm:my-[24px] my-[18px]">
      <img className="object-contain" src={analysis} />
    </div>
    <div className="flex justify-between sm:my-[12px] my-[8px]">
      {months.map((month, index) => (
        <div
          key={index}
          className={`${
            index === 2 ? "bg-green-gradient" : ""
          } font-poppins sm:p-2 p-[3px] text-[10px]  sm:text-[14px] leading-[120%] sm:leading-[160%]`}
        >
          {month}
        </div>
      ))}
    </div>
  </div>
);

const PaymentCard = () => (
  <div className="bg-black-gradient p-4 rounded-xl w-max">
    <div className="flex items-center  justify-between mb-6">
      <h2 className="font-bold font-poppins text-[16px] sm:text-[24px]">
        Pay Method
      </h2>
      <img src={down} />
    </div>
    <div className="flex ">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`sm:w-[50px] w-[40px]   sm:h-[50px] h-[40px] flex justify-center items-center  bg-white overflow-hidden 
           rounded-lg ${index === 0 ? "sm:p-4 p-2" : ""} ${
            index === logos.length - 1 ? "" : "sm:mx-2 mx-[3px]"
          }`}
        >
          <img className="object-contain" src={logo} />
        </div>
      ))}
    </div>
  </div>
);
const CardDeal = () => (
  <section className="text-white  md:flex justify-between ">
    <div className="my-[100px]   mr-[50px]">
      <h1 className="text-[33px] xs:text-[40px] md:text-[48px] leading-[140%] md:leading-[160%] font-bold font-poppins">
        {" "}
        Find a better card deal in few easy steps.
      </h1>
      <p className="text-dimWhite my-[24px] font-normal font-poppins text-[16px] md:text-[18px] leading-[120%] md:leading-[160%]">
        Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis
        aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
      </p>
      <Button name="Get Started" />
    </div>

    <div className="flex flex-col relative  items-center">
      {/* circle background */}
      <div className="absolute">
        <div className="bg-dimBlue-gradinet flex justify-center items-center p-[12px] md:p-4 rounded-full overflow-hidden sm:w-[500px] w-[350px] h-[350px] sm:h-[500px]">
          <div className=" sm:p-16 p-6 rounded-full w-full h-full bg-black">
            <div className="bg-dimBlue-gradinet p-2 w-full h-full rounded-full">
              <div className="bg-black h-full w-full sm:p-20 p-12 rounded-full">
                <div className="bg-dimBlue-gradinet p-[4px]  h-full w-full rounded-full ">
                  <div className="bg-black h-full w-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* circle background end */}
      <div className="z-10 flex flex-col items-center justify-center">
        <div className="flex flex-1 items-center justify-between">
          <div>
            <ScanCard />
          </div>
          <div className="sm:ml-10 ml-[8px]">
            <AnalysisCard />
          </div>
        </div>

        <div className="sm:mt-8 mt-2 ">
          <PaymentCard />
        </div>
      </div>
    </div>
  </section>
);

export default CardDeal;
