<template>
  <select
    class="c-input"
    @focus="$emit('focus', $event)"
    @blur="$emit('blur', $event)"
    v-bind="$attrs"
    v-model="computedValue"
    :disabled="disabled"
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
</template>

<script>
import "@nitro-ui/component-form";

export default {
  name: "niSelect",
  props: {
    placeholder: String,
    emptyPlaceholder: Boolean,
    value: null,
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
    disabled: Boolean
  },
  data() {
    return {
      selected: this.value
    };
  },
  computed: {
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
  watch: {
    value(value) {
      this.selected = value;
    }
  }
};
</script>
