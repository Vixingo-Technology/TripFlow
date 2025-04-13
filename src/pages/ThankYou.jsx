import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";

export default function ThankYou() {
    return (
        <>
            {" "}
            <Grid
                container
                columns={12}
                spacing={4}
                sx={{
                    maxWidth: "1200px",

                    mx: "auto",
                    px: 2,
                    py: 5,
                    pb: 20,
                    alignItems: "center",
                    flexDirection: "column-reverse",
                }}
            >
                <Grid size={{ xs: 12 }}>
                    <Card
                        elevation={4}
                        variant="outlined"
                        sx={{
                            textAlign: "center",
                            p: 2,
                            py: 4,
                            maxWidth: "600px",
                            mx: "auto",
                        }}
                    >
                        <Typography
                            variant="h2"
                            sx={{ mt: 2, mb: 1, color: "primary" }}
                        >
                            Thank You!
                        </Typography>
                        <Typography variant="h4">
                            Your purchase is confirmed.
                        </Typography>
                        <br />
                        <Typography variant="body1">
                            Your travel insurance is confirmed! Download your
                            policy below or check your email for confirmation.
                            Safe travels!
                        </Typography>
                        <Typography variant="h6" my={2}>
                            Policy Number: 123856865
                        </Typography>
                        <Box sx={{ display: "flex" }}>
                            <Button variant="contained" fullWidth>
                                Download PDF
                            </Button>
                            <Button variant="outlined" fullWidth>
                                Send Confirmation Email
                            </Button>
                        </Box>
                    </Card>
                </Grid>
                <Grid size={{ xs: 12 }} sx={{ px: "10px" }}>
                    <Box
                        sx={{
                            mt: 4,
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                m: 2,
                                textAlign: "center",
                                color: "text.primary",
                            }}
                        >
                            Dear Mr. AYZ <br />
                            Thanks for taking Travel insurance from us. It is
                            very important that you read and understand the
                            terms conditions..... Here are important docs
                            related to your travel insurance.
                        </Typography>

                        <Box
                            sx={{
                                mt: 3,
                                display: "flex",
                                justifyContent: "flex-end",
                            }}
                        >
                            {" "}
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
}
