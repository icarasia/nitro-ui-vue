<template>
    <textarea
        class="c-input"
        :placeholder="placeholder"
        :value="value"
        :rows="rows"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @input="$emit('input', $event.target.value)"
        @click="$emit('click')"
        :disabled="disabled"
    />
</template>

<script>
import "@nitro-ui/component-form";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "FormInput",
    props: {
        placeholder: String,
        defaultValue: String,
        value: String,
        rows: {
            type: Number,
            default: 3
        },
        disabled: Boolean
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [...this.classNameUtilitySpaces];
        }
    }
};
</script>
