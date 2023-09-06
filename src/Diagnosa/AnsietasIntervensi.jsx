/** @format */
import CopyToClipboardButton from "../components/CopyToClipboardButton";
function AnsietasIntervensi() {
  const textToCopy = `Reduksi Ansietas lakukan dengan:
  - Monitor tanda-tanda ansietas (verbal dan non-verbal)
  - Ciptakan suasana terapeutik untuk menumbuhkan rasa kepercayaan
  - Jelaskan prosedur, termasuk sensasi yang mungkin dialami
  - Pemberian obat ansietas, jika perlu`;
  return (
    <div>
      <p className="sr-only"> {textToCopy} </p>
      <td className="p-2 leading-normal text-left">
        Reduksi Ansietas lakukan dengan:
        <ul className="leading-normal list-decimal list-inside text-left">
          <li>Monitor tanda-tanda ansietas (verbal dan non-verbal)</li>
          <li>
            Ciptakan suasana terapeutik untuk menumbuhkan rasa kepercayaan
          </li>
          <li>Jelaskan prosedur, termasuk sensasi yang mungkin dialami</li>
          <li>
            Pemberian obat ansietas,
            <span className="font-bold italic"> jika perlu </span>
          </li>
          <CopyToClipboardButton text={textToCopy} />
        </ul>
      </td>
    </div>
  );
}

export default AnsietasIntervensi;
