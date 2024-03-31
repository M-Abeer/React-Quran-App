import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    language: localStorage.getItem('lang') ||'ar',
    dir: localStorage.getItem('langDir') || 'rtl',
};

export const languageReducer = createSlice({
    name: 'language',
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.language = action.payload;
            localStorage.setItem('lang', action.payload);
        },
        setDirection: (state, action) => {
            state.dir = action.payload;
            localStorage.setItem('langDir', action.payload)
        },
    },
});;

export const { changeLanguage, setDirection } = languageReducer.actions;
export default languageReducer.reducer;