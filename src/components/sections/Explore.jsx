import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import explore from "../../assets/explore.jpg";
export default function Explore() {
    return (
        <Grid
            container
            columns={{ xs: 1, md: 12 }}
            sx={{
                backgroundColor: "background.paper",

                justifyContent: "space-around",
                alignItems: "center",
            }}
        >
            <Grid item size={{ xs: 1, md: 6 }}>
                <Typography variant="h3" color="primary">
                    Explore with confidence
                </Typography>
                <Typography>
                    Planning a trip needs foresight and careful preparation.
                    Travel insurance is an essential part of going on your
                    worldwide adventures.
                    <br />
                    <br />
                    It provides financial protection in the event of unforeseen
                    losses whether you are on business or pleasure. Examples
                    include lost luggage, accidents, and emergency medical care.{" "}
                </Typography>
            </Grid>
            <Grid item size={{ xs: 1, md: 6 }}>
                <Box>
                    <img src={explore} alt="" width={"100%"} />
                </Box>
            </Grid>
        </Grid>
    );
}
