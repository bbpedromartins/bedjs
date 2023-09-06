// **************************************************************************************************
// Description: class BEDPL_bar
// Version: 1-2023
// Date create: 04-09-2023
// Date update: 04-09-2023
// Author: Pedro Martins
// License: MIT
// File: bedpl_bar.js
// **************************************************************************************************

class BEDPL_bar {
    id;
    parent_id;
    background_color = "lightgreen";
    width = "20px";
    height = "20px";
    z_index = "0";
    overflow = "auto";
    float = "left";
    padding_top = "0px";
    padding_bottom = "0px";
    padding_left = "0px";
    padding_right = "0px";
    margin_top = "0px";
    margin_bottom = "0px";
    margin_left = "0px";
    margin_right = "0px";
    bottom="";
    top="";
    position = "relative";
    location = "";


    constructor(id) {
        this.id = id;
    }

    render() {
        if (document.getElementById(this.parent_id)) {
            document.getElementById(this.parent_id).insertAdjacentHTML('beforeend',
                "<div id='" + this.id + "'>" + "</div>");
                
            prop_width(this.width, this.id);
            prop_height(this.height, this.id);
            prop_background_color(this.background_color, this.id);
            prop_z_index(this.z_index, this.id);
            prop_overflow(this.overflow, this.id);
            prop_float(this.float, this.id);
            prop_margin_top(this.margin_top, this.id);
            prop_margin_bottom(this.margin_bottom, this.id);
            prop_margin_left(this.margin_left, this.id);
            prop_margin_right(this.margin_right, this.id);
            prop_position(this.position, this.id);
            prop_location(this.location, this.id);
            prop_bottom(this.bottom, this.id);
            prop_top(this.top, this.id);
            prop_padding_top(this.padding_top, this.id);
            prop_padding_bottom(this.padding_bottom, this.id);
            prop_padding_left(this.padding_left, this.id);
            prop_padding_right(this.padding_right, this.id);
    
        } else {
            document.write("PL_SUB_BAR_ERROR: Parent defined but not found. Parent must be defined first.");
        }
    }

}