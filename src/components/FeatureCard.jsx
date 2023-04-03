import React from "react";

const FeatureCard = ({ index, title, content, icon, featureLength }) => {
  return (
    <div
      className={`text-white feature-card hover:bg-black-gradient   flex py-2 md:py-4 md:px-8 px-10 rounded-2xl   hover:bg-black-gradient ${
        index !== featureLength - 1 ? "my-4" : "my-0 "
      }`}
    >
      <div className="flex items-center w-[64px] h-[64px] rounded-full  bg-dimBlue justify-center">
        <img className="" src={icon} alt={title} />
      </div>
      <div className="flex flex-col flex-1 px-10">
        <h4 className="font-semibold font-poppins text-[16px] xs:text-[18px] leading-[120%] xs:leading-[130%] ">
          {title}
        </h4>
        <p className=" font-poppins font-normal text-[14px] xs:text-[16px] leaidng-[24px] text-dimWhite xs:leading-[28px]">
          {content}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
