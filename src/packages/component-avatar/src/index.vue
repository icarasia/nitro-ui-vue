<template>
    <figure
        class="c-avatar"
        :class="classes"
        :data-initial="!src ? initial : ''"
    >
        <img :src="src" :alt="alt" v-if="src" />
    </figure>
</template>

<script>
import "@nitro-ui/component-avatar";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "Avatar",
    props: {
        alt: String,
        src: String,
        initial: String,
        size: String,
        square: Boolean
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                this.size ? `c-avatar--${this.size}px` : "",
                { "c-avatar--square": this.square }
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
