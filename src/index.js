import Vue from "vue";
import VueRouter from "vue-router";

// containers
import App from "./containers/App";
import Home from "./containers/Home";
import Button from "./containers/Button";
import Chip from "./containers/Chip";
import Tooltip from "./containers/Tooltip";
import Avatar from "./containers/Avatar";
import Breadcrumb from "./containers/Breadcrumb";
import Card from "./containers/Card";
import Grid from "./containers/Grid";
import Alert from "./containers/Alert";
import Dropdown from "./containers/Dropdown";
// import Form from "./containers/Form";
import Modal from "./containers/Modal";
import ModuleDashboardSidebarPage from "./containers/ModuleDashboardSidebar";

Vue.config.productionTip = false;
Vue.use(VueRouter);

/**
 * Dynamic layout based on vue router
 * @see https://github.com/darkylmnx/Layout-system-with-vue-and-vue-router
 */
import Default from "./layouts/Default.vue";
import Sidebar from "./layouts/Sidebar.vue";
Vue.component("layout-default", Default);
Vue.component("layout-sidebar", Sidebar);

const router = new VueRouter({
    mode: "history",
    meta: { layout: "no-sidebar" },
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
            component: Tooltip
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
            name: "module-dashboard-sidebar",
            path: "/module-dashboard-sidebar",
            component: ModuleDashboardSidebarPage,
            meta: {
                layout: "sidebar"
            }
        },
        {
            name: "modal",
            path: "/modal",
            component: Modal
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
