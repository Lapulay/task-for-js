let rIndex,
    table = document.getElementById("table");

// check the empty input
// add Row
function addHtmlTableRow()
{
    // get the table by id
    // create a new row and cells
    // get value from input text
    // set the values into row cell's

        let newRow = table.insertRow(table.length),
            cell1 = newRow.insertCell(0),
            cell2 = newRow.insertCell(1),
            cell3 = newRow.insertCell(2),
            fname = document.getElementById("fname").value,
            lname = document.getElementById("lname").value,
            age = document.getElementById("age").value;

        cell1.innerHTML = fname;
        cell2.innerHTML = lname;
        cell3.innerHTML = age;
        // call the function to set the event to the new row
        selectedRowToInput();
}

// display selected row data into input text
function selectedRowToInput()
{

    for(let i = 1; i < table.rows.length; i++)
    {
        table.rows[i].onclick = function()
        {
            // get the seected row index
            rIndex = this.rowIndex;
            document.getElementById("fname").value = this.cells[0].innerHTML;
            document.getElementById("lname").value = this.cells[1].innerHTML;
            document.getElementById("age").value = this.cells[2].innerHTML;
        };
    }
}
selectedRowToInput();

