/** @format */
import { useState } from "react";
function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Nursing", src: "duplicate" },
    { title: "Belanja Alkes", src: "list" },
    // { title: "Accounts", src: "User", gap: true },
    // { title: "Schedule ", src: "Calendar" },
    // { title: "Search", src: "Search" },
    // { title: "Analytics", src: "Chart" },
    // { title: "Files ", src: "Folder", gap: true },
    // { title: "Setting", src: "Setting", gap: true },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5 bg-blue-950 pt-8 duration-300 sticky top-0`}
    >
      <img
        src="./src/img/control.png"
        className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="./src/img/Logo.png"
          className={`cursor-pointer duration-500 rounded-full ${
            open && "rotate-[360deg]"
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Nursing
        </h1>
      </div>
      <ul className="pt-6">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex border border-b-gray-50 rounded-md p-2 cursor-pointer hover:bg-blue-900 text-gray-300 text-sm items-center gap-x-5 duration-300 
                ${Menu.gap ? "mt-96" : "mt-4"} ${
              index === 0 && "bg-light-white"
            } `}
          >
            <img src={`./src/img/${Menu.src}.png`} />
            <span className={`${!open && "hidden"} origin-left duration-200`}>
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SideBar;
