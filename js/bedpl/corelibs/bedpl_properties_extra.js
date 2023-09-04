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

function prop_position(position, id) {
    let position_element = document.getElementById(id);

    if (position == "left") {
        position_element.style.position = "absolute";
        position_element.style.top = "50%";
        position_element.style.left = "0%";
        position_element.style.transform = "translate(0%,-50%)";
    }

    if (position == "middle") {
        position_element.style.position = "absolute";
        position_element.style.top = "50%";
        position_element.style.left = "50%";
        position_element.style.transform = "translate(-50%,-50%)";
    }

    if (position == "right") {
        position_element.style.position = "absolute";
        position_element.style.top = "50%";
        position_element.style.right = "0%";
        position_element.style.transform = "translate(0%,-50%)";
    }

    if (position == "top-left") {
        position_element.style.position = "absolute";
        position_element.style.top = "0%";
        position_element.style.left = "0%";
    }

    if (position == "top-middle") {
        position_element.style.position = "absolute";
        position_element.style.top = "0%";
        position_element.style.left = "50%";
        position_element.style.transform = "translate(-50%,0%)";
    }

    if (position == "top-right") {
        position_element.style.position = "absolute";
        position_element.style.top = "0%";
        position_element.style.right = "0%";
    }

    if (position == "bottom-left") {
        position_element.style.position = "absolute";
        position_element.style.bottom = "0%";
        position_element.style.left = "0%";
    }

    if (position == "bottom-middle") {
        position_element.style.position = "absolute";
        position_element.style.bottom = "0%";
        position_element.style.left = "50%";
        position_element.style.transform = "translate(-50%,0%)";
    }

    if (position == "bottom-right") {
        position_element.style.position = "absolute";
        position_element.style.bottom = "0%";
        position_element.style.right = "0%";
    }
}

