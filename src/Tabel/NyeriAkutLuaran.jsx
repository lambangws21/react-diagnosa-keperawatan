/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function NyeriAkutLuaran() {
  const textToCopy = `Pasien menunjukkan penurunan (L.08066 - - Tingkat Nyeri) yaitu:
  - Keluhan nyeri pasien menurun atau tak ada
  - Wajah meringis pasien menurun atau tidak ada
  - Tanda-tanda vital pasien dalam batas normal
  - Nilai VAS Pasien menurun`;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Pasien menunjukkan penurunan (L.08066 - Tingkat Nyeri)
        <br />
        yaitu:
        <ul className="list-inside list-decimal">
          <li>Keluhan nyeri pasien menurun atau tak ada </li>
          <li>Wajah meringis pasien menurun atau tidak ada</li>
          <li>Tanda-tanda vital pasien dalam batas normal</li>
          <li>Nilai VAS Pasien menurun</li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default NyeriAkutLuaran;
