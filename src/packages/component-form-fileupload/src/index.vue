<template>
  <input
    type="file"
    class="c-input"
    :placeholder="placeholder"
    :value="value"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @input="$emit('input', $event.target.value)"
    @click="$emit('click')"
    :disabled="disabled"
  />
</template>

<script>
import "@nitro-ui/component-form";
export default {
  name: "niFile",
  props: {
    placeholder: String,
    defaultValue: String,
    value: null,
    disabled: Boolean
  }
};
</script>
