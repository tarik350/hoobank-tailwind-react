import { LastTrasaction, Paypal } from "../components";
import { google, apple } from "../assets";

const Billing = () => {
  return (
    <section className=" flex flex-col md:flex-row md:items-center justify-center   ">
      <div className="flex flex-1">
        <div className="relative mt-[320px] mb-[100px]   ">
          <div className="w-full  h-full absolute bottom-[180px] md:bottom-[200px] md:left-[280px] left-[120px]">
            <Paypal />
          </div>
          <div className="z-10 w-[100px]">
            <LastTrasaction />
          </div>
          <div className="bg-white absolute xs:left-[150px] sm:left-[200px] top-[210px]  left-[100px] xs:top-[300px] flex w-max  md:px-10 px-2 md:py-4 py-2 rounded-lg ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="green"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
              />
            </svg>
            <p className="font-medium font-poppins text-black xs:px-[10px] px-[4px] xs:text-[14px] text-[10px]  leading-[22px]">
              Great! Your Payment is succesfully.
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 md:w-[35%] text-white  flex flex-col justify-center  items-stretch  ">
        <h2 className="font-poppins font-bold text-[33px] xs:text-[40px] md:text-[48px] leading-[140%] md:leading-[160%]">
          Easily control your billing & invoicing.
        </h2>
        <p className="text-dimWhite my-[24px] font-normal font-poppins text-[16px] md:text-[18px] leading-[] md:leading-[160%]">
          Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio
          aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea
          placerat.
        </p>
        <div className="flex justify-start  items-center my-[20px] md:my-[32px]">
          <div>
            <img className="object-contain" src={google} />
          </div>
          <div>
            <img className="object-contain" src={apple} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Billing;
