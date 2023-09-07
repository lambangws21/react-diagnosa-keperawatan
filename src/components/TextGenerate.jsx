/** @format */

import { useState } from "react";
import Modal from "react-modal"; // Import modal

function TextGenerate() {
  const [formData, setFormData] = useState({
    operasi: "",
    operator: "",
    keadaan: "",
    kesadaran: "",
    riwayat: "",
    pengobatan: "",
    penunjang: "",
    persediaan: "",
    postoperasi: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [completedSentence, setCompletedSentence] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const completedSentence = `Pasien dengan tindakan operasi ${formData.operasi} dengan operator ${formData.operator} Keadaan umum pasien ${formData.keadaan} kesadaran pasien ${formData.kesadaran}, pasien ada riwayat  ${formData.riwayat} pengobatan rutin ${formData.pengobatan}, pemeriksaan penunjang preoperasi ${formData.penunjang} persediaan darah ${formData.persediaan}, perawatan selanjutnya post operasi ${formData.postoperasi}.`;
    setModalIsOpen(true);
    setCompletedSentence(completedSentence);
  };

  const copyToClipboard = () => {
    const textToCopy = document.getElementById("completedSentence");
    textToCopy.select();
    document.execCommand("copy");
  };
  return (
    <div className=" min-h-screen flex flex-row-reverse items-center justify-center ml-10">
      <div className="bg-blue-200 p-5 rounded-lg shadow-md w-96 h-90">
        <h2 className="text-2xl font-semibold mb-4 text-blue-950 text-center underline">
          Diagnosis Generete
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-2 flex flex-wrap justify-center items-center"
        >
          <div className="mb-2">
            <label htmlFor="operasi" className="block text-gray-900 ">
              Tindakan Operasi
            </label>
            <input
              type="text"
              id="operasi"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.operasi}
              onChange={(e) =>
                setFormData({ ...formData, operasi: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="operator" className="block text-gray-900 ">
              Operator Operasi
            </label>
            <input
              type="text"
              id="operator"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.operator}
              onChange={(e) =>
                setFormData({ ...formData, operator: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="keadaan" className="block text-gray-900 ">
              Keadaan Umum Pasien
            </label>
            <input
              type="text"
              id="keadaan"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.keadaan}
              onChange={(e) =>
                setFormData({ ...formData, keadaan: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="kesadaran" className="block text-gray-900 ">
              Kesadaran Pasien
            </label>
            <input
              type="text"
              id="kesadaran"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.kesadaran}
              onChange={(e) =>
                setFormData({ ...formData, kesadaran: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="riwayat" className="block text-gray-900 ">
              Riwayat penyakit atau Operasi
            </label>
            <input
              type="text"
              id="riwayat"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.riwayat}
              onChange={(e) =>
                setFormData({ ...formData, riwayat: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pengobatan" className="block text-gray-900 ">
              Pengobatan Rutin
            </label>
            <input
              type="text"
              id="pengobatan"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.pengobatan}
              onChange={(e) =>
                setFormData({ ...formData, pengobatan: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="penunjang" className="block text-gray-900 ">
              Pemeriksaan Penunjang
            </label>
            <input
              type="text"
              id="penunjang"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.penunjang}
              onChange={(e) =>
                setFormData({ ...formData, penunjang: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="persediaan" className="block text-gray-900 ">
              Persediaan darah
            </label>
            <input
              type="text"
              id="persediaan"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.persediaan}
              onChange={(e) =>
                setFormData({ ...formData, persediaan: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="postoperasi" className="block text-gray-900 ">
              Perawatan Post Operasi
            </label>
            <input
              type="text"
              id="postoperasi"
              className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
              value={formData.postoperasi}
              onChange={(e) =>
                setFormData({ ...formData, postoperasi: e.target.value })
              }
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md p-2 w-full hover:bg-blue-600 mt-5"
          >
            Submit
          </button>
        </form>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Lengkapi Kalimat Modal"
        className="Modal Modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 rounded-lg shadow-md w-96 ml-10"
        overlayClassName="Overlay flex justify-center items-center ml-10 border p-5 rounded-lg shadow-md w-30 bg-slate-600/20"
      >
        <h2 className="text-4xl font-semibold mb-4 flex justify-center">
          Data Genereted!
        </h2>
        <textarea
          id="completedSentence"
          readOnly
          className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:ring-blue-200"
          value={completedSentence}
        />
        <button
          className="bg-blue-500 text-white rounded-md p-2 w-full mt-4 hover:bg-blue-600"
          onClick={copyToClipboard}
        >
          Salin Teks
        </button>
        <button
          className="bg-gray-300 text-gray-700 rounded-md p-2 w-full mt-2 hover:bg-gray-400"
          onClick={() => setModalIsOpen(false)}
        >
          Tutup
        </button>
      </Modal>
    </div>
  );
}

export default TextGenerate;
