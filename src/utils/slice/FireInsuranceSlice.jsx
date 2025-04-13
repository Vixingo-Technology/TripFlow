import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  customerDetails: {},
  construction: '',
  protectionType: '',
  buildingWorth: 0,
  contentWorth: 0,
  equipment: {},        // or change to [] if it’s a list
  files: [],
};

const fireInsuranceSlice = createSlice({
  name: 'fireInsurance',
  initialState,
  reducers: {
    setCustomerDetails: (state, action) => {
      state.customerDetails = action.payload;
    },
    setConstruction: (state, action) => {
      state.construction = action.payload;
    },
    setProtectionType: (state, action) => {
      state.protectionType = action.payload;
    },
    setBuildingWorth: (state, action) => {
      state.buildingWorth = action.payload;
    },
    setContentWorth: (state, action) => {
      state.contentWorth = action.payload;
    },
    setEquipment: (state, action) => {
      state.equipment = action.payload;
    },
    setFiles: (state, action) => {
      state.files = action.payload;
    },
    saveFireInsuranceData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFireInsuranceData: () => initialState,
  },
});

export const {
  setCustomerDetails,
  setConstruction,
  setProtectionType,
  setBuildingWorth,
  setContentWorth,
  setEquipment,
  setFiles,
  saveFireInsuranceData,
  clearFireInsuranceData,
} = fireInsuranceSlice.actions;

export default fireInsuranceSlice.reducer;
