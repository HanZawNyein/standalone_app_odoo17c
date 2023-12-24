/** @odoo-module */
import {Component} from "@odoo/owl";
import {Shop} from "../shop/shop";
import {Navbar} from "../components/navbar/navbar";

export class Home extends Component {}

Home.template = "book_shop.Home";
Home.components = {Navbar,Shop};