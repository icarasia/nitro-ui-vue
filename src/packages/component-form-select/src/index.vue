<template>
  <select
    class="c-input"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @input="$emit('input', $event.target.value)"
    @click="$emit('click')"
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
        :value="option.value"
        :key="index"
      >
        {{ option.label }}
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
    disabled: Boolean
  }
};
</script>
