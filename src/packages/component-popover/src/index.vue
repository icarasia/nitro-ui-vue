<template>
    <div
        class="c-popover"
        :class="classes"
    >
        <slot name="label" v-if="$slots.label"></slot>
        <div class="c-popover-container">
            <div class="c-card">
                <niArrow position="left"/>
                <div class="c-card__body">
                    <slot/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "@nitro-ui/component-popover";
import "@nitro-ui/component-chips";
import "@nitro-ui/component-card";
import niArrow from "../../component-arrow/src/index";

export default {
  name: "niPopover",
  components: {
      niArrow
  },
  props: {
        label: String,
    },
  computed: {
    classes() {
        return [
          this.position ? `c-popover--${this.position}` : ""
        ];
    }
  }
};
</script>
