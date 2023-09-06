/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RisJatuhLuaran() {
  const textToCopy = ` Tingkat Jatuh (L.14138) yaitu:
  - Tidak ada kerjadian jatuh di tempat tidur
  - Tidak ada kejadian jatuh saat duduk
  - Tidak ada kejadian jatuh saat duduk
  - Tidak ada kejadian jatuh saat jalan`;
  return (
    <div>
      <td className=" py-2">
        <p className="sr-only">{textToCopy}</p>
        Tingkat Jatuh L.14138, yaitu:
        <ul className="list-decimal list-inside">
          <li>Tidak ada kerjadian jatuh di tempat tidur</li>
          <li>Tidak ada kejadian jatuh saat duduk</li>
          <li>Tidak ada kejadian jatuh saat duduk</li>
          <li>Tidak ada kejadian jatuh saat jalan</li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisJatuhLuaran;
