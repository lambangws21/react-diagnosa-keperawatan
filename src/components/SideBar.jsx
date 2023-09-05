/** @format */
import { useState } from "react";
import {
  ArrowLeftCircleIcon,
  ClipboardDocumentCheckIcon,
  CubeTransparentIcon,
  LinkIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
function SideBar() {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Nursing Diagosis", src: "duplicate" },
    { title: "Belanja Alkes", src: "link" },
    { title: "Operasi Prosedur ", src: "document" },
    // { title: "Setting", src: "Setting", gap: true },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5 bg-blue-950 pt-8 duration-300 sticky top-0`}
    >
      <ArrowLeftCircleIcon
        className={`absolute cursor-pointer bg-slate-200 -right-3 top-9 w-7 border-slate-200 border-2 rounded-full  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img src="https://lh3.googleusercontent.com/pw/AIL4fc9dBbe_7jPoiqou3Ia18tG-d5SDerXXgtrQ0Q6l2rwDzhWydOivTy6DcsQieP2ArpL-CVkMDiLXZt6tyduMBWHEd24sYup99LvbcReaL8OcotlENTjErXXCiAA7JHcWYa5tmCdAfUIeOmk0ZPXPzt0Bo6HjLkf1nTR1WZDZIsHQqqJfFR1Euaqj-S9hfEClLODppVbZo0-Q6EbqyVk-bGKLADMWI5H30crDvtXqsqyBPHhYVwLaGBsc0hqJUl19H4OgB3frNyKybdHzFVD_GF1OFrVFrgx6s-025xi0DF60VG2R9ICTbJDARv6R9M4ZOw44wKTEYm2eazQ19zc08u1zFnfb8AszYqrMP6vCIqz0SYVdqVJBD1SAsHEZKCBErt9kcqj8qQYzA5x07SRiRbSdaiKMT7u9HrtX5oxHixKW998eW-iKMck6gJfOtHokbqGyMGc7MgSBpMHbWbxDS5fz2rufIZWJp1xKec6lEDrRifswymaG9EGWp4wo5BL98pVv5hgNaJWNEIHPClh-P6b6nLb4v0ptW8vXe9XwJwwWcyvvCEGLIFOJtLN2zpJ9vL071q1mXxKvW-EUeWtG6IX6Iki4zuH2yRk7rktKWSEIABEXR6o2RyyR1fkKk7-kczlof79Idh4MSHCj0HkW2Wzx-vhfDxQtFsPOtNDqSswhfypRVK14MvAYXme7pUe6_CPVRr3AximoPHpk0BXcdsuedvBnJaNdHCMT5w3235Vj_OvYPWg6y-_Sfvq169q6hs2wIQwcoLdDoO4gtnif9fgjuUNciuU4niHvsby4ZwJrQVAGqp-ouoAK-l9-Tg4sZpcAEMlsTS6IJzk4yerNi2RVI2fVNPM7TVNz5dbzbztRMpp_E9mO8gUdPrkrSrI2FxP5lNf0EXyBq0ZTcYqm=w64-h64-s-no?authuser=0"
          className={`cursor-pointer duration-500 rounded-full w-14 border bg-white inset-0 ${
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
          <li key={index}  className={`flex border border-b-gray-50 rounded-md p-2 cursor-pointer hover:bg-blue-900 text-gray-300 text-sm items-center gap-x-5 duration-300 
                ${Menu.gap ? "mt-96" : "mt-7"} ${
              index === 0 && "bg-blue-700"
            } `}           >
            {Menu.src === "duplicate" && (
              <ClipboardDocumentCheckIcon className="h-5 w-5" />
            )}
            {Menu.src === "list" && (
              <CubeTransparentIcon className="h-5 w-5" />
            )}
            {Menu.src === "link" && (
              <LinkIcon className="h-5 w-5" />
            )}
            {Menu.src === "document" && (
              <DocumentTextIcon className="h-5 w-5" />
            )}
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
