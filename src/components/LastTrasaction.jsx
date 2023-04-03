import { arrowUp, arrowdown } from "../assets";
import { lastTrasactions } from "../constants";

const LastTrasaction = () => {
  return (
    <div className="bg-black-gradient w-max rounded-lg xs:py-10 xs:px-6 px-4 py-6 text-white ">
      <h1 className="font-semibold text-[14px] xs:text-[24px]  leading-[14px]   xs:leading-[20px] font-poppins">
        Last Transaction
      </h1>

      {lastTrasactions.map((lastTrasaction, index) => {
        return (
          <div
            key={index}
            className={`flex items-center justify-between ${
              index === lastTrasactions.length - 1
                ? "my-0"
                : "xs:my-[22px] my-[12px] "
            }`}
          >
            <div className=" flex items-center justify-between">
              <div className="xs:w-[56px] w-[40px] h-[40px]  xs:h-[56px] overflow-hidden bg-white rounded-full flex ">
                <img className="object-contain" src={lastTrasaction.icon} />
              </div>
              <div className="flex-1 xs:ml-4 ml-[12px]">
                <h2 className="text-[10px] xs:text-[18px] font-semibold font-poppins leading-[18px] xs:leading-[22px]">
                  {lastTrasaction.name}
                </h2>
                <p className="text-[8px] xs:text-[14px] text-dimWhite font-normal font-poppins leading-[12px] xs:leading-[22px] ">
                  {lastTrasaction.days}
                </p>
              </div>
            </div>

            <div className=" flex items-center justify-center">
              <div className="xs:mx-2 mx-[2px]">
                {index === lastTrasactions.length - 1 ? (
                  //arrow up
                  <img src={arrowUp} alt="stock arrow up" />
                ) : (
                  // arrow down
                  <img src={arrowdown} alt="stock arrow down" />
                )}
              </div>
              <p className="font-normal font-poppins xs:text-[14px] text-[12px] leading-[22px] text-white">
                {lastTrasaction.balance}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LastTrasaction;
