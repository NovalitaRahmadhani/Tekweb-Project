import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function DetailPage() {
  const navigate = useNavigate();
  const location = useLocation();

  // Data hewan dari lokasi state (dikirim dari halaman sebelumnya)
  const { name, description, age, species, location: petLocation, image } =
    location.state || {};

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-lg p-8 w-96">
        <div className="flex flex-col items-center">
          <img
            src={image || "https://via.placeholder.com/150"}
            alt={name}
            className="w-48 h-48 object-cover rounded-full mb-4 border-4 border-blue-400 shadow-md"
          />
          <h2 className="text-3xl font-bold text-blue-800 mb-1">
            {name || "Nama Hewan"}
          </h2>
          <p className="text-blue-500 italic text-center mb-4">
            "{description || "Deskripsi hewan tidak tersedia."}"
          </p>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
          <p className="mb-3">
            <span className="text-blue-700 font-semibold text-lg">Umur:</span>{" "}
            <span className="text-gray-700">{age ? `${age} tahun` : "Tidak diketahui"}</span>
          </p>
          <p className="mb-3">
            <span className="text-blue-700 font-semibold text-lg">
              Jenis Hewan:
            </span>{" "}
            <span className="text-gray-700">{species || "Tidak diketahui"}</span>
          </p>
          <p>
            <span className="text-blue-700 font-semibold text-lg">Lokasi:</span>{" "}
            <span className="text-gray-700">
              {petLocation || "Tidak diketahui"}
            </span>
          </p>
        </div>
        <div className="flex justify-between mt-6">
          <button
            className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all"
            onClick={() => navigate("/adopt")}
          >
            Adopt Now
          </button>
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-lg transition-all"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
