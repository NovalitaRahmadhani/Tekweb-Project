import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationPage from "./components/RegistrationPage";
import LoginPage from "./components/LoginPage";
import WelcomePage from "./components/WelcomePage";
import HomePage from "./components/HomePage";
import AnimalDetail from "./components/AnimalDetail";
import AdoptionForm from "./components/AdoptionForm";
import SubmitPetPage from "./components/SubmitPetPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/details/:id" element={<AnimalDetail />} />
        <Route path="/adopt/:id" element={<AdoptionForm />} />
        <Route path="/submit-pet" element={<SubmitPetPage />} />
      </Routes>
    </Router>
  );
}

export default App;
