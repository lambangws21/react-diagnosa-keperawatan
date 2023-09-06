/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";
function RisikoInfeksi() {
  const textToCopy = `
  Risiko infeksi b/d Efek prosedur infasif, penyakit kronis (Diabetes),  ketidak adekuatan pertahanan tubuh (merokok, penurunan Hemoglobin)`;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Risiko infeksi b/d Efek prosedur infasif, penyakit kronis (Diabetes),
        ketidak adekuatan pertahanan tubuh (merokok, penurunan Hemoglobin)
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisikoInfeksi;
