/** @format */

import { useState, useCallback } from "react";
import Modal from "react-modal";
import { CheckCircleIcon, XMarkIcon, ClipboardDocumentIcon } from "@heroicons/react/24/outline";
import PropTypes from 'prop-types';

// Pastikan Modal.setAppElement dipanggil sekali untuk aksesibilitas (misalnya di index.js atau App.js)
// Modal.setAppElement('#root'); 

// --- Komponen Pembantu (InputGroup) ---
/**
 * Komponen untuk merapikan setiap field input dalam form.
 */
const InputGroup = ({ id, label, value, onChange, required = true }) => (
  <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2">
    <label
      htmlFor={id}
      className="block text-gray-200 mb-2 font-semibold text-sm"
    >
      {label}
    </label>
    <input
      type="text"
      id={id}
      className="w-full border border-gray-600 rounded-lg p-3 text-gray-900 bg-gray-100 
                 focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-150"
      value={value}
      onChange={onChange}
      required={required}
    />
  </div>
);


InputGroup.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

// --- Komponen Utama ---
function TextGenerate() {
  const initialState = {
    operasi: "",
    operator: "",
    keadaan: "",
    kesadaran: "",
    riwayat: "",
    pengobatan: "",
    penunjang: "",
    persediaan: "",
    postoperasi: "",
  };
  const [formData, setFormData] = useState(initialState);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [completedSentence, setCompletedSentence] = useState("");
  const [copyStatus, setCopyStatus] = useState(null); // 'success' | 'error' | null

  // Handler universal untuk perubahan input
  const handleInputChange = useCallback((e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCopyStatus(null); // Reset status copy
    
    const sentence = `Pasien dengan tindakan operasi ${formData.operasi} dengan operator ${formData.operator}. Keadaan umum pasien ${formData.keadaan}, kesadaran pasien ${formData.kesadaran}. Pasien ada riwayat ${formData.riwayat}, pengobatan rutin ${formData.pengobatan}. Pemeriksaan penunjang preoperasi ${formData.penunjang}, persediaan darah ${formData.persediaan}, perawatan selanjutnya post operasi ${formData.postoperasi}.`;
    
    setCompletedSentence(sentence);
    setModalIsOpen(true);
  };

  // Logika modern untuk menyalin teks
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(completedSentence);
      setCopyStatus('success');
      setTimeout(() => setCopyStatus(null), 3000); // Hapus notifikasi setelah 3 detik
    } catch (err) {
      console.error('Gagal menyalin teks:', err);
      setCopyStatus('error');
      setTimeout(() => setCopyStatus(null), 3000);
    }
  };

  // Tutup modal dan reset form
  const closeModalAndReset = () => {
    setModalIsOpen(false);
    setCopyStatus(null);
    setFormData(initialState);
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="bg-blue-950 border-4 border-yellow-300 p-8 rounded-xl shadow-2xl w-full max-w-5xl">
        <h2 className="text-3xl font-bold mb-6 text-yellow-300 text-center">
          Data Diagnosa Keperawatan 📝
        </h2>
        
        <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
          {/* Menggunakan InputGroup untuk setiap field */}
          <InputGroup 
            id="operasi" 
            label="Tindakan Operasi" 
            value={formData.operasi} 
            onChange={handleInputChange} 
          />
          <InputGroup 
            id="operator" 
            label="Operator Operasi" 
            value={formData.operator} 
            onChange={handleInputChange} 
          />
          <InputGroup 
            id="keadaan" 
            label="Keadaan Umum Pasien" 
            value={formData.keadaan} 
            onChange={handleInputChange} 
          />
          <InputGroup 
            id="kesadaran" 
            label="Kesadaran Pasien" 
            value={formData.kesadaran} 
            onChange={handleInputChange} 
          />
          <InputGroup 
            id="riwayat" 
            label="Riwayat Penyakit atau Operasi" 
            value={formData.riwayat} 
            onChange={handleInputChange} 
          />
          <InputGroup 
            id="pengobatan" 
            label="Pengobatan Rutin" 
            value={formData.pengobatan} 
            onChange={handleInputChange} 
          />
          <InputGroup 
            id="penunjang" 
            label="Pemeriksaan Penunjang" 
            value={formData.penunjang} 
            onChange={handleInputChange} 
          />
          <InputGroup 
            id="persediaan" 
            label="Persediaan Darah" 
            value={formData.persediaan} 
            onChange={handleInputChange} 
          />
          <InputGroup 
            id="postoperasi" 
            label="Perawatan Post Operasi" 
            value={formData.postoperasi} 
            onChange={handleInputChange} 
          />

          {/* Tombol Submit */}
          <div className="w-full flex justify-center p-2 mt-4">
            <button
              type="submit"
              className="bg-yellow-300 text-blue-950 font-bold rounded-full py-3 px-12 transition duration-300 
                         hover:bg-yellow-400 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-yellow-500/50"
            >
              Generate Teks Diagnosa
            </button>
          </div>
        </form>
      </div>

      {/* --- Modal Tampilan Hasil --- */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModalAndReset}
        contentLabel="Teks Diagnosa Keperawatan"
        className="
          Modal absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          bg-white p-6 rounded-xl shadow-2xl w-11/12 max-w-lg transition-opacity duration-300
        "
        overlayClassName="
          Overlay fixed inset-0 bg-black/70 flex justify-center items-center z-50
        "
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-blue-950">Data Generated! ✨</h2>
          <button onClick={closeModalAndReset} className="text-gray-500 hover:text-red-600">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <p className="text-sm text-gray-600 mb-3">Salin teks di bawah ini untuk digunakan dalam laporan.</p>
        
        <textarea
          readOnly
          className="w-full h-48 border border-gray-300 rounded-lg p-3 text-gray-800 bg-gray-50 
                     resize-none focus:ring-2 focus:ring-blue-500 outline-none"
          value={completedSentence}
        />
        
        <div className="flex flex-col sm:flex-row justify-between mt-4 space-y-3 sm:space-y-0 sm:space-x-3">
          
          <button
            className="flex items-center justify-center bg-blue-950 text-white font-semibold rounded-lg py-3 w-full transition duration-300 
                       hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-950/50"
            onClick={copyToClipboard}
          >
            <ClipboardDocumentIcon className="h-5 w-5 mr-2" />
            {copyStatus === 'success' ? 'Berhasil Disalin!' : 'Salin Teks'}
          </button>
          
          <button
            className="bg-gray-300 text-gray-800 font-semibold rounded-lg py-3 w-full transition duration-300 
                       hover:bg-gray-400 focus:outline-none focus:ring-4 focus:ring-gray-400/50"
            onClick={closeModalAndReset}
          >
            Tutup & Reset Form
          </button>
        </div>

        {/* Status Notifikasi Copy */}
        {copyStatus && (
          <div className={`mt-3 p-3 rounded-lg flex items-center ${copyStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {copyStatus === 'success' ? <CheckCircleIcon className="h-5 w-5 mr-2" /> : <XMarkIcon className="h-5 w-5 mr-2" />}
            {copyStatus === 'success' ? 'Teks berhasil disalin ke clipboard!' : 'Gagal menyalin. Silakan coba salin manual.'}
          </div>
        )}
      </Modal>
    </div>
  );
}

export default TextGenerate;