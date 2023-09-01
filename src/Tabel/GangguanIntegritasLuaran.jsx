import CopyToClipboardButton from "../components/CopyToClipboardButton";

function GangguanIntegritasLuaran() {
  const textToCopy = `Integritas Jaringan (L.14125)
  Keutuhan Jaringan pasien meningkat atau menurun dengan kriteria :
  1.Kerusakan jaringan pasien meningkat dengan ekspektasi menjadi 1
  2.Kerusakan laousan kulit pasien meningkat dengan ekspektasi nilai menjadi 1
  3.Perfusi jariangan pasien meningkat dengan ekspektasi nilai menjadi 5
  `;
  return (
    <div>
      <td>
        Integritas Jaringan (L.14125) Keutuhan Jaringan pasien meningkat atau
        menurun dengan kriteria :
        <ul>
          <li>Kerusakan jaringan pasien meningkat dengan ekspektasi menjadi 1</li>
          <li>Kerusakan laousan kulit pasien meningkat dengan ekspektasi nilai</li>
          <li>menjadi 1 Perfusi jariangan pasien meningkat dengan ekspektasi nilai
          menjadi 5</li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy}/>
    </div>
  );
}

export default GangguanIntegritasLuaran;
