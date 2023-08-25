import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { stateItemType } from './sliceType';

const initialState: stateItemType[] = [];
export const logSlice = createSlice({
  name: 'logSliceData',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<stateItemType>) => {
      state.push(action.payload);
    },
    remove: (state, action: PayloadAction<string>) => {
      state = state.filter(item => item.image_id !== action.payload);
    },
  },
});
export const { add, remove } = logSlice.actions;
export default logSlice.reducer;
