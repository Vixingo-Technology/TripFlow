import { Box, Paper, Typography } from "@mui/material";

import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { green, red } from "@mui/material/colors";

const plans = [
    {
        name: "Basic Plan",
        medical: "$50,000",
        trip: "$2,000",
        baggage: "$1,000",
        evac: false,
        sports: false,
        covid: false,
        support: "Yes",
    },
    {
        name: "Standard Plan",
        medical: "$150,000",
        trip: "$5,000",
        baggage: "$3,000",
        evac: "$50,000",
        sports: "Optional",
        covid: true,
        support: "Yes",
    },
    {
        name: "Premium Plan",
        medical: "$500,000",
        trip: "$10,000",
        baggage: "$5,000",
        evac: "$100,000",
        sports: true,
        covid: "Higher Limits",
        support: "Priority Support",
    },
];
export default function PlanForm({
    selectedPlan,
    setSelectedPlan,
    handleNext,
}) {
    const handleSelectPlan = (planName) => {
        setSelectedPlan(planName);
        console.log("Selected Plan:", planName);
        handleNext();
    };

    return (
        <>
            <Paper elevation={3} sx={{ padding: 2, margin: "20px auto" }}>
                <Typography
                    variant="h4"
                    color="primary"
                    my={2}
                    sx={{ textAlign: "center" }}
                >
                    Plan and Benefits
                </Typography>
                <Box>
                    {" "}
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Features</TableCell>
                                    {plans.map((plan) => (
                                        <TableCell
                                            key={plan.name}
                                            sx={{ textAlign: "center" }}
                                        >
                                            {plan.name}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[
                                    {
                                        label: "Medical Coverage",
                                        key: "medical",
                                    },
                                    { label: "Trip Cancellation", key: "trip" },
                                    {
                                        label: "Baggage Protection",
                                        key: "baggage",
                                    },
                                    {
                                        label: "Emergency Evacuation",
                                        key: "evac",
                                    },
                                    {
                                        label: "Adventure Sports Coverage",
                                        key: "sports",
                                    },
                                    {
                                        label: "COVID-19 Coverage",
                                        key: "covid",
                                    },
                                    {
                                        label: "24/7 Global Assistance",
                                        key: "support",
                                    },
                                ].map((feature) => (
                                    <TableRow key={feature.key}>
                                        <TableCell>{feature.label}</TableCell>
                                        {plans.map((plan) => (
                                            <TableCell
                                                key={plan.name}
                                                sx={{ textAlign: "center" }}
                                            >
                                                {typeof plan[feature.key] ===
                                                "boolean" ? (
                                                    plan[feature.key] ? (
                                                        <CheckCircleIcon
                                                            sx={{
                                                                color: green[500],
                                                            }}
                                                        />
                                                    ) : (
                                                        <CancelIcon
                                                            sx={{
                                                                color: red[500],
                                                            }}
                                                        />
                                                    )
                                                ) : (
                                                    plan[feature.key]
                                                )}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))}
                                <TableRow>
                                    <TableCell></TableCell>
                                    {plans.map((plan) => (
                                        <TableCell
                                            key={plan.name}
                                            sx={{ textAlign: "center" }}
                                        >
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() =>
                                                    handleSelectPlan(plan.name)
                                                }
                                            >
                                                Select Plan
                                            </Button>
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Paper>
        </>
    );
}
