<template>
  <ul class="c-breadcrumb" :class="classes">
    <li v-for="(item, index) in items" :key="index">
      <aLink
        :label="item.label"
        :target="item.target"
        :to="item.to"
        :href="item.href"
      ></aLink>
    </li>
  </ul>
</template>

<script>
import "@nitro-ui/component-breadcrumb";
import aLink from "../../component-link/src/index";

export default {
  name: "niBreadcrumb",
  components: { aLink },
  props: {
    items: Array
  },
  computed: {
    classes() {
      return [];
    }
  }
};
</script>
