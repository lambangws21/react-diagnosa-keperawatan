/** @format */
import Ansietas from "../Diagnosa/Ansietas";
import AnsietasIntervensi from "../Diagnosa/AnsietasIntervensi";
import AnsietasLuaran from "../Diagnosa/AnsietasLuaran";
import NyeriAkut from "../Diagnosa/NyeriAkut";
import NyeriAkutIntervensi from "../Diagnosa/NyeriAkutIntervensi";
import NyeriAkutLuaran from "../Diagnosa/NyeriAkutLuaran";
import RisHipoIntervensi from "../Diagnosa/RisHipoIntervensi";
import RisPerdaIntervensi from "../Diagnosa/RisPerdaIntervensi";
import RisPerdaLuaran from "../Diagnosa/RisPerdaLuaran";
import RisikoHipotermi from "../Diagnosa/RisikoHipotermi";
import RisikoPerdarahan from "../Diagnosa/RisikoPerdarahan";
import RiskHipoLuaran from "../Diagnosa/RiskHipoLuaran";
import RisikoJatuh from "../Diagnosa/RisikoJatuh";
import RisJatuhLuaran from "../Diagnosa/RisJatuhLuaran";
import RisJatuhIntervensi from "../Diagnosa/RisJatuhIntervensi";
import RisikoInfeksi from "../Diagnosa/RisikoInfeksi";
import RisikoInfeksiLuaran from "../Diagnosa/RisikoInfeksiLuraran";
import RisikoInfekIntervensi from "../Diagnosa/RisikoInfekIntervensi";
import GangguanIntegritasJaringan from "../Diagnosa/GangguanIntegritasJaringan";
import GangguanIntegritasLuaran from "../Diagnosa/GangguanIntegritasLuaran";
import GangguanIntegritasIntervensi from "../Diagnosa/GangguanIntegritasIntervensi";
import KebersihanJalanNafas from "../Diagnosa/KebersihanJalanNafas";
import KebersihanJalanNafasLuaran from "../Diagnosa/KebersihanJalanNafasLuaran";
import KebersihanJalanNafasIntervensi from "../Diagnosa/GangguanIntegritasIntervensi";

function Layouts() {
  return (
    <div className="w-screen mx-auto p-10 bg-slate-50 flex flex-col">
      <table className="w-full border-collapse  ">
        <thead>
          <tr>
            <th
              className="
      border
      bg-blue-700 text-white rounded-md 
      p-2 shadow-md 
      leading-10"
            >
              Diagnosa Keperawatan
            </th>
            <th
              className="
      border
      bg-blue-700 text-white rounded-md 
      p-2 shadow-md 
      leading-10"
            >
              Luaran Keperawatan
            </th>
            <th
              className="
      border
      bg-blue-700 text-white rounded-md 
      p-2 shadow-md 
      leading-10"
            >
              Intervensi Keperawatan
            </th>
          </tr>
        </thead>
        <tbody className="text-left relative align-top leading-loose">
          {/* Ansietas*/}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72 ">
              <Ansietas />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <AnsietasLuaran />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <AnsietasIntervensi />
            </td>
          </tr>
          {/* Risiko Perdarahan */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72 ">
              <RisikoPerdarahan />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisPerdaLuaran />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisPerdaIntervensi />
            </td>
          </tr>
          {/* Nyeri Akut */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <NyeriAkut />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <NyeriAkutLuaran />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <NyeriAkutIntervensi />
            </td>
          </tr>
          {/* Risiko Hiptermi */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <RisikoHipotermi />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RiskHipoLuaran />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisHipoIntervensi />
            </td>
          </tr>
          {/* Risiko Hiptermi */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <RisikoJatuh />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisJatuhLuaran />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisJatuhIntervensi />
            </td>
          </tr>
          {/* Risiko Infeksi */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <RisikoInfeksi />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisikoInfeksiLuaran />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <RisikoInfekIntervensi />
            </td>
          </tr>
          {/* Gangguan Integritas Kulit */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <GangguanIntegritasJaringan />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <GangguanIntegritasLuaran />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <GangguanIntegritasIntervensi />
            </td>
          </tr>
          {/* Risiko Jalan Nafas */}
          <tr>
            <td className="flex-col items-center border-b-2 border-gray-300 p-2 h-72">
              <KebersihanJalanNafas />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <KebersihanJalanNafasLuaran />
            </td>
            <td className="flex-col items-center border-b-2 border-gray-300 h-72">
              <KebersihanJalanNafasIntervensi />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Layouts;
