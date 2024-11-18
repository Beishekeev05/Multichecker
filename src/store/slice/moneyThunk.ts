import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

interface BlockchanesPayload {
	ids: string[];
	openModal: any;
}

export const getAllBlokchanes = createAsyncThunk(
	"block/getAllBlockchanes",
	async ({ ids, openModal }: BlockchanesPayload) => {
		try {
			const requests = ids.map((id) =>
				axios.get(`${BASE_URL}/v2/accounts/${id}`).then((res) => res.data)
			);

			const results = await Promise.all(requests);
			openModal();
			return results;
		} catch (error) {
			console.log("Error fetching data: ", error);
			throw error;
		}
	}
);
