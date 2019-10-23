<template>
    <transition name="fade">
        <div class="c-alert" :class="classes" v-if="visible">
            <div class="c-alert__body">
                <slot></slot>
            </div>
            <button
                class="c-alert__close"
                @click="visible = false"
                v-if="dismissable"
            >
                &#10005;
            </button>
        </div>
    </transition>
</template>

<script>
import "@nitro-ui/component-alert";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "Alert",
    props: {
        type: {
            type: String,
            default: "info",
            validator: function(value) {
                return (
                    ["info", "tips", "success", "error", "warning"].indexOf(
                        value
                    ) !== -1
                );
            }
        },
        dismissable: {
            type: Boolean,
            default: true
        },
        autoDismissAfter: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            visible: true
        };
    },
    mixins: [Spaces],
    created() {
        if (this.autoDismissAfter > 0) {
            setTimeout(() => {
                this.visible = false;
            }, this.autoDismissAfter);
        }
    },
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                this.type ? `c-alert--${this.type}` : ""
            ];
        }
    }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
