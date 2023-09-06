/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RisHipoIntervensi() {
  const textToCopy = `Terapi paparan panas Lakukan dengan:
  - Monitor dan gunakan alat suhu terapi
  - Selimuti pasien dengan alat terapi suhu menggunakan kain
  - Evaluasi Keluhan pasien dan kenyamanan pasien (apakah alat pemanas sudah hangat atau terlalu panas)`;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Terapi paparan panas Lakukan dengan:
        <ul className="list-decimal list-inside">
          <li>Monitor dan gunakan alat suhu terapi</li>
          <li>Selimuti pasien dengan alat terapi suhu menggunakan kain</li>
          <li>
            Evaluasi Keluhan pasien dan kenyamanan pasien (apakah alat pemanas
            sudah hangat atau terlalu panas)
          </li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisHipoIntervensi;
