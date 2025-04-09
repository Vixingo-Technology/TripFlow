// src/features/fireInsuranceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  construction: '',
  protectionType: '',
  buildingWorth: 0,
  contentWorth: 0,
  equipment: {},
  files: [],
};

const fireInsuranceSlice = createSlice({
  name: 'fireInsurance',
  initialState,
  reducers: {
    saveFireInsuranceData: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearFireInsuranceData: () => initialState,
  },
});

export const { saveFireInsuranceData, clearFireInsuranceData } = fireInsuranceSlice.actions;

export default fireInsuranceSlice.reducer;
