<template>
    <span class="c-chip" :class="classes">
        <slot></slot>
    </span>
</template>

<script>
import "@nitro-ui/component-chips";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "Chip",
    props: {
        variant: String,
        size: {
            type: String,
            default: "sm"
        },
        outline: Boolean
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                this.outline
                    ? `c-chip--${this.variant}-inverted`
                    : `c-chip--${this.variant}`,
                `c-chip--${this.size}`
            ];
        }
    },
    methods: {
        onClick(event) {
            this.$emit("click", event);
        }
    }
};
</script>
