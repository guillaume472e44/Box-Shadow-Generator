import { configureStore } from "@reduxjs/toolkit";
import shadows from "../features/shadows/shadows";
import boxProperties from "../features/boxProperties/boxProperties";

export const store = configureStore({
  reducer: {
    shadows,
    boxProperties,
  },
});
