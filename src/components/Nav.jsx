import { logo, avatar } from "../assets/images";
import { iconCartNav, iconMenu } from "../assets/icons";
import { navLink } from "../constants";
import { DropDown } from "./DropDown";
import { useState } from "react";

export const Nav = () => {
  const [openCart, setOpenCart] = useState(false);

  return (
    <header className="w-full absolute z-10 p-4">
      <nav className="flex justify-center items-center  mx-auto max-container w-full">
        <div className="flex gap-4 mr-8">
          <div className="flex lg:hidden">
            <img src={iconMenu} alt="icon-menu" width={30} />
          </div>
          <a href="/">
            <img src={logo} alt="logo" width={150} />
          </a>
        </div>
        <ul className="hidden lg:flex text-base text-dark-grayish-blue flex-1 justify-start items-center gap-10 ml-14">
          {navLink.map((item) => (
            <li
              className="hover:text-black hover:underline hover:text-lg underline-offset-10 decoration-orange decoration-4"
              key={item.label}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            setOpenCart((prev) => !prev);
          }}
          className="flex justify-end mx-4 lg:mx-7"
        >
          <img
            className="text-black bg-black"
            src={iconCartNav}
            alt="icon-cart-nav"
            width={25}
            height={25}
          />
        </a>
        <a href="/" className="flex justify-end lg:mx-3">
          <img
            className="rounded-full hover:ring-2 hover:ring-orange"
            src={avatar}
            alt="avatar"
            width={45}
          />
        </a>
      </nav>
      <hr className="mx-auto flex justify-center items-center w-10/12 mt-7" />
      {openCart && <DropDown />}
    </header>
  );
};
