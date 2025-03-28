import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Quote from "./pages/Quote";
import { BrowserRouter, Route, Routes } from "react-router";
import Header from "./components/Header/Header";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/quote" element={<Quote />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
