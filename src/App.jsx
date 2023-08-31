/** @format */
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
import RisJatuhLuaran from "./Tabel/RisJatuhLuaran";
import RisJatuhIntervensi from "./Tabel/RisJatuhIntervensi";
import RisikoInfeksi from "./Tabel/RisikoInfeksi";
import RisikoInfeksiLuaran from "./Tabel/RisikoInfeksiLuraran";
import RisikoInfekIntervensi from "./Tabel/RisikoInfekIntervensi";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="container mx-auto p-10">
        <table className="w-full border-collapse  ">
          <thead>
            <tr>
              <th
                className="
          border
          bg-sky-100 
          p-1 shadow-md 
          leading-10"
              >
                Diagnosa Keperawatan
              </th>
              <th
                className="
          border
          bg-sky-100 
          p-1 shadow-md 
          leading-10"
              >
                Luaran Keperawatan
              </th>
              <th
                className="
          border
          bg-sky-100 
          p-1 shadow-md 
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
          </tbody>
        </table>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
