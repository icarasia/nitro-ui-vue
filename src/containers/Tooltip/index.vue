<template>
  <div>
    <div class="display-4">
      Tooltip
    </div>
    <div class="text-muted">
      Some awesome description about Tooltip.
    </div>
    <div class="u-margin-top-md">
      <div style="text-align: center">
        <niButton
          v-tooltip="'Up tooltip'"
          :variant="counter < 3 ? 'negative' : 'positive'"
          >Up</niButton
        >
      </div>
      <div style="text-align: center">
        <br />
        <button
          v-tooltip="{ text: 'Down tooltip', position: 'bottom' }"
          @click="counter++"
        >
          Down
        </button>
      </div>
      <div>
        <button
          v-tooltip="{ text: 'Left tooltip', position: 'left' }"
          style="float: left"
        >
          Left
        </button>
        <button
          v-tooltip="{ text: 'Right tooltip', position: 'right' }"
          style="float: right"
        >
          Right
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import niButton from "../../packages/component-button/src";
export default {
  name: "TooltipPage",
  components: {
    niButton
  },
  data() {
    return {
      counter: 0
    };
  }
};
</script>

<style>
@import "~@nitro-ui/component-tooltip";
</style>
