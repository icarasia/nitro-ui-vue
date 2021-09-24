<template>
  <div role="radiogroup" :class="{ 'c-check-inline': inline }" v-if="!buttons">
    <slot v-if="$slots.default" />
    <template v-else-if="items.length">
      <nRadio
        v-for="item in items"
        :key="item.id"
        :value="item.value"
        :id="item.id"
        :disabled="item.disabled"
      >
        {{ item.label }}
      </nRadio>
    </template>
  </div>
  <div v-else>
    <button-group :full="full">
      <slot v-if="$slots.default" />
      <template v-else-if="items.length">
        <nRadio
          v-for="item in items"
          :key="item.id"
          :value="item.value"
          :id="item.id"
          :icon="item.icon"
          :disabled="item.disabled"
          :resetable="resetable"
        >
          {{ item.label }}
        </nRadio>
      </template>
    </button-group>
  </div>
</template>
<script>
import nRadio from "../../component-form-radio/src/index";
import ButtonGroup from "../../component-button-group/src/index";
export default {
  name: "niRadioGroup",
  components: {
    ButtonGroup,
    nRadio
  },
  model: {
    prop: "checked",
    event: "input"
  },
  props: {
    checked: null,
    name: {
      type: String,
      required: true
    },
    inline: {
      type: Boolean,
      default: false
    },
    buttons: {
      type: Boolean,
      default: false
    },
    resetable: {
      type: Boolean,
      default: true
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
