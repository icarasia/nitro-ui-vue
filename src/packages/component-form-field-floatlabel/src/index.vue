<template>
  <div class="c-field-float" :class="classes" ref="field-float">
    <slot></slot>
    <label
      :class="
        hint ? 'u-flex  u-flex--items-center  u-flex--justify-between' : ''
      "
      v-if="label"
    >
      <span>{{ label }}</span>
      <span v-if="hint" class="c-field__hint  u-text-7">{{ hint }}</span>
    </label>
    <div v-if="message || info" class="u-flex u-flex--justify-between">
      <div class="c-field__message">
        <template v-if="message">{{ message }}</template>
        <template v-else-if="$slots.message"
          ><slot name="message"></slot
        ></template>
      </div>
      <div>
        <span v-if="info" class="u-color-muted">{{ info }}</span>
        <template v-else-if="$slots.info"><slot name="info"></slot></template>
      </div>
    </div>
  </div>
</template>

<script>
import "@nitro-ui/component-form";
import "@nitro-ui/component-form-float";
import "@nitro-ui/utility-flex";

export default {
  name: "niFormFieldFloatLabel",
  props: {
    label: String,
    invalid: Boolean,
    message: {
      type: String,
      default: ""
    },
    info: {
      type: String,
      default: ""
    },
    hint: String
  },
  computed: {
    classes() {
      return [
        { "c-field--error": this.invalid },
        { "is--active": this.hasFocus || this.hasContent },
        { "is--focus": this.hasFocus }
      ];
    },
    fieldIsEmpty() {
      return (
        this.$refs["field-float"].querySelector("input, select, textarea")
          .value === ""
      );
    },
    formElement() {
      return this.$refs["field-float"].querySelector("input, select, textarea");
    }
  },
  methods: {
    focus() {
      this.hasFocus = true;
      this.$emit("focus");
    },
    input(event) {
      this.hasFocus = true;
      this.hasContent = event.target.value !== "";
      this.$emit("input");
    },
    blur() {
      this.hasFocus = false;
      this.$emit("blur");
    }
  },
  mounted() {
    if (this.formElement) {
      this.formElement.addEventListener("input", this.input);
      this.formElement.addEventListener("blur", this.blur);
      this.formElement.addEventListener("focus", this.focus);
      if (this.formElement.type === "select-one") {
        this.hasContent = true;
      }
      this.hasContent = !this.fieldIsEmpty;
    }
  },
  destroyed() {
    if (this.formElement) {
      this.formElement.removeEventListener("input", this.input);
      this.formElement.removeEventListener("blur", this.blur);
      this.formElement.removeEventListener("focus", this.focus);
    }
  },
  data() {
    return {
      hasFocus: false,
      hasContent: false
    };
  }
};
</script>

<style scoped>
.is--focus .c-input-btn {
  border-color: #0774fe;
}
</style>
