import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";
import MiniHeader from "../components/Header/MiniHeader";
import Header from "../components/Header/Header";

export default function QuoteLayout() {
    return (
        <>
            <Box sx={{ backgroundColor: "background.default" }}>
                <MiniHeader />

                <Box
                    sx={{
                        maxWidth: "1280px",
                        mx: "auto",
                        px: 2,
                    }}
                >
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}
