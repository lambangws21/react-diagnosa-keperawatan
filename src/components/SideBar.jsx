/** @format */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeftCircleIcon,
  ClipboardDocumentCheckIcon,
  LinkIcon,
  DocumentTextIcon,
  QrCodeIcon,
  Bars3Icon, // Ikon untuk Hamburger Menu
  XMarkIcon, // Ikon untuk Menutup Mobile Menu
} from "@heroicons/react/24/outline";
import PropTypes from 'prop-types';

// --- Data Konfigurasi Sidebar ---
const Menus = [
  { title: "My Diagosis", src: "duplicate", path: "/", gap: true },
  { title: "Data Objektif", src: "barcode", path: "/textgenerate" },
  { title: "Persiapan Operasi", src: "link", path: "/Googlelist" },
  { title: "Operasi Prosedur ", src: "document", path: "/operasiprosedur" },
];

const ICON_MAP = {
  duplicate: ClipboardDocumentCheckIcon,
  barcode: QrCodeIcon,
  link: LinkIcon,
  document: DocumentTextIcon,
};

// --- Komponen Pembantu (Helper Component) ---
const DynamicIcon = ({ src }) => { // Baris ini menggunakan prop 'src'
  const IconComponent = ICON_MAP[src];
  if (!IconComponent) return null;
  return <IconComponent className="h-7 w-7 text-yellow-300" />;
};

// Tambahkan propTypes di sini
DynamicIcon.propTypes = {
  src: PropTypes.string.isRequired, // Menegaskan bahwa 'src' harus berupa string dan wajib ada
};

const LOGO_URL =
  "https://raw.githubusercontent.com/lambangws21/react-diagnosa-keperawatan/1c0d9e494af6c4bb735ba7f0553a0bded0b1fc31/src/img/logo.webp";
const PROFILE_URL =
  "https://raw.githubusercontent.com/lambangws21/react-diagnosa-keperawatan/main/src/img/profil.webp";


// --- Komponen Utama Sidebar ---
function SideBar() {
  // State untuk mode desktop/sidebar yang menyusut
  const [open, setOpen] = useState(true);
  // State untuk mode mobile/menu overlay
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Tutup menu mobile setelah navigasi
    setMobileOpen(false);
  };

  return (
    <>
      {/* 1. Tombol Hamburger (Hanya Tampil di Mobile) */}
      <div className="md:hidden sticky top-0 bg-blue-950 p-3 flex justify-between items-center z-50">
        <h1 className="text-white font-bold text-xl">Nursing</h1>
        <button 
          onClick={() => setMobileOpen(true)}
          className="text-white p-2 rounded-md hover:bg-blue-900"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
      </div>

      {/* 2. Sidebar Container (Desktop & Mobile Overlay) */}
      <div
        className={`
          bg-blue-950 h-screen p-5 pt-8 z-50 transform transition-transform duration-300
          // Mobile Overlay Styles
          ${mobileOpen ? "fixed inset-0 w-full" : "fixed -translate-x-full md:translate-x-0"} 
          // Desktop Sidebar Styles
          md:sticky md:top-0 md:h-screen md:duration-300 md:z-40
          ${open ? "md:w-72" : "md:w-20"}
        `}
      >
        
        {/* Tombol Tutup (Hanya di Mobile) */}
        <button 
          onClick={() => setMobileOpen(false)}
          className="md:hidden absolute top-4 right-4 text-white p-2 rounded-full hover:bg-blue-900"
        >
            <XMarkIcon className="h-6 w-6" />
        </button>

        {/* Tombol Toggle (Hanya di Desktop) */}
        <ArrowLeftCircleIcon
          className={`
            hidden md:block absolute cursor-pointer duration-500 bg-yellow-200 -right-3 top-9 w-7 
            border-slate-200 border-2 rounded-full 
            ${!open && "rotate-180"}
          `}
          onClick={() => setOpen(!open)}
        />

        {/* Header Logo dan Title */}
        <div className="flex gap-x-4 items-center mb-6">
          <img
            src={LOGO_URL}
            className={`
              cursor-pointer duration-500 rounded-full bg-white inset-0 border-x-2 border hover:ring-8 
              ${open ? "w-16 h-16 rotate-[360deg]" : "w-10 h-10"} 
            `}
            onClick={() => handleNavigation("/")}
            alt="Nursing Logo"
          />
          <h1
            className={`
              text-white origin-left font-medium text-xl duration-200 
              ${!open && "md:scale-0"}
            `}
          >
            Nursing
          </h1>
        </div>

        {/* Informasi Profil */}
        <div className="flex flex-col items-center justify-center border-t border-gray-700 pt-6">
          <img
            src={PROFILE_URL}
            alt="Profil Pengguna"
            className={` 
              rounded-full border bg-yellow-200 border-white cursor-pointer 
              ${open ? "w-16 h-16" : "w-10 h-10"}
            `}
          />
          {/* Teks hanya muncul jika sidebar terbuka atau di mobile */}
          <h1
            className={`
              text-white origin-left font-medium text-xl duration-200 
              ${!open && "md:scale-0"}
            `}
          >
            Welcome!
          </h1>
          <p
            className={`
              text-white origin-left font-medium text-md duration-200 
              ${!open && "md:scale-0"}
            `}
          >
            Selamat Beraktivitas
          </p>
        </div>

        {/* Menu Navigasi */}
        <ul className="pt-5 border-t border-gray-700 mt-5">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`
                flex group border border-b-gray-50 rounded-md p-2 cursor-pointer 
                hover:bg-blue-900 text-gray-300 text-sm items-center gap-x-5 duration-500 
                ${Menu.gap ? "mt-4" : "mt-5"} 
              `}
              onClick={() => handleNavigation(Menu.path)}
            >
              <DynamicIcon src={Menu.src} />
              
              {/* Nama Menu (Selalu tampil di mobile, tampil di desktop jika open/tooltip) */}
              <span
                className={`
                  // Selalu tampil di mobile/layar penuh
                  ${mobileOpen ? "block" : "hidden"} 
                  // Tampil di desktop jika terbuka
                  ${open ? "md:block" : "md:hidden"} 
                  // Tooltip/Hover di desktop saat tertutup
                  md:group-hover:animate-pulse md:group-hover:block md:group-hover:absolute md:group-hover:ml-14 md:group-hover:bg-blue-900 md:group-hover:rounded-lg md:group-hover:p-2 md:group-hover:text-yellow-300 md:group-hover:font-semibold md:group-hover:text-center md:group-hover:shadow-lg
                  origin-left w-36 duration-700
                `}
              >
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* 3. Backdrop (Hanya Tampil di Mobile Saat Terbuka) */}
      {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden" 
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}

export default SideBar;