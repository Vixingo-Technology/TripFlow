import {
    Box,
    Card,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Paper,
    Radio,
    RadioGroup,
    Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { isCovid, isFuneral, updateQuoteData } from "../../utils/slice/Quote";

export default function OptionalForm() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.quote);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateQuoteData({ field: name, value })); // Dispatch the update action
    };
    return (
        <Box>
            <FormControlLabel
                control={
                    <Checkbox
                        checked={userData.funeral}
                        onChange={(event) =>
                            dispatch(isFuneral(event.target.checked))
                        }
                        inputProps={{ "aria-label": "controlled" }}
                    />
                }
                label="I want to include FUNERAL EXPENSES SUBSIDY (Death Due to Illness)"
            />
            {!userData.funeral ? (
                <></>
            ) : (
                <Box>
                    <Card variant="outlined" sx={{ p: 2, my: 2 }}>
                        <FormControl>
                            <RadioGroup
                                // aria-labelledby="tripType"
                                // name="tripType"
                                // value={userData.funeral}
                                // onChange={handleChange}
                                row
                            >
                                <FormControlLabel
                                    value="single trip"
                                    control={<Radio checked />}
                                    label="FUNERAL EXPENSES SUBSIDY (Death Due to Illness)"
                                />
                            </RadioGroup>
                        </FormControl>{" "}
                        <br />
                        <br />
                        <Typography variant="h6">Conditions</Typography>
                        <ul>
                            <li>
                                <Typography variant="body1">
                                    {" "}
                                    You aren't allowed to purchase this rider if
                                    your purpose of travel is for medical
                                    check-up or medical treatment.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    {" "}
                                    It is hereby declared and agreed that the
                                    Insurer shall pay Funeral Expenses Subsidy
                                    up to the amount stated in the Insured Event
                                    “Funeral Expenses Subsidy” of the
                                    certificate of insurance to the Beneficiary
                                    on the occurrence of death of Insured Member
                                    from illness, provided that no compensation
                                    shall be payable if such death falls into
                                    Exclusion of the Policy. Please refer to
                                    benefit “Funeral Expenses Subsidy” in an
                                    additional policy wording of “Health and
                                    Accident Insurance”.
                                </Typography>
                            </li>
                        </ul>
                    </Card>
                </Box>
            )}
            <FormControlLabel
                control={
                    <Checkbox
                        checked={userData.covid}
                        onChange={(event) =>
                            dispatch(isCovid(event.target.checked))
                        }
                        inputProps={{ "aria-label": "controlled" }}
                    />
                }
                label="I want to include COVID-19 OUTBOUND INSURANCE"
            />
            {userData.covid ? (
                <>
                    {" "}
                    <Card variant="outlined" sx={{ p: 2, my: 2 }}>
                        <Box>
                            {" "}
                            <FormControl>
                                <FormLabel
                                    id="covidSafe"
                                    sx={{
                                        mb: 1,
                                        fontWeight: "bold",
                                        fontSize: 20,
                                    }}
                                >
                                    Covid Safe
                                </FormLabel>
                                <RadioGroup
                                    aria-labelledby="covidSafe"
                                    name="covidSafe"
                                    value={userData.covidSafe}
                                    onChange={handleChange}
                                    row
                                >
                                    <FormControlLabel
                                        value="10,000"
                                        control={<Radio />}
                                        label="$10,000"
                                    />
                                    <FormControlLabel
                                        value="20,000"
                                        control={<Radio />}
                                        label="$20,000"
                                    />
                                    <FormControlLabel
                                        value="50,000"
                                        control={<Radio />}
                                        label="$50,000"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Box>
                        <br />
                        <br /> <Typography variant="h6">Conditions</Typography>
                        <ul>
                            <li>
                                <Typography variant="body1">
                                    Waiting Period is three (3) days from the
                                    date of arrival to Destination Country. No
                                    COVID-19 related benefits are provided
                                    during Waiting Period.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    The Insured Person does not have any sign or
                                    symptom of COVID-19 or infected with
                                    COVID-19 before applying for this Insurance.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    The Insured Person is not under quarantine
                                    to monitor COVID-19 symptom when applying
                                    for this Insurance.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    The Insured Person has COVID-19 Vaccination
                                    Card and complete COVID-19 Vaccination
                                    before applying for this Insurance.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    This Policy shall be non-renewable,
                                    non-endorsable, and non-cancellable. The
                                    Premium is not refund in any cases.
                                </Typography>
                            </li>
                            <li>
                                <Typography variant="body1">
                                    For In-patient case, have to follow the
                                    Destination Country’s Ministry of Health or
                                    relevant authority announcement.
                                </Typography>
                            </li>
                        </ul>
                    </Card>
                </>
            ) : (
                <></>
            )}
        </Box>
    );
}
