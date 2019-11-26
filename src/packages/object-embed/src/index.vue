<template>
  <div class="o-embed" :class="classes">
      <img :src="src" :alt="alt" v-if="src" />
      <slot v-if="$slots.default"></slot>
    </div>
</template>

<script>
import "@nitro-ui/object-embed";

export default {
  name: "niEmbed",
  props: {
    alt: String,
    src: String,
    size: String
  },
  computed: {
    classes() {
      return [
        this.size ? `o-embed--${this.size}` : ""
      ];
    }
  }
};
</script>
