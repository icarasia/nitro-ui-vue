<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link to="/" class="navbar-brand">@nitro-ui-vue</router-link>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#app-nav-mobile"
        aria-controls="app-nav-mobile"
        aria-expanded="false"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="app-nav-mobile">

      </div> -->
      <Dropdown
          title="Menu"
          position="right"
          toggleable
          style="display: inline-block"
          :items="items"
      ></Dropdown>
    </div>
  </nav>
</template>

<script>
import "@nitro-ui/utility";
import Dropdown from "../../packages/component-dropdown/src/index";
export default {
    name: "AppHeader",
    components: {
        Dropdown
    },
    data() {
        return {
            items: [
                {
                    title: "Home",
                    href: "/",
                },
                {
                    title: "Button",
                    href: "/button"
                },
                {
                    title: "Chip",
                    href: "/chip"
                },
                {
                    title: "Tooltip",
                    href: "/tooltip"
                },
                {
                    title: "Avatar",
                    href: "/avatar"
                },
                {
                    title: "Breadcrumb",
                    href: "/breadcrumb"
                },
                {
                    title: "Card",
                    href: "/card"
                },
                {
                    title: "Alert",
                    href: "/alert"
                },
                {
                    title: "Dropdown",
                    href: "/dropdown"
                },
                {
                    title: "Form",
                    href: "/form"
                },
                {
                    title: "Modal & Drawer",
                    href: "/modal"
                },
                {
                    title: "Step",
                    href: "/step"
                },
                {
                    title: "Pagination",
                    href: "/pagination"
                },
                {
                    title: "Tabs",
                    href: "/tabs"
                },
                {
                    title: "Grid",
                    href: "/grid"
                },
                {
                    title: "Sidebar & Toolbar",
                    href: "/sidebar"
                },
                {
                    title: "Table",
                    href: "/table"
                },
                {
                    title: "Popover",
                    href: "/popover"
                },
                {
                    title: "Collapse",
                    href: "/collapse"
                }
            ]
        };
    }
};
</script>
