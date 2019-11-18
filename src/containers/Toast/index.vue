<template>
    <div>
        <div class="display-4">
          Toast
        </div>
        <div class="text-muted  u-margin-bottom-xl">
          Some awesome description about .
        </div>
        <Row>
            <Column :portions="['1/3', '1@mobile']" :class="`u-margin-bottom-lg`">
                <ToastItem show>
                    <template v-slot:title>
                      Looking for your dream car?
                    </template>
                    Follow us to get the latest &amp; hottest deals on your favorite cars! Follow us here.
                </ToastItem>
            </Column>

            <Column :portions="['1/3', '1@mobile']" :class="`u-margin-bottom-lg`">
                <ToastItem variant="tips" show>
                    <template v-slot:title>
                      Looking for your dream car?
                    </template>
                    Follow us to get the latest &amp; hottest deals on your favorite cars! Follow us here.
                </ToastItem>
            </Column>

            <Column :portions="['1/3', '1@mobile']" :class="`u-margin-bottom-lg`">
                <ToastItem variant="success" show>
                    <template v-slot:title>
                      Looking for your dream car?
                    </template>
                    Follow us to get the latest &amp; hottest deals on your favorite cars! Follow us here.
                </ToastItem>
            </Column>

            <Column :portions="['1/3', '1@mobile']" :class="`u-margin-bottom-lg`">
                <ToastItem variant="error" show>
                    <template v-slot:title>
                      Looking for your dream car?
                    </template>
                    Follow us to get the latest &amp; hottest deals on your favorite cars! Follow us here.
                </ToastItem>
            </Column>

            <Column :portions="['1/3', '1@mobile']" :class="`u-margin-bottom-lg`">
                <ToastItem variant="warning" show>
                    <template v-slot:title>
                      Looking for your dream car?
                    </template>
                    Follow us to get the latest &amp; hottest deals on your favorite cars! Follow us here.
                </ToastItem>
            </Column>
        </Row>

        <!-- <Row :class="`u-margin-top-lg`">

        </Row>

        <Row :class="`u-margin-top-lg`">

        </Row> -->

    </div>

</template>

<script>
import "@nitro-ui/utility-spacing";
import Row from "../../packages/component-row/src/index";
import Column from "../../packages/component-col/src/index";
// import niToast from "../../packages/component-toast/src/index";
import ToastItem from "../../packages/component-toast/src/ToastItem";

export default {
  name: "ToastPage",
  components: {
    Row,
    Column,
    ToastItem
  },
  data() {
    return {};
  }
};
</script>
