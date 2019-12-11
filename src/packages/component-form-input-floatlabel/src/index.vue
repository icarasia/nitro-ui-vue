<template>
  <div class="c-field-float" :class="classes">
    <with-root :showIf="inputButton" :class="{ 'is--disabled': disabled }">
      <div class="c-input-btn" :class="classes">
        <input
          type="text"
          class="c-input"
          :value="value"
          @focus="focus"
          @blur="blur"
          @input="input"
          :disabled="disabled"
          ref="field-float"
          :class="fieldClasses"
          v-bind="$attrs"
        />
        <slot v-if="inputButton" name="icon"></slot>
      </div>
    </with-root>
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
import WithRoot from "../../../helpers/with-root";

export default {
  name: "niInputFloatLabel",
  components: { WithRoot },
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
    disabled: Boolean,
    inputButton: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return [
        { "c-field--error": this.invalid },
        { "is--active": this.hasFocus || this.hasContent },
        { "is--focus": this.hasFocus || this.hasContent }
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
    focus() {
      this.hasFocus = true;
      this.$emit("focus");
    },
    input(event) {
      this.hasFocus = true;
      this.hasContent = event.target.value !== "";
      this.$emit("input", event.target.value);
    },
    blur() {
      this.hasFocus = false;
      this.$emit("blur");
    }
  },
  mounted() {
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
      this.hasContent = newVal !== null && newVal !== "";
    }
  }
};
</script>
