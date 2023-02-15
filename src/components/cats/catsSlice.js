import { createSlice } from '@reduxjs/toolkit';

export const catsSlice = createSlice({

  name: 'cats',
  initialState: {
    cats: [
      {
        name: 'Buzzy',
        age: 3,
        gender: 'female',
        breed: 'mixed',
        image: 'cat1',
        id: 1
      },
      {
        name: 'Leo',
        age: 3,
        gender: 'male',
        breed: 'mixed',
        image: 'cat2',
        id: 2
      },
      {
        name: 'Lucy',
        age: 7,
        gender: 'female',
        breed: 'shorthair',
        image: 'cat3',
        id: 3
      },
      {
        name: 'Jam',
        age: 1,
        gender: 'female',
        breed: 'mixed',
        image: 'cat4',
        id: 4
      },
      {
        name: 'Bugsy',
        age: 1,
        gender: 'male',
        breed: 'longhair',
        image: 'cat5',
        id: 5
      },
      {
        name: 'Nina',
        age: 3,
        gender: 'female',
        breed: 'mixed',
        image: 'cat6',
        id: 6
      },
      {
        name: 'LeLily',
        age: 3,
        gender: 'male',
        breed: 'mixed',
        image: 'cat7',
        id: 7
      },
      {
        name: 'Diamond',
        age: 7,
        gender: 'female',
        breed: 'shorthair',
        image: 'cat8',
        id: 8
      },
      {
        name: 'Monk',
        age: 1,
        gender: 'female',
        breed: 'mixed',
        image: 'cat9',
        id: 9
      },
      {
        name: 'Harry',
        age: 1,
        gender: 'male',
        breed: 'longhair',
        image: 'cat10',
        id: 10
      }
    ],

  },

  reducers: {
    addCat: (state, action) => {
      state.cats = action.payload;
    },
  }
})


export const {addCat} = catsSlice.actions

export const selectCats = (state) => state.cats.cats;

export default catsSlice.reducer;