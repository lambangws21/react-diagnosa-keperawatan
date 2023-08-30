/** @format */

import CopyToClipboardButton from "../components/CopyToClipboardButton";

function RisPerdaIntervensi() {
  const textToCopy = `
Pencegahan Perdarahan lakukan dengan:
- Monitor tanda dan gejala perdarahan
- Monitor tanda-tanda vital pasien
- Kolaborasi pemberian obat pengontrol perdarahan, jika perlu
- Kolaborasi pemberian produk darah, jika perlu`;
  return (
    <div>
      <td className="py-2">
        <p className="sr-only">{textToCopy}</p>
        Pencegahan Perdarahan Lakukan dengan:
        <br />
        <ul className="list-inside list-decimal">
          <li>Monitor tanda dan gejala perdarahan</li>
          <li>Monitor tanda-tanda vital pasien</li>
          <li>
            Kolaborasi pemberian obat pengontrol perdarahan,{" "}
            <span className="font-bold italic">jika perlu </span>
          </li>
          <li>
            Kolaborasi pemberian produk darah,{" "}
            <span className="font-bold italic">jika perlu </span>
          </li>
        </ul>
      </td>
      <CopyToClipboardButton text={textToCopy} />
    </div>
  );
}

export default RisPerdaIntervensi;
