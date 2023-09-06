/** @format */
import CopyToClipboardButton from "../components/CopyToClipboardButton";
export default function AnsietasLuaran() {
  const textToCopy = `Pasien menunjukkan penurunan tingkat (L.09093-Tingkat Ansietas) yaitu:
  -Verbalisasi kebingungan pasien menurun
  -Perilaku tegas pasien menurun`;
  return (
    <div>
      <td className=" py-2">
        <p className="sr-only"> {textToCopy} </p>
        Pasien menunjukkan penurunan tingkat (L.09093-Tingkat Ansietas) yaitu:
        <ul className="leading-normal list-decimal list-inside">
          <li>Verbalisasi kebingungan pasien menurun</li>
          <li>Perilaku tegas pasien menurun</li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}
