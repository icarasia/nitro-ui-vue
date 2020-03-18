<template>
  <div class="c-field-float" :class="classes">
    <select
      class="c-input"
      @focus="focus"
      @blur="blur"
      v-bind="$attrs"
      v-model="computedValue"
      :disabled="disabled"
      :class="fieldClasses"
    >
      <template v-if="placeholder">
        <option :value="null">
          {{ placeholder }}
        </option>
      </template>
      <template v-if="emptyPlaceholder">
        <option :value="null"> </option>
      </template>
      <slot v-if="$slots.default" />
      <template v-else>
        <option
          v-for="(option, index) in options"
          :value="option[`${valueAttribute}`]"
          :key="index"
        >
          {{ option[`${labelAttribute}`] }}
        </option>
      </template>
    </select>

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
  name: "niSelectFloatLabel",
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
    placeholder: Boolean,
    emptyPlaceholder: Boolean,
    fieldClasses: String,
    options: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    },
    valueAttribute: {
      type: String,
      default: "value"
    },
    labelAttribute: {
      type: String,
      default: "label"
    },
    value: [String, Number],
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
    },
    computedValue: {
      get() {
        return this.selected;
      },
      set(value) {
        this.selected = value;
        this.$emit("input", value);
      }
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
      hasContent: false,
      selected: this.value
    };
  },
  watch: {
    value(newVal) {
      this.selected = newVal;
      this.hasContent = newVal !== null;
    }
  }
};
</script>
s
