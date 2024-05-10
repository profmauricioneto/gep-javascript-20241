const axios = require("axios");

const url = "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json";

async function getRequisition(url) {
    try {
        const response = await axios.get(url);
        console.log(`Status code: ${response.status}`);
        const data = await response.data;
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

getRequisition(url).then((data) => {
    console.log(data);
});
