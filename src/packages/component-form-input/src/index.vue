<template>
    <input
        type="text"
        class="c-input"
        :class="classes"
        :placeholder="placeholder"
        :value="value"
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
        value: null,
        disabled: Boolean,
        size: String
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [
                this.size ? `c-input--${this.size}` : '',
                ...this.classNameUtilitySpaces
            ];
        }
    }
};
</script>
