<template>
  <div class="c-field" :class="{ 'c-field--error': invalid }">
    <label>{{ label }}</label>
    <slot></slot>
    <div class="c-field__message" v-if="message">{{ message }}</div>
  </div>
</template>

<script>
import "@nitro-ui/component-form";

export default {
  name: "niFormField",
  props: {
    label: String,
    invalid: Boolean,
    message: {
      type: String,
      default: ""
    }
  }
};
</script>
