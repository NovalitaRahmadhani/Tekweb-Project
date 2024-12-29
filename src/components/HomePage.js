import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const pets = [
    {
      name: "Buddy",
      description: "Friendly and playful.",
      age: 3,
      species: "Dog",
      location: "Jakarta",
      image: "https://placekitten.com/200/200", // Replace with actual image URL
    },
    {
      name: "Whiskers",
      description: "Loves cuddles and naps.",
      age: 2,
      species: "Cat",
      location: "Yogyakarta",
      image: "https://placekitten.com/200/201",
    },
    {
      name: "Coco",
      description: "Lively and loves to chirp.",
      age: 1,
      species: "Bird",
      location: "Bali",
      image: "https://placekitten.com/200/202",
    },
    {
      name: "Speedy",
      description: "A quiet and easy-going companion.",
      age: 5,
      species: "Turtle",
      location: "Surabaya",
      image: "https://placekitten.com/200/203",
    },
    {
      name: "Luna",
      description: "Energetic and loyal.",
      age: 4,
      species: "Dog",
      location: "Bandung",
      image: "https://placekitten.com/200/204",
    },
    {
      name: "Shadow",
      description: "Mysterious and independent.",
      age: 3,
      species: "Cat",
      location: "Malang",
      image: "https://placekitten.com/200/205",
    },
    {
      name: "Goldie",
      description: "Graceful swimmer with a shiny coat.",
      age: 1,
      species: "Fish",
      location: "Semarang",
      image: "https://placekitten.com/200/206",
    },
    {
      name: "Bella",
      description: "Sweet and loves to hop around.",
      age: 2,
      species: "Rabbit",
      location: "Medan",
      image: "https://placekitten.com/200/207",
    },
  ];

  return (
    <div className="min-h-screen bg-blue-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Daftar Hewan untuk Adopsi</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 text-center"
          >
            <img
              src={pet.image}
              alt={pet.name}
              className="w-32 h-32 object-cover mx-auto rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold">{pet.name}</h2>
            <p className="text-gray-600">{pet.description}</p>
            <button
              className="text-blue-500 hover:underline mt-2"
              onClick={() =>
                navigate("/detail", {
                  state: pet,
                })
              }
            >
              Detail
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
