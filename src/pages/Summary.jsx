import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import SummaryForm from "../components/forms/SummaryForm";
import ReviewInfo from "../components/sections/ReviewInfo";

export default function Summary() {
    return (
        <>
            <Box
                sx={{
                    p: 2,
                }}
            >
                <Typography variant="h4" textAlign={"center"}>
                    Travel Insurance Quotation
                </Typography>
                <Grid container spacing={2}>
                    <Grid item size={{ xs: 12, lg: 7 }}>
                        <ReviewInfo />
                    </Grid>
                    <Grid item size={{ xs: 12, lg: 5 }}>
                        <SummaryForm />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
