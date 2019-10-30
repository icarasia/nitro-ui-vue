<template>
    <div
        class="c-drawer"
        :class="classes"
        tabindex="-1"
        role="dialog"
        v-show="shown"
    >
        <div class="c-drawer__content" v-on-clickaway="clickOut">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import "@nitro-ui/component-drawer";
import Spaces from "../../utility-spaces/src/mixins/Spaces";
import { mixin as clickaway } from "vue-clickaway";

export default {
    name: "Drawer",
    props: {
        title: String,
        position: { type: String, default: "top" },
        shown: {
            type: Boolean,
            required: true,
            default: false
        },
        closeOnOutsideClick: {
            type: Boolean,
            default: true
        }
    },
    mixins: [Spaces, clickaway],
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                { show: this.shown },
                this.position ? `c-drawer--${this.position}` : ""
            ];
        }
    },
    methods: {
        close: function() {
            this.$emit("update:shown", false);
        },
        clickOut: function(ev) {
            if (
                this.closeOnOutsideClick &&
                ev.target.classList.contains("c-drawer")
            )
                this.close();
        }
    }
};
</script>

<style scoped>
.show {
    background: rgba(0, 0, 0, 0.7);
    display: block;
}
</style>
