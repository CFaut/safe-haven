import { createSlice } from '@reduxjs/toolkit';

export const apiCatSlice = createSlice({

  name: 'cats',
  initialState: {
    cats: [],
    filter: ''
  },

  reducers: {
    addCat: (state, action) => {
      state.cats = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    }
  }
})


export const {addCat, setFilter} = apiCatSlice.actions

export const selectCats = (state) => state.cats.cats;
export const selectFilter = (state) => state.cats.filter;


export default apiCatSlice.reducer;