import { createSlice } from '@reduxjs/toolkit'
import { getAllLive } from '../Actions/livTvAction';

const initialState = {
    livTv: [],
    loading: false,
    error: null,
}

const livTvReducer = createSlice({
    name: 'reciters',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getAllLive.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllLive.fulfilled, (state, action) => {
            state.loading = false;
            state.livTv = action.payload;
        });
        builder.addCase(getAllLive.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        });
    }
})

export default livTvReducer.reducer
