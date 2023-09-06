/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function NyeriAkutIntervensi() {
  const textToCopy = `Manajemen Nyeri. dilakukan dengan:
- Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas, intensitas nyeri
- Identifikasi skala nyeri
- Gunakan teknik nonfarmakologis untuk mengurangi nyeri
- Kontrol lingkungan yang memperberat nyeri
- Jelaskan penyebab, periode, dan pemicu nyeri
- Kolaborasi pemberian analgetik, jika perlu
  `;
  return (
    <div>
      <td className=" py-2 ">
        <p className="sr-only">{textToCopy}</p>
        Manajemen Nyeri. dilakukan dengan:
        <br />
        <ul className="list-decimal list-inside">
          <li>
            Identifikasi lokasi, karakteristik, durasi, frekuensi, kualitas,
            intensitas nyeri
          </li>
          <li>Identifikasi skala nyeri</li>
          <li>Gunakan teknik nonfarmakologis untuk mengurangi nyeri</li>
          <li>Kontrol lingkungan yang memperberat nyeri</li>
          <li>Jelaskan penyebab, periode, dan pemicu nyeri</li>
          <li>Kolaborasi pemberian analgetik, jika perlu</li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default NyeriAkutIntervensi;
