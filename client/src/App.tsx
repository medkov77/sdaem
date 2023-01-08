import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Auth from "./pages/autorization/auth/auth";
import Exit from "./pages/autorization/auth/exit";
import Login from "./pages/autorization/auth/login";
import Contakts from "./pages/contaks/contakts";
import MainPage from "./pages/main/main";
import News from "./pages/news/news";
import OneNews from "./pages/news/oneNews";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<OneNews />} />
        <Route path="contacts" element={<Contakts />} />
        <Route path="auth" element={<Auth />} />
        <Route path="exit" element={<Exit />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
