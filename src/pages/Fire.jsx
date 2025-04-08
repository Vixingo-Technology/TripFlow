import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import AddIcon from '@mui/icons-material/Add';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import house from '../assets/house.png'
import cabin from '../assets/cabin.png'
import building from '../assets/insurance.png'
import contents from '../assets/shield.png'
import buildingAndContents from '../assets/life-insurance.png'

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
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-xl font-bold">Fire Insurance</h1>
      <p className="text-sm text-gray-700">Protect your house with Trip Insurance</p>

      {/* Construction Class */}
      <h2 className="mt-6 font-bold text-gray-800">Construction Class</h2>
      <div className="flex gap-4 mt-2">


        <label
          className={`w-32 transition-all duration-300 relative block cursor-pointer rounded-lg border p-4 text-center  hover:shadow-md 
    ${construction === 'full-brick' ? 'ring-2 bg-gray-200' : 'border-gray-300'}`}
        >
          <input
            type="radio"
            value="full-brick"
            checked={construction === 'full-brick'}
            onChange={(e) => setConstruction(e.target.value)}
            className="absolute inset-0 z-10 opacity-0 cursor-pointer"
          />

          <div className="flex flex-col items-center justify-center space-y-2">
            <img src={house} alt="Full Brick" className="h-16 w-16" />
            <span className="font-semibold text-gray-700">Full Brick</span>
          </div>

          <div
            className={`absolute top-2 right-2 h-5 w-5 rounded-full border flex items-center justify-center bg-white 
              ${construction === 'full-brick'
                ? 'border-gray-400'
                : 'text-white'
              }`}
          >
            ✓
          </div>
        </label>
        <label
          className={`w-32 transition-all duration-300 relative block cursor-pointer rounded-lg border p-4 text-center hover:shadow-md 
    ${construction === 'partial-brick' ? 'ring-2 bg-gray-200' : 'border-gray-300'}`}
        >
          <input
            type="radio"
            value="partial-brick"
            checked={construction === 'partial-brick'}
            onChange={(e) => setConstruction(e.target.value)}
            className="absolute inset-0 z-10 opacity-0 cursor-pointer"
          />

          <div className="flex flex-col items-center justify-center space-y-2">
            <img src={cabin} alt="partial-brick" className="h-16 w-16" />
            <span className="font-semibold text-gray-700">Partial Brick</span>
          </div>

          <div
            className={`absolute top-2 right-2 h-5 w-5 rounded-full border flex items-center justify-center bg-white ${construction === 'partial-brick'
              ? 'border-gray-400'
              : 'text-white'
              }`}
          >
            ✓
          </div>
        </label>




       
      </div>

      {/* Protection Type */}
      {/* Protection Type */}
<h2 className="mt-6 font-bold text-gray-800">I would like to protect my</h2>
<div className="flex gap-4 mt-2">
  {/* Building */}
  <label
    className={`w-40 transition-all duration-300 relative block cursor-pointer rounded-lg border p-4 text-center hover:shadow-md 
      ${protectionType === 'building' ? 'ring-2 bg-gray-200' : 'border-gray-300'}`}
  >
    <input
      type="radio"
      value="building"
      checked={protectionType === 'building'}
      onChange={(e) => setProtectionType(e.target.value)}
      className="absolute inset-0 z-10 opacity-0 cursor-pointer"
    />
    <div className="flex flex-col items-center justify-center space-y-2">
      <img src={building} alt="" className='w-16 h-16'/>
      <span className="font-semibold text-gray-700">Building</span>
    </div>
    <div
      className={`absolute top-2 right-2 h-5 w-5 rounded-full border flex items-center justify-center bg-white 
        ${protectionType === 'building' ? 'border-gray-400' : 'text-white'}`}
    >
      ✓
    </div>
  </label>

  {/* Contents */}
  <label
    className={`w-40 transition-all duration-300 relative block cursor-pointer rounded-lg border p-4 text-center hover:shadow-md 
      ${protectionType === 'contents' ? 'ring-2 bg-gray-200' : 'border-gray-300'}`}
  >
    <input
      type="radio"
      value="contents"
      checked={protectionType === 'contents'}
      onChange={(e) => setProtectionType(e.target.value)}
      className="absolute inset-0 z-10 opacity-0 cursor-pointer"
    />
    <div className="flex flex-col items-center justify-center space-y-2">
      <img src={contents} alt="" className='w-16 h-16' />
      <span className="font-semibold text-gray-700">Contents</span>
    </div>
    <div
      className={`absolute top-2 right-2 h-5 w-5 rounded-full border flex items-center justify-center bg-white 
        ${protectionType === 'contents' ? 'border-gray-400' : 'text-white'}`}
    >
      ✓
    </div>
  </label>

  {/* Building and Contents */}
  <label
    className={`w-40 transition-all duration-300 relative block cursor-pointer rounded-lg border p-4 text-center hover:shadow-md 
      ${protectionType === 'building-and-contents' ? 'ring-2 bg-gray-200' : 'border-gray-300'}`}
  >
    <input
      type="radio"
      value="building-and-contents"
      checked={protectionType === 'building-and-contents'}
      onChange={(e) => setProtectionType(e.target.value)}
      className="absolute inset-0 z-10 opacity-0 cursor-pointer"
    />
    <div className="flex flex-col items-center justify-center space-y-2">
      <img src={buildingAndContents} alt="" className='w-16 h-16'/>
      <span className="font-semibold text-gray-700 text-sm text-wrap leading-tight">Building & Contents</span>
    </div>
    <div
      className={`absolute top-2 right-2 h-5 w-5 rounded-full border flex items-center justify-center bg-white 
        ${protectionType === 'building-and-contents' ? 'border-gray-400' : 'text-white'}`}
    >
      ✓
    </div>
  </label>
