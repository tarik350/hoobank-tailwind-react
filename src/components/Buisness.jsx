import { features } from "../constants";
import styles, { layout } from "../styles";
import { Button, FeatureCard } from "../components";

const Buisness = () => {
  return (
    <section
      id="features"
      className={`md:flex flex-1 justify-between items-center`}
    >
      <div className="text-white my-10">
        <h1 className="xs:text-[48px] font-poppins font-semibold text-[44px] leading-[43px] xs:leading-[73px]">
          You do the business, we’ll handle the money.
        </h1>

        <p className="xs:text-[18px] max-w-[470px] text-dimWhite font-poppins font-normal text-[14px] leading-[30px] mt-[24px] mb-[48px] xs:leading-[36px]">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market..
        </p>
        <Button name="Get Started" />
      </div>

      <div className="">
        {features.map((feature, index) => {
          return (
            <FeatureCard
              index={index}
              key={feature.id}
              title={feature.title}
              id={feature.id}
              content={feature.content}
              icon={feature.icon}
              featureLength={features.length}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Buisness;
