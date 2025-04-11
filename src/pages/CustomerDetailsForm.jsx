import React from "react";
import { useSelector } from 'react-redux';
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

const options = [
  "CAMBODIAN",
  "AMERICAN",
  "ITALIAN",
  "MEXICAN",
  "JAPANESE",
  "CHINESE",
  // Add more options here
];

const CustomerDetailsForm = () => {

  const {
    construction,
    buildingWorth,
    contentWorth,
  } = useSelector((state) => state.fireInsurance);

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {/* Left Column - Form */}
        <Grid size={{ xs: 12, md: 8 }}>
          {/* Customer Details */}
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h4" mb={2} gutterBottom>
                Customer Details
              </Typography>

              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Name"
                    placeholder="e.g: James Wong"
                  />
                </Grid>
                <Grid size={12}>
                  <FormControl fullWidth>
                    <Select
                      defaultValue="CAMBODIAN"
                      displayEmpty
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
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    placeholder="e.g: jameswong@gmail.com"
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    placeholder="+855 e.g 8551233456"
                  />
                </Grid>
                <Grid size={12}>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                  >
                    <DemoContainer
                      components={["DatePicker"]}
                    >
                      <MobileDatePicker
                        label="Date of Birth*"
                        openTo="year"
                        views={["year", "month", "day"]}
                        defaultValue={dayjs(
                          "1990-01-01"
                        )}
                        sx={{ width: "100%" }}
                        slotProps={{
                          layout: {
                            sx: {
                              "& .MuiYearCalendar-root":
                              {
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
                <Grid size={12}>
                  <TextField fullWidth label="Occupation" />
                </Grid>

                <Grid size={12}>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row>
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
              fontSize={14}
            // variant="h4"
            >
              Upload Your ID (National ID/Passport/Birth
              Certificate)
            </Typography>
            <Typography variant="caption" color="text.secondary">
              * only image (jpeg, png, webp, tif) and PDF file is
              accepted for document upload
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
                <Typography variant="h6" gutterBottom>
                  Property Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Line 1"
                      placeholder="House number / Street Name"
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Line 2"
                      placeholder="District"
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="City/Province"
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      fullWidth
                      label="Sangkat / Commune"
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
                        <Checkbox defaultChecked />
                      }
                      label="Is Risk Location same with your Mailing Address?"
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>

          {/* Navigation */}
          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="outlined">Back</Button>
            <Button variant="contained">Next</Button>
          </Box>
        </Grid>

        {/* Right Column - Summary */}
        <Grid size={{ xs: 12, md: 4 }} >
          <Card variant="outlined" sx={{ bgcolor: "#fff6f1" }}> {/* Matching soft peachy background */}
            <CardContent sx={{ px: 3, py: 2 }}> {/* Padding adjusted */}
              {/* Summary Title */}
              <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                Summary
              </Typography>

              {/* Period of Insurance */}
              <Typography variant="caption" sx={{ lineHeight: 1.6 }}>
                Period of Insurance
                <br />
                <Box component="span" sx={{ fontWeight: 600 }}>
                  10th Apr 2025 until 9th Apr 2026
                </Box>
              </Typography>

              {/* Construction Info */}
              <Box mt={2}>
                <Box mb={1}>
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Construction Type
                  </Typography>
                  <br />
                  <Typography variant="caption">Dwelling House</Typography>
                </Box>

                <Box my={2}>
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Construction Class
                  </Typography>
                  <br />
                  <Typography variant="caption">A</Typography>
                </Box>

                <Box mb={5}>
                  <Typography variant="caption" sx={{ fontWeight: 500 }}>
                    Additional Perils Coverage
                  </Typography>
                  <br />
                  <Typography variant="caption">Not Applicable</Typography>
                </Box>
              </Box>


              <Box mt={2}>
                {/* Building Worth */}
                <Grid mb={1} container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="caption">
                      How much is your Building worth?
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">$231.00</Typography>
                  </Grid>
                </Grid>
                <Divider></Divider>
                {/* Content Worth */}
                <Grid mt={1} mb={1} container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="caption">
                      How much is your Content worth?
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">$231.00</Typography>
                  </Grid>
                </Grid>
                <Divider></Divider>
                {/* Premiums */}
                <Grid mt={1} mb={1} container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="caption">Basic Benefit Premium</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">$70.00</Typography>
                  </Grid>
                </Grid>
                <Divider></Divider>
                <Grid mt={1} mb={1} container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="caption">Gross Premium</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">$70.00</Typography>
                  </Grid>
                </Grid>
                <Divider></Divider>
                <Grid mt={1} container justifyContent="space-between">
                  <Grid item>
                    <Typography variant="caption">Net Premium</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="caption">$70.00</Typography>
                  </Grid>
                </Grid>
              </Box>




              {/* Total Payable */}
              <Box mt={3}>
                {/* Label row */}
                <Box display="flex" alignItems="center">
                  
                  <Typography variant="body1" sx={{ fontWeight: 600 }}>
                    Total Payable
                  </Typography>
                </Box>

                {/* Amount row */}
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, textAlign: "right", mt: 1 }}
                >
                  $70.00
                </Typography>
              </Box>


            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </Box>
  );
};

export default CustomerDetailsForm;
