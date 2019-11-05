<template>
    <select
        class="c-input"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
        @input="$emit('input', $event.target.value)"
        @click="$emit('click')"
        :disabled="disabled"
    >
        <template v-if="placeholder">
            <option
              :value="null"
            >
              {{ placeholder }}
            </option>
        </template>
        <template v-if="emptyPlaceholder">
            <option
              :value="null"
            >
            </option>
        </template>
        <slot/>
    </select>
</template>

<script>
import "@nitro-ui/component-form";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "FormSelect",
    props: {
        value: {
            type: [String, Number, Boolean, Object, Array, Function],
            default: null
        },
        placeholder: String,
        emptyPlaceholder: Boolean,
        value: String,
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
