<template>
  <div class="c-field-float" :class="classes">
    <textarea
      class="c-input"
      :value="value"
      :rows="rows"
      @focus="focus"
      @blur="blur"
      @input="input"
      :disabled="disabled"
      ref="field-float"
      :class="fieldClasses"
      v-bind="$attrs"
    ></textarea>
    <slot></slot>
    <label
      :class="
        hint ? 'u-flex  u-flex--items-center  u-flex--justify-between' : ''
      "
    >
      <span>{{ label }}</span>
      <span v-if="hint" class="c-field__hint  u-text-7">{{ hint }}</span>
    </label>
    <div class="u-flex u-flex--justify-between">
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
  name: "niTextareaFloatLabel",
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
    hint: String,
    fieldClasses: String,
    value: String,
    rows: {
      type: Number,
      default: 3
    },
    disabled: Boolean
  },
  computed: {
    classes() {
      return [
        { "c-field--error": this.invalid },
        { "is--active": this.hasFocus || this.hasContent }
      ];
    },
    fieldIsEmpty() {
      return this.value === "" || this.value === null;
    },
    formElement() {
      return this.$refs["field-float"];
    }
  },
  methods: {
    resizeTextarea() {
      this.formElement.style.height = "auto";
      // this.formElement.style.height = this.formElement.scrollHeight + "px";
      this.formElement.setAttribute(
        "style",
        "height:" + this.formElement.scrollHeight + "px;"
      );
    },
    focus() {
      this.hasFocus = true;
      this.$emit("focus");
    },
    input(event) {
      this.hasFocus = true;
      this.hasContent = event.target.value !== "";
      this.resizeTextarea();
      this.$emit("input", event.target.value);
    },
    blur() {
      this.hasFocus = false;
      this.$emit("blur");
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.formElement.setAttribute(
        "style",
        "height:" + this.formElement.scrollHeight + "px;"
      );
    });
    this.hasContent = !this.fieldIsEmpty;
  },
  data() {
    return {
      hasFocus: false,
      hasContent: false
    };
  },
  watch: {
    value(newVal) {
      this.hasContent = newVal.length > 0 || newVal !== null;
    }
  }
};
</script>
