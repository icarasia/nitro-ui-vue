<template>
  <span class="c-chip" :class="classes">
    <slot></slot>
  </span>
</template>

<script>
import "@nitro-ui/component-chips";

export default {
  name: "niChip",
  props: {
    variant: String,
    size: {
      type: String,
      default: "sm"
    },
    outline: Boolean
  },
  computed: {
    classes() {
      return [
        this.outline
          ? `c-chip--${this.variant}-inverted`
          : `c-chip--${this.variant}`,
        `c-chip--${this.size}`
      ];
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
    }
  }
};
</script>
