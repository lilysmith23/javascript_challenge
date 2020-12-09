// from data.js
var observations = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the weather data from data.js
console.log(observations);

// Step 1: Loop Through `data` and console.log each weather report object

// Step 2:  Use d3 to append one table row `tr` for each weather report object

// Don't worry about adding cells or text yet, just try appending the `tr` elements.

// Step 3:  Use `Object.entries` to console.log each weather report value

// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)

// Step 5: Use d3 to update each cell's text with
 data.forEach(function(sighting) {
   console.log(sighting);
   var row = tbody.append("tr");
   Object.entries(sighting).forEach(function([key, value]) {
     console.log(value);
     // Append a cell to the row for each value
     // in the weather report object
     var cell = row.append("td");
     cell.text(value);
   });
 });

// Filter section
// Select the button
var button = d3.select("#filter-btn");

// Select the form
// var form = d3.select("#form");

// Create event handlers 
button.on("click", function() {

    // Clear the table
    var table = document.getElementById("ufo-table");
    for(var i = table.rows.length - 1; i > 0; i--) {
        table.deleteRow(i);
    }

// form.on("submit", runEnter);

// Complete the event handler function for the form
//function runEnter() {

  // Prevent the page from refreshing
  // d3.event.preventDefault();
  
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
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
      // Append a cell to the row for each value
      // in the weather report object
      var cell = row.append("td");
      cell.text(value);
    });
  });

});
