import React, { useState } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setCustomerDetails } from "../../utils/slice/FireInsuranceSlice";

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
    const dispatch = useDispatch();
    const { buildingWorth, contentWorth } = useSelector(
        (state) => state.fireInsurance
    );

    const [formData, setFormData] = useState({
        name: "",
        nationality: "CAMBODIAN",
        idNumber: "",
        email: "",
        phone: "",
        dob: dayjs("1990-01-01"),
        occupation: "",
        gender: "male",
        address: {
            line1: "",
            line2: "",
            city: "",
            commune: "",
            country: "Cambodia",
        },
        sameAsMailing: false,
    });

    const handleChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const handleAddressChange = (field, value) => {
        setFormData((prev) => ({
            ...prev,
            address: {
                ...prev.address,
                [field]: value,
            },
        }));
    };
    const navigate = useNavigate();
    const handleNext = () => {
        dispatch(setCustomerDetails(formData));
        // navigate to next step if needed
        navigate("/thankyou");
    };

    return (
        <>
            {" "}
            <Box p={2} sx={{ maxWidth: "1200px", mx: "auto" }}>
                <Grid container spacing={2}>
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
                                            value={formData.name}
                                            onChange={(e) =>
                                                handleChange(
                                                    "name",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <FormControl fullWidth>
                                            <Select
                                                defaultValue="CAMBODIAN"
                                                value={formData.nationality}
                                                onChange={(e) =>
                                                    handleChange(
                                                        "nationality",
                                                        e.target.value
                                                    )
                                                }
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
                                            value={formData.idNumber}
                                            onChange={(e) =>
                                                handleChange(
                                                    "idNumber",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Email"
                                            value={formData.email}
                                            onChange={(e) =>
                                                handleChange(
                                                    "email",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Phone"
                                            value={formData.phone}
                                            onChange={(e) =>
                                                handleChange(
                                                    "phone",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Grid>
                                    <Grid size={12}>
                                        <LocalizationProvider
                                            dateAdapter={AdapterDayjs}
                                        >
                                            <MobileDatePicker
                                                label="Date of Birth*"
                                                value={formData.dob}
                                                openTo="year"
                                                views={["year", "month", "day"]}
                                                onChange={(date) =>
                                                    handleChange("dob", date)
                                                }
                                                sx={{ width: "100%" }}
                                                // slotProps={{
                                                //     layout: {
                                                //         sx: {
                                                //             "& .MuiYearCalendar-root":
                                                //                 {
                                                //                     gridTemplateColumns:
                                                //                         "1fr !important",
                                                //                     width: "100%",
                                                //                     justifyContent:
                                                //                         "center",
                                                //                 },
                                                //         },
                                                //     },
                                                // }}
                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                    <Grid size={12}>
                                        <TextField
                                            fullWidth
                                            label="Occupation"
                                            value={formData.occupation}
                                            onChange={(e) =>
                                                handleChange(
                                                    "occupation",
                                                    e.target.value
                                                )
                                            }
                                        />
                                    </Grid>

                                    <Grid size={12}>
                                        <FormControl>
                                            <FormLabel>Gender</FormLabel>
                                            <RadioGroup
                                                row
                                                value={formData.gender}
                                                onChange={(e) =>
                                                    handleChange(
                                                        "gender",
                                                        e.target.value
                                                    )
                                                }
                                            >
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
                                variant="h5"
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
                                                value={formData.address.line1}
                                                onChange={(e) =>
                                                    handleAddressChange(
                                                        "line1",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="Line 2"
                                                placeholder="District"
                                                value={formData.address.line2}
                                                onChange={(e) =>
                                                    handleAddressChange(
                                                        "line2",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="City/Province"
                                                value={formData.address.city}
                                                onChange={(e) =>
                                                    handleAddressChange(
                                                        "city",
                                                        e.target.value
                                                    )
                                                }
                                            />
                                        </Grid>
                                        <Grid size={12}>
                                            <TextField
                                                fullWidth
                                                label="Sangkat / Commune"
                                                value={formData.address.commune}
                                                onChange={(e) =>
                                                    handleAddressChange(
                                                        "commune",
                                                        e.target.value
                                                    )
                                                }
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
                                                    <Checkbox
                                                        checked={
                                                            formData.sameAsMailing
                                                        }
                                                        onChange={(e) =>
                                                            handleChange(
                                                                "sameAsMailing",
                                                                e.target.checked
                                                            )
                                                        }
                                                    />
                                                }
                                                label="Is Risk Location same with your Mailing Address?"
                                            />
                                        </Grid>{" "}
                                        {/* Conditionally show risk address fields when NOT same as mailing */}
                                        {formData.sameAsMailing && (
                                            <>
                                                <Grid size={12}>
                                                    <Typography variant="subtitle2">
                                                        Risk Location Address
                                                    </Typography>
                                                </Grid>
                                                <Grid size={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Risk Address - Line 1"
                                                        onChange={(e) =>
                                                            handleAddressChange(
                                                                "riskLine1",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Grid>
                                                <Grid size={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Risk Address - Line 2"
                                                        onChange={(e) =>
                                                            handleAddressChange(
                                                                "riskLine2",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Grid>
                                                <Grid size={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Risk Address - City/Province"
                                                        onChange={(e) =>
                                                            handleAddressChange(
                                                                "riskCity",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Grid>
                                                <Grid size={12}>
                                                    <TextField
                                                        fullWidth
                                                        label="Risk Address - Sangkat / Commune"
                                                        onChange={(e) =>
                                                            handleAddressChange(
                                                                "riskCommune",
                                                                e.target.value
                                                            )
                                                        }
                                                    />
                                                </Grid>
                                            </>
                                        )}
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
                            <Button variant="contained" onClick={handleNext}>
                                Next
                            </Button>
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
