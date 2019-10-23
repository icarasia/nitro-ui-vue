<template>
    <div class="o-grid" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import "@nitro-ui/object-grid";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "Row",
    props: {
        reversed: Boolean,
        paddings: {
            type: [String, Array],
            default: ""
        }
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                { "o-grid--reversed": this.reversed },
                ...this.paddingClasses
            ];
        },
        paddingClasses() {
            let paddings = [];
            if (typeof this.padding === "object") {
                this.paddings.forEach(pad => {
                    paddings.push(`o-grid--${pad}`);
                });
            } else if (this.paddings !== "") {
                paddings.push(`o-grid--${this.paddings}`);
            }
            return paddings;
        }
    }
};
</script>
