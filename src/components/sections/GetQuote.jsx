import { Box, Button, Typography } from "@mui/material";
import React from "react";
import TripDetails from "../forms/TripDetails";
import { NavLink } from "react-router";

export default function GetQuote() {
    return (
        <Box
            sx={{
                maxWidth: "1820px",
                px: 2,
                pb: 5,
            }}
        >
            <Typography variant="h3" color="primary" sx={{ mt: 5 }}>
                Tell us your travel details and get a quote
            </Typography>
            <TripDetails />
            <NavLink to={"/quote"}>
                <Button variant="contained">Get Quote</Button>
            </NavLink>
        </Box>
    );
}
