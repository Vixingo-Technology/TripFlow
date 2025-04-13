import React from "react";
// import { useSelector } from 'react-redux';
import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    MenuItem,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    FormControlLabel,
    Select,
    TextField,
    Typography,
    Checkbox,
    Divider,
} from "@mui/material";
import {
    DatePicker,
    LocalizationProvider,
    MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import CheckoutSummary from "../sections/CheckoutSummary";

const options = [
    "CAMBODIAN",
    "AMERICAN",
    "ITALIAN",
    "MEXICAN",
    "JAPANESE",
    "CHINESE",
    // Add more options here
];

export default function CheckoutForm() {
    return (
        <>
            {" "}
            <Box py={2} sx={{ maxWidth: "1200px", mx: "auto" }}>
                <Grid container spacing={4}>
                    {/* Left Column - Form */}
                    <Grid size={{ xs: 12, md: 7 }}>
                        {/* Customer Details */}
                        <Card variant="outlined">
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    mb={2}
                                    fontWeight={"bold"}
                                    gutterBottom
                                >
                                    Personal Details
                                </Typography>

                                <Grid container spacing={2}>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Name"
                                            placeholder="e.g: James Wong"
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <FormControl fullWidth>
                                            <Select
                                                defaultValue="CAMBODIAN"
                                                displayEmpty
                                            >
                                                {options.map((option) => (
                                                    <MenuItem
                                                        key={option}
                                                        value={option}
                                                    >
                                                        {option}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="ID/Passport Number"
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            placeholder="e.g: jameswong@gmail.com"
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Phone"
                                            placeholder="+855 e.g 8551233456"
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <DemoContainer
                                                components={["DatePicker"]}
                                            >
                                                <MobileDatePicker
                                                    label="Date of Birth*"
                                                    openTo="year"
                                                    views={[
                                                        "year",
                                                        "month",
                                                        "day",
                                                    ]}
                                                    defaultValue={dayjs(
                                                        "1990-01-01"
                                                    )}
                                                    sx={{ width: "100%" }}
                                                    slotProps={{
                                                        layout: {
                                                            sx: {
                                                                "& .MuiYearCalendar-root":
                                                                    {
                                                                        gridTemplateColumns:
                                                                            "1fr !important",
                                                                        width: "100%",
                                                                        justifyContent:
                                                                            "center",
                                                                    },
                                                            },
                                                        },
                                                    }}
                                                />
                                            </DemoContainer>
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Occupation"
                                        />
                                    </Grid>

                                    <Grid size={12}>
                                        <FormControl>
                                            <FormLabel>Gender</FormLabel>
                                            <RadioGroup row>
                                                <FormControlLabel
                                                    value="female"
                                                    control={<Radio />}
                                                    label="Female"
                                                />
                                                <FormControlLabel
                                                    value="male"
                                                    control={<Radio />}
                                                    label="Male"
                                                />
                                            </RadioGroup>
                                        </FormControl>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>

                        {/* Upload ID Section */}
                        <Box mt={4}>
                            <Typography
                                color="text.primary"
                                fontWeight="bold"
                                // fontSize={14}
                                variant="h4"
                                // variant="h4"
                            >
                                Upload Your ID
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                (National ID/Passport/Birth Certificate)
                            </Typography>
                            <Typography
                                variant="caption"
                                color="text.secondary"
                            >
                                * only image (jpeg, png, webp, tif) and PDF file
                                is accepted for document upload
                            </Typography>
                            <Box mt={1}>
                                <Button variant="contained" component="label">
                                    Add
                                    <input hidden type="file" />
                                </Button>
                            </Box>
                        </Box>

                        {/* Property Details */}
                        <Box mt={4}>
                            <Card variant="outlined">
                                <CardContent>
                                    <Typography
                                        variant="h6"
                                        mb={2}
                                        fontWeight={"bold"}
                                        gutterBottom
                                    >
                                        Address Details
                                    </Typography>
                                    <Grid container spacing={2}>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="Line 1"
                                                placeholder="House number / Street Name"
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="Line 2"
                                                placeholder="District"
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="City/Province"
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="Sangkat / Commune"
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="Country"
                                                defaultValue="Cambodia"
                                                disabled
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <FormControlLabel
                                                control={
                                                    <Checkbox defaultChecked />
                                                }
                                                label="Is Risk Location same with your Mailing Address?"
                                            />
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Box>

                        {/* Navigation */}
                        <Box
                            mt={3}
                            display="flex"
                            justifyContent="space-between"
                        >
                            <Button variant="outlined">Back</Button>
                            <Button variant="contained">Next</Button>
                        </Box>
                    </Grid>

                    {/* Right Column - Summary */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <CheckoutSummary />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}
