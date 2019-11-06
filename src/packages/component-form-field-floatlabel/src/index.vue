<template>
    <div class="c-field-float" :class="classes" ref="field-float">
        <slot
            v-model="value"
            @focus="focus"
            @blur="blur"
        ></slot>
        <label :class="hint ? 'u-flex  u-flex--items-center  u-flex--justify-between':''">
            <div>{{ label }}</div>
            <div v-if="hint" class="c-field__hint  u-text-7">{{ hint }}</div>
        </label>
        <div class="c-field__message" v-if="message">{{ message }}</div>
    </div>
</template>

<script>
import "@nitro-ui/component-form";
import "@nitro-ui/component-form-float";
import "@nitro-ui/utility-flex";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "FormFieldFloatLabel",
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
                { "c-field--error": this.invalid },
                { "is--active" : this.hasFocus ||  this.hasContent },
            ];
        }
    },
    methods:{
        focus(event) {
            this.hasFocus = true;
            this.$emit('focus');
        },
        input(event) {
            this.hasFocus = true;
            this.hasContent = event.target.value !== '';
            this.$emit('input');
        },
        blur(event) {
            this.hasFocus = false;
            this.$emit('blur');
        }
    },
    mounted() {
        this.formElement = this.$refs['field-float'].querySelector('input, select');
        this.emptyValue = this.$refs['field-float'].querySelector('input, select').value === '';
        if (this.formElement) {
            this.formElement.addEventListener('input', this.input);
            this.formElement.addEventListener('blur', this.blur);
            this.formElement.addEventListener('focus', this.focus);
            if (this.formElement.type === 'select-one') {
                this.hasContent = true;
            }
            if(this.emptyValue){
                this.hasContent = false
            }
        }
    },
    data(){
        return{
            hasFocus: false,
            hasContent: false
        }
    }
};
</script>
