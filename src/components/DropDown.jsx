import { iconDelete } from "../assets/icons";
import { thumbnailProduct1 } from "../assets/images";

export const DropDown = () => {
  return (
    <div className="w-82 h-56 border rounded-md absolute top-16 right-40 mt-4 bg-white">
      <h2 className="font-bold ml-3 mt-3 text-lg">Cart</h2>
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
          <br /> $125.00 x 3<span className="font-bold"> $375.00 </span>
        </p>
        <img src={iconDelete} alt="Delete" className="inline-flex" />
      </div>
      <button className="text-white bg-orange w-80 mx-4 rounded-md mt-4  h-12 ">
        Checkout
      </button>
    </div>
  );
};
