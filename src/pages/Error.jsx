import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";

export default function Error() {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "800px",
                flexDirection: "column",
            }}
        >
            <Typography variant="h1" color="primary.main">
                404
            </Typography>
            <Typography variant="h2">Page Not Found</Typography>
            <NavLink to={"/"}>
                <Button
                    variant="contained"
                    size="large"
                    sx={{ fontSize: "25px", mt: 8 }}
                >
                    Back To Home
                </Button>
            </NavLink>
        </Box>
    );
}
