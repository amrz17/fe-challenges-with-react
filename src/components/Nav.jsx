import { logo, avatar } from "../assets/images";
import { iconCartNav, iconClose, iconMenu } from "../assets/icons";
import { navLink } from "../constants";
import { DropDown } from "./DropDown";
import { useState } from "react";

export const Nav = () => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full absolute z-10 p-4">
      <nav
        className="flex justify-center items-center  
      mx-auto max-container w-full"
      >
        <div className="flex gap-4 mr-10 md:mr-48">
          <div className="flex lg:hidden gap-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenMenu((openMenu) => !openMenu);
              }}
            >
              <img src={iconMenu} alt="icon-menu" width={30} />
            </button>
            {openMenu && (
              <div
                className="flex w-3/5 absolute left-0 top-0 
                bg-white h-screen"
              >
                <ul className="pl-6">
                  <button className="mt-4 mb-8">
                    <img
                      src={iconClose}
                      width={30}
                      onClick={(e) => {
                        e.preventDefault();
                        setOpenMenu((openMenu) => !openMenu);
                      }}
                    />
                  </button>
                  {navLink.map((link) => (
                    <li key={link.label} className="mb-6 text-xl font-bold">
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <a href="/">
              <img src={logo} alt="logo" width={150} />
            </a>
          </div>
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
            setOpenCart((openCart) => !openCart);
          }}
          className="flex justify-end mx-4 lg:mx-7"
        >
          <img src={iconCartNav} alt="icon-cart-nav" width={25} height={25} />
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
      <hr className="hidden mx-auto lg:flex justify-center items-center w-10/12 mt-7" />
      {openCart && <DropDown />}
    </header>
  );
};
