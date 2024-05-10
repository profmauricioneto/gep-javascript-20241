/**
 * This file contains the functions to fetch data from the COVID-19 API.
 * The API documentation can be found at https://api.covid19tracker.ca/docs/1.0/overview
*/
const axios = require("axios");

const url = "https://api.covid19tracker.ca";

// Fetches the summary data from the API
function getSummaryData(url) {
  return axios
    .get(url + "/summary")
    .then((response) => {
    //   console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

async function fetchSummary() {
    let summaries = await getSummaryData(url);
    console.log(summaries);
  }

fetchSummary();


// Fetches the health data by region from the API
function getReports(url) {
  return axios
    .get(url + "/reports")
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

async function fetchReports() {
  let reports = await getReports(url);
  console.log(reports);
}

fetchReports();