import CopyToClipboardButton from "../components/CopyToClipboardButton";

function GangguanIntegritasIntervensi() {
  const textToCopy = `Perawatan Luka (I.14564)
    Meningkatkan penyembuan luka serta mencegah terjadinya komplikasi luka :
    1.	Monitor karakteristik luka (mis. Drainase, warna, ukuran dan bau)
    2.	Lepaskan balutan dan plester secara perlahan
    3.	Bersihan lukan menggunakan Nacl atai pembersih non-isotonik, sesuai kebuuhan
    4.	Pasan balutan sesau jenis lukan
    5.	Pertahankan teknik steril dalam melakukan perawatan luka
    6.	Ganti balutan sesuai dengan jumlah eksudat dan drainase
    7.	Ajarkan perawatan luka secara mandiri
    8.	Kolaborasi prosedur debridement (mis. Enzimatik, bioligis, dan autoliti), Jika perlu
    9.	Kolaborqasi pemberian antibiotic, jika perlu
    `;
  return (
    <div>
      <p className="sr-only">{textToCopy}</p>
      <td>
        Perawatan Luka (I.14564) Meningkatkan penyembuan luka serta mencegah
        terjadinya komplikasi luka :
        <ul>
          <li>
            Monitor karakteristik luka (mis. Drainase, warna, ukuran dan bau)
          </li>
          <li>Lepaskan balutan dan plester secara perlahan</li>
          <li>
            Bersihan lukan menggunakan Nacl atai pembersih non-isotonik, sesuai
            kebuuhan
          </li>
          <li>Pasan balutan sesau jenis luka</li>
          <li>Pertahankan teknik steril dalam melakukan perawatan luka</li>
          <li>Ganti balutan sesuai dengan jumlah eksudat dan drainase</li>
          <li>Ajarkan perawatan luka secara mandiri</li>
          <li>
            Kolaborasi prosedur debridement (mis. Enzimatik, bioligis, dan
            autoliti), Jika perlu{" "}
          </li>
          <li>Kolaborqasi pemberian antibiotic, jika perlu</li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy}/>
    </div>
  );
}

export default GangguanIntegritasIntervensi;
