import { manulife, paypal } from "../assets";
import Button from "./Button";

const Paypal = () => (
  <div className="bg-black-gradient w-max xs:py-[24px] px-[22px] py-[16px] xs:px-[40px]   rounded-lg  flex flex-col  text-white">
    <div className="  flex items-start justify-center ">
      <div className="xs:w-[70px] xs:h-[70px] h-[40px] w-[40px] p-[5px] flex justify-center items-center xs:p-4   bg-white rounded-full overflow-hidden text-black">
        <img className=" object-fill " src={paypal} />
      </div>
      <div className="xs:ml-[40px]  ml-[20px] mt-[8px]">
        <h2 className="text-white text-[18px] xs:text-[32px] leading-[2px] xs:leading-[28px] font-semibold ">
          Paypal
        </h2>
        <p className="xs:my-[12px] my-[8px] text-dimWhite">checkout</p>
      </div>
    </div>
    <div className="xs:mt-[12px] mt-[8px] flex items-center justify-between">
      <div className="flex flex-col">
        <p className=" text-dimWhite font-normal font-poppins text-[12px] xs:text-[20px] ">
          Total
        </p>
        <h3 className="font-semibold font-poppins text-[16px] xs:text-[24px] leading-[25px] xs:leading-[32px]">
          $210
        </h3>
      </div>
      <div className=" bg-blue-gradient ml-[20px] p-[1px] rounded-lg">
        <Button name="change" border={true} />
      </div>
    </div>
    <div className="mt-4">
      <Button name="make payment" paypal={true} />
    </div>
  </div>
);

export default Paypal;
