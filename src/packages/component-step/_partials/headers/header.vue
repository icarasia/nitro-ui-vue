<template>
    <div class="c-step" :class="{
                                [`c-step--${size}`] : size,
                                [`c-step--${align}`] : align,
                            }">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props : {
            align : {
                type : String,
                validator: function (value) {
                    return ['left', 'right', 'center'].indexOf(value) !== -1
                }
            },
            size : {
                type : String,
                validator: function (value) {
                    return ['lg', 'sm', 'md'].indexOf(value) !== -1
                }
            },

        },
        created() {
            this.$parent.maxStep = this.maxStep;
        },
        computed : {
            maxStep : function () {
                return this.$slots.default.filter((item) => item.tag).length;
            }
        }
    }
</script>

<style scoped>

</style>