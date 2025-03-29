import { Box, Button, Paper, TextField, Typography } from "@mui/material";
import React from "react";

export default function SummaryForm() {
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

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",

                        py: 1,
                    }}
                >
                    <Typography variant="h6">
                        <b> Plan:</b>{" "}
                        <Typography variant="h5">
                            travel insurance (STANDARD)
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
                        <Typography variant="h5">
                            medical coverage, sports adventure coverage
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
                    <Typography variant="h6" sx={{ flex: 1 }}>
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
        </>
    );
}
