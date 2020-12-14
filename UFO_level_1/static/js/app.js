// from data.js
var observations = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the data from data.js
console.log(observations);

 data.forEach(function(sighting) {
   console.log(sighting);
   var row = tbody.append("tr");
   Object.entries(sighting).forEach(function([key, value]) {
     console.log(value);
     // Append a cell to the row for each value in the observation
     var cell = row.append("td");
     cell.text(value);
   });
 });

var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", function() {

    // Clear the table
    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(observations);

    var filteredData = observations.filter(observation => observation.datetime === inputValue);

    console.log(filteredData);

  filteredData.forEach(function(filtered_sighting) {
    console.log(filtered_sighting);
    var row = tbody.append("tr");
    
    Object.entries(filtered_sighting).forEach(function([key, value]) {
      console.log(value);
      // Append a cell to the row for each value in the observation
      var cell = row.append("td");
      cell.text(value);
    });
  });

});
