// **************************************************************************************************
// Description: BEDPL PROPERTIES EXTRA
// Version: 02-09-2023
// Date create: 02-09-2023
// Date update: 02-09-2023
// Author: Pedro Martins
// License: MIT
// File: pl_properties_extra.js
// **************************************************************************************************


// **************************************************************************************************
// Debug
// **************************************************************************************************
//console.log("");


// **************************************************************************************************
// Property: position
// **************************************************************************************************

function prop_location(location, id) {
    let location_element = document.getElementById(id);

    if (location == "left") {
        location_element.style.position = "absolute";
        location_element.style.top = "50%";
        location_element.style.left = "0%";
        location_element.style.transform = "translate(0%,-50%)";
    }

    if (location == "middle") {
        location_element.style.position = "absolute";
        location_element.style.top = "50%";
        location_element.style.left = "50%";
        location_element.style.transform = "translate(-50%,-50%)";
    }

    if (location == "right") {
        location_element.style.position = "absolute";
        location_element.style.top = "50%";
        location_element.style.right = "0%";
        location_element.style.transform = "translate(0%,-50%)";
    }

    if (location == "top-left") {
        location_element.style.position = "absolute";
        location_element.style.top = "0%";
        location_element.style.left = "0%";
    }

    if (location == "top-middle") {
        location_element.style.position = "absolute";
        location_element.style.top = "0%";
        location_element.style.left = "50%";
        location_element.style.transform = "translate(-50%,0%)";
    }

    if (location == "top-right") {
        location_element.style.position = "absolute";
        location_element.style.top = "0%";
        location_element.style.right = "0%";
    }

    if (location == "bottom-left") {
        location_element.style.position = "absolute";
        location_element.style.bottom = "0%";
        location_element.style.left = "0%";
    }

    if (location == "bottom-middle") {
        location_element.style.position = "absolute";
        location_element.style.bottom = "0%";
        location_element.style.left = "50%";
        location_element.style.transform = "translate(-50%,0%)";
    }

    if (location == "bottom-right") {
        location_element.style.position = "absolute";
        location_element.style.bottom = "0%";
        location_element.style.right = "0%";
    }
}

