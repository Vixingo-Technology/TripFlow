import {
    Box,
    Button,
    Checkbox,
    Chip,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    Stack,
    Typography,
    useTheme,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    updateQuoteData,
    addDestination,
    addRiskType,
    addDepartureDate,
    addReturnDate,
    isGroupTravel,
    addTravelers,
} from "../../utils/slice/Quote";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};
const countries = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "India",
    "Brazil",
    "South Africa",
];

const travelInsuranceCoverage = [
    "Trip Cancellation Coverage",
    "Trip Interruption Coverage",
    "Emergency Medical Coverage",
    "Emergency Evacuation & Repatriation",
    "Baggage Loss or Delay",
    "Travel Delay Coverage",
    "Accidental Death & Dismemberment (AD&D)",
    "Rental Car Damage Coverage",
    "Missed Connection Coverage",
    "Adventure Sports Coverage",
];

const birthMonths = [
    { label: "January", value: "01" },
    { label: "February", value: "02" },
    { label: "March", value: "03" },
    { label: "April", value: "04" },
    { label: "May", value: "05" },
    { label: "June", value: "06" },
    { label: "July", value: "07" },
    { label: "August", value: "08" },
    { label: "September", value: "09" },
    { label: "October", value: "10" },
    { label: "November", value: "11" },
    { label: "December", value: "12" },
];

const birthYears = Array.from({ length: 100 }, (_, index) => {
    const year = new Date().getFullYear() - index; // Generates the last 100 years dynamically
    return { label: `${year}`, value: `${year}` };
});

