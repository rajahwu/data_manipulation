d3.csv("/data/cities.csv", function (d) {
    return {
        city: d.city,
        state: d.state,
        population: +d.population,
        land_area: +d["land area"]
    };
}).then(function (data) {
    console.log(data[0]);
});

d3.tsv("/data/animals.tsv").then(function(data) {
    console.log(data[0])
})

d3.dsv("|", "/data/animals_piped.txt").then(function(data) {
    console.log(data[1])
})

d3.json("/data/employess.json").then(function(data) {
    console.log(data[0])
})