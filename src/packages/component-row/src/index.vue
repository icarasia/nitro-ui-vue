<template>
  <div class="o-grid" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import "@nitro-ui/object-grid";

export default {
  name: "niRow",
  props: {
    reversed: Boolean,
    paddings: {
      type: [String, Array],
      default: ""
    }
  },
  computed: {
    classes() {
      return [{ "o-grid--reversed": this.reversed }, ...this.paddingClasses];
    },
    paddingClasses() {
      let paddings = [];
      if (typeof this.padding === "object") {
        this.paddings.forEach(pad => {
          paddings.push(`o-grid--${pad}`);
        });
      } else if (this.paddings !== "") {
        paddings.push(`o-grid--${this.paddings}`);
      }
      return paddings;
    }
  }
};
</script>
