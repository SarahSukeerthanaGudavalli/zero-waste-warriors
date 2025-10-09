import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from "./components/Welcome";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import UserDetails from "./components/UserDetails";
import HomePage from "./components/Homepage";
import DonorPage from "./components/DonorPage";
import DonateVeg from "./components/DonateVeg";
import DonateNonVeg from "./components/DonateNonVeg";
import ReceiverPage from "./components/ReceiverPage";
import ReceiveVeg from "./components/ReceiveVeg";
import ReceiveNonVeg from "./components/ReceiveNonVeg";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/details" element={<UserDetails />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/donor" element={<DonorPage />} />
        <Route path="/donate-veg" element={<DonateVeg />} />
        <Route path="/donate-nonveg" element={<DonateNonVeg />} />
        <Route path="/receiver" element={<ReceiverPage />} />
        <Route path="/receive-veg" element={<ReceiveVeg />} />
        <Route path="/receive-nonveg" element={<ReceiveNonVeg />} />
      </Routes>
    </Router>
  );
}
export default App;