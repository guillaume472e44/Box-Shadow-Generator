import { createSlice } from "@reduxjs/toolkit";
import { shadowModel } from "../../common/utils/shadowModel";
import { nanoid } from "@reduxjs/toolkit";

const initialState = [{ ...shadowModel, id: nanoid(8) }];

const shadows = createSlice({
  name: "shadow",
  initialState,
  reducers: {
    removeShadow: (state, action) => {
      return state.filter((shadow) => shadow.id !== action.payload);
    },
    addShadow: (state, action) => {
      state.push({ ...shadowModel, id: nanoid(8) });
    },
    updateShadowValue: (state, action) => {
      const shadow = state.find((el) => el.id === action.payload.id);
      shadow.inputs[action.payload.inputNumber].value = action.payload.value;
    },
    updateCheckBox: (state, action) => {
      const shadow = state.find((el) => el.id === action.payload.id);
      shadow[action.payload.name] = !shadow[action.payload.name];
    },
  },
});

export const { removeShadow, addShadow, updateShadowValue, updateCheckBox } =
  shadows.actions;
export default shadows.reducer;
