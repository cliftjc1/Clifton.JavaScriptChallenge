// Assign the data from `data.js` to a descriptive variable
var tableData = data;

// YOUR CODE HERE!

// So I'm not sure about the code from line 2.. I'm assuming it probably corresponds to one of the following lines (I'm taking from the in class activity)

// Get a reference to the table body.. This is where we're going to start appending new rows of data!
var tbody = d3.select("tbody");
// Console.log the UFO data from data.js
console.log(data);

// 1.) Loop through each row of the 'data' and we're going to perform some function (console.log) on each element in the data array
// data.forEach(function(ufoReport) {
//    console.log(ufoReport);
// })
// running the html in default browser after this, we can see that we have printed each row of data to the console

// 2.) Use d3 to append one table row 'tr' for each ufo data object
// data.forEach(function(ufoReport) {
//     console.log(ufoReport);          // this prints the data element to the console
//     var row = tbody.append("tr")     // this appends a row to the tbody element made in line 9 (which references the spot in the html file where we want to insert our info)
// })
// with the above code, we've successfully added the correct number of rows into the place we were trying to add them (although there's no data in the row entries yet)

// 3.) Use 'Object.entries' to console.log each ufo report value
// data.forEach(function(ufoReport) {
//     //console.log(ufoReport);          // this prints the data element to the console
//     var row = tbody.append("tr");      // this appends a row to the tbody element made in line 9 (which references the spot in the html file where we want to insert our info)
//     Object.entries(ufoReport).forEach(function([key,value]) {
//         console.log(key,value)         // Looping through each row in data.js and each item in each row using the code in line 30
//     });
// })

// 4.) Use d3 to apend 1 cell per ufo report value (datetime,city,state,country,shape,durationMinutes,comments)
data.forEach(function(ufoReport) {
    //console.log(ufoReport);          // this prints the data element to the console
    var row = tbody.append("tr");      // this appends a row (adds a 'tr' element to each row of data) to the tbody element made in line 9 (which references the spot in the html file where we want to insert our info)
    Object.entries(ufoReport).forEach(function([key,value]) {
        var cell = row.append("td");
        cell.text(value);              // the table already has the keys at the head, so we only really need the values
    });
})



// Add in our filter button:

var button = d3.select("#filter-btn");   // Select the button (which is now a d3 object which we can manipulate later)
var dateTime = d3.select("#datetime");   // Select the text object

// Create a function that will do "something" when that button is clicked
function handleClick() {
    console.log("Test: the button was clicked!");  //Test to see if my funciton is tied to the button being clicked
    console.log(d3.event.target);      // "d3.event.target" this will keep track of whatever the thing was that called a function (i.e. if you've got a web page with multiple buttons, this will keep track of which button called the function)
    //What we really want is to DO something when that button is clicked. What we want is to filter off of the datetime that is inputted
    //var inputElement = d3.select("#datetime");       // Grab the input box  // Note: we already did this
    var inputValue = dateTime.property("value");       // this lets us get at the text that someone has typed into a form
    console.log(inputValue);    //safety valve to make sure we're grabbing the right text out of the box
    console.log(tableData);

    // Create the filter variable
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);   //not entirely sure if tableData.Date is correct
    console.log(filteredData);

    // remove all the existing data within ufoReport (select all from the table tag, then add .remove() to delete the table tags)
    // tbody-select_all-tr-.remove

    // for each loop appending new filtered rows

};

button.on("click",handleClick);    // The ".on()" d3 function allows you to tie a function to an action on a webpage with a specific target
// this will monitor your 'button' to see if it clicks, and if it is, it will do whatever comes next (handleClick)

dateTime.on("change",function() {
    var newDateTime = d3.event.target.values;
    console.log(newDateTime);
});
// Instead of listening for the "click", the above code listens for a "change" i.e. the value of the dateTime input field























