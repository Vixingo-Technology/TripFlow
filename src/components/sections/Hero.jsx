import React from "react";
import { Link, NavLink } from "react-router";
import hero from "../../assets/hero.jpg";
import bag from "../../assets/bag.png";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
export default function Hero() {
    return (
        <Box>
            <Stack
                // container
                spacing={2}
                // columns={{ xs: 1, sm: 12 }}
                direction={{ xs: "column-reverse", lg: "row" }}
                sx={{
                    mt: { xs: "80px", md: "12 0px" },
                    bgcolor: "secondary.main",

                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    width: "100%",
                }}
            >
                <Box sx={{ width: "100%" }}>
                    <Box sx={{ p: 2 }}>
                        <img src={bag} width={80} />
                        <Typography
                            variant="h3"
                            color="text.secondary"
                            sx={{ mb: 2, fontWeight: "bold" }}
                        >
                            Travel Insurance
                        </Typography>
                        <Typography
                            variant="h4"
                            color="text.secondary"
                            sx={{ mb: 3, maxWidth: "90%" }}
                        >
                            Start every journey and every adventure with the
                            right frame of mind
                        </Typography>
                        <br />
                        <Link to="/quote" style={{ textDecoration: "none" }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                endIcon={
                                    <ArrowRightAltIcon
                                        style={{ fontSize: " 3rem" }}
                                    />
                                }
                                sx={{
                                    textTransform: "Capitalize",
                                    fontSize: 24,
                                    fontWeight: 700,
                                }}
                            >
                                Get Instant Quote
                            </Button>
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <Box
                        sx={{
                            backgroundImage: `url(${hero})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundPosition: "right",
                            clipPath: {
                                xs: "polygon(100% 0, 100% 85%, 0 96%, 0 21%, 29% 0);",
                                lg: " polygon(100% 0, 100% 69%, 70% 100%, 0 100%, 30% 0);",
                            },
                            height: { xs: "30vh", lg: "95vh" },
                            width: { xs: "100%", lg: "100%" },
                        }}
                    >
                        {/* <img
                            src={hero}
                            alt="car"
                            width="100%"
                            height={"100%"}
                            style={{ paddingTop: "200px" }}
                        /> */}
                    </Box>
                </Box>
            </Stack>
            <Box>
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "right",
                        p: 3,
                        bgcolor: (theme) => theme.palette.background,
                    }}
                >
                    Already purchased?{" "}
                    <NavLink to="/quote">Find your policy</NavLink>
                </Typography>
            </Box>
        </Box>
    );
}
