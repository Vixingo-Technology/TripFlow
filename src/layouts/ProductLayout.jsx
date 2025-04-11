import React from "react";
import MiniHeader from "../components/Header/MiniHeader";
import { Outlet } from "react-router";
import Footer from "../components/footer/Footer";
import { Box } from "@mui/material";

export default function ProductLayout() {
    return (
        <Box  sx={{ backgroundColor: "background.default" }}>
            <MiniHeader />
            <Outlet />
            <Footer />
        </Box>
    );
}
