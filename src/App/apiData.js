import React from "react";

const root = 'https://www.petrescue.com.au/api/listings?species='
const species = 'Cat'

// export const getCats = async (cat) => {
//   const response = await fetch(`${root}/${cat}`.json);
//   const json = await response.json();

//   return json.data;
// };

export const getCats = async () => {
  const endpoint = `${root}${species}`;
  try{
const response = await fetch(endpoint, {cache: 'no-cache'});
    if(response.ok){
      const jsonResponse = await response.json()
      return jsonResponse.name;
    }
  }
  catch(error){
    console.log(error)
  }
}