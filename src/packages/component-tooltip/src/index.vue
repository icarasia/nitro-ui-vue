<template>
    <span class="c-tooltip" :data-tooltip="title" :class="classes"
        ><slot></slot
    ></span>
</template>

<script>
import "@nitro-ui/component-tooltip";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "Tooltip",
    props: {
        title: String,
        position: String
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                this.position ? `c-tooltip--${this.position}` : ""
            ];
        }
    }
};
</script>
