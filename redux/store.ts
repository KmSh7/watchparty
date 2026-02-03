import { configureStore } from "@reduxjs/toolkit";
import linkReducer from "./slice/linkSlice"

export const store = configureStore({
    reducer:{
        linkpath : linkReducer,
    }
});

export type SelectorType = ReturnType<typeof store.getState>;
export type DispatcherType = typeof store.dispatch;