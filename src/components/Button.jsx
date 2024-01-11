import { useState } from "react";
import { iconMinus, iconPlus, iconCart } from "../assets/icons";

export const Button = () => {
  const [numberProduct, setNumberProduct] = useState(0);
  const handleSubmit = () => {
    return numberProduct;
  };
  return (
    <div className="w-full flex gap-5">
      <button className="text-lg font-bold rounded-lg bg-light-grayish-blue h-16 w-1/4 text-black flex items-center justify-between">
        <img
          className="ml-2"
          onClick={() => setNumberProduct((numberProduct) => numberProduct - 1)}
          src={iconMinus}
          alt="minus"
        />
        {numberProduct}
        <img
          className="mr-2"
          onClick={() => setNumberProduct((numberProduct) => numberProduct + 1)}
          src={iconPlus}
          alt="plus"
        />
      </button>
      <button
        onClick={handleSubmit}
        type="submit"
        className="font-bold rounded-lg bg-orange text-white h-16 w-80 flex justify-center items-center"
      >
        <img className="mr-2 text-white" src={iconCart} alt="cart" />
        Add Chart
      </button>
    </div>
  );
};