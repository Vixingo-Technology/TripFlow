import {
    Box,
    Button,
    Checkbox,
    Chip,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Paper,
    Select,
    Stack,
    Typography,
    useTheme,
} from "@mui/material";
import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

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

function getStyles(name, personName, theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

export default function TavelForm({
    value,
    handleChange,
    personName,
    setPersonName,
    setDestination,
    destination,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    travelers,
    setTravelers,
    handleNext,
}) {
    const theme = useTheme();

    const handleChip = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };

    const handleCountry = (event) => {
        const {
            target: { value },
        } = event;
        setDestination(
            // On autofill we get a stringified value.
            typeof value === "string" ? value.split(",") : value
        );
    };
    const [checked, setChecked] = React.useState(false);
    // travelers
    const addTraveler = () => {
        setTravelers([
            ...travelers,
            { id: travelers.length + 1, birthMonth: "", birthYear: "" },
        ]);
    };

    const updateTraveler = (index, field, value) => {
        const updatedTravelers = travelers.map((traveler, i) =>
            i === index ? { ...traveler, [field]: value } : traveler
        );
        setTravelers(updatedTravelers);
    };
    const removeTraveler = (index) => {
        setTravelers(travelers.filter((_, i) => i !== index));
    };
    return (
        <Paper elevation={3} sx={{ padding: 2, margin: "20px auto" }}>
            <Typography
                variant="h4"
                color="primary"
                my={2}
                sx={{ textAlign: "center" }}
            >
                Tell Us Your Travel Details and Get a Quote
            </Typography>
            <Box
                sx={{ display: "flex", flexDirection: "column", gap: 2, px: 1 }}
            >
                <FormControl>
                    <FormLabel
                        id="demo-controlled-radio-buttons-group"
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
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleChange}
                        row
                    >
                        <FormControlLabel
                            value="single trip"
                            control={<Radio />}
                            label="Single Trip"
                        />
                        <FormControlLabel
                            value="annual multi trip"
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
                        value={personName}
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
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
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
                        value={destination}
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
                            <MenuItem
                                key={name}
                                value={name}
                                style={getStyles(name, personName, theme)}
                            >
                                {name}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Grid container columns={12} spacing={2}>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["DatePicker", "DatePicker"]}
                            >
                                <DatePicker
                                    sx={{ width: "100%" }}
                                    label="Departure Date"
                                    value={departureDate}
                                    onChange={(newValue) =>
                                        setDepartureDate(newValue)
                                    }
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                    <Grid item size={{ xs: 12, md: 6 }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer
                                components={["DatePicker", "DatePicker"]}
                            >
                                <DatePicker
                                    sx={{ width: "100%" }}
                                    label="Return Date"
                                    value={returnDate}
                                    onChange={(newValue) =>
                                        setReturnDate(newValue)
                                    }
                                />
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>
                </Grid>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={checked}
                            onChange={(event) =>
                                setChecked(event.target.checked)
                            }
                            inputProps={{ "aria-label": "controlled" }}
                        />
                    }
                    label="Group Travel"
                />
                {checked ? (
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
                        {travelers.map((traveler, index) => (
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
                                <Grid item size={{ xs: 12, md: 5 }}>
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
                                <Grid item size={{ xs: 12, md: 5 }}>
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
                                            label="Birth Month"
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
            <Button
                fullWidth
                variant="contained"
                onClick={handleNext}
                sx={{ my: 2 }}
            >
                Continue
            </Button>
            {/* <Typography></Typography> */}
        </Paper>
    );
}
