// **************************************************************************************************
// Description: class BEDPL_bar
// Version: 1-2023
// Date create: 05-09-2023
// Date update: 05-09-2023
// Author: Pedro Martins
// License: MIT
// File: bedpl_image.js
// **************************************************************************************************

class BEDPL_image {
    id;
    parent_id;
    backgroundcolor = "white";
    width = "32px";
    height = "32px";
    image = "";

    margin_left = "0px";
    margin_right = "0px";
    location = "left";

    constructor(id) {
        this.id = id;
    }

    render() {

        if (document.getElementById(this.parent_id)) {
            document.getElementById(this.parent_id).insertAdjacentHTML('beforeend',
                "<div id='" + this.id + "'>" +
                "<img " +
                " src='" + this.image + "'" +
                ">" +
                "</img>" +
                "</div>");

            prop_background_color(this.backgroundcolor, this.id);
            prop_width(this.width, this.id);
            prop_height(this.height, this.id);
            prop_margin_left(this.margin_left, this.id);
            prop_margin_right(this.margin_right, this.id);
            prop_location(this.location, this.id);

        } else {
            document.write("PL_IMAGE_ERROR: Parent defined but not found. Parent must be defined first.");
        }

    }

}