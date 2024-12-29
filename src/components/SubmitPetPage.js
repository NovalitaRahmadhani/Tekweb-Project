import React, { useState } from "react";

function SubmitPetPage() {
  const [pets, setPets] = useState([]); // State untuk menyimpan daftar hewan
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    description: "",
  }); // State untuk formulir

  const [isEditing, setIsEditing] = useState(false); // Mode edit
  const [editIndex, setEditIndex] = useState(null); // Indeks hewan yang sedang diedit

  // Handle perubahan input form
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Update data jika sedang dalam mode edit
      const updatedPets = pets.map((pet, index) =>
        index === editIndex ? form : pet
      );
      setPets(updatedPets);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      // Tambahkan data baru
      setPets([...pets, form]);
    }
    setForm({ name: "", address: "", phone: "", description: "" }); // Reset form
  };

  // Handle edit
  const handleEdit = (index) => {
    setIsEditing(true);
    setEditIndex(index);
    setForm(pets[index]);
  };

  // Handle delete
  const handleDelete = (index) => {
    const updatedPets = pets.filter((_, i) => i !== index);
    setPets(updatedPets);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Ajukan Hewan Adopsi</h1>

      {/* Formulir */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-4">
        <div>
          <label className="block mb-2 font-semibold">Nama Hewan</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Alamat</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Nomor Telepon</label>
          <input
            type="text"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold">Deskripsi</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          {isEditing ? "Update Hewan" : "Ajukan Hewan"}
        </button>
      </form>

      {/* Daftar Hewan dalam Katalog */}
      <h2 className="text-xl font-bold mb-4">Daftar Hewan yang Diajukan</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {pets.map((pet, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200"
          >
            <h3 className="text-lg font-bold">{pet.name}</h3>
            <p className="text-sm text-gray-600">
              <strong>Alamat:</strong> {pet.address}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Nomor Telepon:</strong> {pet.phone}
            </p>
            <p className="text-sm text-gray-600">
              <strong>Deskripsi:</strong> {pet.description}
            </p>
            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => handleEdit(index)}
                className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Hapus
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubmitPetPage;
