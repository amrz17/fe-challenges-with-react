import { iconMinus, iconPlus, iconCart } from "../assets/icons"

export const Button = () => {
  return (
    <div className="w-full flex gap-5">
      <button className="text-lg font-bold rounded-lg bg-light-grayish-blue h-16 w-1/4 text-black flex items-center justify-between">
        <img 
        className="ml-2"
        src={iconMinus} 
        alt="minus"
         /> 
         3
        <img 
        className="mr-2"
        src={iconPlus} 
        alt="plus"
         />
      </button>
      <button className="font-bold rounded-lg bg-orange text-white h-16 w-80 flex justify-center items-center">
        <img 
        className="mr-2 text-white"
        src={iconCart}
        alt="cart"
         />
        Add Chart
      </button>
    </div>
  )
}
