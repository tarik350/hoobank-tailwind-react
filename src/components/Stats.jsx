import { stats } from "../constants";
import styles from "../styles";

const Stats = () => {
  return (
    <section
      className={`flex justify-between items-center   mt-20   flex-wrap  `}
    >
      {stats.map((stat, index) => {
        return (
          <div
            key={stat.id}
            className="flex flex-1 justify-start items-center flex-row my-3"
          >
            <h2
              className={`  text-white font-poppins xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] font-semibold`}
            >
              {stat.value}
            </h2>
            <p className="ml-3 text-gradient font-poppins font-normal xs:text-[20.4463px] text-[15px] uppercase xs:leading-[26px] leading-[21px]  ">
              {stat.title}
            </p>
          </div>
        );
      })}
    </section>
  );
};

export default Stats;
