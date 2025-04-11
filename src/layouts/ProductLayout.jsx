import React from "react";
import MiniHeader from "../components/Header/MiniHeader";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";

export default function ProductLayout() {
    return (
        <>
            <MiniHeader />
            <Outlet />
            <Footer />
        </>
    );
}
