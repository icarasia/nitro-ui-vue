<template>
  <div v-if="item.is_head" class="c-dropdown__heading">
    {{ item.title }}
  </div>
  <div
    :key="index"
    v-else-if="item.is_divider"
    class="c-dropdown__divider"
  ></div>
  <aLink
    :key="index"
    v-else
    class="c-dropdown__item"
    :target="item.target"
    :href="item.href"
    :to="item.to"
  >
    <template v-if="item.icon">
      <NitroIcon :name="item.icon" size="20"></NitroIcon>
      <span class="u-margin-left-xs">{{ item.title }}</span>
    </template>
    <template v-else>
      {{ item.title }}
    </template>
  </aLink>
</template>

<script>
import "@nitro-ui/component-dropdown";
import ALink from "../../component-link/src/index";

export default {
  name: "Dropdown-menu",
  components: { ALink },
  props: {
    index: {},
    item: {}
  }
};
</script>
