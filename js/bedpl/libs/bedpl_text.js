// **************************************************************************************************
// Description: class BEDPL_text
// Version: 1-2023
// Date create: 04-09-2023
// Date update: 04-09-2023
// Author: Pedro Martins
// License: MIT
// File: bedpl_text.js
// **************************************************************************************************
class BEDPL_text {

    id;
    parent_id;
    text = "text";
    color = "black";
    location = "top-left";
    font_size = "20px";
    font_family = "consolas";
    font_weight = "normal";
    margin_left = "0px";
    margin_top = "0px";
    margin_bottom = "0px";
    margin_right = "0px";

    padding_top = "0px";
    padding_bottom = "0px";

    float = "none";
    
    constructor(id) {
        this.id = id;
    }

    render() {
        if (document.getElementById(this.parent_id)) {
            document.getElementById(this.parent_id).insertAdjacentHTML('beforeend',
                "<div id='" +
                this.id +
                "'>" +
                this.text +
                "</div>");

            prop_color(this.color, this.id);
            prop_font_size(this.font_size, this.id);
            prop_font_family(this.font_family, this.id);
            prop_font_weight(this.font_weight, this.id);

            prop_location(this.location, this.id);

            prop_padding_top(this.margin_top, this.id);
            prop_padding_bottom(this.margin_bottom, this.id);

            prop_margin_left(this.margin_left, this.id);
            prop_margin_right(this.margin_right, this.id);
            prop_margin_top(this.margin_top, this.id);
            prop_margin_bottom(this.margin_bottom, this.id);

            prop_float(this.float, this.id);

        } else {
            document.write("BEDPL_TEXT_ERROR: Parent defined but not found. Parent must be defined first.");
        }
    }

};