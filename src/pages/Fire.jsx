import React, { useState } from 'react';
import {
  Box, Typography, Grid, RadioGroup, FormControlLabel, Radio, TextField,
  Paper, Button, Collapse, Switch, Avatar
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDropzone } from 'react-dropzone';

import house from '../assets/house.png';
import cabin from '../assets/cabin.png';
import building from '../assets/insurance.png';
import contents from '../assets/shield.png';
import buildingAndContents from '../assets/life-insurance.png';
import halfBrick from '../assets/house2.png';
import fire from '../assets/fire.png'; // Make sure this import is correct

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { saveFireInsuranceData } from '../utils/slice/FireInsuranceSlice';

const equipmentList = [
  'Portable extinguisher',
  'Hose reel or internal hydrant',
  'Smoke/heat detector',
  'Sprinkler installation',
  'Own fire truck',
];

const Fire = () => {



// inside component:
const dispatch = useDispatch();
const navigate = useNavigate();

const handleSubmit = () => {
  dispatch(saveFireInsuranceData({
    construction,
    protectionType,
    buildingWorth,
    contentWorth,
    equipment,
    files,
  }));
  navigate('/customerDetailsForm'); // replace with your next page route
};



  const [construction, setConstruction] = useState('');
  const [protectionType, setProtectionType] = useState('building-and-contents');
  const [buildingWorth, setBuildingWorth] = useState(0);
  const [contentWorth, setContentWorth] = useState(0);
  const [extrasOpen, setExtrasOpen] = useState(false);
  const [equipment, setEquipment] = useState({});
  const [files, setFiles] = useState([]);

  const total = parseFloat(buildingWorth || 0) + parseFloat(contentWorth || 0);

  const handleToggle = (label) => {
    setEquipment((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length + files.length > 5) return;
    setFiles([...files, ...acceptedFiles]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 5,
  });

  return (
    <Box p={4}>
      <Grid container spacing={4}>
        {/* LEFT COLUMN */}
        <Grid size={{xs:12,md:6}} >
          <Typography variant="h4" fontWeight="bold">Fire Insurance</Typography>
          <Typography variant="body1" gutterBottom>
            Protect your house with TripFlow
          </Typography>

          <Box sx={{ maxWidth: '600px' }}>
            <img src={fire} alt="Fire Protection" width="100%" />
          </Box>

          <Box sx={{ mt: 3 }}>
            <Box display="flex" alignItems="center" mb={2}>
              <CheckCircleIcon color="warning" sx={{ mr: 1 }} />
              <Typography>
                Fire, Lightning, and explosion caused by gas used for domestic purposes
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <CheckCircleIcon color="warning" sx={{ mr: 1 }} />
              <Typography>
                Bursting or overflowing of domestic water tanks apparatus or pipes
              </Typography>
            </Box>
          </Box>

          <Typography variant="body2" sx={{ mt: 3 }}>
            You can learn more about this product by reading{' '}
            <a href="#policy" style={{ color: '#0077cc' }}>
              Policy Wording and Clauses
            </a>
          </Typography>
        </Grid>

        {/* RIGHT COLUMN - FIRE INSURANCE FORM */}
        <Grid  size={{xs:12,md:6}}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>Fire Insurance</Typography>
          <Typography variant="body2" color="text.secondary">Protect your house with Trip Insurance</Typography>

          {/* Construction Class */}
          <Typography mt={4} fontWeight="bold">Construction Class</Typography>
          <Grid container spacing={2} mt={1}>
            {[{ label: 'Full Brick', value: 'full-brick', img: house },
              { label: 'Partial Brick', value: 'partial-brick', img: cabin },
              { label: 'Half Brick', value: 'half-brick', img: halfBrick }].map(({ label, value, img }) => (
              <Grid item xs={6} sm={6} key={value}>
                <Paper
                  variant="outlined"
                  sx={{
                    cursor: 'pointer',
                    borderColor: construction === value ? 'primary.main' : 'grey.300',
                    bgcolor: construction === value ? 'grey.100' : 'inherit',
                    textAlign: 'center',
                    p: 2,
                    position: 'relative',
                    width: '130px'
                  }}
                  onClick={() => setConstruction(value)}
                >
                  <img src={img} alt={label} style={{ width: 56, height: 56, margin: '0 auto' }} />
                  <Typography fontWeight="medium">{label}</Typography>
                  {construction === value && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        border: 1,
                        borderColor: 'grey.400',
                        width: 20,
                        height: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                      }}
                    >
                      ✓
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Protection Type */}
          <Typography mt={4} fontWeight="bold">I would like to protect my</Typography>
          <Grid container spacing={2} mt={1}>
            {[{
              label: 'Building', value: 'building', img: building,
            }, {
              label: 'Contents', value: 'contents', img: contents,
            }, {
              label: 'Building & Contents', value: 'building-and-contents', img: buildingAndContents,
            }].map(({ label, value, img }) => (
              <Grid item xs={12} sm={4} key={value}>
                <Paper
                  variant="outlined"
                  sx={{
                    cursor: 'pointer',
                    borderColor: protectionType === value ? 'primary.main' : 'grey.300',
                    bgcolor: protectionType === value ? 'grey.100' : 'inherit',
                    textAlign: 'center',
                    p: 2,
                    position: 'relative',
                    width: '170px'
                  }}
                  onClick={() => setProtectionType(value)}
                >
                  <img src={img} alt={label} style={{ width: 56, height: 56, margin: 'auto' }} />
                  <Typography fontWeight="medium" fontSize={14}>{label}</Typography>
                  {protectionType === value && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 8,
                        right: 8,
                        bgcolor: 'white',
                        borderRadius: '50%',
                        border: 1,
                        borderColor: 'grey.400',
                        width: 20,
                        height: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 12,
                      }}
                    >
                      ✓
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>

          {/* Coverage */}
          <Paper sx={{ mt: 4, p: 3, bgcolor: 'yellow.50' }} elevation={0}>
            <Typography fontWeight="bold">Coverage Amount</Typography>
            <Typography variant="caption">Note: Figure will be rounded based on the last 3 digits</Typography>
            <TextField
              fullWidth
              type="number"
              label="Building worth"
              variant="outlined"
              size="small"
              value={buildingWorth}
              onChange={(e) => setBuildingWorth(e.target.value)}
              sx={{ mt: 2 }}
            />
            <TextField
              fullWidth
              type="number"
              label="Content worth"
              variant="outlined"
              size="small"
              value={contentWorth}
              onChange={(e) => setContentWorth(e.target.value)}
              sx={{ mt: 2 }}
            />
            <Box
              mt={2}
              p={2}
              bgcolor="cyan.100"
              display="flex"
              justifyContent="space-between"
              borderRadius={1}
            >
              <Typography fontWeight="bold">Total sum covered amount</Typography>
              <Typography fontWeight="bold">${total.toFixed(2)}</Typography>
            </Box>
          </Paper>

          {/* Extras */}
          <Box mt={4}>
            <Typography fontWeight="bold">Extras (%)</Typography>
            <Typography variant="body2" color="text.secondary">
              Supercharge your purchase with additional discount and coverages
            </Typography>
            <Button
              startIcon={<AddIcon />}
              onClick={() => setExtrasOpen(!extrasOpen)}
              sx={{ mt: 1 }}
            >
              Firefighting Discount
            </Button>

            <Collapse in={extrasOpen}>
              <Paper variant="outlined" sx={{ mt: 2, p: 3 }}>
                <Typography fontWeight="bold" mb={2}>Do you have the following equipment?</Typography>
                <Grid container spacing={2}>
                  {equipmentList.map((label, idx) => (
                    <Grid item xs={12} sm={6} key={idx}>
                      <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography>{label}?</Typography>
                        <Switch
                          checked={equipment[label] || false}
                          onChange={() => handleToggle(label)}
                          color="warning"
                        />
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                <Box
                  {...getRootProps()}
                  sx={{
                    border: '2px dashed grey',
                    borderRadius: 2,
                    mt: 3,
                    p: 4,
                    textAlign: 'center',
                    cursor: 'pointer',
                    color: isDragActive ? 'black' : 'gray',
                  }}
                >
                  <input {...getInputProps()} />
                  <CloudUploadIcon fontSize="large" />
                  <Typography>Drag and drop an image here or click, max 5 images allowed.</Typography>
                  {files.length > 0 && (
                    <Typography mt={1}>{files.length} image(s) uploaded</Typography>
                  )}
                </Box>
              </Paper>
            </Collapse>
          </Box>

          {/* Submit */}
          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 4, bgcolor: 'yellow.400', color: 'black', fontWeight: 'bold' }}
            onClick={handleSubmit}
          >
            GET QUOTE
          </Button>

          <Typography variant="caption" color="text.secondary" textAlign="center" display="block" mt={4}>
            Underwritten by TripFlow Insurance
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Fire;
