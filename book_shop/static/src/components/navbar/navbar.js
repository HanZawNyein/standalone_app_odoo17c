/** @odoo-module */
import {Component, useRef} from "@odoo/owl";

export class Navbar extends Component {
    setup() {
        this.searchQuery = useRef('search');
    }

    searchProducts(){
        console.log("Search...")
    }


}

Navbar.template = "book_shop.Navbar";