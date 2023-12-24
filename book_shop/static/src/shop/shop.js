/** @odoo-module */
import {Component, useState} from "@odoo/owl";

export class Shop extends Component {
    setup() {
        this.states = useState({
            "products": []
        })
        this.getAllProducts(this.props);
    }

    async getAllProducts(products) {
        console.log(products);
      this.states.products= await this.env.services.orm.searchRead('product.product', [], ['id', 'name','list_price','currency_id'])
    }
}

Shop.template = "book_shop.Shop"
// Shop.components = {Navbar};