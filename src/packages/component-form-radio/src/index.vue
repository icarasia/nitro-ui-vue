<template>
  <div class="c-check" v-if="!$parent.buttons && $parent.buttons !== undefined">
    <input
      type="radio"
      :name="name"
      :value="value"
      :required="required"
      :disabled="disabled"
      :id="id"
      @change="$parent.$emit('input', $event.target.value)"
      :checked="$parent.checked === value"
    />
    <label :for="id">
      <slot />
    </label>
  </div>
  <niButton
    v-else
    :disabled="disabled"
    @click.native="
      $parent.$parent.checked !== value
        ? $parent.$parent.$emit('input', $event.target.value)
        : ''
    "
    :id="id"
    :value="value"
    :variant="$parent.$parent.checked !== value ? 'secondary' : 'primary'"
    :outline="$parent.$parent.checked !== value"
  >
    <NitroIcon
      :name="icon"
      class="u-margin-right-xxs"
      size="20"
      v-if="icon !== null && $parent.$parent.checked === value"
    ></NitroIcon>
    <slot
  /></niButton>
</template>

<script>
import "@nitro-ui/component-form";
import niButton from "../../component-button/src/index";

export default {
  name: "niRadio",
  components: { niButton },
  props: {
    id: {
      type: String,
      required: true
    },
    value: {
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      name: this.$parent.name
    };
  }
};
</script>
