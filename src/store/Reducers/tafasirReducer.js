import { createSlice } from '@reduxjs/toolkit'
import { getAllReciters, getAllSuwar } from '../Actions/recitersAction';
import { getAllTafasir } from '../Actions/tafasirAction';

const initialState = {
    tafasir: [],
    loading: false,
    error: null,
}

const tafasirReducer = createSlice({
    name: 'tafasir',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllTafasir.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllTafasir.fulfilled, (state, action) => {
            state.loading = false;
            state.tafasir = action.payload;
        });
        builder.addCase(getAllTafasir.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default tafasirReducer.reducer