</div>


      {/* Coverage */}
      <div className="mt-6 border rounded bg-yellow-50 p-4">
        <h3 className="font-bold text-gray-800">Coverage Amount</h3>
        <p className="text-xs text-gray-600">Note: Figure will be rounded based on the last 3 digits</p>
        <input
          type="number"
          value={buildingWorth}
          onChange={(e) => setBuildingWorth(e.target.value)}
          placeholder="How much is your Building worth?"
          className="w-full border p-2 mt-2 rounded"
        />
        <input
          type="number"
          value={contentWorth}
          onChange={(e) => setContentWorth(e.target.value)}
          placeholder="How much is your Content worth?"
          className="w-full border p-2 mt-2 rounded"
        />
        <div className="flex justify-between items-center bg-cyan-100 p-3 mt-4 rounded">
          <span className="font-bold text-gray-800">Total sum covered amount</span>
          <span className="font-bold text-gray-800">${total.toFixed(2)}</span>
        </div>
      </div>

      {/* Extras */}
      <div className="mt-6">
        <h3 className="font-bold text-gray-800">Extras (%)</h3>
        <p className="text-sm text-gray-700">Supercharge your purchase with additional discount and coverages</p>
        <button
          onClick={() => setExtrasOpen(!extrasOpen)}
          className="mt-2 flex items-center gap-1 text-yellow-600"
        >
          <AddIcon className="text-yellow-600" /> Firefighting Discount
        </button>

        {extrasOpen && (
          <div className="border mt-4 p-4 rounded">
            <h4 className="font-bold text-gray-800 mb-2">Do you have the following equipment?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {equipmentList.map((label, idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-gray-800">{label}?</span>
                  <label className="inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={equipment[label] || false}
                      onChange={() => handleToggle(label)}
                    />
                    <div className={`w-11 h-6 bg-gray-300 rounded-full relative transition-colors duration-200 ${equipment[label] ? 'bg-yellow-400' : ''}`}>
                      <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition ${equipment[label] ? 'translate-x-5' : ''}`}></div>
                    </div>
                  </label>
                </div>
              ))}
            </div>

            {/* Dropzone */}
            <div
              {...getRootProps()}
              className={`mt-6 border-2 border-dashed p-6 rounded text-center cursor-pointer ${isDragActive ? 'text-black' : 'text-gray-500'}`}
            >
              <input {...getInputProps()} />
              <CloudUploadIcon className="mx-auto text-gray-600" fontSize="large" />
              <p>Drag and drop an image here or click, maximum 5 images allowed.</p>
              {files.length > 0 && (
                <p className="mt-2 text-gray-800">{files.length} image(s) uploaded</p>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Get Quote Button */}
      <button
        className="w-full mt-6 bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 rounded"
      >
        GET QUOTE
      </button>

      <p className="text-xs text-center text-gray-600 mt-6">
        Underwritten by Etiqa General Insurance (Cambodia) Plc. v2.1.2
      </p>
    </div>
  );
};

export default FireInsuranceQuote;
