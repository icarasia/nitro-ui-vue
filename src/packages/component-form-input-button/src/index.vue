<template>
  <div class="c-input-btn" :class="classes">
    <input
      type="text"
      class="c-input"
      :placeholder="placeholder"
      :value="value"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @input="$emit('input', $event.target.value)"
      @click="$emit('click')"
      :disabled="disabled"
    />
    <slot />
  </div>
</template>

<script>
import "@nitro-ui/component-form";
export default {
  name: "niInputBtn",
  props: {
    placeholder: String,
    defaultValue: String,
    value: null,
    disabled: Boolean
  },
  computed: {
    classes() {
      return [this.disabled ? "is--disabled" : ""];
    }
  }
};
</script>
