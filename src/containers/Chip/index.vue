<template>
  <div>
    <div class="display-4">
      Chip
    </div>
    <div class="text-muted">
      Some awesome description about Chip.
    </div>
    <div class="u-margin-top-md">
      <h4>Colors</h4>
      <Chip
        marginTop="sm"
        marginLeft="md"
        v-for="(variant, index) in variants"
        :variant="variant"
        :key="`normal-${index}`"
        >{{ variant | capitalize }} Nitro Chip</Chip
      >
      <h4>Inverted Colors</h4>
      <Chip
        marginTop="sm"
        marginLeft="md"
        v-for="(variant, index) in variants"
        :variant="variant"
        outline
        :key="`outlined-${index}`"
        >{{ variant | capitalize }} Nitro Chip</Chip
      >
    </div>
    <div class="u-margin-top-md">
      <h4>Sizes</h4>
      <Chip marginTop="sm" variant="primary" size="xs">XS Nitro Chip</Chip>
      <Chip marginTop="sm" variant="secondary" size="sm">SM Nitro Chip</Chip>
    </div>
  </div>
</template>

<script>
import Chip from "../../packages/component-chip/src";

export default {
  name: "ChipPage",
  components: {
    Chip
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  data() {
    return {
      variants: [
        "blue",
        "blue-light",
        "green",
        "orange",
        "pink",
        "purple",
        "red",
        "yellow"
      ]
    };
  }
};
</script>
