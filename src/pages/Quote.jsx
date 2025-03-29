import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";

import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AddModeratorIcon from "@mui/icons-material/AddModerator";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Box, Button, Card, Grid, Typography } from "@mui/material";

import PlanForm from "../components/forms/PlanForm";
import SummaryForm from "../components/forms/SummaryForm";
import TavelForm from "../components/forms/TavelForm";
import dayjs from "dayjs";

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: "calc(-50% + 16px)",
        right: "calc(50% + 16px)",
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "#784af4",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: "#784af4",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: "#eaeaf0",
        borderTopWidth: 3,
        borderRadius: 1,
        ...theme.applyStyles("dark", {
            borderColor: theme.palette.grey[800],
        }),
    },
}));

const QontoStepIconRoot = styled("div")(({ theme }) => ({
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
    "& .QontoStepIcon-completedIcon": {
        color: "#784af4",
        zIndex: 1,
        fontSize: 18,
    },
    "& .QontoStepIcon-circle": {
        width: 8,
        height: 8,
        borderRadius: "50%",
        backgroundColor: "currentColor",
    },
    ...theme.applyStyles("dark", {
        color: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                color: "#784af4",
            },
        },
    ],
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

QontoStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
};

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 95deg,#EB0045 0%,rgb(233,64,87) 50%,#EB004550 100%)",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundImage:
                "linear-gradient( 95deg,#EB0045 0%,#EB0045 50%,#EB0045 100%)",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 3,
        border: 0,
        backgroundColor: "#eaeaf0",
        borderRadius: 1,
        ...theme.applyStyles("dark", {
            backgroundColor: theme.palette.grey[800],
        }),
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme }) => ({
    backgroundColor: "#ccc",
    zIndex: 1,
    color: "#fff",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                backgroundImage:
                    "linear-gradient( 136deg, #EB0045 0%, #ff000070 50%, #00263A30 100%)",
                boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
            },
        },
        {
            props: ({ ownerState }) => ownerState.completed,
            style: {
                backgroundImage:
                    "linear-gradient( 136deg, #EB0045 0%, #EB0045 50%, #ff0000 100%)",
            },
        },
    ],
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: <TravelExploreIcon />,
        2: <AddModeratorIcon />,
        3: <BeenhereIcon />,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = ["Your Travel Details", "Plans and Benefits", "Summary"];

