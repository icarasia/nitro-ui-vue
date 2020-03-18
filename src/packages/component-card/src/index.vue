<template>
  <div class="c-card" :class="classes">
    <div class="c-card__head" v-if="title || hasHeaderSlot">
      <template v-if="title">{{ title }}</template>
      <slot v-else name="header"></slot>
    </div>
    <div class="c-card__body" v-if="!menu && !noBody">
      <h3 class="c-card__title" v-if="hasSpecialTitleSlot">
        <slot name="special_title"></slot>
      </h3>
      <slot></slot>
    </div>
    <ul class="c-card__menu" v-else-if="menu">
      <template v-for="(item, index) in items">
        <li
          :class="{
            'is--divider': item.with_divider,
            'is--active': item.active
          }"
          :key="`menu-divider-${index}`"
          v-if="item.with_divider"
        ></li>
        <li :key="`menu-${index}`">
          <aLink
            :label="item.label"
            :href="item.href"
            :target="item.target"
            :to="item.to"
          ></aLink>

          <ul class="c-card__submenu" v-if="item.childs">
            <li
              v-for="(inner_item, inner_index) in item.childs"
              :key="`menu-${inner_index}`"
              :class="{ 'is--active': inner_item.active }"
            >
              <aLink
                :label="inner_item.label"
                :href="inner_item.href"
                :target="inner_item.target"
                :to="inner_item.to"
              ></aLink>
            </li>
          </ul>
        </li>
      </template>
    </ul>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>

<script>
import "@nitro-ui/component-card";
import aLink from "../../component-link/src/index";

export default {
  name: "niCard",
  components: { aLink },
  props: {
    title: String,
    menu: Boolean,
    noBody: Boolean,
    dark: Boolean,
    items: Array
  },
  computed: {
    classes() {
      return [this.dark ? "c-card--dark" : ""];
    },
    hasHeaderSlot() {
      return this.$slots["header"];
    },
    hasSpecialTitleSlot() {
      return this.$slots["special_title"];
    }
  }
};
</script>
