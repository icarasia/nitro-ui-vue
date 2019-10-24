<template>
    <div class="" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import "@nitro-ui/";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "",
    props: {
        title: String,
        position: String
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [...this.classNameUtilitySpaces];
        }
    }
};
</script>
