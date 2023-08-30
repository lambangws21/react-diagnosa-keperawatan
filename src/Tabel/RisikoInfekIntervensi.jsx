/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RisikoInfekIntervensi() {
  const textToCopy = `Pencehan Infeksi (I.14539) yaitu:
  - Monitor tanda dan gejala lokal dan sistemik infeksi
  - Berikan perawatan pada kulit jika terdapat edema
  - Cuci tangan selalu sesudah kontak dengan pasien dan lingkungan pasien
  - Jelaskan tanda dan gejala bila terjadi infeksi
  `;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Pencehan Infeksi (I.14539) yaitu:
        <ul className="list-inside list-decimal">
          <li> Monitor tanda dan gejala lokal dan sistemik infeksi</li>
          <li> Berikan perawatan pada kulit jika terdapat edema</li>
          <li>
            {" "}
            Cuci tangan selalu sesudah kontak dengan pasien dan lingkungan
            pasien{" "}
          </li>
          <li> Jelaskan tanda dan gejala bila terjadi infeksi</li>
          <li>
            {" "}
            Kolaborasi tindakan imunisasi dan pemberian antibiotic,{" "}
            <span className="font-bold italic">Jika perlu</span>{" "}
          </li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisikoInfekIntervensi;
