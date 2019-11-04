<template>
    <div v-if="currentStep === step">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        step: {
            type: Number,
            required: true
        }
    },
    data() {
        return {};
    },
    computed: {
        currentStep: function() {
            return this.$parent.$parent.stepper;
        }
    }
};
</script>

<style scoped></style>
