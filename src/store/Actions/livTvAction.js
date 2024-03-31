import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hook/useGetData";

export const getAllLive = createAsyncThunk('livTv/getAllLive', async ({language}) => {
    try {
        const response = await useGetData(`https://mp3quran.net/api/v3/live-tv?language=${language}`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; // Re-throw for error handling in the reducer
    }
});