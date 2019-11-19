<template>
  <div role="checkbox" :class="{ 'c-check-inline': inline }" v-if="!buttons">
    <slot v-if="$slots.default" />
    <template v-else-if="items.length">
      <aCheckbox
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :value="item.value"
        :name="item.name"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </aCheckbox>
    </template>
  </div>
  <div v-else>
    <button-group :full="full">
      <slot v-if="$slots.default" />
      <template v-else-if="items.length">
        <aCheckbox
          v-for="item in items"
          :key="item.id"
          :id="item.id"
          :value="item.value"
          :name="item.name"
          :icon="item.icon"
          :disabled="item.disabled"
        >
          {{ item.label }}
        </aCheckbox>
      </template>
    </button-group>
  </div>
</template>

<script>
import aCheckbox from "../../component-form-checkbox/src/index";
import ButtonGroup from "../../component-button-group/src/index";

export default {
  name: "niCheckboxGroup",
  components: {
    aCheckbox,
    ButtonGroup
  },
  model: {
    prop: "checked",
    event: "input"
  },
  props: {
    checked: {
      type: [Array, Boolean],
      default: false
    },
    switches: {
      type: Boolean,
      default: false
    },
    switchRight: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    },
    items: {
      type: Array,
      default: () => {
        return [];
      }
    }
  }
};
</script>
