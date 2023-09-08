/** @format */

import { useState } from "react";

function GoogleView() {
  const googleDriveUrl =
    "https://docs.google.com/document/d/1QD4TiF4vdI9tuFttg6WiADxtJuQGKyz0qnyLYID8pYM/edit?usp=sharing";

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

  return (
    <div className="bg-blue-500 min-h-screen flex items-center justify-center">
      <button
        onClick={openModal}
        className="text-white font-bold text-xl bg-blue-700 px-4 py-2 rounded-md shadow-lg hover:bg-blue-800"
      >
        Buka Dokumen
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="bg-slate-400/90 p-4 rounded-lg z-10 w-full md:w-4/5 h-full md:h-4/5">
            <h2 className="text-2xl font-bold mb-4">Modal Title</h2>
            <div style={{ width: "100%", height: "70vh" }}>
              <iframe
                src={`https://docs.google.com/document/d/${getDocId(
                  googleDriveUrl
                )}/pub?embedded=true`}
                title="Google Drive Document Viewer"
                className="w-full h-full"
                frameBorder="0"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                seamless
              ></iframe>
            </div>
            <button
              onClick={closeModal}
              className="bg-blue-500 text-white px-4 py-2 mt-5 rounded-md shadow-lg hover:bg-blue-600"
            >
              Tutup
            </button>
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
