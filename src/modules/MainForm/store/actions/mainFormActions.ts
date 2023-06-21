import { createAsyncThunk } from "@reduxjs/toolkit";
import { IMainPageForm } from "../../../../pages/MainPage/types/IMainPageForm";
import { ThunkConfig } from "../../../../app/types/axiosTypes";

export const mainFormActions = createAsyncThunk<
  IMainPageForm,
  IMainPageForm,
  ThunkConfig<string>
>("main/mainForm", async (data, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const response = await extra.api.post(`/content/v1/bootcamp/frontend`, {
      data,
    });

    return response.data;
  } catch (e) {
    return rejectWithValue("Не удалось добавить данные");
  }
});
