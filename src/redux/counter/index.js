import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("users", async () =>{
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const response = await data.json();
  return response;
});

const counterSlice = createSlice({
  name: "Counter_slice",
  initialState: {
    count: 0,
    errors: null,
    loading: true,
    data: [],
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count > 0 ? (state.count -= 1) : 0;
      ;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.rejected, (state, { payload }) => {
        state.errors = payload;
        state.loading = false;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.data = payload;
        state.loading = false;
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
