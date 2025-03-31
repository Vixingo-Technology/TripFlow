import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router";

export default function QuoteLayout() {
    return (
        <Box
            sx={{
                maxWidth: "1820px",
                mx: "auto",
            }}
        >
            <Outlet />
        </Box>
    );
}
