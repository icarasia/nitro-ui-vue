<template>
  <div class="o-container" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import "@nitro-ui/object-container/dist/css/container.css";

export default {
  name: "niContainer",
  props: {
    type: String
  },
  computed: {
    classes() {
      return [this.type ? `o-container--${this.type}` : ""];
    }
  }
};
</script>
