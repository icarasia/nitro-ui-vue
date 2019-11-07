<template>
    <div class="c-popover-container">
        <div class="c-card">
            <Arrow position="position"/>
            <div class="c-card__body">
                <slot/>
            </div>
        </div>
    </div>
</template>

<script>
// import "@nitro-ui/component-popover";
import "@nitro-ui/component-chips";
import "@nitro-ui/component-card";
import Arrow from "../../component-arrow/src/index";

export default {
  name: "PopoverContainer",
  props: {
        label: String,
    },
  // computed: {
  //       classes() {
  //         return [this.type ? `c-alert--${this.type}` : ""];
  //       }
  // }
};
</script>
