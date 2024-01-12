import { navLink } from "../constants";

export const SideBar = () => {
  return (
    <div className="relative w-96 bg-black h-screen">
      <div>
        <ul>
          {navLink.map((link) => {
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>;
          })}
        </ul>
      </div>
    </div>
  );
};
