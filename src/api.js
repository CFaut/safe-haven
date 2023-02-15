import React from "react";

const url = 'https://catfact.ninja/fact?max_length=140'

export const getFacts = async () => {
  console.log({url})
  console.log("WOW")
  const response = await fetch(url);
  console.log(response);
  const json = await response.json();
  console.log({json})

  return json.fact;
};