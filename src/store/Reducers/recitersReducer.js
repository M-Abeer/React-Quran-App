import { createSlice } from '@reduxjs/toolkit'
import { getAllReciters, getAllSuwar } from '../Actions/recitersAction';

const initialState = {
    reciters: [],
    surah: [],
    loading: false,
    error: null,
}

const recitersReducer = createSlice({
    name: 'reciters',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllReciters.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllReciters.fulfilled, (state, action) => {
            state.loading = false;
            state.reciters = action.payload;
        });
        builder.addCase(getAllReciters.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });

        builder.addCase(getAllSuwar.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllSuwar.fulfilled, (state, action) => {
            state.loading = false;
            state.surah = action.payload;
        });
        builder.addCase(getAllSuwar.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default recitersReducer.reducer
