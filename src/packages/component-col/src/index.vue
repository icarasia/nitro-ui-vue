<template>
    <div class="o-grid__item" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
import "@nitro-ui/object-grid";
import "@nitro-ui/utility-width";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "Col",
    props: {
        portions: {
            type: [String, Array],
            default: ""
        }
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [...this.classNameUtilitySpaces, ...this.portionClasses];
        },
        portionClasses() {
            // 'mobile' / 'mobile-tablet' / 'portable' / 'desktop'
            let portions = [];
            if (typeof this.portions === "object") {
                this.portions.forEach(portion => {
                    portions.push(`u-width-${portion}`);
                });
            } else if (this.portions !== "") {
                portions.push(`u-width-${this.portions}`);
            }
            return portions;
        }
    }
};
</script>
