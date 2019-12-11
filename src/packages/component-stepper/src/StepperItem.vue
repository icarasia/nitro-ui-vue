<template>
  <div v-show="currentStep === step">
    <slot />
  </div>
</template>

<script>
export default {
  name: "niStepperItem",
  props: {
    step: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {
    currentStep: function() {
      return this.$parent.$parent.stepper;
    }
  }
};
</script>
