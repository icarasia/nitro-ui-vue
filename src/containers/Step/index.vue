<template>
    <div>
        <div class="display-4">
            Step
        </div>
        <div class="text-muted">
            Some awesome description about Step.
        </div>

        <div class="u-margin-top-md bg-white u-padding-md">
            <h4>Step Wide</h4>
            <step v-model="stepper" show-back-button @finish="finishData">
                <step-header>
                    <step-header-item :step="1" :complete="stepper >= 1"
                        >Ad Detail</step-header-item
                    >
                    <step-header-item :step="2" :complete="stepper >= 2"
                        >Review</step-header-item
                    >
                    <step-header-item :step="3" :complete="stepper >= 3"
                        >Publish</step-header-item
                    >
                </step-header>

                <step-items>
                    <step-items-content :step="1"
                        >Hello Ad details</step-items-content
                    >
                    <step-items-content :step="2"
                        >Hello Review</step-items-content
                    >
                    <step-items-content :step="3"
                        >Hello Publish</step-items-content
                    >
                </step-items>
            </step>
        </div>

        <div class="u-margin-top-md bg-white u-padding-md">
            <h4>Step Small</h4>
            <step v-model="stepper" show-back-button @finish="finishData">
                <step-header size="sm">
                    <step-header-item :step="1" :complete="stepper >= 1"
                        >Ad Detail</step-header-item
                    >
                    <step-header-item :step="2" :complete="stepper >= 2"
                        >Review</step-header-item
                    >
                </step-header>

                <step-items>
                    <step-items-content :step="1"
                        >Hello Ad details</step-items-content
                    >
                    <step-items-content :step="2"
                        >Hello Review</step-items-content
                    >
                </step-items>
            </step>
        </div>

        <div class="u-margin-top-md bg-white u-padding-md">
            <h4>Step Medium</h4>
            <step v-model="stepper" show-back-button @finish="finishData">
                <step-header size="md">
                    <step-header-item :step="1" :complete="stepper >= 1"
                        >Ad Detail</step-header-item
                    >
                    <step-header-item :step="2" :complete="stepper >= 2"
                        >Review</step-header-item
                    >
                    <step-header-item :step="3" :complete="stepper >= 3"
                        >Publish</step-header-item
                    >
                </step-header>

                <step-items>
                    <step-items-content :step="1"
                        >Hello Ad details</step-items-content
                    >
                    <step-items-content :step="2"
                        >Hello Review</step-items-content
                    >
                    <step-items-content :step="3"
                        >Hello Publish</step-items-content
                    >
                </step-items>
            </step>
        </div>

        <div class="u-margin-top-md bg-white u-padding-md">
            <h4>Step Large</h4>
            <step v-model="stepper" show-back-button @finish="finishData">
                <step-header size="lg">
                    <step-header-item :step="1" :complete="stepper >= 1"
                        >Ad Detail</step-header-item
                    >
                    <step-header-item :step="2" :complete="stepper >= 2"
                        >Review</step-header-item
                    >
                    <step-header-item :step="3" :complete="stepper >= 3"
                        >Publish</step-header-item
                    >
                </step-header>

                <step-items>
                    <step-items-content :step="1"
                        >Hello Ad details</step-items-content
                    >
                    <step-items-content :step="2"
                        >Hello Review</step-items-content
                    >
                    <step-items-content :step="3"
                        >Hello Publish</step-items-content
                    >
                </step-items>
            </step>
        </div>

        <div class="u-margin-top-md bg-white u-padding-md">
            <h4>Step Right</h4>
            <step v-model="stepper" show-back-button @finish="finishData">
                <step-header size="lg" align="right">
                    <step-header-item :step="1" :complete="stepper >= 1"
                        >Ad Detail</step-header-item
                    >
                    <step-header-item :step="2" :complete="stepper >= 2"
                        >Review</step-header-item
                    >
                    <step-header-item :step="3" :complete="stepper >= 3"
                        >Publish</step-header-item
                    >
                </step-header>

                <step-items>
                    <step-items-content :step="1"
                        >Hello Ad details</step-items-content
                    >
                    <step-items-content :step="2"
                        >Hello Review</step-items-content
                    >
                    <step-items-content :step="3"
                        >Hello Publish</step-items-content
                    >
                </step-items>
            </step>
        </div>

        <div class="u-margin-top-md bg-white u-padding-md">
            <h4>Step Center</h4>
            <step v-model="stepper" show-back-button @finish="finishData">
                <step-header size="lg" align="center">
                    <step-header-item :step="1" :complete="stepper >= 1"
                        >Ad Detail</step-header-item
                    >
                    <step-header-item :step="2" :complete="stepper >= 2"
                        >Review</step-header-item
                    >
                    <step-header-item :step="3" :complete="stepper >= 3"
                        >Publish</step-header-item
                    >
                </step-header>

                <step-items>
                    <step-items-content :step="1"
                        >Hello Ad details</step-items-content
                    >
                    <step-items-content :step="2"
                        >Hello Review</step-items-content
                    >
                    <step-items-content :step="3"
                        >Hello Publish</step-items-content
                    >
                </step-items>
            </step>
        </div>

        <div class="u-margin-top-md bg-white u-padding-md">
            <h4>Step Without Back Button</h4>
            <step v-model="stepper" @finish="finishData">
                <step-header size="lg" align="center">
                    <step-header-item :step="1" :complete="stepper >= 1"
                        >Ad Detail</step-header-item
                    >
                    <step-header-item :step="2" :complete="stepper >= 2"
                        >Review</step-header-item
                    >
                    <step-header-item :step="3" :complete="stepper >= 3"
                        >Publish</step-header-item
                    >
                </step-header>

                <step-items>
                    <step-items-content :step="1"
                        >Hello Ad details</step-items-content
                    >
                    <step-items-content :step="2"
                        >Hello Review</step-items-content
                    >
                    <step-items-content :step="3"
                        >Hello Publish</step-items-content
                    >
                </step-items>
            </step>
        </div>

        <div class="u-margin-top-md bg-white u-padding-md">
            <h4>Step Different Button texts</h4>
            <step
                v-model="stepper"
                show-back-button
                @finish="finishData"
                next-btn-text="next"
                finish-btn-text="done"
                back-btn-text="prev"
            >
                <step-header size="lg" align="center">
                    <step-header-item :step="1" :complete="stepper >= 1"
                        >Ad Detail</step-header-item
                    >
                    <step-header-item :step="2" :complete="stepper >= 2"
                        >Review</step-header-item
                    >
                    <step-header-item :step="3" :complete="stepper >= 3"
                        >Publish</step-header-item
                    >
                </step-header>

                <step-items>
                    <step-items-content :step="1"
                        >Hello Ad details</step-items-content
                    >
                    <step-items-content :step="2"
                        >Hello Review</step-items-content
                    >
                    <step-items-content :step="3"
                        >Hello Publish</step-items-content
                    >
                </step-items>
            </step>
        </div>
    </div>
</template>

<script>
import Step from "../../packages/component-step/src/index";
import StepHeader from "../../packages/component-step/_partials/headers/header";
import StepHeaderItem from "../../packages/component-step/_partials/headers/step";
import StepItems from "../../packages/component-step/_partials/items/items";
import StepItemsContent from "../../packages/component-step/_partials/items/step";

export default {
    components: {
        Step,
        StepHeaderItem,
        StepItemsContent,
        StepItems,
        StepHeader
    },
    data() {
        return {
            stepper: 1
        };
    },
    methods: {
        finishData() {
            // console.log('done');
        }
    }
};
</script>
