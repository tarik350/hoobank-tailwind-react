import React from "react";
import { quote } from "../assets";
import { feedback } from "../constants";

const Testimonial = () => {
  return (
    <section className="text-white flex justify-center items-center flex-col my-[100px] sm:my[150px] ">
      <div className="md:flex justify-between items-start ">
        <h2 className="font-bold font-poppins text-[40px] sm:text-[48px]  leading-[120%] sm:leading-[160%]">
          What people are saying about us
        </h2>
        <p className="text-dimWhite font-normal text-[16px] sm:text-[18px] leading-[120%] sm:leading-[160%] ">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="sm:flex sm:w-full   ">
        {feedback.map((feed) => (
          <div
            key={feed.id}
            className="   feature-card rounded-lg p-[16px] sm:p-[22px] sm:mx-6 my-6 "
          >
            <div className="w-[33px] sm:w-[44px] my-4 sm:my-8 ">
              <img src={quote} />
            </div>
            <div className="">
              <p className="font-normal font-poppins text-[16px] sm:text-[18px] leading-[150%] sm:leading-[180%]">
                {feed.content}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center w-full mt-8">
                <div className="w-[50px] sm:w-[70px] ">
                  <img className="object-contain" src={feed.img} />
                </div>
                <div className="ml-[10px]  sm:ml-[12px]">
                  <h1>{feed.name}</h1>
                  <p className="text-dimWhite">{feed.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
