import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slice/Quote";
import fireInsuranceReducer from "./slice/FireInsuranceSlice";

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
        fireInsurance: fireInsuranceReducer,
    },
});
