/** @format */
import CopyToClipboardButton from "../components/CopyToClipboardButton";
function RisikoPerdarahan() {
  const textToCopy = `Risiko Perdarahan (D.0012) b/d Tindakan Pembedahan (Operasi)`;
  return (
    <div>
      <td className="p-2">
        <p className="sr-only">{textToCopy}</p>
        Risiko Perdarahan (D.0012) b/d Tindakan Pembedahan (Operasi)
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisikoPerdarahan;
