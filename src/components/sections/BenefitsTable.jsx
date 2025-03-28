import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Typography,
    Box,
    Grid,
} from "@mui/material";
import { tableCellClasses } from "@mui/material/TableCell";
import { styled } from "@mui/material/styles";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        fontSize: "24px",
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 24,
    },
}));

const StyledTableRow = styled(Box)(({ theme }) => ({
    "&:nth-of-type(even)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

const data = [
    {
        category: "Basic Benefit",
    },
    {
        category: "",
        type: "ComCare",
        employee: "",
        dependent: "",
    },
    {
        category: "",
        type: "Group Family Care (Death Benefit)",
        employee: "$35,000",
        dependent: "$35,000",
    },
    {
        category: "",
        type: "Group Rehabilitation Benefit",
        employee: "$35,000",
        dependent: "$35,000",
    },
    {
        category: "",
        type: "MedCare Rider",
        employee: "",
        dependent: "",
    },
    {
        category: "",
        type: "Overall Annual Limit",
        employee: "$204,000",
        dependent: "$204,000",
    },
    { category: "Core Benefit" },
    {
        category: "",
        type: "Daily Hospital Room & Board",
        employee: "$250",
        dependent: "$250",
    },
    {
        category: "",
        type: "In-Patient Treatment",
        employee: "Paid in Full, Up to Annual Limit",
        dependent: "Paid in Full, Up to Annual Limit",
    },
    {
        category: "",
        type: "Out-Patient Cancer Treatment",
        employee: "Paid in Full, Up to Annual Limit",
        dependent: "Paid in Full, Up to Annual Limit",
    },
    {
        category: "",
        type: "Out-Patient Dialysis",
        employee: "Paid in Full, Up to Annual Limit",
        dependent: "Paid in Full, Up to Annual Limit",
    },
    {
        category: "",
        type: "Out-Patient Surgical Procedure",
        employee: "Paid in Full, Up to Annual Limit",
        dependent: "Paid in Full, Up to Annual Limit",
    },
    {
        category: "",
        type: "Secondary Claim (per day)",
        employee: "$175",
        dependent: "$175",
    },
    {
        category: "",
        type: "Pre & Post Hospitalization Out-patient Treatment (per hospitalization)",
        employee: "$400",
        dependent: "$400",
    },
    {
        category: "",
        type: "Maternity Complication (per year)",
        employee: "$2,000",
        dependent: "$2,000",
    },
    {
        category: "",
        type: "Accidental Emergency Care (per hospitalization)",
        employee: "$1,000",
        dependent: "$1,000",
    },
    {
        category: "",
        type: "Emergency Road Ambulance (per hospitalization)",
        employee: "$400",
        dependent: "$400",
    },
    {
        category: "",
        type: "Emergency Evacuation & Repatriation",
        employee: "Included",
        dependent: "Included",
    },
    {
        category: "Optional Benefit",
    },
    {
        category: "",
        type: "Out-Patient Care (per year)",
        employee: "$4,000",
        dependent: "$4,000",
    },
    {
        category: "",
        type: "Out-Patient Care (per visit)",
        employee: "Unlimited",
        dependent: "Unlimited",
    },
    {
        category: "",
        type: "Hospital Companion Benefit",
        employee: "Paid in Full, Up to Annual Limit",
        dependent: "Paid in Full, Up to Annual Limit",
    },
    {
        category: "",
        type: "Durable Medical Equipment (per year)",
        employee: "$300",
        dependent: "$300",
    },
    {
        category: "",
        type: "Preventative Care (per year)",
        employee: "$200",
        dependent: "$200",
    },
    {
        category: "",
        type: "Mental Care (per year)",
        employee: "$3,000",
        dependent: "$3,000",
    },
];

const BenefitsTable = () => {
    return (
        <Box component={Paper} elevation={0}>
            <Box
                sx={{
                    maxWidth: "1820px",
                    mx: "auto",
                    p: 2,
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        color: "primary.main",

                        my: 5,
                    }}
                >
                    {" "}
                    COVER PLAN AND PREMIUM{" "}
                </Typography>
                {/* <TableContainer component={Paper} elevation={0}> */}
                <Typography
                    variant="h5"
                    sx={{
                        p: 2,
                        bgcolor: "primary.main",
                        color: "#fff",
                        textAlign: "center",
                        fontWeight: 700,
                    }}
                >
                    BENEFITS SCHEDULE
                </Typography>
                {/* <TableHead> */}
                <Grid
                    container
                    spacing={2}
                    columns={12}
                    sx={{
                        width: "100%",
                        backgroundColor: "#000000",
                        color: "#fff",
                        textAlign: "center",
                    }}
                >
                    <Grid item size={{ xs: 12, lg: 4 }}>
                        <Typography variant="h6">Type</Typography>
                    </Grid>

                    <Grid item size={{ xs: 6, lg: 4 }}>
                        <Typography variant="h6">Employee</Typography>
                    </Grid>
                    <Grid item size={{ xs: 6, lg: 4 }}>
                        <Typography variant="h6">Dependent</Typography>
                    </Grid>
                </Grid>

                {data.map((row, index) => (
                    <StyledTableRow
                        key={index}
                        sx={{
                            backgroundColor: row.category
                                ? "secondary.main"
                                : "inherit",
                            color: row.category ? "white" : "inherit",
                        }}
                    >
                        <Grid
                            container
                            spacing={2}
                            columns={12}
                            sx={{
                                width: "100%",
                                alignItems: "center",
                                textAlign: "center",
                                p: 2,
                            }}
                        >
                            <Grid item size={{ xs: 12, lg: 4 }}>
                                <Typography variant="h6" p={1} fontWeight={600}>
                                    {row.type}
                                </Typography>
                            </Grid>
                            {row.category ? (
                                <Grid item size={{ xs: 12, lg: 12 }}>
                                    <Typography
                                        pb={1}
                                        variant="h6"
                                        sx={{
                                            textAlign: "center",

                                            fontWeight: row.category
                                                ? "bold"
                                                : "normal",
                                            color: row.category
                                                ? "primary.main"
                                                : "inherit",
                                        }}
                                    >
                                        {row.category}
                                    </Typography>
                                </Grid>
                            ) : (
                                <></>
                            )}
                            <Grid item size={{ xs: 6, lg: 4 }}>
                                <Typography variant="h6" pb={1}>
                                    {row.employee}
                                </Typography>
                            </Grid>
                            <Grid item size={{ xs: 6, lg: 4 }}>
                                <Typography variant="h6" pb={1}>
                                    {row.dependent}
                                </Typography>
                            </Grid>
                        </Grid>
                    </StyledTableRow>
                ))}
                {/* </TableContainer>{" "} */}
            </Box>
        </Box>
    );
};

export default BenefitsTable;
