<template>
  <span class="c-arrow" :class="classes"></span>
</template>

<script>
import "@nitro-ui/component-arrow/dist/css/arrow.min.css";

export default {
  name: "niArrow",
  props: {
    position: {
      type: String,
      default: "top"
    }
  },
  computed: {
    classes() {
      return [`c-arrow--${this.position}`];
    }
  }
};
</script>
