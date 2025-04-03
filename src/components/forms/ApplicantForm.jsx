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
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addChilds,
    addDateOfBirth,
    updateApplicantData,
    updateQuoteData,
} from "../../utils/slice/Quote";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
const titles = [
    "Mr",
    "Mrs",
    "Dr",
    "Prof",
    "Assoc Prof",
    "Asst Prof",
    "Engr",
    "Arch",
    "CPA",
    "Esq",
    "Hon",
    "Rev",
    "Capt",
    "Col",
    "Gen",
    "Judge",
    "Attorney",
];

const genders = ["Male", "Female"];

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

export default function ApplicantForm() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.quote.applicant);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateApplicantData({ field: name, value })); // Dispatch the update action
    };

    // add child
    const addChild = () => {
        dispatch(
            addChilds([
                ...userData.childs,
                {
                    id: userData.childs.length + 1,
                    familyName: "",
                    givenName: "",
                    passport: "",
                    dateOfBirth: null,
                    age: "",
                },
            ])
        );
    };

    const updateChild = (index, field, value) => {
        const updatedTravelers = userData.childs.map((child, i) =>
            i === index ? { ...child, [field]: value } : child
        );
        dispatch(addChilds(updatedTravelers));
    };
    const removeChild = (index) => {
        dispatch(addChilds(userData.childs.filter((_, i) => i !== index)));
    };

    return (
        <>
            <Grid container spacing={2} mb={2}>
                <Grid
                    size={{ xs: 12, md: 6 }}
                    display={"flex"}
                    // flexBasis={"0"}
                    direction={"row"}
                    gap={2}
                >
                    <FormControl>
                        <InputLabel id="demo-simple-select-label">
                            Title
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="title"
                            value={userData.title}
                            label="Title"
                            onChange={handleChange}
                        >
                            {titles.map((title) => (
                                <MenuItem key={title} value={title}>
                                    <Typography>{title}</Typography>
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
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
            </Grid>
            <Grid container alignItems={"flex-end"} mb={2} spacing={2}>
                <Grid
                    size={{ xs: 12, md: 6 }}
                    display={"flex"}
                    // flexBasis={"0"}
                    direction={{ xs: "column", md: "row" }}
                    alignItems={"self-end"}
                    gap={2}
                >
                    <Box>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["DatePicker", "DatePicker"]}
                            >
                                <DatePicker
                                    sx={{ width: "100%" }}
                                    label="Date of Birth*"
                                    value={userData.dateOfBirth}
                                    onChange={(newValue) =>
                                        dispatch(addDateOfBirth(newValue))
                                    }
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Box>

                    <TextField
                        value={userData.age}
                        variant="outlined"
                        label="Age at next birthday"
                        name="age"
                        onChange={handleChange}
                        // sx={{ flex: 1 }}
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
            </Grid>
            <Grid container spacing={2} mb={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        value={userData.passport}
                        variant="outlined"
                        label="Passport*"
                        name="passport"
                        onChange={handleChange}
                        sx={{ flex: 1 }}
                        placeholder="Enter Passport or ID"
                        fullWidth
                    />
                </Grid>
                <Grid
                    size={{ xs: 12, md: 6 }}
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
            <Grid container spacing={2} mb={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        value={userData.email}
                        variant="outlined"
                        label="Email*"
                        name="email"
                        onChange={handleChange}
                        sx={{ flex: 1 }}
                        placeholder="Enter your email"
                        fullWidth
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        value={userData.city}
                        variant="outlined"
                        label="City - Province*"
                        name="city"
                        placeholder="Enter City - Province"
                        onChange={handleChange}
                        sx={{ flex: 4 }}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} mb={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        value={userData.district}
                        variant="outlined"
                        label="District*"
                        name="district"
                        onChange={handleChange}
                        sx={{ flex: 1 }}
                        placeholder="Enter District"
                        fullWidth
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        value={userData.commune}
                        variant="outlined"
                        label="Commune*"
                        name="commune"
                        placeholder="Enter Commune"
                        onChange={handleChange}
                        sx={{ flex: 4 }}
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Grid container spacing={2} mb={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                    <TextField
                        value={userData.village}
                        variant="outlined"
                        label="Village*"
                        name="village"
                        onChange={handleChange}
                        sx={{ flex: 1 }}
                        placeholder="Enter Village Name"
                        fullWidth
                    />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", gap: 2 }}>
                    <TextField
                        value={userData.houseNo}
                        variant="outlined"
                        label="House No*"
                        name="houseNo"
                        onChange={handleChange}
                        // sx={{ flex: 1 }}
                        placeholder="Enter House Number"
                        fullWidth
                    />
                    <TextField
                        value={userData.streetNo}
                        variant="outlined"
                        label="Street No*"
                        name="streetNo"
                        onChange={handleChange}
                        // sx={{ flex: 1 }}
                        placeholder="Enter Street Number"
                        fullWidth
                    />
                </Grid>
            </Grid>
            <Typography sx={{ mb: 1 }}>Full Address</Typography>
            <Typography
                variant="h6"
                sx={{ backgroundColor: "secondary.main", color: "#fff", p: 1 }}
            >
                {[
                    userData.city,
                    userData.district,
                    userData.commune,
                    userData.village,
                    userData.houseNo,
                    userData.streetNo,
                ]
                    .filter((value) => value)
                    .join(", ")}
                , CAMBODIA
            </Typography>

            {userData.childs.map((child, index) => (
                <>
                    <Typography variant="h6" my={2}>
                        Child {child.id}
                    </Typography>
                    <Grid
                        container
                        columns={12}
                        spacing={2}
                        sx={{ my: 1 }}
                        key={child.id}
                    >
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                value={child.familyName}
                                variant="outlined"
                                label="Family Name"
                                onChange={(e) =>
                                    updateChild(
                                        index,
                                        "familyName",
                                        e.target.value
                                    )
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                value={child.givenName}
                                variant="outlined"
                                label="Given Name"
                                onChange={(e) =>
                                    updateChild(
                                        index,
                                        "givenName",
                                        e.target.value
                                    )
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                value={child.passport}
                                variant="outlined"
                                label="Passport"
                                onChange={(e) =>
                                    updateChild(
                                        index,
                                        "passport",
                                        e.target.value
                                    )
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    label="Date of Birth"
                                    value={child.dateOfBirth}
                                    onChange={(newValue) =>
                                        updateChild(
                                            index,
                                            "dateOfBirth",
                                            newValue
                                        )
                                    }
                                    sx={{ width: "100%" }}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <TextField
                                value={child.age}
                                variant="outlined"
                                label="Age"
                                onChange={(e) =>
                                    updateChild(index, "age", e.target.value)
                                }
                                fullWidth
                            />
                        </Grid>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <Button
                                fullWidth
                                variant="outlined"
                                color="error"
                                onClick={() => removeChild(index)}
                                sx={{ height: "100%" }}
                            >
                                Remove Child
                            </Button>
                        </Grid>
                    </Grid>
                </>
            ))}
            <Button
                variant="contained"
                onClick={addChild}
                size="large"
                sx={{ my: 2 }}
                fullWidth
            >
                Add Child
            </Button>
        </>
    );
}
