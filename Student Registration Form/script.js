function addStudent() {
    // Get form values
    var name = document.getElementById("name").value;
    var rollNumber = document.getElementById("rollNumber").value;
    var course = document.getElementById("course").value;

    // Create a new table row
    var table = document.getElementById("studentTable").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(0);
    // Insert data into the row
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = rollNumber;
    cell3.innerHTML = course;

    // Clear form fields
    document.getElementById("registrationForm").reset();
}
