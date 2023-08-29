/** @format */
import "./App.css";
import Ansietas from "./Tabel/Ansietas";
import AnsietasIntervensi from "./Tabel/AnsietasIntervensi";
import AnsietasLuaran from "./Tabel/AnsietasLuaran";
import NyeriAkut from "./Tabel/NyeriAkut";
import NyeriAkutIntervensi from "./Tabel/NyeriAkutIntervensi";
import NyeriAkutLuaran from "./Tabel/NyeriAkutLuaran";
import RisHipoIntervensi from "./Tabel/RisHipoIntervensi";
import RisPerdaIntervensi from "./Tabel/RisPerdaIntervensi";
import RisPerdaLuaran from "./Tabel/RisPerdaLuaran";
import RisikoHipotermi from "./Tabel/RisikoHipotermi";
import RisikoPerdarahan from "./Tabel/RisikoPerdarahan";
import RiskHipoLuaran from "./Tabel/RiskHipoLuaran";
import RisikoJatuh from "./Tabel/RisikoJatuh";
import Button from "./components/Button";
import RisJatuhLuaran from "./Tabel/RisJatuhLuaran";
import RisJatuhIntervensi from "./Tabel/RisJatuhIntervensi";

function App() {
  return (
    <>
      <table className="w-full border-collapse ">
        <thead>
          <tr>
            <th
              className="
          border
          bg-sky-100 
          p-1 shadow-md 
          leading-10">
              Diagnosa Keperawatan
            </th>
            <th
              className="
          border
          bg-sky-100 
          p-1 shadow-md 
          leading-10">
              Luaran Keperawatan
            </th>
            <th
              className="
          border
          bg-sky-100 
          p-1 shadow-md 
          leading-10">
              Intervensi Keperawatan
            </th>
          </tr>
        </thead>
        <tbody className="text-left relative align-top leading-loose">
          {/* Ansietas*/}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72 ">
              <Ansietas />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <AnsietasLuaran />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <AnsietasIntervensi />
              <Button />
            </td>
          </tr>
          {/* Risiko Perdarahan */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72 ">
              <RisikoPerdarahan />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisPerdaLuaran />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisPerdaIntervensi />
              <Button />
            </td>
          </tr>
          {/* Nyeri Akut */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <NyeriAkut />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <NyeriAkutLuaran />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <NyeriAkutIntervensi />
              <Button />
            </td>
          </tr>
          {/* Risiko Hiptermi */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <RisikoHipotermi />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RiskHipoLuaran />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisHipoIntervensi />
              <Button />
            </td>
          </tr>
          {/* Risiko Hiptermi */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <RisikoJatuh />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisJatuhLuaran />
              <Button />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisJatuhIntervensi />
              <Button />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
