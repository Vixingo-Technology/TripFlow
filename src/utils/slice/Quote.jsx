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
        applicant: {
            title: "Mr",
            familyName: "",
            givenName: "",
            dateOfBirth: "",
            age: "",
            gender: "",
            passport: "",
            phoneNumber: "",
            email: "",
            city: "",
            district: "",
            commune: "",
            village: "",
            houseNo: "",
            streetNo: "",
        },
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
    resetQuote,
} = quoteSlice.actions;
export default quoteSlice.reducer;
