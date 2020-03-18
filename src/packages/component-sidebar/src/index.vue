<template>
  <section v-on-clickaway="resetFloatingMenu">
    <drawer
      :shown.sync="show"
      class="c-sidebar"
      position="left"
      content_classes="u-bg-haze-light  u-flex  u-flex--justify-between  u-flex--column  u-shadow-1dp"
      :close-on-outside-click="autoHide"
    >
      <div class="c-sidebar__top-menu">
        <nLink
          @click.prevent="openSidebar"
          class="c-sidebar__hamburger u-flex  u-padding-top-md u-flex--justify-center  js-sidebar-menu-btn c-pointer"
        >
          <NitroIcon name="navigation/menu" size="24" role="button"></NitroIcon>
        </nLink>

        <nLink
          @click.prevent="minimizeSidebar"
          class="c-sidebar__close  u-padding-ends-sm  u-padding-left-lg  u-hidden  js-menu-close c-pointer"
        >
          <NitroIcon
            name="navigation/chevron-left"
            size="20"
            role="button"
          ></NitroIcon>
        </nLink>

        <UserProfile :show="show" :user-info="userInfo" />

        <ul
          class="c-drawer__menu  o-list  u-margin-bottom-xl  u-margin-top-lg  u-margin-top-none@mobile  u-padding-top-sm@mobile"
        >
          <list
            v-for="(menuItem, key) in topMenuItems"
            :menu-item="menuItem"
            :item-id="key"
            :key="`top-${key}`"
            link-class="u-color-white"
            v-bind:top.sync="top"
            v-bind:left.sync="left"
            v-bind:index.sync="itemID"
            :hovered-id="hoveredID"
            @itemClicked="itemClicked"
            :always-show-submenu="alwaysShowSubmenu"
            :parent-minimized="!show"
            :activate-by-click="activateByClick"
          ></list>
        </ul>
      </div>

      <div class="c-sidebar__bottom-menu">
        <ul
          class="c-drawer__menu o-list u-padding-ends-sm u-hidden@tablet-desktop"
        >
          <list
            v-for="(menuItem, key) in bottomMenuItems"
            :key="`bottom-${key}`"
            :menu-item="menuItem"
            link-class="u-color-base"
            :item-id="key + topMenuItems.length"
            v-bind:index.sync="itemID"
            :hovered-id="hoveredID"
          ></list>
        </ul>

        <div
          class="c-sidebar__footer u-padding-sides-lg u-padding-ends-lg  u-hidden"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </drawer>

    <!-- Floating Menu Start Here-->
    <div class="u-hidden@mobile">
      <list-floating
        v-for="(menuItem, key) in topMenuItems"
        :menu-item="menuItem"
        :index="key"
        :key="key"
        :top="top"
        :left="left"
        v-bind:hovered.sync="hoveredID"
        :item-id="itemID"
      ></list-floating>
    </div>
    <!-- Floating Menu End Here-->
  </section>
</template>

<script>
import Drawer from "../../component-drawer/src";

import "@nitro-ui/component-drawer";
import "@nitro-ui/utility-display";
import "@nitro-ui/object-list";
import "@nitro-ui/utility-flex";
import "@nitro-ui/utility-text";
import "@nitro-ui/utility-position";
import "@nitro-ui/module-dashboard-sidebar";

import List from "./_partials/_list";
import ListFloating from "./_partials/_listFloating";
import nLink from "../../component-link/src/index";
import UserProfile from "./_partials/UserProfile";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "niSidebar",
  mixins: [clickaway],
  components: { UserProfile, nLink, Drawer, List, ListFloating },
  props: {
    menuItems: {
      type: Array,
      required: false
    },
    menuOpenIcon: {
      type: String,
      required: false,
      default: ""
    },
    menuCloseIcon: {
      type: String,
      required: false,
      default: ""
    },
    userInfo: {
      type: Object,
      required: false,
      default: null
    },
    minimized: {
      type: Boolean,
      required: false,
      default: true
    },
    autoHide: {
      type: Boolean,
      required: false,
      default: false
    },
    hideOnItemClicked: {
      type: Boolean,
      required: false,
      default: false
    },
    alwaysShowSubmenu: {
      type: Boolean,
      required: false,
      default: false
    },
    activateByClick: {
      type: Boolean,
      required: false,
      default: true
    }
  },
  data() {
    return {
      show: true,
      top: 0,
      left: 0,
      itemID: null,
      hoveredID: null,
      isOpenedSidebar: false
    };
  },
  methods: {
    openSidebar() {
      this.$emit("sidebarOpened");
      document.body.classList.add("modal-open");
      this.show = true;
      this.isOpenedSidebar = true;
    },
    minimizeSidebar() {
      this.$emit("sidebarClosed");
      document.body.classList.remove("modal-open");
      this.show = false;
      this.isOpenedSidebar = false;
    },
    toggleSidebar() {
      if (this.show) this.minimizeSidebar();
      else this.openSidebar();
    },
    itemClicked() {
      if (this.hideOnItemClicked) {
        this.minimizeSidebar();
      }
    },
    resetFloatingMenu() {
      this.itemID = null;
    }
  },
  mounted() {
    if (this.minimized) this.minimizeSidebar();
    this.isOpenedSidebar = !this.minimized;
  },
  computed: {
    topMenuItems() {
      return this.menuItems.filter(item => !item.bottom);
    },
    bottomMenuItems() {
      return this.menuItems.filter(item => item.bottom);
    }
  },
  watch: {
    show: function(newVal) {
      if (!newVal) this.minimizeSidebar(); //this.$emit("sidebarClosed");
    }
  }
};
</script>

<style scoped>
.c-pointer {
  cursor: pointer;
}
</style>
