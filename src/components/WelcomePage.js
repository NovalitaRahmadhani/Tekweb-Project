import React from "react";
import { useNavigate } from "react-router-dom";

function WelcomePage() {
  const navigate = useNavigate();

  // Fungsi navigasi untuk masing-masing tombol
  const handleNavigateCariHewan = () => {
    navigate("/home");
  };

  const handleNavigateAjukanHewan = () => {
    navigate("/submit-pet");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-[#FDE6D6] to-[#FED8B1]">
      {/* Gambar panjang di atas */}
      <div className="w-full flex justify-center">
        <img
          src={require("../assets/images/adopt-pet-banner.jpg")}
          alt="Adopt a pet banner"
          className="w-3/4 max-w-2xl rounded-lg shadow-lg"
        />
      </div>
      {/* Konten utama */}
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-4xl font-bold mb-4 text-[#5C4033] drop-shadow-lg">
          Selamat Datang di Pet Adoption
        </h1>
        <p className="text-lg mb-6 text-[#5C4033] drop-shadow-lg text-center">
          Pet Adoption adalah platform untuk membantu Anda menemukan dan mengadopsi hewan peliharaan yang Anda inginkan!
        </p>
        {/* Wrapper tombol */}
        <div className="flex space-x-4">
          <button
            onClick={handleNavigateCariHewan}
            className="bg-white text-[#5C4033] px-6 py-3 rounded-lg shadow-lg hover:bg-[#FED8B1] transition transform hover:scale-105"
          >
            Cari Hewan
          </button>
          <button
            onClick={handleNavigateAjukanHewan}
            className="bg-white text-[#5C4033] px-6 py-3 rounded-lg shadow-lg hover:bg-[#FED8B1] transition transform hover:scale-105"
          >
            Ajukan Hewan Adopsi
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
