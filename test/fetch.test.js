const fetch = require("node-fetch");


console.log("Fetching...");

fetch("https://www.bing.com/covid/data?IG=A37A826E6B19477AA1576E0E96D4F0E8")
    .then(res => res.json())
    .then(data => {
        console.log(data.totalConfirmed);
    });