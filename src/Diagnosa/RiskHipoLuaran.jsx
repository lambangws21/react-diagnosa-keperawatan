/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RiskHipoLuaran() {
  const textToCopy = `
L.14134 - Termoregulasi yaitu:
- Pasien tak tampak mengigil 
- Suhu tubuh pasien dalam batas normal (36) derajat celcius
- Keluhan dingin pasien teratasi`;
  return (
    <div>
      <td className=" py-2">
        <p className="sr-only">{textToCopy}</p>
        L.14134 - Termoregulasi yaitu:
        <ul className="list-decimal list-inside">
          <li>Pasien tak tampak mengigil</li>
          <li>Suhu tubuh pasien dalam batas normal (36)derajat celcius </li>
          <li>Keluhan dingin pasien teratasi</li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RiskHipoLuaran;
