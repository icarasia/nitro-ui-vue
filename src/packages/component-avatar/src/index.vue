<template>
  <figure class="c-avatar" :class="classes" :data-initial="!src ? initial : ''">
    <img :src="src" :alt="alt" v-if="src" />
  </figure>
</template>

<script>
import "@nitro-ui/component-avatar";

export default {
  name: "niAvatar",
  props: {
    alt: String,
    src: String,
    initial: String,
    size: String,
    square: Boolean
  },
  computed: {
    classes() {
      return [
        this.size ? `c-avatar--${this.size}px` : "",
        { "c-avatar--square": this.square }
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
