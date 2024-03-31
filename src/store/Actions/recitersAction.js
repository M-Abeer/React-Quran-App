import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hook/useGetData";

export const getAllReciters = createAsyncThunk('reciters/getReciters', async ({language, reciter}) => {
    try {
        const response = await useGetData(`/api/v3/reciters?language=${language}&reciter=${reciter}&rewaya=1`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; // Re-throw for error handling in the reducer
    }
});

export const getAllSuwar = createAsyncThunk('reciters/getSuwar', async ({language}) => {
    try {
        const response = await useGetData(`https://mp3quran.net/api/v3/suwar?language=${language}`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; // Re-throw for error handling in the reducer
    }
});