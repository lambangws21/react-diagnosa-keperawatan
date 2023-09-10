/** @format */

import { useState } from "react";
import DropdownMenu from "./DropdownMenu"; // Pastikan Anda mengimpor komponen DropdownMenu dari lokasi yang benar
import GoogleView from "./GoogleView"; // Pastikan Anda mengimpor komponen GoogleView dari lokasi yang benar

const DocumentList = () => {
  const [selectedDocument, setSelectedDocument] = useState([]);
  const [selectedOptionName, setSelectedOptionName] = useState("Jenis Operasi");
  const urlData = {
    Orthopedi: [
      { name: "Dokumen Orthopedi 1", url: "https://example.com/orthopedi/1" },
      { name: "Dokumen Orthopedi 2", url: "https://example.com/orthopedi/2" },
    ],
    Digestive: [
      {
        name: "Laparaskopi Apendik dr.maria",
        url: "https://docs.google.com/document/d/1QD4TiF4vdI9tuFttg6WiADxtJuQGKyz0qnyLYID8pYM/edit?usp=sharing",
      },

      {
        name: "Laparaskopi Apendik dr.cosmas",
        url: "https://docs.google.com/document/d/1Tm8npxdEiX6F-EL40iy1JYCGjAM05LywhXCujIt2qLA/edit?usp=sharing",
      },
      // tambahkan URL Digestive lainnya
    ],
    Neurologi: [
      {
        name: "Kraniotomi dekompresi",
        url: "https://docs.google.com/document/d/1_4BmgmMC5fJoc5ie86bkl6AG8Unb67KJmeG1WHnPopE/edit?usp=sharing",
      },
    ],
    Ginekologi: [
      {
        name: "Kraniotomi dekompresi",
        url: "https://docs.google.com/document/d/1_4BmgmMC5fJoc5ie86bkl6AG8Unb67KJmeG1WHnPopE/edit?usp=sharing",
      },
    ],
    Urologi: [
      {
        name: "Kraniotomi dekompresi",
        url: "https://docs.google.com/document/d/1_4BmgmMC5fJoc5ie86bkl6AG8Unb67KJmeG1WHnPopE/edit?usp=sharing",
      },
    ],
    BedahUmum: [
      {
        name: "Kraniotomi dekompresi",
        url: "https://docs.google.com/document/d/1_4BmgmMC5fJoc5ie86bkl6AG8Unb67KJmeG1WHnPopE/edit?usp=sharing",
      },
    ],
    BedahPlastik: [
      {
        name: "Kraniotomi dekompresi",
        url: "https://docs.google.com/document/d/1_4BmgmMC5fJoc5ie86bkl6AG8Unb67KJmeG1WHnPopE/edit?usp=sharing",
      },
    ],
    OperasiMata: [
      {
        name: "Kraniotomi dekompresi",
        url: "https://docs.google.com/document/d/1_4BmgmMC5fJoc5ie86bkl6AG8Unb67KJmeG1WHnPopE/edit?usp=sharing",
      },
    ],

    // dan seterusnya untuk opsi lainnya
  };

  const handleOptionSelect = (option) => {
    const selectedUrls = urlData[option] || [];
    setSelectedDocument(selectedUrls);
    setSelectedOptionName(option);
  };

  return (
    <div>
      <h1 className="text-2xl font-semibold ml-5 mt-5">
        Daftar Dokumen - {selectedOptionName}
      </h1>
      <DropdownMenu
        options={[
          "Orthopedi",
          "Digestive",
          "Urologi",
          "Ginekologi",
          "Neurologi",
          "Bedah Umum  ",
          "Bedah Plastik",
          "Operasi Mata",
        ]}
        onSelect={handleOptionSelect}
        selectedOption={selectedOptionName}
        defaultOption="Jenis Operasi"
        selectedName={selectedOptionName}
      />
      <ul>
        {selectedDocument.map((doc, index) => (
          <li key={index}>
            {doc.url.startsWith("https://docs.google.com/document/") ? (
              <GoogleView url={doc.url} />
            ) : (
              <a href={doc.url} target="_blank" rel="noopener noreferrer">
                {doc.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default DocumentList;
