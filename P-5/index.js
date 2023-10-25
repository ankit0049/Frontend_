function addData() {
    var website = document.getElementById('Website').value;
    var username = document.getElementById('Username').value;
    var password = document.getElementById('Password').value;

    // Retrieve existing data or initialize an empty array
    var data = JSON.parse(localStorage.getItem('passwordData')) || [];

    // Add new data to the array
    data.push({ website: website, username: username, password: password });

    // Store the updated data back in local storage
    localStorage.setItem('passwordData', JSON.stringify(data));

    // Clear input fields
    document.getElementById('Website').value = '';
    document.getElementById('Username').value = '';
    document.getElementById('Password').value = '';

    // Update the table
    updateTable();
}

function updateTable() {
    var data = JSON.parse(localStorage.getItem('passwordData')) || [];
    var table = document.getElementById('passwordTable');
    table.innerHTML = '<tr><th>Website</th><th>Username</th><th>Password</th><th>Action</th></tr>';

    for (var i = 0; i < data.length; i++) {
        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = data[i].website;
        cell2.innerHTML = data[i].username;
        cell3.innerHTML = '*'.repeat(data[i].password.length); // Show asterisks
        cell4.innerHTML = '<button onclick="copyData(this)">Copy</button> <button onclick="deleteRow(this)">Delete</button>';
        row.dataset.password = data[i].password; // Store actual password as a data attribute
    }
}

function copyData(button) {
    var row = button.parentNode.parentNode;
    var password = row.dataset.password;

    navigator.clipboard.writeText(password);

}
function deleteRow(button) {
    var row = button.parentNode.parentNode;
    var cells = row.getElementsByTagName('td');

    var website = cells[0].innerText;
    var username = cells[1].innerText;
    var password = row.dataset.password;

    var data = JSON.parse(localStorage.getItem('passwordData')) || [];

    // Find the index of the row to delete
    var indexToDelete = -1;
    for (var i = 0; i < data.length; i++) {
        if (data[i].website === website && data[i].username === username && data[i].password === password) {
            indexToDelete = i;
            break;
        }
    }

    if (indexToDelete !== -1) {
        data.splice(indexToDelete, 1);
        localStorage.setItem('passwordData', JSON.stringify(data));
        updateTable();
    }
}

// Initial load of the table
window.onload = function() {
    updateTable();
}
