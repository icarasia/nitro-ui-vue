import Vue from "vue";
import VueRouter from "vue-router";
import SvgIcon from "vue-svgicon";

// containers
import App from "./containers/App";
import Home from "./containers/Home";
import Button from "./containers/Button";
import Chip from "./containers/Chip";
import TooltipC from "./containers/Tooltip";
import Avatar from "./containers/Avatar";
import Breadcrumb from "./containers/Breadcrumb";
import Card from "./containers/Card";
import Grid from "./containers/Grid";
import Alert from "./containers/Alert";
import Dropdown from "./containers/Dropdown";
// import Form from "./containers/Form";
import Modal from "./containers/Modal";
import Tabs from "./containers/Tabs";

Vue.config.productionTip = false;
Vue.use(VueRouter);

Vue.use(SvgIcon, {
    tagName: "svgicon",
    defaultWidth: "1em",
    defaultHeight: "1em"
});

import Tooltip from "./packages/directive-tooltip/src";
Vue.directive("tooltip", Tooltip);

const router = new VueRouter({
    mode: "history",
    routes: [
        {
            name: "home",
            path: "/",
            component: Home
        },
        {
            name: "button",
            path: "/button",
            component: Button
        },
        {
            name: "chips",
            path: "/chip",
            component: Chip
        },
        {
            name: "tooltip",
            path: "/tooltip",
            component: TooltipC
        },
        {
            name: "avatar",
            path: "/avatar",
            component: Avatar
        },
        {
            name: "breadcrumb",
            path: "/breadcrumb",
            component: Breadcrumb
        },
        {
            name: "card",
            path: "/card",
            component: Card
        },
        {
            name: "grid",
            path: "/grid",
            component: Grid
        },
        {
            name: "alert",
            path: "/alert",
            component: Alert
        },
        {
            name: "dropdown",
            path: "/dropdown",
            component: Dropdown
        },
        {
            name: "modal",
            path: "/modal",
            component: Modal
        },
        {
            name: "tabs",
            path: "/tabs",
            component: Tabs
        } //,
        // {
        //     name: "form",
        //     path: "/form",
        //     component: Form
        // }
    ]
});

const BaseVue = Vue.extend({ router });

new BaseVue({
    el: "#app",
    render: h => h(App)
});
