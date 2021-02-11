import express from "express";
import * as https from "https";

const app = express();

const nasaURL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";
const zeroXURL = "https://kovan.api.0x.org";

https.get(zeroXURL, (response) => {
  let data = "";

  response.on("data", (chunk) => {
    data += chunk;
  });

  response.on('end', ()=>{
      console.log(JSON.parse(data));
  })
});

