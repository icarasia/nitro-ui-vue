<template>
  <div v-if="$slots.default">
    <slot></slot>
  </div>
  <div v-else-if="item.is_head" class="c-dropdown__heading">
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
    :class="item.icon ? `u-flex  u-flex--item-center` : ``"
    @click="itemClicked(item)"
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
import { getComponent } from "../../../helpers/utils";

export default {
  name: "niDropdownItem",
  components: { ALink },
  props: {
    index: {},
    item: {}
  },
  computed: {
    parent() {
      return getComponent(this, "niDropdown");
    }
  },
  methods: {
    itemClicked(item) {
      if (item.callback) {
        this.parent.$emit(item.callback, item.callbackParams);
      }
    }
  }
};
</script>
