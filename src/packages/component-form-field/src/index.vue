<template>
  <div class="c-field" :class="{ 'c-field--error': invalid }">
    <label>{{ label }}</label>
    <slot></slot>
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

export default {
  name: "niFormField",
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
    }
  }
};
</script>
