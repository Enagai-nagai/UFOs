// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Make a function to make a table from the object
function buildTable(data){
    tbody.html(""); // Clear the existing data

    data.forEach((dataRow) => { 
        let row = tbody.append("tr"); // find the tbody tag and add a table row "tr"
        // Reference one object from the array of UFO sightings 
        // val argument represents each item in the object
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            // Add each value from the object into a cell
            cell.text(val);
            }
        );
    });
}