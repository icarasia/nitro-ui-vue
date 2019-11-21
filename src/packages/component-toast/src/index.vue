<template>
  <div class="c-toast-stage" :data-position="position">
    <slot />
  </div>
</template>

<script>
import "@nitro-ui/component-toast";

export default {
  name: "niToast",
  props: {
    position: {
      type: String,
      default: "right"
    }
  }
};
</script>
