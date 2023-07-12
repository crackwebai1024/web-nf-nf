import { combineReducers } from "@reduxjs/toolkit";

import { reducer as nftsReducer } from "../slices/nfts";

const rootReducer = combineReducers({
  nfts: nftsReducer,
});

export default rootReducer;
