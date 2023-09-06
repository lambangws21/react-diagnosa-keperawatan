/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RisJatuhIntervensi() {
  const textToCopy = `Pencegahan Jatuh (I.14540). Lakukan dengan:
  - Identifikasi faktor risiko jatuh(mis usia lebih dari 65 tahun, penurunan tingkat kesadaran,defisit kognitif, hipotensi ortostatik, gangguan keseimbangan, gangguan pengelihatan, neuropati)
  - Pastikan roda tempat tidur pasien selalu dalam kondisi terkunci
  - Pastikan pengaman samping tempat tidur terpasang atau terkunci
  - Anjurkan memanggil perawat jika memerlukan bantuan untuk berpindah`;
  return (
    <div>
      <td className=" p-2 ">
        <p className="sr-only">{textToCopy}</p>
        Pencegahan Jatuh (I.14540). Lakukan dengan:
        <ul className="list-decimal list-inside">
          <li>
            Identifikasi faktor risiko jatuh(mis usia lebih dari 65 tahun,
            penurunan tingkat kesadaran,defisit kognitif, hipotensi ortostatik,
            gangguan keseimbangan, gangguan pengelihatan, neuropati)
          </li>
          <li>
            Pastikan roda tempat tidur pasien selalu dalam kondisi terkunci
          </li>
          <li>
            Pastikan pengaman samping tempat tidur terpasang atau terkunci
          </li>
          <li>
            Anjurkan memanggil perawat jika memerlukan bantuan untuk berpindah
          </li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisJatuhIntervensi;
