/** @format */
import { useState } from "react";
import {
  BeakerIcon,
  ChevronLeftIcon,
  BanknotesIcon,
} from "@heroicons/react/24/solid";
function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Nursing Diagnosis", src: "board" },
    { title: "Alkes Operasi", src: "shop" },
    { title: "Jadwal Operasi", src: "board", gap: true },
    { title: "Chat", src: "shop" },
  ];
  return (
    <div className="flex fixed z-50">
      <div
        className={`${
          open ? "w-72" : "w-20"
        } duration-300 h-screen p-5 pt-8 bg-blue-950 relative`}
      >
        <ChevronLeftIcon
          className={`absolute cursor-pointer -right-3 top-9 w-8 border-2 border-blue-800 rounded-full bg-slate-200 p-1 duration-700 ${
            !open && "rotate-180"
          } animate-pulse hover:animate-none `}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <BeakerIcon
            className={`w-10 bg-white p-1 cursor-pointer duration-500 shadow-sky-400 border-sky-300 rounded-full ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-bold text-xl duration-300 ${
              !open && "scale-0"
            }`}
          >
            Nursing
          </h1>
        </div>
        <ul className="pt-6 ">
          {Menus.map((menu, index) => (
            <li
              key={index}
              className={`text-white text-sm flex items-center gap-x-4 cursor-pointer p-4 hover:bg-blue-800 rounded-md ${
                menu.gap ? "mt-9" : "mt-2"
              }  ${index === 0 && "bg-blue-800"}`}
            >
              <BanknotesIcon
                className={`w-10 text-blue-800 cursor-pointer mt-3 bg-white rounded-md border-blue-950 shadow-lg p-1 items-center duration-300 ${
                  !open ? "w-10" : "w-12"
                }`}
              />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
