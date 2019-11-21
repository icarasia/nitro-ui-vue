<template>
  <div>
    <slot name="header"></slot>

    <div class="o-container">
      <slot></slot>
      <div :class="footerStyles">
        <Btn
          variant="secondary"
          class="u-padding-sides-md u-margin-left-none u-text-semibold u-border-0"
          @click="$emit('checkStep', '-')"
          v-if="showBackButton"
          >{{ backBtnText }}</Btn
        >
        <Btn
          variant="primary"
          class="u-float-right u-padding-sides-lg"
          @click="$emit('checkStep', '+')"
          >{{ maxStep === stepper ? finishBtnText : nextBtnText }}</Btn
        >
      </div>
    </div>
  </div>
</template>

<script>
import "@nitro-ui/component-step";
import Btn from "../../component-button/src/index";

export default {
  name: "niStepper",
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
    },
    footerStyles: {
      type: String,
      required: false,
      default: ""
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
