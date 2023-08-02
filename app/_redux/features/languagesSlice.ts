import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILanguage } from "@/app/_global/types";
import flagRus from "@/public/flags/ru.svg";
import flagEng from "@/public/flags/en.svg";

export interface NewsState {
  languages: ILanguage[];
  selectedLanguage: string;
}

const initialState: NewsState = {
  languages: [
    {
      name: "ru",
      label: "Рус",
      logoSrc: flagRus,
    },
    {
      name: "en",
      label: "Eng",
      logoSrc: flagEng,
    },
  ],
  selectedLanguage: "ru",
};

export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
  },
});

export const { changeLanguage } = languagesSlice.actions;
export default languagesSlice.reducer;
