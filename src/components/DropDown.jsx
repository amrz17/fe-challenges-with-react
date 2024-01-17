import { iconDelete } from "../assets/icons";
import { thumbnailProduct1 } from "../assets/images";

export const DropDown = ({ numberProduct }) => {
  const price = 125;
  const totalPrice = price * numberProduct;
  return (
    <div
      className="w-82 h-56 border rounded-md absolute top-16 md:right-40 
      mt-4 bg-white"
    >
      <h2 className="text-black font-bold ml-3 mt-3 text-lg">Cart</h2>
      <hr className="bg-grayish-blue mt-4" />
      <div className="flex gap-3 justify-center items-center mt-5">
        <img
          src={thumbnailProduct1}
          alt=""
          width={65}
          height={65}
          className="rounded-md "
        />
        <p>
          Fall Limited Edition Sneakers
          <br /> $125.00 x {numberProduct} =
          <span className="text-xl font-bold text-black ml-4">
            ${totalPrice}
          </span>
        </p>
        <button>
          <img
            src={iconDelete}
            alt="Delete"
            className="inline-flex pt-2 pl-2"
          />
        </button>
      </div>
      <button className="text-white bg-orange w-80 mx-4 rounded-md mt-4  h-12 ">
        Checkout
      </button>
    </div>
  );
};
