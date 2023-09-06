/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function NyeriAkut() {
  const textToCopy = `Nyeri Akut (D.0077) b/d Agen pencerobohan fisik (Prosedur Operasi)`;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Nyeri Akut (D.0077) b/d Agen pencedera fisik (Prosedur Operasi)
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default NyeriAkut;
