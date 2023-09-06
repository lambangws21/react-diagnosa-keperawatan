import CopyToClipboardButton from "../components/CopyToClipboardButton";
function KebersihanJalanNafasLuaran() {
  const textToCopy = `Kemampuan membersihan secret atau mempertahankan jalan nafas tetap paten dengan kriteria hasil :
    1.	Batuk efektif pasien meningkat dengan ekspektasi nilai menjadi 5
    2.	Produksi sputum pasien menurun dengan ekspektasi nilai menjadi 5
    3.	Frekuensi nafas dan pola nafas pasien membaik dengan ekspektasi nilai menjadi 5
    `;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Kemampuan membersihan secret atau mempertahankan jalan nafas tetap paten
        dengan kriteria hasil :
        <ul className="leading-normal list-decimal list-inside">
          <li>
            Batuk efektif pasien meningkat dengan ekspektasi nilai menjadi 5
          </li>
          <li>
            Produksi sputum pasien menurun dengan ekspektasi nilai menjadi 5
          </li>
          <li>
            Frekuensi nafas dan pola nafas pasien membaik dengan ekspektasi
            nilai menjadi 5
          </li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default KebersihanJalanNafasLuaran;
