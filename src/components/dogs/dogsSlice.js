import { createSlice } from '@reduxjs/toolkit';

export const dogsSlice = createSlice({

  name: 'dogs',
  initialState: {
    dogs: [
      {
        name: 'Happy',
        age: 3,
        gender: 'male',
        breed: 'mixed',
        image: 'dog1',
        id: 1
      },
      {
        name: 'Mike',
        age: 8,
        gender: 'male',
        breed: 'mixed',
        image: 'dog2',
        id: 2
      },
      {
        name: 'Jamie',
        age: 2,
        gender: 'female',
        breed: 'mixed',
        image: 'dog3',
        id: 3
      },
      {
        name: 'Peanut',
        age: 1,
        gender: 'male',
        breed: 'mixed',
        image: 'dog4',
        id: 4
      },
      {
        name: 'Milo',
        age: 1,
        gender: 'male',
        breed: 'mixed',
        image: 'dog5',
        id: 5
      }
    ],

  },

  reducers: {
    addDog: (state, action) => {
      state.dogs = action.payload;
    },
  }
})


export const {addDog} = dogsSlice.actions

export const selectDogs = (state) => state.dogs.dogs;

export default dogsSlice.reducer;