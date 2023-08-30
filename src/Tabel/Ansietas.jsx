/** @format */
import CopyToClipboardButton from "../components/CopyToClipboardButton";
function Ansietas() {
  const textToCopy = `Ansietas (D.0080) b/d Kekhawatiiran mengalami kegagalan`;
  return (
    <div>
      <td className="p-2 leading-normal">{textToCopy}</td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default Ansietas;
