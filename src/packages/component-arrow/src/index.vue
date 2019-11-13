<template>
  <span class="c-arrow" :class="classes"></span>
</template>

<script>
import "@nitro-ui/component-arrow";
// import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
  name: "niArrow",
  props: {
    position: {
      type: String,
      default: "top"
    }
  },
  // mixins: [Spaces],
  computed: {
    classes() {
      return [
        // ...this.classNameUtilitySpaces,
        `c-arrow--${this.position}`
      ];
    }
  }
};
</script>
