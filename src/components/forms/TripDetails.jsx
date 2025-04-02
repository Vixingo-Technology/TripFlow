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

export default function TripDetails() {
    // Form control
    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    // chip
    const [personName, setPersonName] = React.useState([]);

    const [destination, setDestination] = React.useState([]);
    // departure date
    const [departureDate, setDepartureDate] = React.useState();
    // return date
    const [returnDate, setReturnDate] = React.useState();
    // travels
    const [travelers, setTravelers] = React.useState([
        {
            id: 1,
            birthMonth: "",
            birthYear: "",
        },
    ]);

    // selected plan
    const [selectedPlan, setSelectedPlan] = React.useState(null);

    const [checked, setChecked] = React.useState(false);

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

    React.useEffect(() => {
        console.log("risk", personName);
        console.log("value", value);
        console.log("destination", destination);
        console.log("departureDate", departureDate);
        console.log("returnDate", returnDate);
        console.log("travelers", travelers);
        console.log("selectedPlan", selectedPlan);
    });
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
                    <Grid size={{ xs: 12, md: 6 }}>
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
                    <Grid size={{ xs: 12, md: 6 }}>
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
