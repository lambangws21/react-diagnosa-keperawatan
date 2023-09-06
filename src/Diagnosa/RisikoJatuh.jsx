/** @format */
import CopyToClipboardButton from "../components/CopyToClipboardButton";
function RisikoJatuh() {
  const textToCopy = `Risiko Jatuh b/d Efek agen farmakologis (Mis.Sedasi, alkohol, anestesi umum)`;
  return (
    <div>
      <td className=" p-2">
        <p className="sr-only"> {textToCopy} </p>
        Risiko Jatuh b/d Efek agen farmakologis (Mis.Sedasi, alkohol, anestesi
        umum)
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisikoJatuh;