export default function TripDetails() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.quote);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateQuoteData({ field: name, value })); // Dispatch the update action
    };

    const handleChip = (event) => {
        const {
            target: { value },
        } = event;
        dispatch(
            addRiskType(
                // On autofill we get a stringified value.
                typeof value === "string" ? value.split(",") : value
            )
        );
    };

    const handleCountry = (event) => {
        const {
            target: { value },
        } = event;
        dispatch(
            addDestination(
                // On autofill we get a stringified value.
                typeof value === "string" ? value.split(",") : value
            )
        );
    };
    // travelers
    const addTraveler = () => {
        dispatch(
            addTravelers([
                ...userData.travelers,
                {
                    id: userData.travelers.length + 1,
                    birthMonth: "",
                    birthYear: "",
                },
            ])
        );
    };

    const updateTraveler = (index, field, value) => {
        const updatedTravelers = userData.travelers.map((traveler, i) =>
            i === index ? { ...traveler, [field]: value } : traveler
        );
        dispatch(addTravelers(updatedTravelers));
    };
    // const removeTraveler = (index) => {
    //     dispatch(useDispatch(travelers.filter((_, i) => i !== index)));
    // };

    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 2,
                    px: 1,
                    py: 2,
                }}
            >
                <FormControl>
                    <FormLabel
                        id="tripType"
                        sx={{
                            mb: 1,
                            fontWeight: "bold",
                            // color: "text",
                            fontSize: 20,
                        }}
                    >
                        Trip Type
                    </FormLabel>
                    <RadioGroup
                        aria-labelledby="tripType"
                        name="tripType"
                        value={userData.tripType}
                        onChange={handleChange}
                        row
                    >
                        <FormControlLabel
                            value="Single Trip"
                            control={<Radio />}
                            label="Single Trip"
                        />
                        <FormControlLabel
                            value="Annual Multi Trip"
                            control={<Radio />}
                            label="Annual Multi Trip"
                        />
                    </RadioGroup>
                </FormControl>
                <Typography
                    sx={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "text.secondary",
                    }}
                >
                    Risk Type
                </Typography>
                <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-multiple-chip-label">
                        Select Risk Coverage
                    </InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={userData.riskType}
                        onChange={handleChip}
                        input={
                            <OutlinedInput
                                id="select-multiple-chip"
                                label="Select Risk Coverage"
                            />
                        }
                        renderValue={(selected) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                }}
                            >
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {travelInsuranceCoverage.map((name) => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                {/*  */}
                <Typography
                    sx={{
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "text.secondary",
                    }}
                >
                    Travel Destination
                </Typography>
                <FormControl sx={{ width: "100%" }}>
                    <InputLabel id="demo-multiple-chip-label">
                        Select Travel Destination
                    </InputLabel>
                    <Select
                        labelId="demo-multiple-chip-label"
                        id="demo-multiple-chip"
                        multiple
                        value={userData.destination}
                        onChange={handleCountry}
                        input={
                            <OutlinedInput
                                id="select-multiple-chip"
                                label="Select Travel Destination"
                            />
                        }
                        renderValue={(selected) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 0.5,
                                }}
                            >
                                {selected.map((value) => (
                                    <Chip key={value} label={value} />
                                ))}
                            </Box>
                        )}
                        MenuProps={MenuProps}
                    >
                        {countries.map((name) => (
                            <MenuItem key={name} value={name}>
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                <Grid container columns={12} spacing={2}>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["DatePicker", "DatePicker"]}
                            >
                                <DatePicker
                                    sx={{ width: "100%" }}
                                    label="Departure Date"
                                    format="LL"
                                    value={userData.departureDate}
                                    onChange={(newValue) =>
                                        dispatch(addDepartureDate(newValue))
                                    }
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["DatePicker", "DatePicker"]}
                            >
                                <DatePicker
                                    sx={{ width: "100%" }}
                                    format="LL"
                                    label="Return Date"
                                    value={userData.returnDate}
                                    onChange={(newValue) =>
                                        dispatch(addReturnDate(newValue))
                                    }
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={userData.groupTravel}
                            onChange={(event) =>
                                dispatch(isGroupTravel(event.target.checked))
                            }
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    }
                    label="Group Travel"
                />
                {userData.groupTravel ? (
                    <>
                        <Stack
                            display={"flex"}
                            flexDirection={"row"}
                            justifyContent={"space-between"}
                        >
                            <Typography variant="h4">Travelers</Typography>
                            <Button variant="outlined" onClick={addTraveler}>
                                Add Traveler
                            </Button>
                        </Stack>
                        {userData.travelers.map((traveler, index) => (
                            <Grid
                                container
                                columns={12}
                                spacing={2}
                                sx={{ my: 1 }}
                                key={traveler.id}
                            >
                                <Grid size={{ xs: 12, md: 2 }}>
                                    {/* <Button
                                        onClick={() => removeTraveler(index)}
                                    >
                                        remove
                                    </Button> */}
                                    <Typography variant="h6" m={2}>
                                        Traveler {traveler.id}
                                    </Typography>
                                </Grid>
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <FormControl
                                        sx={{ width: "100%", mb: 2 }}
                                        variant="outlined"
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Birth Month
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={traveler.birthMonth}
                                            label="Birth Month"
                                            onChange={(e) =>
                                                updateTraveler(
                                                    index,
                                                    "birthMonth",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {birthMonths.map((month) => (
                                                <MenuItem
                                                    key={month.label}
                                                    value={month.value}
                                                >
                                                    {month.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <FormControl
                                        sx={{ width: "100%", mb: 2 }}
                                        variant="outlined"
                                    >
                                        <InputLabel id="demo-simple-select-label">
                                            Birth Year
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={traveler.birthYear}
                                            label="Birth Year"
                                            onChange={(e) =>
                                                updateTraveler(
                                                    index,
                                                    "birthYear",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {birthYears.map((year) => (
                                                <MenuItem
                                                    key={year.label}
                                                    value={year.value}
                                                >
                                                    {year.label}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                </Grid>
                            </Grid>
                        ))}
                    </>
                ) : (
                    <>{/* <Typography>No Traveler Added</Typography> */}</>
                )}
            </Box>
        </>
    );
}
