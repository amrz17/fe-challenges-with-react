import { logo, avatar } from "../assets/images";
import { iconCartNav, iconMenu } from "../assets/icons";
import { navLink } from "../constants";
import { DropDown } from "./DropDown";

export const Nav = () => {
  return (
    <header className="w-full absolute z-10 p-4">
      <nav className="flex justify-center items-center  mx-auto max-container w-full">
        <div className="hidden">
          <img 
          src={iconMenu} 
          alt="icon-menu"
          width={25}
          height={25} />
        </div>
        <a href="/">
          <img 
          src={logo} 
          alt="logo"
          width={150}
           />
        </a>
        <ul className="text-base text-dark-grayish-blue flex flex-1 justify-start items-center gap-10 ml-14">
          {navLink.map((item) => (
            <li className="hover:text-black hover:underline hover:text-lg underline-offset-10 decoration-orange decoration-4" key={item.label}>
              <a 
              href={item.href}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="/"  className="flex justify-end mx-7">
          <img 
          className="text-black bg-black"
          src={iconCartNav} 
          alt="icon-cart-nav" 
          width={25}
          height={25}/>
        </a>
        <a href="/" className="flex justify-end mx-3">
          <img 
          className="rounded-full hover:ring-2 hover:ring-orange"
          src={avatar} 
          alt="avatar"
          width={55}
          height={55} />
        </a>
      </nav>
      <hr className="mx-auto flex justify-center items-center w-10/12 mt-7"/>
      <DropDown />
    </header>
  )
}
