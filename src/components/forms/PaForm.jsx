import {
    Box,
    Card,
    CardContent,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Grid,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Slide,
    Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import img from "../../assets/get.jpg";
import Logo from "../dynamic/Logo";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import { NavLink } from "react-router";
import {
    DatePicker,
    LocalizationProvider,
    MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import dayjs from "dayjs";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Check, QuestionMarkOutlined } from "@mui/icons-material";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const occupations = [
    "Software Engineer",
    "Teacher",
    "Doctor",
    "Accountant",
    "Graphic Designer",
    "Marketing Manager",
    "Civil Engineer",
    "Nurse",
    "Electrician",
    "Sales Executive",
];
const plans = [
    // {
    //     name: "Basic",
    //     insured: "$10,000.00",
    //     price: "$21.00",
    //     features: [
    //         "Accidental death",
    //         "Permanent Disablement",
    //         "Disappearance",
    //         "Loss of two limbs",
    //         "Total loss of sight",
    //         "Total paralysis",
    //         "Complete and incurable insanity",
    //         "Permanently bedridden",
    //     ],
    // },
    {
        name: "Good",
        insured: "$30,000.00",
        price: "$49.00",
        features: [
            "Accidental death",
            "Permanent Disablement",
            "Disappearance",
            "Loss of two limbs",
            "Total loss of sight",
            "Total paralysis",
            "Complete and incurable insanity",
            "Permanently bedridden",
        ],
    },
    // {
    //     name: "Very Good",
    //     insured: "$50,000.00",
    //     price: "$77.00",
    //     features: [
    //         "Accidental death",
    //         "Permanent Disablement",
    //         "Disappearance",
    //         "Loss of two limbs",
    //         "Total loss of sight",
    //         "Total paralysis",
    //         "Complete and incurable insanity",
    //         "Permanently bedridden",
    //     ],
    // },
    {
        name: "Better",
        insured: "$100,000.00",
        price: "$147.00",
        features: [
            "Accidental death",
            "Permanent Disablement",
            "Disappearance",
            "Loss of two limbs",
            "Total loss of sight",
            "Total paralysis",
            "Complete and incurable insanity",
            "Permanently bedridden",
        ],
    },
    {
        name: "Best",
        insured: "$250,000.00",
        price: "$357.00",
        features: [
            "Accidental death",
            "Permanent Disablement",
            "Disappearance",
            "Loss of two limbs",
            "Total loss of sight",
            "Total paralysis",
            "Complete and incurable insanity",
            "Permanently bedridden",
        ],
    },
];

const benefits = [
    "Unlimited number of claim per year",
    "Road Ambulance Fee",
    "Dental Treatment (Only for injury to sound and natural teeth)",
    "Medical - In Hospital Expenses",
    "Medical - Outpatient Expenses",
    "Surgery",
    "X-Ray",
    "CT-Scan",
];

const options = [
    { label: "$1,000.00", price: "$34.45" },
    { label: "$1,500.00", price: "$51.68" },
    { label: "$2,000.00", price: "$68.90" },
];

export default function PaForm() {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const [dob, setDob] = React.useState(null);
    const [ageError, setAgeError] = React.useState("");
    const [occupation, setOccupation] = React.useState("");
    const [selectedPlan, setSelectedPlan] = useState("");
    const [medical, setMedical] = useState(false);
    const [selectedValue, setSelectedValue] = useState("");
    const [showQuote, setShowQuote] = useState(false);
    const [jobError, setJobError] = React.useState("");

    const boxRef = useRef(null);

    const getPrice = (name) => {
        const plan = options.find((option) => option.label === label);
        // return options.find((opt) => opt.label === label)?.price || "";
    };
    // Calculate Price
    const calculateTotalPrice = () => {
        const plan = plans.find((p) => p.name === selectedPlan);
        const option = options.find((o) => o.label === selectedValue);

        // Convert price strings to numbers
        const planPrice = plan ? parseFloat(plan.price.replace("$", "")) : 0;
        const medicalPrice = selectedValue.replace("$", "");

        const total = Number(planPrice) + Number(medicalPrice);

        return `$${total}`;
    };

    const handleMedical = () => {
        setMedical(false);
        setSelectedValue("");
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setValue("");
        setOpen(false);
    };

    const handleRadioChange = (event) => {
        setValue(event.target.value);
        // setHelperText(" ");
        // setError(false);
    };

    const getQuote = () => {
        if (dob == null || dob == "" || dob == undefined || occupation == "") {
            setAgeError("Please select your date of birth");
            setJobError("Please select your occupation");
        } else if (value == "") {
            setError(true);
        } else if (ageError == "") {
            setJobError("");
            setShowQuote(true);
            setTimeout(() => {
                boxRef.current?.scrollIntoView({
                    behavior: "smooth",
                });
            }, 100);
        }
    };

    //dob
    const validateAge = (date) => {
        if (!date) return;

        const today = dayjs();
        const age = today.diff(date, "year");

        if (age < 18 || age > 60) {
            setAgeError("Age must be between 18 and 60 years.");
        } else {
            setAgeError(""); // Valid age
        }
    };

    useEffect(() => {
        if (occupation !== "") {
            setJobError("");
        }
        if (value === "no") {
            setHelperText("You got it!");
            setError(false);
        } else if (value === "yes") {
            setHelperText("Sorry, You are not eligible !");
            handleClickOpen();
            setError(true);
        } else {
            setHelperText("Please select an option.");
            // setError(true);
        }
    });

    return (
        <>
            <Box sx={{ maxWidth: "800px", mx: "auto" }}>
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <Box
                        sx={{
                            backgroundColor: "primary.main",
                            position: "absolute",
                            p: 3,
                            top: "50%",
                            transform: "translateY(-50%)",
                            left: 10,
                        }}
                    >
                        <Logo />
                        <Typography variant="h5" color="#fff" fontWeight={700}>
                            Personal Accident Insurance
                        </Typography>
                        <Typography>For the Adventurous and Spoty</Typography>
                    </Box>
                    <img src={img} alt="" height={"300px"} />
                </Box>
                <Box sx={{ px: 2, color: "text.primary" }}>
                    <Typography variant="h4" sx={{ mt: 2 }}>
                        Do you
                    </Typography>
                    <ul>
                        <li>
                            <Typography variant="body1">
                                Engage in significant manual labour or hazardous
                                activities, or
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Work with hazardous or high voltage materials,
                                or
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1">
                                Work at height?
                            </Typography>
                        </li>
                    </ul>
                </Box>
                <Box sx={{ px: 2 }}>
                    <FormControl
                        sx={{ mx: 2 }}
                        error={error}
                        variant="standard"
                    >
                        <RadioGroup
                            aria-labelledby="demo-error-radios"
                            name="quiz"
                            value={value}
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel
                                sx={{ color: "text.primary" }}
                                value="yes"
                                control={<Radio />}
                                label="Yes"
                            />
                            <FormControlLabel
                                sx={{ color: "text.primary" }}
                                value="no"
                                control={<Radio />}
                                label="No"
                            />
                        </RadioGroup>
                        <FormHelperText>{helperText}</FormHelperText>
                    </FormControl>
                    <Dialog
                        open={open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={handleClose}
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle>{"Application Rejected"}</DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                Thank you for your interest in Personal Accident
                                Insurance. Based on the information you have
                                provided, we are not able to consider your
                                application. If you would like to know the
                                reason or about any other TripFlow products,
                                kindly email us at{" "}
                                <a href="mailto:nazmul.vixingo@gmail.com">
                                    general@tripflow.com
                                </a>{" "}
                                or{" "}
                                <a href="tel:+8801300109893">Call us free!</a>{" "}
                                Thank You.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Got it</Button>
                            <NavLink to={"/"}>
                                <Button>Back to Home</Button>
                            </NavLink>
                        </DialogActions>
                    </Dialog>
                    <Grid container sx={{ my: 2 }} spacing={2}>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={["DatePicker"]}>
                                    <MobileDatePicker
                                        label="Date of Birth*"
                                        openTo="year"
                                        views={["year", "month", "day"]}
                                        // defaultValue={dayjs("1990-01-01")}
                                        value={dob}
                                        onChange={(newValue) => {
                                            setDob(newValue);
                                            validateAge(newValue);
                                        }}
                                        sx={{ width: "100%" }}
                                        slotProps={{
                                            textField: {
                                                error: !!ageError,
                                                helperText: ageError || "",
                                            },
                                            layout: {
                                                sx: {
                                                    "& .MuiYearCalendar-root": {
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
                        <Grid
                            size={{ xs: 12, md: 6 }}
                            sx={{ mt: { xs: 2, md: 1 } }}
                        >
                            <FormControl fullWidth>
                                <InputLabel id="occupation-label">
                                    Occupation
                                </InputLabel>
                                <Select
                                    error={!!jobError}
                                    labelId="occupation-label"
                                    value={occupation}
                                    label="Occupation"
                                    onChange={(e) =>
                                        setOccupation(e.target.value)
                                    }
                                >
                                    {occupations.map((job) => (
                                        <MenuItem key={job} value={job}>
                                            {job}
                                        </MenuItem>
                                    ))}
                                </Select>
                                <FormHelperText error>
                                    {jobError}
                                </FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>
                    <br />
                    <Box textAlign={"center"}>
                        <Button
                            variant="contained"
                            size="large"
                            onClick={getQuote}
                        >
                            Get Quote
                        </Button>
                        <Typography variant="body2" color="text.primary" py={4}>
                            you can learn more about this product by reading
                            <NavLink to="/"> Policy Wording</NavLink> and{" "}
                            <NavLink to={"/"}> Standard Clause</NavLink>
                        </Typography>
                    </Box>
                </Box>
            </Box>

            <Box
                ref={boxRef}
                sx={{ display: showQuote ? "block" : "none" }}
                className="quote"
            >
                <Box sx={{ p: 2, mt: 4 }}>
                    <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        color="text.primary"
                        sx={{ fontWeight: "bold" }}
                    >
                        Please select your preferred plan
                    </Typography>
                </Box>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{ mb: 2 }}
                >
                    {plans.map((plan) => (
                        <Grid item xs={12} sm={6} md={4} lg={2} key={plan.name}>
                            <Card
                                variant="outlined"
                                elevation={4}
                                sx={{
                                    position: "relative",
                                    borderColor:
                                        selectedPlan === plan.name
                                            ? "primary.main"
                                            : "secondary",
                                    borderWidth: 2,
                                    backgroundColor:
                                        selectedPlan === plan.name
                                            ? "background.paper"
                                            : "background.defult",
                                    transition: "0.3s",
                                    "&: hover": {
                                        boxShadow: "0 0 10px 0 red",
                                        transform: "translateY(-3px)",
                                    },
                                }}
                                onClick={() => setSelectedPlan(plan.name)}
                            >
                                {selectedPlan === plan.name && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: 8,
                                            right: 8,
                                            borderRadius: "50%",
                                            border: 1,
                                            width: 20,
                                            height: 20,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontSize: 12,
                                            color: "primary.main",
                                        }}
                                    >
                                        <Check
                                            sx={{
                                                fontSize: 18,
                                            }}
                                        />
                                    </Box>
                                )}
                                <CardContent>
                                    <Box sx={{ textAlign: "center" }}>
                                        <Typography variant="h5">
                                            {plan.name}
                                        </Typography>
                                        <Typography variant="subtitle2" mt={1}>
                                            Sum Insured
                                        </Typography>
                                        <Typography
                                            variant="h5"
                                            fontWeight="bold"
                                            mb={1}
                                        >
                                            {plan.insured}
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            Price
                                        </Typography>
                                        <Typography fontWeight="bold" mb={2}>
                                            {plan.price}
                                        </Typography>
                                    </Box>
                                    <br />
                                    <Box>
                                        {plan.features.map((feature) => (
                                            <Box
                                                key={feature}
                                                display="flex"
                                                alignItems="center"
                                                mb={0.5}
                                            >
                                                <CheckCircleOutlinedIcon
                                                    fontSize="small"
                                                    color="success"
                                                    sx={{
                                                        mr: 1,
                                                    }}
                                                />
                                                <Typography variant="body1">
                                                    {feature}
                                                </Typography>
                                            </Box>
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{ textAlign: "center", py: 2 }}>
                    <Button
                        variant="contained"
                        size="large"
                        onClick={() => setMedical(true)}
                    >
                        Medical Expense with NO annual limit
                    </Button>
                </Box>
                <Dialog
                    open={medical}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleMedical}
                    fullWidth
                    maxWidth="sm"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>
                        <Typography variant="h5" textAlign={"center"} p={1}>
                            Medical Expense with
                            <b> NO annual limit</b>
                        </Typography>
                    </DialogTitle>

                    <DialogContent sx={{ px: 1 }}>
                        <List dense sx={{ p: 0 }}>
                            {benefits.map((item, index) => (
                                <ListItem key={index} sx={{ p: 0 }}>
                                    <ListItemIcon sx={{ minWidth: 30 }}>
                                        <Check color="success" />
                                    </ListItemIcon>
                                    <ListItemText primary={item} />
                                </ListItem>
                            ))}
                        </List>

                        <Typography variant="h6" sx={{ textAlign: "center" }}>
                            Medical Expense Per Accident
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                flexWrap: "wrap",
                                justifyContent: "center",
                                gap: 0.5,
                                flexDirection: { xs: "column", md: "row" },
                                p: 1,
                            }}
                        >
                            {options.map((opt) => (
                                <Card
                                    variant="elevation"
                                    key={opt.label}
                                    elevation={4}
                                    sx={{
                                        border:
                                            selectedValue === opt.price
                                                ? "1px solid red"
                                                : "1px solid #ffffff10",
                                        // borderRadius: 2,
                                        // marginRight: 2,

                                        borderWidth: "1px",
                                        padding: 1,
                                        flex: 1,
                                        // minWidth: "250px",
                                        transition: "0.3s",
                                        "&: hover": {
                                            boxShadow: "0 0 3px 0 red",
                                            transform: "translateY(-3px)",
                                        },
                                    }}
                                    onClick={() => setSelectedValue(opt.price)}
                                >
                                    <Box
                                        textAlign="center"
                                        sx={{ position: "relative" }}
                                    >
                                        {selectedValue === opt.price && (
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 2,
                                                    right: 2,
                                                    borderRadius: "50%",
                                                    border: 1,
                                                    width: 20,
                                                    height: 20,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    fontSize: 12,
                                                    color: "primary.main",
                                                }}
                                            >
                                                <Check
                                                    sx={{
                                                        fontSize: 18,
                                                    }}
                                                />
                                            </Box>
                                        )}
                                        <Typography>{opt.label}</Typography>
                                        <Typography variant="caption">
                                            Add {opt.price}
                                        </Typography>
                                    </Box>
                                </Card>
                            ))}
                        </Box>
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={handleMedical}>CANCEL</Button>
                        <Button
                            variant="contained"
                            size="large"
                            // onClick={calculateTotalPrice}
                            onClick={() => {
                                setMedical(false);
                            }}
                        >
                            BUY NOW {selectedValue}
                        </Button>
                    </DialogActions>
                </Dialog>
                <Typography
                    variant="subtitle2"
                    sx={{
                        pb: 12,
                        pt: 2,
                        textAlign: "center",
                        color: "text.secondary",
                    }}
                >
                    Underwritten by TripFlow General Insurance (Cambodia) Plc.
                    v2.1.0
                </Typography>
                <Box
                    sx={{
                        backgroundColor: "secondary.main",
                        py: 2,
                        textAlign: "right",
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                    }}
                >
                    <Button variant="contained" size="large" sx={{ right: 10 }}>
                        Buy Now {selectedPlan && ` - ${calculateTotalPrice()}`}
                    </Button>
                </Box>{" "}
            </Box>
        </>
    );
}
