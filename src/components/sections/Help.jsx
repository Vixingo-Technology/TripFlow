import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import wlh from "../../assets/wlh.png";
export default function Help() {
    return (
        <Box
            sx={{
                backgroundColor: "background.paper",
            }}
        >
            <Grid
                container
                columns={12}
                spacing={2}
                sx={{
                    alignItems: "center",
                    maxWidth: "1720px",
                    margin: "0 auto",
                    px: 2,
                }}
            >
                <Grid size={{ xs: 12, lg: 6 }}>
                    <Box sx={{ maxWidth: "600px", mx: "auto", mb: -0.7 }}>
                        <img src={wlh} alt="" width={"100%"} />
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, lg: 6 }}>
                    <Box sx={{ textAlign: { xs: "center", lg: "left" } }}>
                        <Typography
                            variant="h3"
                            color="primary"
                            sx={{
                                my: 2,
                                fontWeight: "bold",
                            }}
                        >
                            {" "}
                            We love to help.{" "}
                        </Typography>
                        <Typography variant="h5" my={2}>
                            {" "}
                            Speak to one of our experts to find out more. Give
                            us a call at 023 885 077, or request a call back and
                            we will get back to you as soon as we can.{" "}
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                gap: 3,
                                my: 3,
                                flexWrap: "wrap",
                                justifyContent: {
                                    xs: "center",
                                    lg: "flex-start",
                                },
                            }}
                        >
                            {" "}
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                    fontSize: "30px",
                                }}
                            >
                                Get Help
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                    fontSize: "30px",
                                }}
                            >
                                Request Call Back
                            </Button>
                        </Box>
                    </Box>{" "}
                </Grid>
            </Grid>
        </Box>
    );
}
