<template>
  <div class="c-check" v-if="!with_buttons">
    <input
      type="radio"
      :name="name"
      :value="value"
      :required="required"
      :disabled="disabled"
      :id="id"
      @change="parent.$emit('input', $event.currentTarget.value)"
      :checked="parent.checked === value"
    />
    <label :for="id" @click.self="$emit('ni-radio-clicked')">
      <slot />
    </label>
  </div>
  <niButton
    v-else
    :disabled="disabled"
    @click.native="
      parent.checked !== value
        ? parent.$emit('input', $event.currentTarget.value)
        : resetable
        ? parent.$emit('input', null)
        : ''
    "
    :id="id"
    :value="value"
    :variant="parent.checked !== value ? 'secondary' : 'primary'"
    :outline="parent.checked !== value"
  >
    <NitroIcon
      :name="icon"
      class="u-margin-right-xxs"
      size="20"
      v-if="icon !== null && parent.checked === value"/>
    <slot
  /></niButton>
</template>

<script>
import "@nitro-ui/component-form";
import niButton from "../../component-button/src/index";
import { getComponent } from "../../../helpers/utils";

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
    resetable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    parent() {
      return getComponent(this, "niRadioGroup");
    },
    with_buttons() {
      return this.parent.buttons;
    },
    name() {
      return this.parent.name;
    }
  },
  mounted() {}
};
</script>
