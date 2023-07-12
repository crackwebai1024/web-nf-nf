import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = process.env.REACT_APP_NFT_STORE_URL;

const initialState = {
  nfts: [],
  historyNfts: [],
};

const slice = createSlice({
  name: "nfts",
  initialState,
  reducers: {
    initialize(state, action) {
      state.nfts = [];
      state.historyNfts = [];
    },
    getNfts(state, action) {
      const { nfts } = action.payload;
      state.nfts = nfts;
    },
    setHistoryNfts(state, action) {
      state.historyNfts.push(action.payload.nft);
    },
  },
});

export const reducer = slice.reducer;

export const analyticsInitialize = () => async (dispatch) => {
  dispatch(slice.actions.initialize());
};

export const getNfts = (data) => async (dispatch) => {
  const response = await axios({
    method: "GET",
    url: apiUrl,
  });
  console.log(response.data.ownedNfts);
  dispatch(slice.actions.getNfts({ nfts: response.data.ownedNfts }));
};

export const setHistoryNfts = (data) => async (dispatch) => {
  dispatch(slice.actions.setHistoryNfts({ nft: data }));
};
export default slice;
