import { logo, avatar } from "../assets/images";
import { iconCartNav, iconClose, iconMenu } from "../assets/icons";
import { navLink } from "../constants";
import { DropDown } from "./DropDown";
import { useState } from "react";
import { EmpetyCart } from "./EmpetyCart";

export const Nav = ({ numberProduct }) => {
  const [openCart, setOpenCart] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="w-full absolute z-10 p-4">
      <nav
        className="flex justify-center items-center  
      mx-auto max-container w-full"
      >
        <div className="flex gap-4 mr-12 md:mr-60">
          <div className="flex gap-8">
            <button
              onClick={(e) => {
                e.preventDefault();
                setOpenMenu((openMenu) => !openMenu);
              }}
              className="lg:hidden"
            >
              <img src={iconMenu} alt="icon-menu" width={30} />
            </button>
            {openMenu && (
              <div
                className="flex w-3/5 md:w-1/2 absolute left-0 top-0 
                bg-white h-screen"
              >
                <ul className="pl-6">
                  <button className="mt-4 mb-8 md:mb-12">
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
                    <li
                      key={link.label}
                      className="text-black mb-6 text-xl md:text-2xl md:ml-12 font-bold"
                    >
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
      {openCart &&
        (numberProduct === 0 ? (
          <EmpetyCart />
        ) : (
          <DropDown numberProduct={numberProduct} />
        ))}
    </header>
  );
};
