const Button = ({ name, border, paypal }) => {
  return (
    <button
      className={`${
        border === true
          ? "text-[14px] sm:text-[24px]  text-[#33bbcf] bg-black  "
          : " text-black bg-blue-gradient"
      }   ${
        paypal === true ? "w-full" : ""
      } px-[1.5rem]   leading-[23px] font-normal font-poppins py-[.7rem]  rounded-lg`}
    >
      {name}
    </button>
  );
};

Button.defaultProps = {
  name: "button name",
  border: false,
};

export default Button;
