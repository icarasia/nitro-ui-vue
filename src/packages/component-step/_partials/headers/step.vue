<template>
    <div class="c-step__item" :class="{
                                    'is--success'  : currentStep > step,
                                    'is--active'   : currentStep === step,
                                    'is--disabled' : currentStep < step
                                    }">
        <div class="c-step__indicator">
            <span class="c-step__number">{{ step }}</span>
        </div>
        {{ step }}
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props : {
            step : {
                type: Number,
                required : true
            },
            complete : {
                type : Boolean,
                required : false,
                default : true
            },
            classes : {
                type : String,
                required : false,
                default : ''
            }
        },
        data() {
            return {

            }
        },
        created() {
            this.$parent.$parent.$on('checkStep', (operator) => {
                if(this.currentStep === 1 && operator === '-') return;

                if(this.step === this.currentStep) {
                    let step = this.currentStep;

                    // emmit finish if final step
                    if(this.complete && (step === this.$parent.maxStep && operator !== '-')) {
                        this.$parent.$parent.$emit('finishStep');
                        return;
                    }

                    if(operator === '+') step++;
                    else if(operator === '-') step--;

                    // return if step greater than max step
                    if(step > this.$parent.maxStep) return;

                    // return if validation
                    if(this.complete || operator === '-') this.$parent.$parent.$emit('changeStep', step);
                }
            })
        },
        computed : {
            currentStep : function () {
                return this.$parent.$parent.stepper;
            }
        }
    }
</script>