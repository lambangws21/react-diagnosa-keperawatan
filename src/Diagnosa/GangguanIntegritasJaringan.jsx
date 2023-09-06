import CopyToClipboardButton from "../components/CopyToClipboardButton";

function GangguanIntegritasJaringan() {
    const textToCopy = ` Gangguan integritas jaringan (D.0129) b/d Imobilisasi, Diabetes dan
    Imunodefisiensi`
  return (
    <div>
      <td className="py-2">
        <p>
          Gangguan integritas jaringan (D.0129) b/d Imobilisasi, Diabetes dan
          Imunodefisiensi
        </p>
      </td>
      <CopyToClipboardButton text={textToCopy}/>
    </div>
  );
}

export default GangguanIntegritasJaringan;
