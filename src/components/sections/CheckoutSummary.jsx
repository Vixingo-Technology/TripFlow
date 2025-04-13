import React from "react";
import {
    Box,
    Card,
    CardContent,
    Grid,
    Typography,
    Divider,
} from "@mui/material";
export default function CheckoutSummary() {
    return (
        <>
            {" "}
            <Card variant="outlined">
                {" "}
                {/* Matching soft peachy background */}
                <CardContent sx={{ px: 3, py: 2 }}>
                    {" "}
                    {/* Padding adjusted */}
                    {/* Summary Title */}
                    <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                        Summary
                    </Typography>
                    {/* Period of Insurance */}
                    <Typography variant="caption" sx={{ lineHeight: 1.6 }}>
                        Period of Insurance
                        <br />
                        <Box component="span" sx={{ fontWeight: 600 }}>
                            10th Apr 2025 until 9th Apr 2026
                        </Box>
                    </Typography>
                    {/* Construction Info */}
                    <Box mt={2}>
                        <Box mb={1}>
                            <Typography
                                variant="caption"
                                sx={{ fontWeight: 500 }}
                            >
                                Construction Type
                            </Typography>
                            <br />
                            <Typography variant="caption">
                                Dwelling House
                            </Typography>
                        </Box>

                        <Box my={2}>
                            <Typography
                                variant="caption"
                                sx={{ fontWeight: 500 }}
                            >
                                Construction Class
                            </Typography>
                            <br />
                            <Typography variant="caption">A</Typography>
                        </Box>

                        <Box mb={5}>
                            <Typography
                                variant="caption"
                                sx={{ fontWeight: 500 }}
                            >
                                Additional Perils Coverage
                            </Typography>
                            <br />
                            <Typography variant="caption">
                                Not Applicable
                            </Typography>
                        </Box>
                    </Box>
                    <Box mt={2}>
                        {/* Building Worth */}
                        <Grid mb={1} container justifyContent="space-between">
                            <Grid item>
                                <Typography variant="caption">
                                    How much is your Building worth?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    $231.00
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider></Divider>
                        {/* Content Worth */}
                        <Grid
                            mt={1}
                            mb={1}
                            container
                            justifyContent="space-between"
                        >
                            <Grid item>
                                <Typography variant="caption">
                                    How much is your Content worth?
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    $231.00
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider></Divider>
                        {/* Premiums */}
                        <Grid
                            mt={1}
                            mb={1}
                            container
                            justifyContent="space-between"
                        >
                            <Grid item>
                                <Typography variant="caption">
                                    Basic Benefit Premium
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    $70.00
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider></Divider>
                        <Grid
                            mt={1}
                            mb={1}
                            container
                            justifyContent="space-between"
                        >
                            <Grid item>
                                <Typography variant="caption">
                                    Gross Premium
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    $70.00
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider></Divider>
                        <Grid mt={1} container justifyContent="space-between">
                            <Grid item>
                                <Typography variant="caption">
                                    Net Premium
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="caption">
                                    $70.00
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                    {/* Total Payable */}
                    <Box mt={3}>
                        {/* Label row */}
                        <Box display="flex" alignItems="center">
                            <Typography
                                variant="body1"
                                sx={{ fontWeight: 600 }}
                            >
                                Total Payable
                            </Typography>
                        </Box>

                        {/* Amount row */}
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                textAlign: "right",
                                mt: 1,
                            }}
                        >
                            $70.00
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        </>
    );
}
