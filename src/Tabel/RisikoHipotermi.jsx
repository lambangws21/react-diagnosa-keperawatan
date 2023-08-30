/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RisikoHipotermi() {
  const textToCopy = `Risiko Hipotermia Perioperatif (D.0141) b/d Kombinasi anastesi regional dan umum`;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Risiko Hipotermia Perioperatif (D.0141) b/d Kombinasi anastesi regional
        dan umum
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisikoHipotermi;
