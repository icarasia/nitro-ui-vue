<template>
  <textarea
    class="c-input"
    :placeholder="placeholder"
    :value="value"
    :rows="rows"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @input="$emit('input', $event.target.value)"
    @click="$emit('click')"
    :disabled="disabled"
  ></textarea>
</template>

<script>
import "@nitro-ui/component-form";

export default {
  name: "niFormTextArea",
  props: {
    placeholder: String,
    defaultValue: String,
    value: String,
    rows: {
      type: Number,
      default: 3
    },
    disabled: Boolean
  }
};
</script>
