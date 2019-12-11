<template>
  <div>
    <slot name="header"></slot>

    <div class="o-container">
      <slot></slot>
      <slot
        name="footer"
        :next="goNext"
        :prev="goPrev"
        v-if="$scopedSlots.footer"
      ></slot>
      <div :class="footerStyles" v-else>
        <Btn
          variant="secondary"
          class="u-padding-sides-md u-margin-left-none u-text-semibold u-border-0"
          @click="goPrev"
          v-if="showBackButton && stepper !== 1"
          >{{ backBtnText }}</Btn
        >
        <Btn
          variant="primary"
          class="u-float-right u-padding-sides-lg"
          @click="goNext"
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
    },
    stepValidator: {
      type: Function,
      required: false,
      default: null
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
  },
  methods: {
    goNext() {
      this.$emit("checkStep", "+");
    },
    goPrev() {
      this.$emit("checkStep", "-");
    }
  },
  watch: {
    value(newVal, oldVal) {
      if (newVal - oldVal === 1) this.$emit("checkStep", "+");
      else this.$emit("checkStep", "-");
    }
  }
};
</script>
