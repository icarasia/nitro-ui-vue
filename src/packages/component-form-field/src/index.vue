<template>
    <div class="c-field" :class="classes">
        <label :class="hint ? 'u-flex  u-flex--items-center  u-flex--justify-between':''">
            <div>{{ label }}</div>
            <div v-if="hint" class="c-field__hint  u-text-7">{{ hint }}</div>
        </label>
        <slot></slot>
        <div class="c-field__message" v-if="message">{{ message }}</div>
    </div>
</template>

<script>
import "@nitro-ui/component-form";
import "@nitro-ui/utility-flex";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "FormField",
    props: {
        label: String,
        invalid: Boolean,
        message: {
            type: String,
            default: ""
        },
        hint: String
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
