/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RisPerdaLuaran() {
  const textToCopy = `
Pasien menunjukkan (L.02017 - Tingkat Pendarahan) yaitu:
- Tekanan darah, frekuensi nadi pasien meningkat
- Turgor Kulit pasien baik
- Hasil pemeriksaan penunjang dalam batas normal (HB, Hematoktrit dkk)`;
  return (
    <div>
      <td className="py-2 ">
        <p className="sr-only">{textToCopy}</p>
        Pasien menunjukkan (L.02017 - Tingkat Pendarahan) yaitu:
        <ul className="list-decimal list-inside">
          <li>Tekanan darah, frekuensi nadi pasien meningkat</li>
          <li>Turgor Kulit pasien baik</li>
          <li>
            Hasil pemeriksaan penunjang dalam batas normal (HB, Hematoktrit dkk)
          </li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisPerdaLuaran;
