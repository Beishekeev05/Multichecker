import { createSlice } from "@reduxjs/toolkit";
import { getAllBlokchanes } from "./moneyThunk";

type Types = {
	isLoading: boolean;
	data: any;
};

const initialState: Types = {
	isLoading: false,
	data: [],
};

export const moneySlice = createSlice({
	name: "block",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getAllBlokchanes.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getAllBlokchanes.fulfilled, (state, action) => {
				state.isLoading = false;
				state.data = action.payload;
			})
			.addCase(getAllBlokchanes.rejected, (state) => {
				state.isLoading = false;
			});
	},
});
