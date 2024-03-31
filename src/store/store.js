import { configureStore } from "@reduxjs/toolkit";
import recitersReducer from "./Reducers/recitersReducer";
import livTvReducer from "./Reducers/livTvReducer";
import tafasirReducer from "./Reducers/tafasirReducer";
import languageReducer from "./Reducers/languageReducer";

export const store = configureStore({
    reducer: {
        reciters: recitersReducer,
        livTv: livTvReducer,
        tafsir: tafasirReducer,
        lang: languageReducer
    },
    devTools: true,
})