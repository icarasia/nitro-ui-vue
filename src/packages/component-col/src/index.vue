<template>
  <div class="o-grid__item" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
import "@nitro-ui/object-grid";
import "@nitro-ui/utility-width";

export default {
  name: "niCol",
  props: {
    portions: {
      type: [String, Array],
      default: ""
    }
  },
  computed: {
    classes() {
      return [...this.portionClasses];
    },
    portionClasses() {
      // 'mobile' / 'mobile-tablet' / 'portable' / 'desktop'
      let portions = [];
      if (typeof this.portions === "object") {
        this.portions.forEach(portion => {
          portions.push(`u-width-${portion}`);
        });
      } else if (this.portions !== "") {
        portions.push(`u-width-${this.portions}`);
      }
      return portions;
    }
  }
};
</script>
