<template>
    <div
        class="c-popover"
        :class="classes"
    >
        <slot name="label" v-if="$slots.label"></slot>
        <div class="c-popover-container">
            <niCard>
                <niArrow :position="arrowPosition"/>
                <slot/>
            </niCard>
        </div>
    </div>
</template>

<script>
import "@nitro-ui/component-popover";
import "@nitro-ui/component-card";
import niArrow from "../../component-arrow/src/index";
import niCard from "../../component-card/src/index";

export default {
  name: "niPopover",
  components: {
      niArrow,
      niCard
  },
  computed: {
    classes() {
        return [
          this.position ? `c-popover--${this.position}` : ''
        ];
    },
    arrowPosition() {
        let arrowPosition = '';

        if (this.position == 'left') {
            arrowPosition= 'right'
        }else if (this.position == 'right'){
            arrowPosition= 'left'
        }else if (this.position == 'bottom'){
            arrowPosition= 'top'
        }else {
            arrowPosition= 'bottom'
        }

        return arrowPosition;
    }
  }
};
</script>
