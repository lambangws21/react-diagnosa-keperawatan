/** @format */

import { useState } from "react";
import PropTypes from "prop-types";

function GoogleView({ url }) {
  // State untuk mengontrol apakah modal ditampilkan atau tidak
  const [isModalOpen, setIsModalOpen] = useState(false);
  // Fungsi untuk membuka modal
  const openModal = () => {
    setIsModalOpen(true);
  };
  // Fungsi untuk menutup modal
  const closeModal = () => {
    setIsModalOpen(false);
  };
  GoogleView.propTypes = {
    url: PropTypes.string.isRequired,
  };
  return (
    <div className="ml-4 flex flex-col items-center  mb-2 justify-center">
      <button
        onClick={openModal}
        className={`text-white font-bold text-xl bg-blue-700 px-4 py-2 rounded-md shadow-lg hover:bg-blue-800 duration-200 `}
      >
        Buka Dokumen
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center object-fill justify-center z-50 -mt-10">
          <div className="absolute inset-0 bg-black opacity-80"></div>
          <div className="p-1 rounded-lg z-10  w-auto h-[70vh] md:p-3 md:w-4/6 md:h-4/5">
            <h2 className="text-2xl font-bold mb-1 text-slate-50">
              Persiapan Operasi
            </h2>
            <div className="w-[100%] h-[70vh] md:h-[100vh] ">
              <button
                onClick={closeModal}
                className={`bg-blue-500 text-white px-2 py-2 h-14 w-14 mt-2 rounded-full font-extrabold text-4xl shadow-lg hover:bg-blue-600 absolute top-11 right-40 border-slate-50 border-2  `}
              >
                X
              </button>
              <iframe
                src={`https://docs.google.com/document/d/${getDocId(
                  url
                )}/pub?embedded=true`}
                title="Google Drive Document Viewer"
                className="w-full h-[75vh] md:w-full absolute left-1/4 md:h-[100vh] ml-1 duration-500"
                frameBorder="1"
                loading="lazy"
                scrolling="yes"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
                seamless
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Fungsi untuk mendapatkan ID dokumen dari URL Google Drive
function getDocId(url) {
  const match = url.match(/\/d\/([A-Za-z0-9-_]+)/);
  if (match) {
    return match[1];
  }
  return "";
}

export default GoogleView;
