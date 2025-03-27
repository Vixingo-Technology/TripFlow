import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router";
import hero from "../assets/hero.jpg";
import bag from "../assets/bag.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
export default function Home() {
    return (
        <Box
            sx={{
                mt: { xs: "50px", md: "100px" },
                bgcolor: "secondary.main",
                py: 4,
                // minHeight: "85vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Grid
                container
                spacing={2}
                columns={{ xs: 1, sm: 12 }}
                direction={{ xs: "column-reverse", sm: "row" }}
            >
                <Grid item size={{ xs: 1, sm: 6 }}>
                    <Box sx={{ p: 2 }}>
                        <img src={bag} width={120} />
                        <Typography variant="h1" color="primary" sx={{ mb: 2 }}>
                            Travel Insurance
                        </Typography>
                        <Typography
                            variant="h1"
                            color="text.primary"
                            sx={{ mb: 3, maxWidth: "90%" }}
                        >
                            Start every journey and every adventure with the
                            right frame of mind
                        </Typography>
                        <Link to="/quote" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={
                                    <ArrowRightAltIcon
                                        style={{ fontSize: " 2rem" }}
                                    />
                                }
                                sx={{
                                    textTransform: "Capitalize",
                                    fontSize: 20,
                                    fontWeight: 700,
                                }}
                            >
                                Get Instant Quote
                            </Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item size={{ xs: 1, sm: 6 }}>
                    <Box sx={{ p: 2 }}>
                        <img
                            src={hero}
                            alt="car"
                            width="100%"
                            style={{ borderRadius: "10px" }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
