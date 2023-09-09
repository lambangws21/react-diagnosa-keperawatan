/** @format */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftCircleIcon,
  ClipboardDocumentCheckIcon,
  CubeTransparentIcon,
  LinkIcon,
  DocumentTextIcon,
  QrCodeIcon,
} from "@heroicons/react/24/outline";
function SideBar() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();
  const Menus = [
    { title: "My Diagosis", src: "duplicate", path: "/", gap: true },
    { title: "Generete Text", src: "barcode", path: "/textgenerate" },
    { title: "Persiapan Operasi", src: "link", path: "/Googlelist" },
    { title: "Operasi Prosedur ", src: "document", path: "/operasiprosedur" },
  ];

  return (
    <div
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-dark-purple h-screen p-5 bg-blue-950 pt-8 duration-300 sticky top-0 z-50`}
    >
      <ArrowLeftCircleIcon
        className={`absolute cursor-pointer bg-slate-200 -right-3 top-9 w-7 border-slate-200 border-2 rounded-full  ${
          !open && "rotate-180"
        }`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="https://raw.githubusercontent.com/lambangws21/react-diagnosa-keperawatan/1c0d9e494af6c4bb735ba7f0553a0bded0b1fc31/src/img/logo.webp"
          className={`cursor-pointer duration-500 rounded-full ${
            open ? "w-16 h-16" : "w-10 h-10 "
          } animate-pulse border bg-white inset-0 ${open && "rotate-[360deg]"}`}
          onClick={() => navigate("/")}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Nursing
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-6">
        <img
          src="https://raw.githubusercontent.com/lambangws21/react-diagnosa-keperawatan/main/src/img/profil.webp"
          alt="lambang"
          className={` flex justify-end rounded-full border bg-yellow-100 border-white cursor-pointer ${
            open ? "w-16 h-16" : "w-10 h-10 "
          }`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 ${
            !open && "scale-0"
          }`}
        >
          Welcome!
        </h1>
        <p
          className={`text-white origin-left font-medium text-md duration-200 ${
            !open && "scale-0"
          }`}
        >
          Selamat Beraktivitas
        </p>
      </div>
      <ul className="pt-5">
        {Menus.map((Menu, index) => (
          <li
            key={index}
            className={`flex border border-b-gray-50 rounded-md p-2 cursor-pointer hover:bg-blue-900 text-gray-300 text-sm items-center gap-x-5 duration-500 
                ${Menu.gap ? "mt-4" : "mt-5"} `}
            onClick={() => navigate(Menu.path)}
          >
            {Menu.src === "duplicate" && (
              <ClipboardDocumentCheckIcon className="h-7 w-7" />
            )}
            {Menu.src === "barcode" && <QrCodeIcon className="h-7 w-7" />}
            {Menu.src === "list" && <CubeTransparentIcon className="h-7 w-7" />}
            {Menu.src === "link" && <LinkIcon className="h-7 w-7" />}
            {Menu.src === "document" && (
              <DocumentTextIcon className="h-7 w-7" />
            )}
            <span
              className={`${!open && "hidden"} origin-left  duration-200`}
              onClick={() => navigate(Menu.path)}
            >
              {Menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default SideBar;
