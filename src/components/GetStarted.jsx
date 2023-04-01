import { arrowUp } from "../assets";
import styles from "../styles";

const GetStarted = () => {
  return (
    <div
      className={` border p-[2px] bg-blue-gradient rounded-full w-[140px] h-[140px] ${styles.flexCenter}`}
    >
      <div
        className={` bg-black  rounded-full w-full h-full flex-col  ${styles.flexCenter}`}
      >
        <div className={`flex-row ${styles.flexStart}`}>
          <p className="text-[18px] font-poppins font-medium leading-[23px] text-gradient">
            Get
          </p>
          <img className=" object-contain w-[23px] h-[23px] " src={arrowUp} />
        </div>
        <p className="text-[18px] font-poppins font-medium leading-[23px] text-gradient">
          started
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
