import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import explore from "../../assets/explore.jpg";
import { NavLink } from "react-router";
export default function Explore() {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: "background.paper",
                }}
            >
                <Grid
                    container
                    columns={{ xs: 1, md: 12 }}
                    spacing={2}
                    sx={{
                        p: 2,
                        justifyContent: "space-around",
                        alignItems: "start",
                        maxWidth: "1820px",
                        mx: "auto",
                    }}
                >
                    <Grid size={{ xs: 1, md: 6 }}>
                        <Typography variant="h3" color="primary" sx={{ my: 5 }}>
                            Explore with confidence
                        </Typography>
                        <Typography variant="h5">
                            Planning a trip needs foresight and careful
                            preparation. Travel insurance is an essential part
                            of going on your worldwide adventures.
                            <br />
                            <br />
                            It provides financial protection in the event of
                            unforeseen losses whether you are on business or
                            pleasure. Examples include lost luggage, accidents,
                            and emergency medical care.{" "}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 1, md: 6 }}>
                        <Box maxWidth={"500px"} margin={"30px auto"}>
                            <img src={explore} alt="" width={"100%"} />
                        </Box>
                    </Grid>
                </Grid>{" "}
            </Box>
            <Box
                sx={{
                    bgcolor: "primary.main",
                    p: 2,
                    display: "flex",
                    justifyContent: { xs: "center", lg: "space-between" },
                    textAlign: { xs: "center", lg: "" },
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                <Typography
                    variant="h4"
                    color="white"
                    fontWeight={600}
                    sx={{ minWidth: "100px" }}
                >
                    Find out more - call (+999) 999 999 999 today.
                </Typography>
                <NavLink to={"/quote"}>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        sx={{ fontWeight: "bold", fontSize: "24px" }}
                    >
                        Get Quote
                    </Button>
                </NavLink>
            </Box>
        </>
    );
}
