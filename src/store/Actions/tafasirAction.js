import { createAsyncThunk } from "@reduxjs/toolkit";
import useGetData from "../../hook/useGetData";

export const getAllTafasir = createAsyncThunk('tafasir/getTafasir', async ({language}) => {
    try {
        const response = await useGetData(`/api/v3/tafsir?language=${language}`);
        return response.data;
    } catch (error) {
        console.log(error)
        throw error; // Re-throw for error handling in the reducer
    }
});