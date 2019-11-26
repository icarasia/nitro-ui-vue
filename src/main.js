import Vue from "vue";
import VueRouter from "vue-router";
import NitroIcon from "@nitro-ui/svg-icons-vue";
import "@nitro-ui/svg-icons-vue/dist/NitroIcon.css";
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
import Sidebar from "./containers/Sidebar";
import Table from "./containers/Table";
import Dropdown from "./containers/Dropdown";
import Form from "./containers/Form";
import Modal from "./containers/Modal";
import Tabs from "./containers/Tabs";
import Pagination from "./containers/Pagination";
import Step from "./containers/Stepper";
import Popover from "./containers/Popover";
import Collapse from "./containers/Collapse";
import Toast from "./containers/Toast";
import NiToast from "./packages/component-toast/index";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(NiToast);

Vue.use(NitroIcon);

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
      name: "table",
      path: "/table",
      component: Table
    },
    {
      name: "dropdown",
      path: "/dropdown",
      component: Dropdown
    },
    {
      name: "step",
      path: "/step",
      component: Step
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
    },
    {
      name: "form",
      path: "/form",
      component: Form
    },
    {
      name: "pagination",
      path: "/pagination",
      component: Pagination
    },
    {
      name: "sidebar",
      path: "/sidebar",
      component: Sidebar
    },
    {
      name: "popover",
      path: "/popover",
      component: Popover
    },
    {
      name: "toast",
      path: "/toast",
      component: Toast
    },
    {
      name: "collapse",
      path: "/collapse",
      component: Collapse
    }
  ]
});

const BaseVue = Vue.extend({ router });

new BaseVue({
  el: "#app",
  render: h => h(App)
});
