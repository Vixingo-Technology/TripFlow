import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router";

export default function SummaryForm() {
    const userData = useSelector((state) => state.quote);
    const { selectedPlan } = userData;
    const { selectedOptional } = userData;
    const { selectedTrip } = userData;
    const { selectedBeneficiary } = userData;
    const { selectedApplicant } = userData;
    const { selectedDeclaration } = userData;
    const { selectedTravel } = userData;
    const { riskType } = userData;

    return (
        <>
            <Paper elevation={3} sx={{ padding: 2, margin: "20px auto" }}>
                <Typography
                    variant="h4"
                    color="primary"
                    my={2}
                    sx={{ textAlign: "center" }}
                >
                    Summary{" "}
                </Typography>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",

                        py: 1,
                    }}
                >
                    <Typography variant="h6">
                        <b> Plan:</b>{" "}
                        <Typography variant="h6">
                            travel insurance - {selectedPlan}
                            {/* <VerifiedIcon
                                sx={{
                                    fontSize: 18,
                                    color: "green",
                                    ml: 1,
                                }}
                            /> */}
                        </Typography>
                    </Typography>
                    <Typography variant="h6"> $5,000</Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        py: 2,
                    }}
                >
                    <Typography variant="h6">
                        <b>Add-ons:</b>{" "}
                        {riskType.map((item) => (
                            <Typography variant="body1" key={item}>
                                {item}
                            </Typography>
                        ))}
                        <Typography variant="body1">
                            {selectedTrip}
                            {/* <VerifiedIcon
                                sx={{
                                    fontSize: 18,
                                    color: "green",
                                    ml: 1,
                                }}
                            /> */}
                        </Typography>
                    </Typography>
                    <Typography variant="h6"> $5,000</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",

                        py: 2,
                    }}
                >
                    <Typography variant="h6">
                        <b>Total Premium:</b>{" "}
                    </Typography>
                    <Typography variant="h6"> $10,000</Typography>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        py: 1,
                        my: 3,
                        gap: 1,
                        flexWrap: "wrap",
                        borderTop: "1px solid #ededed50",
                        borderBottom: "1px solid #ededed50",
                    }}
                >
                    <Typography variant="body1" sx={{ flex: 1 }}>
                        Apply Coupon Code
                    </Typography>
                    <TextField
                        label={"Use Coupon"}
                        variant="outlined"
                        p={0}
                        size="small"
                    />
                    <Button
                        variant="contained"
                        size="small"
                        sx={{
                            fontSize: 16,
                        }}
                    >
                        APPLY
                    </Button>
                </Box>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        // borderBottom: "1px solid #ededed50",
                        py: 2,
                    }}
                >
                    <Typography variant="h6">
                        <b>Total Amount Due</b>{" "}
                    </Typography>
                    <Typography variant="h6">$19,500</Typography>
                </Box>
            </Paper>
            <Box display={"flex"} gap={2}>
                <NavLink to={-1}>
                    <Button size="large" variant="outlined">
                        Back
                    </Button>
                </NavLink>
                <NavLink to="/thankyou">
                    <Button variant="contained" size="large" fullWidth>
                        Proceed to Payment
                    </Button>
                </NavLink>
            </Box>
        </>
    );
}
