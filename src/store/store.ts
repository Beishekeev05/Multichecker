import { configureStore } from "@reduxjs/toolkit";
import { moneySlice } from "./slice/moneySlice";

export const store = configureStore({
	reducer: {
		[moneySlice.name]: moneySlice.reducer,
	},
});
