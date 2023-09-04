// **************************************************************************************************
// Description: class BEDPL_body
// Version: 1-2023
// Date create: 05-09-2023
// Date update: 05-09-2023
// Author: Pedro Martins
// License: MIT
// File: bedpl_body.js
// **************************************************************************************************
class BEDPL_body {
    id;
    background = "black";
    background_image = "";
    box_sizing = "border-box";
    margin = "0px";
    height = "100%";
    
    constructor(id) {
        this.id = id;
    }

    render() {
        prop_background(this.background, this.id);
        prop_background_image(this.background_image, this.id);
        prop_box_sizing(this.box_sizing, this.id);
        prop_margin(this.margin, this.id);
        prop_height(this.height, this.id);
    }

}
