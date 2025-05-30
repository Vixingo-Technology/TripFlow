import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: "quote",
    initialState: {
        user: {
            email: "",
            username: "",
            id: "",
            token: "",
            role: "",
            password: "",
        },
        tripType: "",
        riskType: [],
        destination: [],
        departureDate: null,
        returnDate: null,
        groupTravel: false,
        travelers: [
            {
                id: 1,
                birthMonth: "",
                birthYear: "",
            },
        ],
        funeral: false,
        covid: false,
        covidSafe: "",
        selectedPlan: "",
        applicant: {
            title: "Mr",
            familyName: "",
            givenName: "",
            dateOfBirth: null,
            age: "",
            gender: "",
            passport: "",
            countryCode: "",
            phoneNumber: "",
            email: "",
            city: "",
            district: "",
            commune: "",
            village: "",
            houseNo: "",
            streetNo: "",
            childs: [],
        },
        beneficiary: {
            familyName: "",
            givenName: "",
            gender: "",
            relationship: "",
            phoneNumber: "",
            countryCode: "",
        },
        acceptTerms: false,
    },
    reducers: {
        updateQuoteData: (state, action) => {
            const { field, value } = action.payload;
            state[field] = value;
        },
        updateApplicantData: (state, action) => {
            const { field, value } = action.payload;
            state.applicant[field] = value;
        },
        updateBeneficiaryData: (state, action) => {
            const { field, value } = action.payload;
            state.beneficiary[field] = value;
        },
        addRiskType: (state, action) => {
            state.riskType = action.payload;
        },
        addDestination: (state, action) => {
            state.destination = action.payload;
        },
        addDepartureDate: (state, action) => {
            state.departureDate = action.payload;
        },
        addReturnDate: (state, action) => {
            state.returnDate = action.payload;
        },
        isGroupTravel: (state, action) => {
            state.groupTravel = action.payload;
        },
        addTravelers: (state, action) => {
            state.travelers = action.payload;
        },
        isFuneral: (state, action) => {
            state.funeral = action.payload;
        },
        isCovid: (state, action) => {
            state.covid = action.payload;
        },
        addDateOfBirth: (state, action) => {
            state.applicant.dateOfBirth = action.payload;
        },
        addChilds: (state, action) => {
            state.applicant.childs = action.payload;
        },
        updateChild: (state, action) => {
            const { index, field, value } = action.payload;
            state.applicant.childs[index][field] = value;
        },
        isAccepted: (state, action) => {
            state.acceptTerms = action.payload;
        },
        addSelectedPlan: (state, action) => {
            state.selectedPlan = action.payload;
        },
        resetQuote: (state) => {
            // Reset the form to initial state
            state.name = "";
            state.email = "";
            state.password = "";
        },
    },
});

export const {
    updateQuoteData,
    addRiskType,
    addDestination,
    addDepartureDate,
    addReturnDate,
    isGroupTravel,
    addTravelers,
    isFuneral,
    isCovid,
    updateApplicantData,
    addDateOfBirth,
    resetQuote,
    addChilds,
    updateChild,
    updateBeneficiaryData,
    isAccepted,
    addSelectedPlan,
} = quoteSlice.actions;
export default quoteSlice.reducer;
