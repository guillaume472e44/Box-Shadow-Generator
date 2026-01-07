import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    inputNumber: 0,
    name: "Border radius",
    value: 24,
    type: "range",
    minMax: [0, 256],
  },
  {
    inputNumber: 1,
    name: "Height",
    value: 256,
    type: "range",
    minMax: [1, 512],
  },
  {
    inputNumber: 2,
    name: "Width",
    value: 256,
    type: "range",
    minMax: [1, 512],
  },
  {
    inputNumber: 3,
    name: "Background Color",
    value: "#eeeeee",
    type: "color",
  },
];

const boxProperties = createSlice({
  name: "boxProperties",
  initialState,
  reducers: {
    updateBoxValue: (state, action) => {
      state[action.payload.inputNumber].value = action.payload.value;
    },
  },
});

export const { updateBoxValue } = boxProperties.actions;
export default boxProperties.reducer;
