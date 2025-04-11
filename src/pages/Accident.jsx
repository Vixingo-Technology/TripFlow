import { Box, Breadcrumbs, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { NavLink } from "react-router";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import heroBanner from "../assets/hero-banner.png";
import GrainIcon from "@mui/icons-material/Grain";
export default function Accident() {
    return (
        <div>
            {" "}
            <Breadcrumbs aria-label="breadcrumb" sx={{ my: 1 }}>
                <Link
                    component={NavLink}
                    to="/"
                    underline="hover"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        color: "text.primary",
                    }}
                >
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Home
                </Link>

                <Typography
                    color="text.primary"
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <PersonalInjuryOutlinedIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                    Personal Accident
                </Typography>
            </Breadcrumbs>


            <Grid
                container
                sx={{ alignItems: "center", maxWidth: "1000px", mx: "auto" }}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography variant="h4" component="h2" sx={{ mt: 2 }}>
                        Personal Accident Insurance
                    </Typography>
                    <Typography variant="body1" my={1}>
                        {" "}
                        A gift of future for your family.
                    </Typography>
                    <br />

                    <Button variant="contained" size="large">
                        Buy Now
                    </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: "300px", mx: "auto" }}>
                        <img src={heroBanner} alt="" width={"100%"} />
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
}
