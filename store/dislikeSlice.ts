import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type itemType = {
  catId: string;
};
export type stateType = {
  value: itemType[];
};
const initialState: stateType = {
  value: [],
};
export const dislikeSlice = createSlice({
  name: 'dislikeSliceData',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<itemType>) => {
      const existingItem = state.value.find(
        item => item.catId === action.payload.catId,
      );
      if (existingItem) {
        existingItem.catId += action.payload.catId;
      } else {
        state.value.push(action.payload);
      }
    },
    remove: (state, action: PayloadAction<itemType>) => {
      state.value = state.value.filter(
        item => item.catId !== action.payload.catId,
      );
    },
  },
});
export const { add, remove } = dislikeSlice.actions;
export default dislikeSlice.reducer;
