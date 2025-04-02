import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import IconCard from "../cards/IconCard";
import LuggageIcon from "@mui/icons-material/Luggage";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PersonalInjuryIcon from "@mui/icons-material/PersonalInjury";
import FlightIcon from "@mui/icons-material/Flight";
import AccessibleIcon from "@mui/icons-material/Accessible";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
export default function Benefits() {
    return (
        <div
            style={{
                maxWidth: "1820px",
                margin: "20px auto",
            }}
        >
            <Box sx={{ p: 2 }}>
                <Typography variant="h3" color="primary" sx={{ my: 5 }}>
                    Key Benefits
                </Typography>
                <Typography variant="h5">
                    Travel Insurance can get you compensation for the following
                    events:
                </Typography>
                <Grid container columns={12} sx={{ mt: 5 }}>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <IconCard
                            icon={
                                <LuggageIcon
                                    style={{ width: "100px", height: "100px" }}
                                />
                            }
                            title={"Baggage and personal effects losses"}
                            des={
                                "Payable for loss and damage to your baggage and personal effects - such as jewelry and photographic equipment, up to the maximum limits stated in your chosen plan. "
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <IconCard
                            icon={
                                <HealthAndSafetyIcon
                                    style={{ width: "100px", height: "100px" }}
                                />
                            }
                            title={
                                "Overseas medical expenses and other additional expenses"
                            }
                            des={
                                " Payable for expenses incurred outside Cambodia such as medical, surgical, hospital, and other charges as a result of injury or sickness, including additional travel and accommodation expenses and return of mortal remains in the event of death.  "
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <IconCard
                            icon={
                                <PersonalInjuryIcon
                                    style={{ width: "100px", height: "100px" }}
                                />
                            }
                            title={"Personal liability"}
                            des={
                                " Compensation against legal liability for injury to another person or loss or damage to another person's property. Payable for unrecoverable loss of money, credit cards, and traveller's cheques.  "
                            }
                        />
                    </Grid>

                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <IconCard
                            icon={
                                <FlightIcon
                                    style={{ width: "100px", height: "100px" }}
                                />
                            }
                            title={"Hijacking"}
                            des={
                                " Payable in the event of a hijack lasting more than 12 consecutive hours at US$600 per day on the Super Plan and US$300 per day on the Standard Plan up to a maximum of 5 days.  "
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <IconCard
                            icon={
                                <AccessibleIcon
                                    style={{ width: "100px", height: "100px" }}
                                />
                            }
                            title={"Accidental death and permanent disablement"}
                            des={
                                " Compensation on Accidental Death and Permanent Disablement to you and your accompanying children. "
                            }
                        />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6, lg: 4 }}>
                        <IconCard
                            icon={
                                <RestartAltIcon
                                    style={{ width: "100px", height: "100px" }}
                                />
                            }
                            title={"24-hour services"}
                            des={
                                " 24-hour emergency medical assistance and services provided by Europe Assistance "
                            }
                        />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}
