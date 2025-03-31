import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header/Header";
import Footer from "../components/footer/Footer";
export default function LandingLayout() {
    return (
        <>
            <Header />
            <Box
                sx={{
                    maxWidth: "1820px",
                    mx: "auto",
                }}
            >
                <Outlet />
            </Box>
            <Footer />
        </>
    );
}
