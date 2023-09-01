import CopyToClipboardButton from "../components/CopyToClipboardButton";
function KebersihanJalanNafasIntervensi() {
  const textToCopy = `
Manajemen Jalan Nafas
Mengidentifikasi dan mengelola kepatenan jalan nafas dilakukan dengan : 
1.	Monitor pola nafas ( frekuensi, kedalaman, dan usha nafas)
2.	Monitor bunyi nafas dan jumlah sputum
3.	Pertahankan jalan nafas dengan paten dengan head-tilt dan chin-lift (jaw-trust jika curiga cidera servikal)
4.	Berikan posisi semifowler atau fowler
5.	Lakukan penghisapan lender kurang dari 15 detik
6.	Ajarkan teknik batuk efektif
7.	Kolaborasi pemberian bronkodilator, ekspektoran, mukolitik, Jika perlu
`;
  return (
    <div>
      <td>
        <p className="sr-only">{textToCopy}</p>
        <span> Manajemen Jalan Nafas </span>
        Mengidentifikasi dan mengelola kepatenan jalan nafas dilakukan dengan
        :
        <ul className="list-decimal list-inside leading-normal">
         <li>Monitor pola nafas ( frekuensi, kedalaman, dan usha nafas)</li>
          <li>Monitor bunyi nafas dan jumlah sputum</li>
          <li>Pertahankan jalan nafas dengan paten dengan head-tilt dan chin-lift
            (jaw-trust jika curiga cidera servikal)</li>
          <li>Berikan posisi semifowler atau fowler</li>
          <li>Lakukan penghisapan lender kurang dari 15 detik</li>
          <li>Ajarkan teknik batuk efektif</li>
          <li>Kolaborasi pemberian bronkodilator, ekspektoran, mukolitik, Jika
            perlu
          </li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy}/>
    </div>
  );
}

export default KebersihanJalanNafasIntervensi;
