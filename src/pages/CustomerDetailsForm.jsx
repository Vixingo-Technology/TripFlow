import React from "react";
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
} from "@mui/material";

const CustomerDetailsForm = () => {
  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {/* Left Column - Form */}
        <Grid size={{xs:12,md:8}}>
          {/* Customer Details */}
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Customer Details
              </Typography>

              <Grid container spacing={2}>
                <Grid size={12}>
                  <TextField fullWidth label="Name" placeholder="e.g: James Wong" />
                </Grid>
                <Grid size={12}>
                  <FormControl fullWidth>
                    <Select defaultValue="CAMBODIAN" displayEmpty>
                      <MenuItem value="CAMBODIAN">CAMBODIAN</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="ID/Passport Number" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Email" placeholder="e.g: jameswong@gmail.com" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Phone" placeholder="+855 e.g 8551233456" />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Date of Birth" type="date" InputLabelProps={{ shrink: true }} />
                </Grid>
                <Grid size={12}>
                  <TextField fullWidth label="Occupation" />
                </Grid>

                <Grid size={12}>
                  <FormControl>
                    <FormLabel>Gender</FormLabel>
                    <RadioGroup row>
                      <FormControlLabel value="female" control={<Radio />} label="Female" />
                      <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Upload ID Section */}
          <Box mt={4}>
            <Typography color="text.primary" fontWeight="bold" fontSize={14}>
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

          {/* Property Details */}
          <Box mt={4}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Property Details
                </Typography>
                <Grid container spacing={2}>
                  <Grid size={12}>
                    <TextField fullWidth label="Line 1" placeholder="House number / Street Name" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth label="Line 2" placeholder="District" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth label="City/Province" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth label="Sangkat / Commune" />
                  </Grid>
                  <Grid size={12}>
                    <TextField fullWidth label="Country" defaultValue="Cambodia" disabled />
                  </Grid>
                  <Grid size={12}>
                    <FormControlLabel
                      control={<Checkbox defaultChecked />}
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
        <Grid size={{xs:12,md:4}}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h6">Summary</Typography>
              <Typography variant="body2" gutterBottom>
                Period of Insurance<br />
                <strong>10th Apr 2025 until 9th Apr 2026</strong>
              </Typography>
              <Box mt={2}>
                <Typography variant="body2">Construction Type: Dwelling House</Typography>
                <Typography variant="body2">Construction Class: A</Typography>
                <Typography variant="body2">Additional Perils Coverage: Not Applicable</Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body2">How much is your Building worth?</Typography>
                <Typography variant="body2" fontWeight="bold">$32,323.00</Typography>
              </Box>
              <Box mt={2}>
                <Typography variant="body2">Basic Benefit Premium: $70.00</Typography>
                <Typography variant="body2">Gross Premium: $70.00</Typography>
                <Typography variant="body2">Net Premium: $70.00</Typography>
              </Box>
              <Box mt={3}>
                <Typography variant="h6">Total Payable</Typography>
                <Typography variant="h4" color="primary">
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
