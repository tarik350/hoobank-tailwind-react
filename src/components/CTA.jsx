import Button from "./Button";

const CTA = () => {
  return (
    <section className="bg-black-gradient items-center  rounded-lg my-20 z-60 shadow-lg  text-white flex flex-col sm:flex-row sm:items-center px-[65px] py-[72px] justify-between ">
      <div className=" my-6">
        <h3 className="font-bold font-poppins text-[40px] sm:text-[48px] leading-[150%] sm:leading-[160%] ">
          Let’s try our service now!
        </h3>
        <p className="text-dimWhite font-normal mt-4 sm:mt-8 font-poppins text-[16px] sm:text-[18px] leading-[150%] sm:leading-[160%] ">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className=" sm:ml-10">
        <Button name="Get Started" />
      </div>
    </section>
  );
};

export default CTA;
