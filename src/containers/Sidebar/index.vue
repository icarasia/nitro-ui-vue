<template>
  <div>
    <Toolbar>
      <template slot="left_side">
        <a href="#" class="u-margin-right-auto@mobile">
          <img
            src="/images/logos/default/logo_icarsuite_default.svg"
            width="187"
            height="28"
            alt="iCarSuite"
            class="u-block  u-hidden@mobile"
          />
          <img
            src="/images/logos/default/logo_icarsuite_default_without_text.svg"
            width="42.22"
            height="35"
            alt="iCarSuite"
            class="u-block  u-hidden@tablet-desktop"
          />
        </a>

        <Dropdown
          title="EN >"
          toggleable
          position="left"
          class="u-margin-left-lg  u-hidden@mobile"
          title-classes="u-color-base  u-text-unstyled  u-flex  u-flex--items-center  u-padding-ends-md u-text-semibold"
          :items="items1"
        ></Dropdown>
      </template>
      <template slot="right_side">
        <nLink class="u-flex  u-flex--items-center  no--underline">
          <NitroIcon
            name="icarsuite/icarcoins-color"
            size="32"
            role="button"
            original-color
          ></NitroIcon>
          <div class="u-text-5  u-text-bold  u-color-dark">
            20,000
          </div>
        </nLink>

        <Dropdown
          toggleable
          position="right"
          class="c-notification"
          title-classes="u-margin-left-lg u-flex u-flex--items-center u-relative no--underline"
          :items="items1"
        >
          <template slot="title">
            <NitroIcon
              name="response/notifications"
              size="24"
              color="muted"
              role="button"
            ></NitroIcon>
            <span class="has--notification  u-rounded  u-absolute"></span>
          </template>
        </Dropdown>

        <Dropdown
          toggleable
          position="right"
          class="u-margin-left-lg  u-hidden@mobile"
          title-classes="u-color-base  u-text-unstyled  u-flex  u-flex--items-center  u-padding-ends-md"
          :items="items1"
        >
          <template slot="title">
            <NitroIcon
              name="icarsuite/apps-2"
              size="24"
              color="muted"
              role="button"
            ></NitroIcon>
          </template>
          <div class="c-dropdown__menu">
            <a href="#" class="c-dropdown__item  u-padding-ends-sm"
              ><img
                src="/images/logos/default/logo_dealership_default.svg"
                class="u-flex"
                height="18"
            /></a>

            <a href="#" class="c-dropdown__item  u-padding-ends-sm"
              ><img
                src="/images/logos/default/logo_bid_default.svg"
                class="u-flex"
                height="18"
            /></a>

            <a href="#" class="c-dropdown__item  u-padding-ends-sm"
              ><img
                src="/images/logos/default/logo_leads_default.svg"
                class="u-flex"
                height="18"
            /></a>

            <a href="#" class="c-dropdown__item  u-padding-ends-sm"
              ><img
                src="/images/logos/default/logo_data_default.svg"
                class="u-flex"
                height="18"
            /></a>
          </div>
        </Dropdown>

        <Dropdown
          toggleable
          position="right"
          class="u-padding-ends-xs  u-margin-left-lg  u-hidden@mobile"
          title-classes="u-flex  u-flex--items-center  u-color-base  u-text-unstyled"
          :items="items2"
        >
          <template slot="title">
            <div class="c-avatar  c-avatar--40  u-border">
              <img src="/images/avatar/avatar1.jpg" width="" height="" alt="" />
            </div>
          </template>
        </Dropdown>
      </template>
    </Toolbar>
    <div class="display-4">
      Sidebar
    </div>
    <sidebar
      :menuItems="menuItems"
      menu-open-icon="fas fa-bars"
      menu-close-icon="fas fa-angle-left"
      :user-info="userInfo"
      minimized
      @logout="logout()"
    >
      <template v-slot:footer>
        <img
          src="/images/logos/default/logo_icarsuite_default.svg"
          width="106.11"
          height="16"
          class="u-margin-bottom-sm"
        />
        <div class="c-copyright  u-text-8  u-color-muted">
          Copyright © 2019 iCar Asia Sdn Bhd.
        </div>
      </template>
    </sidebar>
  </div>
</template>

<script>
import Sidebar from "../../packages/component-sidebar/src";
import Toolbar from "../../packages/component-toolbar/src/index";
import Dropdown from "../../packages/component-dropdown/src/index";
import nLink from "../../packages/component-link/src/index";

