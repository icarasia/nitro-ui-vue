<template>
    <div class="c-field" :class="classes">
        <label>{{ label }}</label>
        <slot></slot>
        <div class="c-field__message" v-if="message">{{ message }}</div>
    </div>
</template>

<script>
import "@nitro-ui/component-form";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "FormField",
    props: {
        label: String,
        invalid: Boolean,
        message: {
            type: String,
            default: ""
        }
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                { "c-field--error": this.invalid }
            ];
        }
    }
};
</script>