export default function Quote() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [skipped, setSkipped] = React.useState(new Set());

    const isStepOptional = (step) => {
        return step === 1;
    };

    const isStepSkipped = (step) => {
        return skipped.has(step);
    };

    const handleNext = () => {
        window.scrollTo(0, 0);
        let newSkipped = skipped;
        if (isStepSkipped(activeStep)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStep);
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped(newSkipped);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleSkip = () => {
        if (!isStepOptional(activeStep)) {
            // You probably want to guard against something like this,
            // it should never occur unless someone's actively trying to break something.
            throw new Error("You can't skip a step that isn't optional.");
        }

        setActiveStep((prevActiveStep) => prevActiveStep + 1);
        setSkipped((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStep);
            return newSkipped;
        });
    };

    const handleReset = () => {
        setActiveStep(0);
    };

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
        <Box
            sx={{
                width: "100%",
                mt: { xs: "90px", md: "140px" },
                maxWidth: "1820px",
                mx: "auto",
                p: 2,
                // backgroundColor: "secondary.main",
            }}
        >
            <Stepper
                alternativeLabel
                activeStep={activeStep}
                connector={<ColorlibConnector />}
            >
                {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepOptional(index)) {
                        labelProps.optional = (
                            <Typography variant="caption" color="primary">
                                Optional
                            </Typography>
                        );
                    }
                    if (isStepSkipped(index)) {
                        stepProps.completed = false;
                    }
                    return (
                        <Step key={label} {...stepProps}>
                            <StepLabel
                                StepIconComponent={ColorlibStepIcon}
                                {...labelProps}
                            >
                                {label}
                            </StepLabel>
                        </Step>
                    );
                })}
            </Stepper>
            {activeStep === steps.length ? (
                <React.Fragment>
                    <Grid
                        container
                        columns={12}
                        sx={{
                            maxWidth: "1200px",
                            mx: "auto",
                            px: 2,
                            my: 5,
                            alignItems: "center",
                        }}
                    >
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Card
                                variant="outlined"
                                sx={{ textAlign: "center", p: 2 }}
                            >
                                <Typography
                                    variant="h2"
                                    sx={{ mt: 2, mb: 1, color: "primary" }}
                                >
                                    Thank You!
                                </Typography>
                                <Typography variant="h4">
                                    Your purchase is confirmed.
                                </Typography>
                                <br />
                                <Typography variant="body1">
                                    Your travel insurance is confirmed! Download
                                    your policy below or check your email for
                                    confirmation. Safe travels!
                                </Typography>
                                <Typography variant="h6" my={2}>
                                    Policy Number: 123856865
                                </Typography>
                                <Box sx={{ display: "flex" }}>
                                    <Button variant="contained" fullWidth>
                                        Download PDF
                                    </Button>
                                    <Button variant="outlined" fullWidth>
                                        Send Confirmation Email
                                    </Button>
                                </Box>
                            </Card>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Box
                                sx={{
                                    p: 2,
                                }}
                            >
                                <Typography variant="h5">
                                    Dear Mr. AYZ <br />
                                    Thanks for taking Travel insurance from us.
                                    It is very important that you read and
                                    understand the terms conditions..... Here
                                    are important docs related to your travel
                                    insurance.
                                </Typography>

                                <Box
                                    sx={{
                                        mt: 3,
                                        display: "flex",
                                        justifyContent: "flex-end",
                                    }}
                                >
                                    {" "}
                                    <Button
                                        onClick={handleReset}
                                        variant="contained"
                                    >
                                        Get Another Quote{" "}
                                    </Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </React.Fragment>
            ) : (
                <React.Fragment>
                    <Box
                        sx={{
                            bgcolor: "paper",
                            maxWidth: "1200px",
                            mx: "auto",
                            px: 2,
                        }}
                    >
                        <Box sx={{ mt: 2, mb: 1 }}>
                            {/* Step {activeStep + 1} */}
                            {activeStep === 0 ? (
                                <TavelForm
                                    handleChange={handleChange}
                                    value={value}
                                    personName={personName}
                                    setPersonName={setPersonName}
                                    setDestination={setDestination}
                                    destination={destination}
                                    departureDate={departureDate}
                                    setDepartureDate={setDepartureDate}
                                    returnDate={returnDate}
                                    setReturnDate={setReturnDate}
                                    travelers={travelers}
                                    setTravelers={setTravelers}
                                    handleNext={handleNext}
                                />
                            ) : activeStep === 1 ? (
                                <PlanForm
                                    setSelectedPlan={setSelectedPlan}
                                    selectedPlan={selectedPlan}
                                    handleNext={handleNext}
                                />
                            ) : (
                                <SummaryForm />
                            )}
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",

                            maxWidth: "1200px",
                            mx: "auto",
                            p: 2,
                            // bgcolor: "pink",
                        }}
                    >
                        <Button
                            color="inherit"
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            sx={{ mr: 1 }}
                        >
                            Back
                        </Button>
                        <Box sx={{ flex: "1 1 auto" }} />
                        {/* {isStepOptional(activeStep) && (
                            <Button
                                color="inherit"
                                onClick={handleSkip}
                                sx={{ mr: 1 }}
                            >
                                Skip
                            </Button>
                        )} */}
                        <Button
                            onClick={handleNext}
                            fullWidth
                            variant="contained"
                        >
                            {activeStep === steps.length - 1
                                ? "Purchase"
                                : "Next"}
                        </Button>
                    </Box>
                </React.Fragment>
            )}
        </Box>
    );
}
