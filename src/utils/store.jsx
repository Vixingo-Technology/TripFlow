import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "./slice/Quote";

export const store = configureStore({
    reducer: {
        quote: quoteReducer,
    },
});
