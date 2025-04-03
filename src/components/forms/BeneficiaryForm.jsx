import React from "react";
import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
    addChilds,
    addDateOfBirth,
    updateApplicantData,
    updateBeneficiaryData,
    updateQuoteData,
} from "../../utils/slice/Quote";
const genders = ["Male", "Female"];
const relationship = ["Parent", "Children", "Legal Guardian", "Spouse"];

const countryCodes = [
    { code: "+1", flag: "🇺🇸" }, // United States / Canada
    { code: "+44", flag: "🇬🇧" }, // United Kingdom
    { code: "+49", flag: "🇩🇪" }, // Germany
    { code: "+33", flag: "🇫🇷" }, // France
    { code: "+91", flag: "🇮🇳" }, // India
    { code: "+61", flag: "🇦🇺" }, // Australia
    { code: "+81", flag: "🇯🇵" }, // Japan
    { code: "+55", flag: "🇧🇷" }, // Brazil
    { code: "+27", flag: "🇿🇦" }, // South Africa
    { code: "+34", flag: "🇪🇸" }, // Spain
];

export default function BeneficiaryForm() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.quote.beneficiary);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateBeneficiaryData({ field: name, value })); // Dispatch the update action
    };
    return (
        <div>
            <Grid container spacing={2} mb={2}>
                <Grid
                    size={{ xs: 12, md: 6 }}
                    display={"flex"}
                    // flexBasis={"0"}
                    direction={"row"}
                    gap={2}
                >
                    <TextField
                        value={userData.familyName}
                        variant="outlined"
                        label="Family Name*"
                        name="familyName"
                        onChange={handleChange}
                        sx={{ flex: 1 }}
                        fullWidth
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        value={userData.givenName}
                        variant="outlined"
                        label="Given Name*"
                        name="givenName"
                        onChange={handleChange}
                        sx={{ flex: 1 }}
                        fullWidth
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    {" "}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Gender
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="gender"
                            value={userData.gender}
                            label="Gender"
                            onChange={handleChange}
                        >
                            {genders.map((gender) => (
                                <MenuItem key={gender} value={gender}>
                                    <Typography>{gender}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    {" "}
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                            Relationship
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="relationship"
                            value={userData.relationship}
                            label="Relationship"
                            onChange={handleChange}
                        >
                            {relationship.map((rs) => (
                                <MenuItem key={rs} value={rs}>
                                    <Typography>{rs}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid
                    size={{ xs: 12 }}
                    display={"flex"}
                    // flexBasis={"0"}
                    direction={"row"}
                    gap={2}
                >
                    <FormControl sx={{ flex: 1 }}>
                        <InputLabel id="demo-simple-select-label">
                            Country
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="countryCode"
                            value={userData.countryCode}
                            label="Country"
                            onChange={handleChange}
                        >
                            {countryCodes.map((cc) => (
                                <MenuItem key={cc.code} value={cc.code}>
                                    <Typography>
                                        {cc.flag} {cc.code}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        value={userData.phoneNumber}
                        variant="outlined"
                        label="Phone Number*"
                        name="phoneNumber"
                        onChange={handleChange}
                        sx={{ flex: 4 }}
                        fullWidth
                    />
                </Grid>
            </Grid>
        </div>
    );
}
