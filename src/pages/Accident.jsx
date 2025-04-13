import {
    Box,
    Breadcrumbs,
    Button,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import heroBanner from "../assets/hero-banner.png";
import GrainIcon from "@mui/icons-material/Grain";
import AccessibleOutlinedIcon from "@mui/icons-material/AccessibleOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import PictureAsPdfOutlinedIcon from "@mui/icons-material/PictureAsPdfOutlined";

const exclusions = [
    [
        "War or any act thereof, act of terrorism, invasion or civil war, rebellion or insurrection, strike, riot, civil commotion, military or popular uprising.",
        "Nuclear weapons material or ionising radiation",
    ],
    [
        "Engaging in or taking part of wood-working machinery operated by mechanical power or motor-riding on any motor-cycle, engaged in any professional",
        "Sports or any kind of racing activity.",
    ],
    [
        "The Insured is in a state of unsound mind.",
        "The Insured is in full time service of any armed force of any country.",
    ],
    [
        "Flying or any aerial activity except as passenger in a properly licensed power-driven aircraft.",
        "As a member of an air crew, ships crew, or oil-rig crew, or as divers or fishermen.",
    ],
    [
        "Participating in mining, logging, sawmilling, underground work, demolition, blasting, or quarrying.",
        "Intentional self-injury or suicide.",
    ],
    ["Childbirth or pregnancy.", "(AIDS) or AIDS related complex (ARC)."],
];

export default function Accident() {
    return (
        <Box>
            <Breadcrumbs
                aria-label="breadcrumb"
                separator="›"
                sx={{
                    py: 1,
                    px: 2,
                    backgroundColor: "#414141",
                    color: "#efefef",
                }}
            >
                <NavLink
                    to="/"
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                        }}
                    >
                        <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                        Home
                    </Box>
                </NavLink>

                <Typography
                    sx={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <PersonalInjuryOutlinedIcon
                        sx={{ mr: 0.5 }}
                        fontSize="inherit"
                    />
                    Personal Accident
                </Typography>
            </Breadcrumbs>

            <Grid
                container
                sx={{
                    alignItems: "center",
                    maxWidth: "1000px",
                    mx: "auto",
                    py: 8,
                    px: 2,
                }}
            >
                <Grid size={{ xs: 12, md: 6 }}>
                    <Typography
                        variant="h4"
                        color="text.primary"
                        component="h2"
                        sx={{ mt: 2 }}
                    >
                        Personal Accident Insurance
                    </Typography>
                    <Typography variant="body1" my={1} color="text.primary">
                        {" "}
                        A gift of future for your family.
                    </Typography>
                    <br />
                    <NavLink to={"online"}>
                        <Button variant="contained" size="large">
                            Buy Now
                        </Button>
                    </NavLink>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <Box sx={{ maxWidth: "300px", mx: "auto" }}>
                        <img src={heroBanner} alt="" width={"100%"} />
                    </Box>
                </Grid>
            </Grid>
            <Box
                sx={{
                    backgroundColor: "primary.main",
                    textAlign: "center",
                    py: 6,
                    color: "#ffffff",
                    px: 2,
                }}
            >
                <Typography variant="h4" my={2}>
                    At a Glance
                </Typography>
                <Typography sx={{ maxWidth: "700px", mx: "auto", mb: 2 }}>
                    Life is full of unexpected twist and turns. Don't let a bad
                    accident or a tragedy ruin the lives of your loved ones.
                    With Etiqa's Personal Accident Insurance, you are covered
                    with greater benefits and higher coverage.
                </Typography>
            </Box>
            <Box
                sx={{
                    my: 8,
                    px: 2,
                    color: "text.primary",
                    textAlign: "center",
                }}
            >
                <Typography variant="h4" mb={2}>
                    Period of Insurance
                </Typography>
                <Typography variant="body1">
                    You are covered for a period of 12 months and it is a yearly
                    renewable policy.
                </Typography>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: 8,
                        flexWrap: "wrap",
                        maxWidth: "700px",
                        mx: "auto",
                        gap: 4,
                        borderBottom: "1px solid #EF443B",
                    }}
                >
                    <Box sx={{ maxWidth: "200px", mx: "auto" }}>
                        {" "}
                        <AccessibleOutlinedIcon
                            color="primary"
                            sx={{ fontSize: "100px" }}
                        />
                        <Typography variant="body1">
                            Permanent disablement benefits up to USD 250,000
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: "200px", mx: "auto" }}>
                        <GppGoodOutlinedIcon
                            color="primary"
                            sx={{ fontSize: "100px" }}
                        />
                        <Typography>
                            Death & disappearance benefits up to USD 250,000
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: "200px", mx: "auto" }}>
                        <MilitaryTechOutlinedIcon
                            color="primary"
                            sx={{ fontSize: "100px" }}
                        />
                        <Typography>
                            Repatriation and Funeral Allowances
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: "200px", mx: "auto" }}>
                        <VolunteerActivismOutlinedIcon
                            color="primary"
                            sx={{ fontSize: "100px" }}
                        />

                        <Typography>
                            Affordable premium as low as USD 20
                        </Typography>
                    </Box>
                    <Box sx={{ maxWidth: "200px", mx: "auto" }}>
                        <MonitorHeartOutlinedIcon
                            color="primary"
                            sx={{ fontSize: "100px" }}
                        />
                        <Typography>
                            Medical Expenses coverage up to USD 2,000 (optional)
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ color: "text.primary" }}>
                <Typography variant="h4" sx={{ textAlign: "center", my: 2 }}>
                    General Exclusions
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                    This list is non-exhaustive. Please refer to the Insurance
                    Policy Contract for full list of exclusions.
                </Typography>

                <Grid
                    container
                    sx={{
                        maxWidth: "800px",
                        px: 2,
                        mx: "auto",
                        my: 8,
                        pb: 4,
                    }}
                >
                    {exclusions.map((row, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            {row.map((item, colIndex) => (
                                <Grid size={{ xs: 12, md: 6 }} key={colIndex}>
                                    <Paper
                                        elevation={0}
                                        style={{
                                            padding: 16,
                                            height: "100%",
                                            border: "1px solid #edefed",
                                        }}
                                    >
                                        <Typography variant="body1">
                                            {item}
                                        </Typography>
                                    </Paper>
                                </Grid>
                            ))}
                        </React.Fragment>
                    ))}
                </Grid>
                <Box
                    sx={{
                        textAlign: "center",
                        maxWidth: "800px",
                        mx: "auto",
                        py: 4,
                        borderTop: "1px solid #EF443B",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{ textAlign: "center", my: 2 }}
                    >
                        Download
                    </Typography>
                    <Typography variant="body1" sx={{ textAlign: "center" }}>
                        Product related documents download:
                    </Typography>
                    <Button
                        variant="outlined"
                        sx={{ my: 4 }}
                        size="large"
                        startIcon={<PictureAsPdfOutlinedIcon />}
                    >
                        Download
                    </Button>
                </Box>
            </Box>
            <Box sx={{ bgcolor: "primary.main" }}>
                <Typography
                    variant="body1"
                    sx={{ textAlign: "center", py: 4, color: "#ffffff" }}
                >
                    Copyright © TripFlow Cambodia. All Rights Reserved.
                </Typography>
            </Box>
        </Box>
    );
}
