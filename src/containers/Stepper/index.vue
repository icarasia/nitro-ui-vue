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
      <stepper v-model="stepper" show-back-button @finish="finishData">
        <stepper-header slot="header">
          <stepper-header-item :step="1" :complete="stepper >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper >= 3"
            >Publish</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
          <stepper-item :step="3">Hello Publish</stepper-item>
        </stepper-body>
      </stepper>
    </div>

    <div class="u-margin-top-md bg-white u-padding-md">
      <h4>Step Small</h4>
      <stepper v-model="stepper" show-back-button @finish="finishData">
        <stepper-header size="sm">
          <stepper-header-item :step="1" :complete="stepper >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper >= 2"
            >Review</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
        </stepper-body>
      </stepper>
    </div>

    <div class="u-margin-top-md bg-white u-padding-md">
      <h4>Step Medium</h4>
      <stepper v-model="stepper" show-back-button @finish="finishData">
        <stepper-header size="md">
          <stepper-header-item :step="1" :complete="stepper >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper >= 3"
            >Publish</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
          <stepper-item :step="3">Hello Publish</stepper-item>
        </stepper-body>
      </stepper>
    </div>

    <div class="u-margin-top-md bg-white u-padding-md">
      <h4>Step Large</h4>
      <stepper v-model="stepper" show-back-button @finish="finishData">
        <stepper-header size="lg">
          <stepper-header-item :step="1" :complete="stepper >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper >= 3"
            >Publish</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
          <stepper-item :step="3">Hello Publish</stepper-item>
        </stepper-body>
      </stepper>
    </div>

    <div class="u-margin-top-md bg-white u-padding-md">
      <h4>Step Right</h4>
      <stepper v-model="stepper" show-back-button @finish="finishData">
        <stepper-header size="lg" align="right">
          <stepper-header-item :step="1" :complete="stepper >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper >= 3"
            >Publish</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
          <stepper-item :step="3">Hello Publish</stepper-item>
        </stepper-body>
      </stepper>
    </div>

    <div class="u-margin-top-md bg-white u-padding-md">
      <h4>Step Center</h4>
      <stepper v-model="stepper" show-back-button @finish="finishData">
        <stepper-header size="lg" align="center">
          <stepper-header-item :step="1" :complete="stepper >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper >= 3"
            >Publish</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
          <stepper-item :step="3">Hello Publish</stepper-item>
        </stepper-body>
      </stepper>
    </div>

    <div class="u-margin-top-md bg-white u-padding-md">
      <h4>Step Without Back Button</h4>
      <stepper v-model="stepper" @finish="finishData">
        <stepper-header size="lg" align="center">
          <stepper-header-item :step="1" :complete="stepper >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper >= 3"
            >Publish</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
          <stepper-item :step="3">Hello Publish</stepper-item>
        </stepper-body>
      </stepper>
    </div>

    <div class="u-margin-top-md bg-white u-padding-md">
      <h4>Step Different Button texts</h4>
      <stepper
        v-model="stepper"
        show-back-button
        @finish="finishData"
        next-btn-text="next"
        finish-btn-text="done"
        back-btn-text="prev"
      >
        <stepper-header size="lg" align="center">
          <stepper-header-item :step="1" :complete="stepper >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper >= 3"
            >Publish</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
          <stepper-item :step="3">Hello Publish</stepper-item>
        </stepper-body>
      </stepper>
    </div>
  </div>
</template>

<script>
import Stepper from "../../packages/component-stepper/src/index";
import StepperHeader from "../../packages/component-stepper/src/StepperHeader";
import StepperHeaderItem from "../../packages/component-stepper/src/StepperHeaderItem";
import StepperBody from "../../packages/component-stepper/src/StepperBody";
import StepperItem from "../../packages/component-stepper/src/StepperItem";

export default {
  components: {
    Stepper,
    StepperHeaderItem,
    StepperHeader,
    StepperBody,
    StepperItem
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
