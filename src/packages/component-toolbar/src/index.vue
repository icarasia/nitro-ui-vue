<template>
  <nav class="c-header  u-bg-white  u-shadow-1dp">
    <div
      class="o-container o-container--fluid u-flex u-flex--justify-between u-flex--items-center  u-height-100"
    >
      <nLink
        @click.prevent="$emit('sidebarOpened')"
        class="btn-close-sidebar u-flex  u-flex--items-center  u-margin-right-lg  no--underline  u-hidden@tablet-desktop c-pointer u-hidden@desktop"
      >
        <NitroIcon name="navigation/menu" size="m" role="button"></NitroIcon>
      </nLink>

      <slot name="left_side"></slot>

      <div
        class="u-flex  u-flex--items-center  u-margin-left-auto  u-margin-none@mobile"
      >
        <slot name="right_side"></slot>
      </div>
    </div>
  </nav>
</template>

<script>
import "@nitro-ui/module-dashboard-toolbar";
import "@nitro-ui/utility";
import "@nitro-ui/object-container";
import nLink from "../../component-link/src/index";

export default {
  name: "niToolbar",
  components: { nLink },
  props: {
    title: String,
    position: String
  }
};
</script>

<style scoped>
.c-pointer {
  cursor: pointer;
}
</style>
