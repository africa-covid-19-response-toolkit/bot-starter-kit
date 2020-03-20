let covid = require("novelcovid");



// Total
// (async () => {
//     let data = await covid.all();


//     return console.log(`
//         Total Cases: ${data.cases}
//         Total Deaths: ${data.deaths}
//         Total Recovered: ${data.recovered}
//         Last Updated on: ${data.updated}
//     `);
// })();


// Countries
(async () => {
    let data = await covid.countries();

    for (var i = 0; i < data.length; i++) {
        console.log(data[i].country);
    }
})();