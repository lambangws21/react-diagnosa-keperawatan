/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RisikoInfeksiLuaran() {
  const textToCopy = ` L.14134 - Termoregulasi yaitu:
  - Pasien tak tampak mengigil
  - Suhu tubuh pasien dalam batas normal (36)
  - Keluhan dingin pasien teratasi`;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Pasien menunjukkan penurunan (Tingkat Infeksi)
        <br />
        yaitu:
        <ul className="list-inside list-decimal">
          <li>Demam pasien tak ada, Jika ada demam turun</li>
          <li>Kemerahan pada daerah infeksi pasien menurun</li>
          <li>Keluhan nyeri pasien menurun</li>
          <li>Bengkak pasien menurun dan kesehatan kulit pasien baik</li>
          <li>Kadar sel darah putih pasien membaik</li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisikoInfeksiLuaran;
