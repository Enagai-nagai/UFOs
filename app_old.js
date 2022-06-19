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
            
        });
    });
}

// 11.5.3
// Create a function to create a couple of variables to hold our date data
function handleClick(){
    // Grab the datetime value from the filter
    // Select the very first element that matches our selector stgin "datetime"
    // .property("value"); Grab the information and hold it in the "date" variable
    let date = d3.select("#datetime").property("value"); 
    

    // Set a default filter and save it to a new variable
    let filteredData = tableData;
    /// filter
    /// === is checking for strict equality and == is for loose equality
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);

    };
   
    // Rebuild the table using the filtered data
    // @Note: If no date was entered. then filteredData will jut be the original tableData.
    buildTable(filteredData);
};

// when the "filter-btn" is clicked handleClick function is executed
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);

