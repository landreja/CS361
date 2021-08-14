// James Landreth
// CS-361
// Script to do all the calculations and enter them into a table.


// Create master table
var table = document.getElementById("master_table")

// Add results to the table
function add_row(from, to, result) {
    var row = table.insertRow()
    var return_table_cell1 = row.insertCell(0)
    var return_table_cell2 = row.insertCell(1)
    var return_table_cell3 = row.insertCell(2)

    return_table_cell1.innerHTML = from
    return_table_cell2.innerHTML = to
    return_table_cell3.innerHTML = result
}

// This function calculates length conversions
let length = [[1, 0.539957, 0.539957], [1.852, 1, 1852], [0.001, 0.000539957, 1]]
document.getElementById('generate_length').addEventListener('click', function (event) {
    var conversio = document.getElementById('from').value
    var from_length = document.getElementById('from_select').value
    var from_text = null
    var to_text = null
    var to_length = document.getElementById('to_select').value
    var results = conversio * length[from_length][to_length]

    if (from_length == 0) {
        from_text = 'km'
    } else if (from_length == 1) {
        from_text = 'nm'
    } else {
        from_text = 'm'
    }
    if (to_length == 0) {
        to_text = 'km'
    } else if (to_length == 1) {
        to_text = 'nm'
    } else {
        to_text = 'm'
    }
    add_row(from_text, to_text, results)
    event.preventDefault()
});

//This function is going to calc mass changes
let mass = [[1, 2.20462, 35.274], [0.453592, 1, 16], [0.0283495, 0.0625, 1]]
document.getElementById('generate_mass').addEventListener('click', function (event) {
    var conversio = document.getElementById('from_mass').value
    var from_mass = document.getElementById('from_mass_select').value
    var from_text = null
    var to_text = null
    var to_mass = document.getElementById('to_mass_select').value
    var results = conversio * length[from_mass][to_mass]
    if (from_mass == 0) {
        from_text = 'kg'
    } else if (from_mass == 1) {
        from_text = 'lb'
    } else {
        from_text = 'oc'
    }
    if (to_mass == 0) {
        to_text = 'kg'
    } else if (to_mass == 1) {
        to_text = 'lb'
    } else {
        to_text = 'oc'
    }
    add_row(from_text, to_text, results)
    event.preventDefault()
});


// Speed conversion
let speed = [[1, 0.51444444, 1.15078], [1.94384, 1, 2.23694], [0.868976, 0.44704, 1]]
document.getElementById('generate_speed').addEventListener('click', function (event) {
    var conversio = document.getElementById('from_speed').value
    var from_speed = document.getElementById('from_speed_select').value
    var from_text = null
    var to_text = null
    var to_speed = document.getElementById('to_speed_select').value
    var results = conversio * length[from_speed][to_speed]
    if (from_speed == 0) {
        from_text = 'kts'
    } else if (from_speed == 1) {
        from_text = 'm/s'
    } else {
        from_text = 'mph'
    }
    if (to_speed == 0) {
        to_text = 'kts'
    } else if (to_speed == 1) {
        to_text = 'm/s'
    } else {
        to_text = 'mph'
    }
    add_row(from_text, to_text, results)

    event.preventDefault()
});

//Geolocation conversion
document.getElementById('generate_dms').addEventListener('click', function (event) {
    var latdegrees = Number(document.getElementById('lat_degrees').value)
    var latminutes = Number(document.getElementById('lat_minutes').value)
    var latseconds = Number(document.getElementById('lat_seconds').value)
    var lat_results = (latdegrees + ((latminutes / 60) + (latseconds / 3600)))
    var longdegrees = Number(document.getElementById('long_degrees').value)
    var longminutes = Number(document.getElementById('long_minutes').value)
    var longseconds = Number(document.getElementById('long_seconds').value)
    var long_results = (longdegrees + ((longminutes / 60) + (longseconds / 3600)))
    add_row('DMS', 'DD', 'Lat: ' + lat_results + ' / ' + 'Long: ' + long_results)

    event.preventDefault()
});

