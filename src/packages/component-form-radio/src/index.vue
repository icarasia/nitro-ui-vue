<template>
    <div class="c-check">
        <input
            type="radio"
            :id="id"
            :name="name"
            :value="value"
            :required="required"
            :disabled="disabled"
            @change="onChange"
            :checked="state"
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
    name: "FormRadio",
    model: {
        prop:'modelValue',
        event: ' input'
    },
    props: {
        id: String,
        name: {
            type: String,
            default: null,
        },
        value: {
            // default: '',
            type: String
        },
        modelValue: {
            default: undefined,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        model: {},
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [...this.classNameUtilitySpaces];
        },
        state() {
            if (this.modelValue === undefined) {
                return this.checked;
            }
            return this.modelValue === this.value;
        }
    },
    methods: {
        onChange() {
            this.toggle();
        },
        toggle($event) {
            this.$emit('input', this.state ? '' : this.value);
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
