const axios = require("axios");

const baseUrl = "https://api.coinstats.app/public/v1/coins?skip=0&limit=5&currency=EUR";

function getCoins(url) {
   return axios
   .get(url)
   .then((response) =>{
        return JSON.stringify(response.data);
    })
    .catch((error) => {
        console.error('something wrong: ' + error);
    });
}

async function fetchCoins(url) {
    let data = await getCoins(url);
    console.log(data);
}

fetchCoins(baseUrl);

// var config = {
//   method: "get",
//   maxBodyLength: Infinity,
//   url: "https://api.coinstats.app/public/v1/coins?skip=0&limit=10",
//   headers: {},
// };

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
