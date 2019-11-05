<template>
    <div
        :class="classes">
        <input
            type="checkbox"
            :id="id"
            :name="name"
            :value="value"
            :required="required"
            :disabled="disabled"
            :checked="state"
            @change="onChange"
        />
        <label :for="id">
            <slot/>
        </label>
    </div>
</template>

<script>
import "@nitro-ui/component-form";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "FormCheckbox",
    model: {
            prop: 'modelValue',
            event: 'input'
    },
    props: {
        id: {
            type: [String, Number],
            default: null
        },
        name: {
            type: String,
            default: null
        },
        value: {
            default: null
        },
        modelValue: {
            default: undefined,
        },
        disabled: Boolean,
        checked: {
            type: Boolean,
            default: false,
        },
        switches: {
            type: Boolean,
            default: false
        },
        switchRight: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        model: {}
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [
                this.switches ? `c-switch` : `c-check`,
                this.switches && this.switchRight ? `c-switch--right`: ``,
                ...this.classNameUtilitySpaces,
            ];

        },
        state() {
            if (this.modelValue === undefined) {
                return this.checked;
            }
            if (Array.isArray(this.modelValue)) {
                return this.modelValue.indexOf(this.value) > -1;
            }
            return !!this.modelValue;
        }
    },
    methods: {
        onChange() {
            this.toggle();
        },
        toggle() {
            let value;
            if (Array.isArray(this.modelValue)) {
                value = this.modelValue.slice(0);
                if (this.state) {
                    value.splice(value.indexOf(this.value), 1);
                } else {
                    value.push(this.value);
                }
            } else {
                value = !this.state;
            }
            this.$emit('input', value);
        }
    },
    watch: {
        checked(newValue) {
           if (newValue !== this.state) {
               this.toggle();
           }
        }
    },
    mounted() {
        if (this.checked && !this.state) {
           this.toggle();
        }
    }
};
</script>
