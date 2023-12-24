/** @odoo-module */
import { whenReady } from "@odoo/owl";
import { mountComponent } from "@web/env";
import { Shop } from "./shop/shop";
import {Home} from "./home/home";

whenReady(() => mountComponent(Home, document.body));