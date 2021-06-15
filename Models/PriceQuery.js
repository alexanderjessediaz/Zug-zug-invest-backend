// import pkg from '../Client/src/App.js';
// const { serverQueryString, factionQueryString } = pkg;
export const createNexusPriceQuery = () => {
    const priceData = `/wow-classic/v1/items/${serverQueryString.split(" ").join("-")}-${factionQueryString}/13468/prices`
    
   
  }