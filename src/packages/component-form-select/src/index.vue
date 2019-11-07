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
    <slot />
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
    disabled: Boolean
  }
};
</script>
