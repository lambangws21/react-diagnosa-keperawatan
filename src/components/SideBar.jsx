/** @format */

import {
  ArchiveBoxArrowDownIcon,
  CalendarIcon,
  ChatBubbleBottomCenterIcon,
  Cog6ToothIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/solid";

function SideBar() {
  return (
    <div className="fixed inset-y-0 left-0 bg-sky-200 md:w-20 h-2/3 mt-20 rounded-2xl ml-3 sm:ml-1 sm:w-10 shadow-md">
      <h3 className="flex items-center justify-center text-xl h-10 bg-sky-600 rounded-full text-purple-50 font-extrabold">
        Os
      </h3>
      <ul className="flex flex-col text-md flex-1 h-full ">
        <li className="flex justify-center items-center flex-col py-5 border-gray-500 text-gray-500  hover:text-sky-500 hover:border-sky-500 active:text-sky-500">
          <ArchiveBoxArrowDownIcon className="w-6 h-6  cursor-pointer active:text-sky-300" />
          <span className="sm:hidden md:inline"> Diagnosa</span>
        </li>
        <li className="flex justify-center items-center flex-col py-5 border-gray-500 text-gray-500 hover:text-sky-500 hover:border-sky-500 active:text-sky-500">
          <ShoppingCartIcon className="w-6 h-6  cursor-pointer active:bg-sky-300" />
          <span className="sm:hidden md:inline"> Alkes</span>
        </li>
        <li className="flex justify-center items-center flex-col py-5  border-gray-500 text-gray-500  hover:text-sky-500 hover:border-sky-500 active:text-sky-500">
          <CalendarIcon className="w-6 h-6  cursor-pointer active:bg-sky-300" />
          <span className="sm:hidden md:inline"> Jadwal</span>
        </li>
        <li className="flex justify-center items-center flex-col py-5 border-gray-500 text-gray-500  hover:text-sky-500 hover:border-sky-500 active:text-sky-500">
          <ChatBubbleBottomCenterIcon className="w-6 h-6   cursor-pointer active:bg-sky-300" />
          <span className="sm:hidden md:inline">Pesan</span>
        </li>
        <li className="flex justify-center items-center flex-col py-5 border-gray-500 text-gray-500 mt-auto mb-16  hover:text-sky-500 hover:border-sky-500 active:text-sky-500">
          <Cog6ToothIcon className="w-6 h-6  cursor-pointer active:bg-sky-300" />
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
