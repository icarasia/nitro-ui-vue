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
    <ul class="o-list" v-if="menuItem.subItems && menuItem.subItems.length">
      <li
        class="o-list__item"
        v-for="(subItem, index) in menuItem.subItems"
        :key="index"
        @click="listItemClicked(subItem)"
      >
        <a-link
          :to="subItem.to"
          class="u-color-base  u-relative  u-block  u-padding-md"
          :class="{ 'is--active': subItem.isActive }"
        >
          <span>{{ subItem.text }}</span>
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

<style scoped lang="scss">
.c-sidebar__floating-menu {
  min-width: 200px;
  &.show {
    visibility: visible;
  }
}
</style>

<style>
body.modal-open .floating-sidebar--menu-hide {
  display: none;
}
</style>
