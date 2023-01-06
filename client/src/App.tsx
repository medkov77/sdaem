import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
