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
      <stepper v-model="stepper1" show-back-button @finish="finishData">
        <stepper-header slot="header">
          <stepper-header-item :step="1" :complete="stepper1 >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper1 >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper1 >= 3"
            >Publish</stepper-header-item
          >
        </stepper-header>

        <stepper-body>
          <stepper-item :step="1">Hello Ad details</stepper-item>
          <stepper-item :step="2">Hello Review</stepper-item>
          <stepper-item :step="3">Hello Publish</stepper-item>
        </stepper-body>
        <template v-slot:footer="{ next, prev }">
          <div class="u-flex u-flex--justify-around">
            <ni-button variant="primary" @click="validate(prev)"
              >-- PREV</ni-button
            >
            <ni-button variant="primary" @click="validate(next)"
              >NEXT --</ni-button
            >
          </div>
        </template>
      </stepper>
    </div>

    <div class="u-margin-top-md bg-white u-padding-md">
      <h4>Step Small</h4>
      <stepper v-model="stepper2" show-back-button @finish="finishData">
        <stepper-header size="sm">
          <stepper-header-item :step="1" :complete="stepper2 >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper2 >= 2"
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
      <stepper v-model="stepper3" show-back-button @finish="finishData">
        <stepper-header size="md">
          <stepper-header-item :step="1" :complete="stepper3 >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper3 >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper3 >= 3"
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
      <stepper v-model="stepper4" show-back-button @finish="finishData">
        <stepper-header size="lg">
          <stepper-header-item :step="1" :complete="stepper4 >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper4 >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper4 >= 3"
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
      <stepper v-model="stepper5" show-back-button @finish="finishData">
        <stepper-header size="lg" align="right">
          <stepper-header-item :step="1" :complete="stepper5 >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper5 >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper5 >= 3"
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
      <stepper v-model="stepper6" show-back-button @finish="finishData">
        <stepper-header size="lg" align="center">
          <stepper-header-item :step="1" :complete="stepper6 >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper6 >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper6 >= 3"
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
      <stepper v-model="stepper7" @finish="finishData">
        <stepper-header size="lg" align="center">
          <stepper-header-item :step="1" :complete="stepper7 >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper7 >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper7 >= 3"
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
        v-model="stepper8"
        show-back-button
        @finish="finishData"
        next-btn-text="next"
        finish-btn-text="done"
        back-btn-text="prev"
      >
        <stepper-header size="lg" align="center">
          <stepper-header-item :step="1" :complete="stepper8 >= 1"
            >Ad Detail</stepper-header-item
          >
          <stepper-header-item :step="2" :complete="stepper8 >= 2"
            >Review</stepper-header-item
          >
          <stepper-header-item :step="3" :complete="stepper8 >= 3"
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
import niButton from "../../packages/component-button/src";

export default {
  components: {
    Stepper,
    StepperHeaderItem,
    StepperHeader,
    StepperBody,
    StepperItem,
    niButton
  },
  data() {
    return {
      stepper1: 1,
      stepper2: 1,
      stepper3: 1,
      stepper4: 1,
      stepper5: 1,
      stepper6: 1,
      stepper7: 1,
      stepper8: 1
    };
  },
  methods: {
    finishData() {
      // console.log('done');
    },
    validate(closer) {
      closer();
    }
    // async validate(step) {
    //   await this.timeout(3000);
    //   console.log("asd-before", 1);
    //   const t = await setTimeout(() => {
    //     console.log("asd-inside", 2);
    //     return step !== 2;
    //   }, 1000);
    //   console.log("asd-outside", t);
    //   return t;
    // },
    // timeout(ms) {
    //   return new Promise(resolve => setTimeout(resolve, ms));
    // }
  }
};
</script>
