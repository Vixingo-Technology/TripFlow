import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";

import term from "../../assets/term.jpg";
export default function Term() {
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
                        <Typography variant="h3" color="primary" sx={{ mt: 5 }}>
                            Exclusions
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{ fontWeight: "bold", my: 3 }}
                        >
                            Terms and Conditions
                        </Typography>

                        <Typography variant="h5">
                            Please confirm if you agree with our Terms and
                            Conditions below:
                            <ul>
                                <li>
                                    You are a resident of the Kingdom of
                                    Cambodia
                                </li>
                                <li>
                                    You did not purchase this policy after the
                                    start of your travel
                                </li>
                                <li> This purchase is non-refundable</li>
                                <li>
                                    If policyholder is under 16 years old - You
                                    are the parent or guardian of the applicant
                                    and give consent to the applicant entering
                                    into this insurance contract
                                </li>
                                <li>
                                    The information provided is true and
                                    complete. Otherwise, TripFlow Insurance has
                                    the right to either decline your claims or
                                    cancel the policy.
                                </li>
                            </ul>
                            <br />
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 1, md: 6 }}>
                        <Box maxWidth={"650px"} margin={"30px auto"}>
                            <img src={term} alt="" width={"100%"} />
                        </Box>
                    </Grid>
                </Grid>{" "}
            </Box>
        </>
    );
}
