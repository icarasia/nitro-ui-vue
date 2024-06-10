<template>
  <li
    class="o-list__item"
    @mouseover="getPosition"
    @mouseleave="resetPosition"
    @click="listItemClicked(menuItem)"
  >
    <a-link
      :to="
        !menuItem.subItems ||
        !menuItem.subItems.length ||
        (alwaysShowSubmenu && menuItem.to)
          ? menuItem.to
          : null
      "
      class="u-flex  u-flex--items-center  u-flex--justify-center item-list"
      :class="{ 'is--active': isActive }"
      :active-class="activateByClick ? 'is--active' : ''"
      :exact-route-class="false"
    >
      <div
        class="u-flex  u-flex--items-center"
        :class="{
          'u-flex--column u-text-center': !(
            alwaysShowSubmenu && !parentMinimized
          )
        }"
      >
        <NitroIcon :name="menuItem.icon" size="28" role="button"></NitroIcon>
        <div
          v-if="!(alwaysShowSubmenu && !parentMinimized)"
          class="u-text-7 u-margin-top-xxs"
        >
          {{ menuItem.text }}
        </div>
        <span class="c-sidebar__label  u-margin-left-sm  u-hidden">{{
          menuItem.text
        }}</span>
      </div>
    </a-link>
    <ul
      class="c-collapse  collapse  o-list"
      v-if="menuItem.subItems && menuItem.subItems.length"
      :class="{
        show: clickedId !== null || (alwaysShowSubmenu && !parentMinimized)
      }"
    >
      <li
        class="o-list__item"
        v-for="(subItem, index) in menuItem.subItems"
        :key="index"
        @click="listItemClicked(subItem)"
      >
        <a-link
          :to="subItem.to"
          :label="!subItem.useHtml ? subItem.text : ''"
          class="u-opacity-4  u-relative  u-transition-default"
          :class="{ [linkClass]: linkClass }"
        >
          <span v-if="subItem.useHtml" v-html="subItem.text"></span>
        </a-link>
      </li>
    </ul>
  </li>
</template>

<script>
import aLink from "../../../component-link/src";
//        show: (clickedId !== null || alwaysShowSubmenu) && !parentMinimized

export default {
  components: { aLink },
  props: {
    menuItem: {
      type: Object,
      required: true
    },
    linkClass: {
      type: String,
      required: false,
      default: ""
    },
    openedSidebar: {
      type: Boolean,
      required: false,
      default: null
    },
    itemId: {
      type: Number,
      required: false,
      default: null
    },
    hoveredId: {
      type: Number,
      required: false,
      default: null
    },
    alwaysShowSubmenu: {
      type: Boolean,
      required: false,
      default: true
    },
    parentMinimized: {
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
      clickedId: null
    };
  },
  created() {
    this.$parent.$parent.$on("sidebarClosed", () => {
      this.clickedId = null;
    });
  },
  methods: {
    getPosition($event) {
      this.$emit("update:top", $event.currentTarget.offsetTop);
      this.$emit("update:left", $event.currentTarget.offsetWidth);
      this.$emit("update:index", this.itemId);
    },
    resetPosition() {
      this.$emit("update:index", null);
    },
    itemClicked(item) {
      if (item.callback) {
        this.$parent.$parent.$emit(item.callback, item.callbackValue);
      }
    },
    listItemClicked(item) {
      if (item.subItems && item.subItems.length) {
        this.$parent.$parent.isOpenedSidebar &&
          (this.clickedId =
            this.clickedId === this.itemId ? null : this.itemId);
      }
      // else {
      //   this.$emit("itemClicked");
      // }
      this.$emit("itemClicked");
      this.itemClicked(item);
    }
  },
  computed: {
    isActive: function() {
      return (
        (this.hoveredId !== null && this.hoveredId === this.itemId) ||
        (this.clickedId !== null &&
          this.clickedId === this.itemId &&
          this.activateByClick)
      );
    }
  }
};
</script>
