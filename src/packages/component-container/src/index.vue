<template>
    <div class="o-container" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import "@nitro-ui/object-container";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "Container",
    props: {
        type: String
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                this.type ? `o-container--${this.type}` : ""
            ];
        }
    }
};
</script>
