import { iconMinus, iconPlus, iconCart } from "../assets/icons";

export const Button = ({
  numberProduct,
  handleSubmit,
  increment,
  decrement,
}) => {
  return (
    <div className="w-full px-4 md:pl-8 flex-col lg:flex-row lg:gap-5">
      <button
        className="mb-4 text-lg font-bold rounded-lg bg-light-grayish-blue 
        h-16 w-full lg:w-1/4 text-black flex items-center justify-between"
      >
        <img className="ml-2" onClick={decrement} src={iconMinus} alt="minus" />
        {numberProduct}
        <img className="mr-2" onClick={increment} src={iconPlus} alt="plus" />
      </button>
      <button
        onClick={handleSubmit}
        type="submit"
        className="font-bold rounded-lg bg-orange text-white h-16 w-full 
        lg:w-80 flex justify-center items-center mb-8"
      >
        <img className="mr-2 text-white" src={iconCart} alt="cart" />
        Add Chart
      </button>
    </div>
  );
};
