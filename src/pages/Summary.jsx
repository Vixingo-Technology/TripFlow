import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";

export default function Summary() {
    return (
        <>
            <Box
                sx={{
                    p: 2,
                }}
            >
                <Typography variant="h5" textAlign={"center"}>
                    Travel Insurance Quotation
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <Paper>
                            <Typography variant="h4">
                                Review Informations
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}></Grid>
                </Grid>
            </Box>
        </>
    );
}
