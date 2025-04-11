import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  LocalizationProvider,
  MobileDatePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { setCustomerDetails } from "../utils/slice/FireInsuranceSlice";
import { useNavigate } from "react-router";

const options = [
  "CAMBODIAN",
  "AMERICAN",
  "ITALIAN",
  "MEXICAN",
  "JAPANESE",
  "CHINESE",
];

const CustomerDetailsForm = () => {
  const dispatch = useDispatch();
  const { buildingWorth, contentWorth } = useSelector((state) => state.fireInsurance);

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
    sameAsMailing: true,
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
    navigate("/firePayment");
  };

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        <Grid size={{xs:12,md:8}}>
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
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                  />
                </Grid>
                <Grid size={12}>
                  <FormControl fullWidth>
                    <Select
                      value={formData.nationality}
                      onChange={(e) => handleChange("nationality", e.target.value)}
                    >
                      {options.map((option) => (
                        <MenuItem key={option} value={option}>
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
                    onChange={(e) => handleChange("idNumber", e.target.value)}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Phone"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                  />
                </Grid>
                <Grid size={12}>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <MobileDatePicker
                      label="Date of Birth"
                      value={formData.dob}
                      openTo="year"
                      views={["year", "month", "day"]}
                      onChange={(date) => handleChange("dob", date)}
                      sx={{ width: "100%" }}
                    />
                  </LocalizationProvider>
                </Grid>
                <Grid size={12}>
                  <TextField
                    fullWidth
                    label="Occupation"
                    value={formData.occupation}
                    onChange={(e) => handleChange("occupation", e.target.value)}
                  />
                </Grid>
                <Grid size={12}>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup
                      row
                      value={formData.gender}
                      onChange={(e) => handleChange("gender", e.target.value)}
                    >
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          <Box mt={4}>
            <Typography fontWeight="bold" fontSize={14}>
              Upload Your ID (National ID/Passport/Birth Certificate)
            </Typography>
            <Typography variant="caption" color="text.secondary">
              * only image (jpeg, png, webp, tif) and PDF file is accepted for document upload
            </Typography>
            <Box mt={1}>
              <Button variant="contained" component="label">
                Add
                <input hidden type="file" />
              </Button>
            </Box>
          </Box>

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
            value={formData.address.line1}
            onChange={(e) => handleAddressChange("line1", e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Line 2"
            value={formData.address.line2}
            onChange={(e) => handleAddressChange("line2", e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="City/Province"
            value={formData.address.city}
            onChange={(e) => handleAddressChange("city", e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Sangkat / Commune"
            value={formData.address.commune}
            onChange={(e) => handleAddressChange("commune", e.target.value)}
          />
        </Grid>
        <Grid size={12}>
          <TextField
            fullWidth
            label="Country"
            value="Cambodia"
            disabled
          />
        </Grid>
        <Grid size={12}>
          <FormControlLabel
            control={
              <Checkbox
                checked={formData.sameAsMailing}
                onChange={(e) => handleChange("sameAsMailing", e.target.checked)}
              />
            }
            label="Is Risk Location same with your Mailing Address?"
          />
        </Grid>

        {/* Conditionally show risk address fields when NOT same as mailing */}
        {!formData.sameAsMailing && (
          <>
            <Grid size={12}>
              <Typography variant="subtitle2">Risk Location Address</Typography>
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Risk Address - Line 1"
                onChange={(e) => handleAddressChange("riskLine1", e.target.value)}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Risk Address - Line 2"
                onChange={(e) => handleAddressChange("riskLine2", e.target.value)}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Risk Address - City/Province"
                onChange={(e) => handleAddressChange("riskCity", e.target.value)}
              />
            </Grid>
            <Grid size={12}>
              <TextField
                fullWidth
                label="Risk Address - Sangkat / Commune"
                onChange={(e) => handleAddressChange("riskCommune", e.target.value)}
              />
            </Grid>
          </>
        )}
      </Grid>
    </CardContent>
  </Card>
</Box>


          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="outlined">Back</Button>
            <Button variant="contained" 
            
            onClick={handleNext}>Next</Button>
          </Box>
        </Grid>

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
                    <Typography variant="caption">
                      ${buildingWorth}
                    </Typography>
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
                    <Typography variant="caption">${contentWorth}</Typography>
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
