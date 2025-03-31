import { Box, IconButton } from "@mui/material";
import React from "react";
import Logo from "../dynamic/Logo";
import HomeIcon from "@mui/icons-material/Home";
export default function MiniHeader() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "primary.main",
                px: 2,
            }}
        >
            <Logo />
            <IconButton sx={{ color: "#fff" }}>
                <HomeIcon />
            </IconButton>
        </Box>
    );
}
