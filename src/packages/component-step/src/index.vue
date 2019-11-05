<template>
  <div>
    <slot></slot>

    <Btn
      variant="secondary"
      class="mt-3 text-uppercase"
      @click="$emit('checkStep', '-')"
      v-if="showBackButton"
      >{{ backBtnText }}</Btn
    >
    <Btn
      variant="primary"
      class="mt-3 text-uppercase"
      @click="$emit('checkStep', '+')"
      >{{ maxStep === stepper ? finishBtnText : nextBtnText }}</Btn
    >
  </div>
</template>

<script>
import "@nitro-ui/component-step";
import Btn from "../../component-button/src/index";

export default {
  name: "niStep",
  components: {
    Btn
  },
  props: {
    value: {},
    showBackButton: {
      type: Boolean,
      required: false,
      default: false
    },
    nextBtnText: {
      type: String,
      required: false,
      default: "continue"
    },
    finishBtnText: {
      type: String,
      required: false,
      default: "finish"
    },
    backBtnText: {
      type: String,
      required: false,
      default: "back"
    }
  },
  data() {
    return {
      stepper: this.value,
      maxStep: 0
    };
  },
  created() {
    this.$on("changeStep", step => {
      this.stepper = step;
      this.$emit("input", step);
    });

    this.$on("finishStep", () => {
      this.$emit("finish");
    });
  }
};
</script>
