<template>
  <div
    :class="classes"
    v-if="!$parent.buttons && $parent.buttons !== undefined"
  >
    <input
      :id="id"
      v-if="Array.isArray($parent.checked)"
      type="checkbox"
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="$parent.checked.includes(value)"
      @change="onChange($parent)"
    />
    <input
      :id="id"
      v-else
      type="checkbox"
      :name="name"
      :value="value"
      :disabled="disabled"
      :checked="$parent.checked"
      @change="$parent.$emit('input', !$parent.checked)"
    />
    <label :for="id">
      <slot />
    </label>
  </div>
  <niButton
    v-else
    :disabled="disabled"
    @click.native="
      Array.isArray($parent.$parent.checked)
        ? onChange($parent.$parent)
        : $emit('input', !$parent.$parent.checked)
    "
    :value="value"
    :id="id"
    :variant="
      (Array.isArray($parent.$parent.checked) &&
        !$parent.$parent.checked.includes(value)) ||
      (!Array.isArray($parent.$parent.checked) && !$parent.$parent.checked)
        ? 'secondary'
        : 'primary'
    "
    :outline="
      Array.isArray($parent.$parent.checked)
        ? !$parent.$parent.checked.includes(value)
        : !$parent.$parent.checked
    "
  >
    <NitroIcon
      :name="icon"
      class="u-margin-right-xxs"
      size="20"
      v-if="
        icon !== null &&
          ((Array.isArray($parent.$parent.checked) &&
            $parent.$parent.checked.includes(value)) ||
            (!Array.isArray($parent.$parent.checked) &&
              $parent.$parent.checked))
      "
    ></NitroIcon>
    <slot />
  </niButton>
</template>

<script>
import "@nitro-ui/component-form";
import niButton from "../../component-button/src/index";

export default {
  name: "niCheckbox",
  components: { niButton },
  model: {
    prop: "modelValue",
    event: "input"
  },
  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      default: null
    },
    value: {
      default: null
    },
    disabled: Boolean,
    checked: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    }
  },
  computed: {
    classes() {
      return [
        this.$parent.switches ? `c-switch` : `c-check`,
        this.$parent.switches && this.$parent.switchRight
          ? `c-switch--right`
          : ``
      ];
    }
  },
  methods: {
    onChange(prt) {
      const value = this.value;
      if (prt.checked.includes(value)) {
        prt.checked.splice(prt.checked.indexOf(value), 1);
      } else {
        prt.checked.push(value);
      }
    }
  }
};
</script>
