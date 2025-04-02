import {
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
import { updateApplicantData, updateQuoteData } from "../../utils/slice/Quote";

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

export default function ApplicantForm() {
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.quote.applicant);
    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(updateApplicantData({ field: name, value })); // Dispatch the update action
    };
    return (
        <>
            <Grid container spacing={2}>
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

            <Typography>{userData.title}</Typography>
        </>
    );
}
