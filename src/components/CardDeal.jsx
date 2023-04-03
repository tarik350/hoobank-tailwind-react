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
  <div className="bg-black-gradient p-4 w-max rounded-2xl flex flex-col justify-center items-center">
    <div className="bg-black w-max p-2 rounded-xl">
      <img className="object-contain" src={scan} />
    </div>
    <h3 className="pt-[12px] pb-[4px] font-poppins font-semibold text-[14px] xs:text-[16px] leading-[120%] xs:leading-[160%]">
      Scan Credit Cards
    </h3>
    <p className=" flex flex-1 flex-col items-center text-dimWhite font-poppins font-normal text-[12px]  xs:text-[14px] leading-[120%] xs:leading-[160%]">
      <span> Scan your credit card in </span>
      <span>4 minutes.</span>
    </p>
  </div>
);

const AnalysisCard = () => (
  <div className="bg-black-gradient w-max  rounded-2xl font-poppins flex-col p-8">
    <div className="flex justify-between">
      <h2 className="text-[] xs:text-[] leading-[] xs:leading-[] font-bold ">
        Online Analysis
      </h2>
      <div className="flex items-center justify-between">
        <p className="px-[5px]">1 Month</p>
        <img className="object-contain" src={down} />
      </div>
    </div>

    <div className="flex justify-between ">
      <p className="text-green-gradient ">
        <span className="text-[22px] font-medium"> $ 2,334,67 </span> <br />{" "}
        <span className="font-[1]">Income</span>
      </p>
      <p className="text-[#00D9F5] flex flex-col justify-end items-end">
        <span className="text-[22px] font-medium">$ 5.31M</span>
        <span>Expenses</span>
      </p>
    </div>

    <div className="flex justify-center my-[24px]">
      <img className="object-contain" src={analysis} />
    </div>
    <div className="flex justify-between my-[12px]">
      {months.map((month, index) => (
        <div
          className={`${
            index === 2 ? "bg-green-gradient" : ""
          } font-poppins p-2`}
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
      <h2 className="font-bold font-poppins text-[24px] xs:text-[16px]">
        Pay Method
      </h2>
      <img src={down} />
    </div>
    <div className="flex ">
      {logos.map((logo, index) => (
        <div
          key={index}
          className={`w-[50px] h-[50px] flex justify-center items-center  bg-white overflow-hidden 
           rounded-lg ${index === 0 ? "p-4" : ""} ${
            index === logos.length - 1 ? "" : "mx-2"
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
    <div className="my-[100px] mr-[50px]">
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

    <div className="flex flex-col  items-center">
      <div className="flex flex-1 items-center justify-between">
        <div>
          <ScanCard />
        </div>
        <div className="ml-10">
          <AnalysisCard />
        </div>
      </div>
      <div className="mt-8">
        <PaymentCard />
      </div>
    </div>
  </section>
);

export default CardDeal;
