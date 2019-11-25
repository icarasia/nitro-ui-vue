<template>
  <div
    class="c-dropdown"
    :class="classes"
    @click="isOpen = !isOpen"
    v-on-clickaway="close"
  >
    <a
      :class="`c-dropdown__control ${titleClasses}`"
      :data-toggle="toggleable ? 'dropdown' : ''"
    >
      <slot name="title" v-if="$slots.title"></slot>
      <template v-else>
        {{ title }}
      </template>
    </a>
    <div class="c-dropdown__base">
      <with-root :showIf="isMega">
        <div class="c-dropdown__mega">
          <div
            class="c-dropdown__menu"
            v-for="(all_items, index) in isMega ? items : [items]"
            :key="index"
          >
            <slot v-if="$slots.default"></slot>
            <template v-else>
              <dropdown-item
                v-for="(item, index) in all_items"
                :index="index"
                :item="item"
                :key="index"
              />
            </template>
          </div>
        </div>
      </with-root>
    </div>
  </div>
</template>

<script>
import "@nitro-ui/component-dropdown";
import DropdownItem from "./DropdownItem";
import WithRoot from "../../../helpers/with-root";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "niDropdown",
  components: { WithRoot, DropdownItem },
  props: {
    title: {
      type: String,
      default: ""
    },
    position: { type: String, default: "" },
    toggleable: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => {
        return null;
      }
    },
    titleClasses: { type: String, default: "" }
  },
  data() {
    return {
      isOpen: false
    };
  },
  mixins: [clickaway],
  computed: {
    classes() {
      return [
        this.position ? `c-dropdown--${this.position}` : "",
        { "is--open": this.toggleable && this.isOpen }
      ];
    },
    isMega() {
      return (
        this.items !== null &&
        this.items.length > 0 &&
        Array.isArray(this.items[0])
      );
    }
  },
  methods: {
    close: function() {
      this.isOpen = false;
    }
  }
};
</script>
