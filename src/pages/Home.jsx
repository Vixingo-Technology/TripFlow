import { Box, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router";

export default function Home() {
    return (
        <Box sx={{ minHeight: "200vh" }}>
            Home
            <Button variant="outlined">ssss</Button>
            <div>
                <Link to="/quote">Quote</Link>
            </div>
        </Box>
    );
}
