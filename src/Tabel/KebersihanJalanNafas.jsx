import CopyToClipboardButton from "../components/CopyToClipboardButton";
function KebersihanJalanNafas() {
  const textToCopy = `Kebersihan Jalan Nafas (D.0001) b/d efek agen farmakologis (mis. Anastesi)`;
  return (
    <div>
      <td className="py-2">
        <p className="leading-normal">
          Kebersihan Jalan Nafas (D.0001) b/d efek agen farmakologis (mis.
          Anastesi)
        </p>
      </td>
      <CopyToClipboardButton text={textToCopy}/>    
    </div>
  );
}

export default KebersihanJalanNafas;
