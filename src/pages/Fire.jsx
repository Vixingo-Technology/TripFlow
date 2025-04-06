import React, { useState } from 'react';
import {
  Box, Button, Card, CardContent, Collapse, FormControlLabel,
  Radio, RadioGroup, TextField, Typography, Switch, Grid, Paper
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useDropzone } from 'react-dropzone';

const equipmentList = [
  'Portable extinguisher',
  'Hose reel or internal hydrant',
  'Smoke/heat detector',
  'Sprinkler installation',
  'Own fire truck',
];

const FireInsuranceQuote = () => {
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
    <Box sx={{ p: 4, maxWidth: 900, mx: 'auto' }}>
      <Typography variant="h5" fontWeight="bold">Fire Insurance</Typography>
      <Typography variant="body2">Protect your house with Etiqa</Typography>

      {/* Construction Class */}
      <Typography mt={3} fontWeight="bold">Construction Class</Typography>
      <RadioGroup row value={construction} onChange={(e) => setConstruction(e.target.value)}>
        <FormControlLabel value="full-brick" control={<Radio />} label="Full Brick" />
        <FormControlLabel value="partial-brick" control={<Radio />} label="Partial Brick" />
      </RadioGroup>

      {/* Protection Type */}
      <Typography mt={3} fontWeight="bold">I would like to protect my</Typography>
      <RadioGroup row value={protectionType} onChange={(e) => setProtectionType(e.target.value)}>
        <FormControlLabel value="building" control={<Radio />} label="Building" />
        <FormControlLabel value="contents" control={<Radio />} label="Contents" />
        <FormControlLabel value="building-and-contents" control={<Radio />} label="Building and Contents" />
      </RadioGroup>

      {/* Coverage */}
      <Card variant="outlined" sx={{ mt: 3, backgroundColor: '#FFF8E1' }}>
        <CardContent>
          <Typography fontWeight="bold">Coverage Amount</Typography>
          <Typography variant="caption">Note: Figure will be rounded based on the last 3 digits</Typography>
          <TextField
            fullWidth
            label="How much is your Building worth?"
            type="number"
            margin="dense"
            value={buildingWorth}
            onChange={(e) => setBuildingWorth(e.target.value)}
          />
          <TextField
            fullWidth
            label="How much is your Content worth?"
            type="number"
            margin="dense"
            value={contentWorth}
            onChange={(e) => setContentWorth(e.target.value)}
          />
          <Box mt={2} p={2} bgcolor="#E0F7FA" display="flex" justifyContent="space-between">
            <Typography fontWeight="bold">Total sum covered amount</Typography>
            <Typography fontWeight="bold">${total.toFixed(2)}</Typography>
          </Box>
        </CardContent>
      </Card>

      {/* Extras */}
      <Box mt={3}>
        <Typography fontWeight="bold">Extras (%)</Typography>
        <Typography variant="body2">Supercharge your purchase with additional discount and coverages</Typography>
        <Button endIcon={<AddIcon />} onClick={() => setExtrasOpen(!extrasOpen)} sx={{ mt: 1 }}>
          Firefighting Discount
        </Button>

        <Collapse in={extrasOpen}>
          <Card variant="outlined" sx={{ mt: 2 }}>
            <CardContent>
              <Typography fontWeight="bold" mb={2}>Do you have the following equipment?</Typography>

              <Grid container spacing={2}>
                {equipmentList.map((label, idx) => (
                  <Grid item xs={12} sm={6} key={idx} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>{label}?</Typography>
                    <Switch
                      checked={equipment[label] || false}
                      onChange={() => handleToggle(label)}
                      color="warning"
                    />
                  </Grid>
                ))}
              </Grid>

              {/* Dropzone */}
              <Box
                {...getRootProps()}
                sx={{
                  mt: 3,
                  border: '2px dashed #ccc',
                  borderRadius: 2,
                  p: 3,
                  textAlign: 'center',
                  cursor: 'pointer',
                  color: isDragActive ? '#000' : '#888',
                }}
              >
                <input {...getInputProps()} />
                <CloudUploadIcon fontSize="large" />
                <Typography>
                  Drag and drop an image here or click, maximum 5 images are allowed.
                </Typography>
                {files.length > 0 && (
                  <Typography mt={1} color="green">{files.length} image(s) uploaded</Typography>
                )}
              </Box>
            </CardContent>
          </Card>
        </Collapse>
      </Box>

      {/* Get Quote Button */}
      <Button
        fullWidth
        sx={{
          mt: 4,
          backgroundColor: '#FFC107',
          color: 'black',
          '&:hover': { backgroundColor: '#FFB300' }
        }}
        variant="contained"
      >
        GET QUOTE
      </Button>

      <Typography variant="caption" textAlign="center" display="block" mt={4}>
        Underwritten by Etiqa General Insurance (Cambodia) Plc. v2.1.2
      </Typography>
    </Box>
  );
};

export default FireInsuranceQuote;
