const fetch = require("node-fetch");




fetch("https://capi.abren.tech/stats")
    .then(res => res.json())
    .then(data => {
        let d = data.data[0].total;
        console.log(d.labels)
    });