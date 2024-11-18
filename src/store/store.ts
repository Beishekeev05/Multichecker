import { configureStore } from "@reduxjs/toolkit";
import { moneySlice } from "./slice/moneySlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, moneySlice.reducer);

export const store = configureStore({
	reducer: {
		[moneySlice.name]: persistedReducer,
	},
});

export const persistor = persistStore(store);
