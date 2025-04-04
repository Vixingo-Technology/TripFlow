import { Box, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

export default function ReviewInfo() {
    const userData = useSelector((state) => state.quote);
    const { selectedPlan } = userData;
    const { selectedOptional } = userData;
    const { selectedTrip } = userData;
    const { departureDate } = userData;
    const { applicant } = userData;
    const { returnDate } = userData;
    const { selectedTravel } = userData;
    const { riskType } = userData;
    console.log(departureDate);

    return (
        <>
            {" "}
            <Paper elevation={3} sx={{ padding: 2, margin: "20px auto" }}>
                <Typography
                    variant="h4"
                    color="primary"
                    my={2}
                    // sx={{ textAlign: "center" }}
                >
                    Review Informations
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        {" "}
                        <Typography variant="body1">
                            Period of Insurance
                        </Typography>
                        <Typography variant="h6">
                            {departureDate.$y}/{departureDate.$M}/
                            {departureDate.$D} To {returnDate.$y}/
                            {returnDate.$M}/{returnDate.$D}
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Typography variant="body1">Plan</Typography>
                        <Typography variant="h6">
                            Travel insurance - {selectedPlan}
                        </Typography>
                    </Grid>
                </Grid>
                <br />
                <Typography variant="h5">
                    <b> {applicant.familyName}</b>{" "}
                    <Typography variant="h6">
                        Born : {applicant.dateOfBirth.$y}/
                        {applicant.dateOfBirth.$M}/{applicant.dateOfBirth.$D}
                    </Typography>
                </Typography>
                <br />
                {/* <Typography variant="h6">
                    <b> Optional:</b>{" "}
                    <Typography variant="h6">
                        travel insurance - {selectedOptional}
                    </Typography>
                </Typography>{" "} */}
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4 }}>
                        {" "}
                        <Typography variant="body1">Phone :</Typography>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                        <Typography variant="h6">
                            {applicant.countryCode}
                            {applicant.phoneNumber}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4 }}>
                        {" "}
                        <Typography variant="body1">Email :</Typography>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                        <Typography variant="h6">{applicant.email}</Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4 }}>
                        {" "}
                        <Typography variant="body1">Passport :</Typography>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                        <Typography variant="h6">
                            {applicant.passport}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4 }}>
                        {" "}
                        <Typography variant="body1">Address :</Typography>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                        <Typography variant="h6">
                            {applicant.city} {applicant.district}{" "}
                            {applicant.commune} {applicant.village}{" "}
                            {applicant.streetNo} {applicant.houseNo}
                        </Typography>
                    </Grid>
                </Grid>
                <br />

                <Typography variant="h6" mb={1}>
                    <b> Trip Details : </b>{" "}
                </Typography>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4 }}>
                        {" "}
                        <Typography variant="body1">Trip Type :</Typography>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                        <Typography variant="h6">
                            {userData.tripType}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid size={{ xs: 4 }}>
                        {" "}
                        <Typography variant="body1">
                            Departure Date :
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                        <Typography variant="h6">
                            {departureDate.$y}/{departureDate.$M}/
                            {departureDate.$D}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4 }}>
                        {" "}
                        <Typography variant="body1">Return Date :</Typography>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                        <Typography variant="h6">
                            {returnDate.$y}/{returnDate.$M}/{returnDate.$D}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 4 }}>
                        {" "}
                        <Typography variant="body1">Destination :</Typography>
                    </Grid>
                    <Grid size={{ xs: 8 }}>
                        {userData.destination.map((item) => (
                            <Typography variant="h6" key={item}>
                                {item}
                            </Typography>
                        ))}
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}
