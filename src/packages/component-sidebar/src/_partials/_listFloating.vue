<template>
  <div
    class="c-sidebar__floating-menu  u-fixed  u-zindex-1 floating-sidebar--menu-hide"
    :id="`submenu-${index}`"
    :style="{
      top: `${top}px`,
      left: `${left}px`
    }"
    :class="{ show: index === itemId || show }"
    @mouseover="mouseover(index)"
    @mouseleave="mouseleave()"
  >
    <a-link
      :to="
        !menuItem.subItems || !menuItem.subItems.length || menuItem.to
          ? menuItem.to
          : null
      "
      class="no--underline"
    >
      <span
        class="c-sidebar__label  u-color-white  u-padding-ends-sm  u-padding-sides-lg  u-hidden"
      >
        <span class="u-margin-left-sm">{{ menuItem.text }}</span>
      </span>
    </a-link>
    <ul
      class="o-list  u-padding-top-sm  u-padding-bottom-xxs"
      v-if="menuItem.subItems && menuItem.subItems.length"
    >
      <li
        class="o-list__item"
        v-for="(subItem, index) in menuItem.subItems"
        :key="index"
        @click="listItemClicked(subItem)"
      >
        <a-link
          :to="subItem.to"
          class="u-color-white  u-opacity-4  u-relative  u-block  u-padding-ends-xxs  u-padding-sides-lg"
        >
          <span class="u-margin-left-sm">{{ subItem.text }}</span>
        </a-link>
      </li>
    </ul>
  </div>
</template>

<script>
import aLink from "../../../component-link/src";

export default {
  components: { aLink },
  props: {
    menuItem: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: false,
      default: null
    },
    itemId: {
      type: Number,
      required: false,
      default: null
    },
    top: {
      type: Number,
      required: false,
      default: null
    },
    left: {
      type: Number,
      required: false,
      default: null
    }
  },
  data() {
    return {
      show: false
    };
  },
  methods: {
    mouseover(index) {
      this.$emit("update:hovered", index);
      this.show = true;
    },
    mouseleave() {
      this.$emit("update:hovered", null);
      this.show = false;
    },
    itemClicked(item) {
      if (item.callback) {
        this.$parent.$emit(item.callback, item.callbackValue);
      }
    },
    listItemClicked(item) {
      if (item.subItems && item.subItems.length) {
        this.$parent.isOpenedSidebar &&
          (this.clickedId =
            this.clickedId === this.itemId ? null : this.itemId);
      } else {
        this.$emit("itemClicked");
      }
      this.itemClicked(item);
    }
  },
  watch: {
    itemId: function(newVal) {
      if (newVal === null) this.$emit("update:hovered", null);
    }
  }
};
</script>

<style scoped>
.c-sidebar__floating-menu.show {
  visibility: visible;
}
</style>

<style>
body.modal-open .floating-sidebar--menu-hide {
  display: none;
}
</style>
