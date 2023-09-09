/** @format */
import GoogleView from "./GoogleView";

function DocumentList() {
  // Daftar URL yang ingin Anda tampilkan
  const documentUrls = [
    "https://docs.google.com/document/d/1QD4TiF4vdI9tuFttg6WiADxtJuQGKyz0qnyLYID8pYM/edit?usp=sharing",
    "https://docs.google.com/document/d/1_4BmgmMC5fJoc5ie86bkl6AG8Unb67KJmeG1WHnPopE/edit?usp=sharing",
    "https://docs.google.com/document/d/1Tm8npxdEiX6F-EL40iy1JYCGjAM05LywhXCujIt2qLA/edit?usp=sharing",

    // Tambahkan URL lainnya sesuai kebutuhan
  ];

  return (
    <div>
      <h1 className="text-2xl font-semibold ml-5 mt-5">Daftar Dokumen</h1>
      <ul>
        {documentUrls.map((url, index) => (
          <li key={index}>
            <GoogleView url={url} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DocumentList;