export default {
  components: { Sidebar, Dropdown, Toolbar, nLink },
  data() {
    return {
      items1: [
        { title: "First", is_head: true, is_divider: false },
        { is_divider: true },
        {
          title: "First first",
          href: "http://www.google.com",
          target: "_blank"
        },
        {
          title: "First second",
          to: { name: "chips" }
        }
      ],
      items2: [
        { title: "Profile", icon: "object/user" },
        { title: "Settings", icon: "action/settings" },
        { is_divider: true },
        { title: "Log out", icon: "icarsuite/off" }
      ],
      userInfo: {
        avatar: "/images/avatar/avatar1.jpg",
        name: "Test User",
        role: "moderator"
      },
      menuItems: [
        { text: "Dashboard", icon: "dealerships/home", to: "/" },
        {
          text: "Listing",
          icon: "dealerships/listing",
          to: "/sidebar"
        },
        {
          text: "Moderation",
          icon: "dealerships/moderation",
          to: null,
          subItems: [
            { text: "Pre Moderation", to: "/" },
            { text: "Post Moderation", to: "/" },
            { text: "Pre Video Moderation", to: "/" },
            { text: "Vehicle Approval", to: "/" }
          ]
        },
        {
          text: "Bulk Upload",
          icon: "dealerships/bulk-upload",
          to: null,
          subItems: [
            { text: "Pre Moderation", to: "/" },
            { text: "Post Moderation", to: "/" },
            { text: "Pre Video Moderation", to: "/" },
            { text: "Vehicle Approval", to: "/" }
          ]
        },
        {
          text: "Bulk Removal",
          icon: "dealerships/bulk-removal",
          to: null,
          subItems: [
            { text: "Pre Moderation", to: "/" },
            { text: "Post Moderation", to: "/" },
            { text: "Pre Video Moderation", to: "/" },
            { text: "Vehicle Approval", to: "/" }
          ]
        },
        {
          text: "User Management",
          icon: "dealerships/user-management",
          to: null,
          subItems: [
            { text: "Pre Moderation", to: "/" },
            { text: "Post Moderation", to: "/" },
            { text: "Pre Video Moderation", to: "/" },
            { text: "Vehicle Approval", to: "/" }
          ]
        },
        {
          text: "Language",
          icon: "icarsuite/language",
          to: "/",
          bottom: true,
          subItems: [
            {
              text: "English",
              to: null,
              callback: "changeLanguage",
              callbackValue: "en"
            },
            {
              text: "ภาษาไทย",
              to: null,
              callback: "changeLanguage",
              callbackValue: "th"
            },
            {
              text: "中文",
              to: null,
              callback: "changeLanguage",
              callbackValue: "th"
            },
            {
              text: "Bahasa Indonesia",
              to: null,
              callbackValue: "id",
              callback: "changeLanguage"
            },
            {
              text: "Bahasa Malaysia",
              to: null,
              callbackValue: "my",
              callback: "changeLanguage"
            }
          ]
        },
        {
          text: "Switch to...",
          icon: "icarsuite/apps-2",
          to: "/",
          bottom: true,
          subItems: [
            {
              text:
                '<img src="/images/logos/default/logo_dealership_default.svg" class="u-flex" height="18"/>',
              to: null,
              useHtml: true
            },
            {
              text:
                '<img src="/images/logos/default/logo_bid_default.svg" class="u-flex" height="18"/>',
              to: null,
              useHtml: true
            },
            {
              text:
                '<img src="/images/logos/default/logo_leads_default.svg" class="u-flex" height="18"/>',
              to: null,
              useHtml: true
            },
            {
              text:
                '<img src="/images/logos/default/logo_data_default.svg" class="u-flex" height="18"/>',
              to: null,
              useHtml: true
            }
          ]
        },
        {
          text: "Settings",
          icon: "action/settings",
          to: "/",
          bottom: true
        },
        {
          text: "Log out",
          icon: "icarsuite/off",
          to: null,
          bottom: true,
          callback: "logout"
        }
      ]
    };
  },
  methods: {
    logout() {
      // console.log("123");
    }
  },
  mounted() {
    this.$on("logout", function() {
      // console.log("123");
    });

    this.$on("changeLanguage", function() {
      // console.log(language);
    });
  }
};
</script>

<style scoped></style>
