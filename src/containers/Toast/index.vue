<template>
  <div>
    <div class="display-4">
      Toast
    </div>
    <div class="text-muted">
      Some awesome description about .
    </div>
    <h4 class="u-margin-top-xl">Default</h4>
    <Row>
      <Column
        :portions="['1/3', '1@mobile']"
        :class="`u-margin-bottom-lg`"
        v-for="(message, index) in messages"
        :key="index"
      >
        <ToastItem
          :type="message.type"
          :dismissable="message.dismissable"
          :auto-dismiss="message.autoDismiss"
          :visible="true"
        >
          <template v-slot:title>
            {{ message.title }}
          </template>

          {{ message.message }}
        </ToastItem>
      </Column>
    </Row>

    <h4 class="u-margin-top-xl">Without Icon</h4>
    <Row>
      <Column
        :portions="['1/3', '1@mobile']"
        :class="`u-margin-bottom-lg`"
        v-for="(content, index) in contents"
        :key="index"
      >
        <ToastItem
          :type="content.type"
          :showIcon="content.showIcon"
          :dismissable="content.dismissable"
          :auto-dismiss="content.autoDismiss"
          :visible="true"
        >
          <template v-slot:title>
            {{ content.title }}
          </template>

          {{ content.message }}
        </ToastItem>
      </Column>
    </Row>

    <Row>
      <Column :portions="['1/3', '1@mobile']" :class="`u-margin-bottom-lg`">
        <h4 class="u-margin-top-xl">Dismissable = false</h4>
        <ToastItem
          type="error"
          :showIcon="true"
          :dismissable="false"
          :visible="true"
        >
          <template v-slot:title>
            This toast cannot be dismissable
          </template>

          Not dismissable
        </ToastItem>
      </Column>
    </Row>

    <h4 class="u-margin-top-xl">Trigger example</h4>
    <Row>
      <Column :class="`u-margin-bottom-lg`">
        <niButton variant="primary" @click="trigger2 = true"
          >Trigger Auto Dismiss Toast</niButton
        >
        <niButton
          variant="primary"
          @click="trigger5 = true"
          :class="`u-margin-left-lg`"
          >Trigger Auto Dismiss Delay Toast</niButton
        >
        <niButton
          variant="primary"
          @click="trigger1 = true"
          :class="`u-margin-left-lg`"
          >Trigger Toast from center</niButton
        >
        <niButton
          variant="primary"
          @click="trigger3 = true"
          :class="`u-margin-left-lg`"
          >Trigger Toast from right</niButton
        >
        <niButton
          variant="primary"
          @click="trigger4 = true"
          :class="`u-margin-left-lg`"
          >Trigger Toast from left</niButton
        >
      </Column>
    </Row>
    <Toast position="center">
      <ToastItem
        type="error"
        :showIcon="true"
        :dismissable="true"
        :visible.sync="trigger1"
      >
        <template v-slot:title>
          lalala
        </template>

        this is some content
      </ToastItem>

      <ToastItem
        type="success"
        :showIcon="true"
        :dismissable="true"
        :visible.sync="trigger2"
        autoDismiss
      >
        <template v-slot:title>
          Auto dissmiss Toast
        </template>

        Will be auto dismiss after 5 sec
      </ToastItem>

      <ToastItem
        type="tips"
        :showIcon="true"
        :dismissable="true"
        :visible.sync="trigger5"
        autoDismiss
        :autoDismissDuration="10000"
        delay
      >
        <template v-slot:title>
          Auto dissmiss Delay Toast
        </template>

        Will be auto dismiss after 10 sec
      </ToastItem>
    </Toast>

    <Toast position="right">
      <ToastItem
        type="success"
        :showIcon="true"
        :dismissable="true"
        :visible.sync="trigger3"
        autoDismiss
      >
        <template v-slot:title>
          Auto dissmiss Toast
        </template>

        Will be auto dismiss after 5 sec
      </ToastItem>
    </Toast>

    <Toast position="left">
      <ToastItem
        type="success"
        :showIcon="true"
        :dismissable="true"
        :visible.sync="trigger4"
        autoDismiss
      >
        <template v-slot:title>
          Auto dissmiss Toast
        </template>

        Will be auto dismiss after 5 sec
      </ToastItem>
    </Toast>
  </div>
</template>

<script>
import "@nitro-ui/utility-spacing";
import niButton from "../../packages/component-button/src/index";
import Row from "../../packages/component-row/src/index";
import Column from "../../packages/component-col/src/index";
import Toast from "../../packages/component-toast/src/index";
import ToastItem from "../../packages/component-toast/src/ToastItem";

export default {
  name: "ToastPage",
  components: {
    Row,
    Column,
    niButton,
    Toast,
    ToastItem
  },
  data() {
    return {
      messages: [
        {
          type: "info",
          title: "Info Toast",
          message: "Info Toast with close button",
          dismissable: true
        },
        {
          type: "tips",
          title: "Tips Toast",
          message: "Tips Toast with close button",
          dismissable: true
        },
        {
          type: "error",
          title: "Error Toast",
          message: "Error Toast with close button",
          dismissable: true
        },
        {
          type: "success",
          title: "Success Toast",
          message: "Success Toast with close button",
          dismissable: true
        },
        {
          type: "warning",
          title: "Warning Toast",
          message: "Warning Toast with close button",
          dismissable: true
        }
      ],
      contents: [
        {
          type: "info",
          title: "Info Toast",
          message: "Info Toast without Icon",
          showIcon: false
        },
        {
          type: "tips",
          title: "Tips Toast",
          message: "Tips Toast without Icon",
          showIcon: false
        },
        {
          type: "error",
          title: "Error Toast",
          message: "Error Toast without Icon",
          showIcon: false
        },
        {
          type: "success",
          title: "Success Toast",
          message: "Success Toast without Icon",
          showIcon: false
        },
        {
          type: "warning",
          title: "Warning Toast",
          message: "Warning Toast without Icon",
          showIcon: false
        }
      ],
      trigger1: false,
      trigger2: false,
      trigger3: false,
      trigger4: false,
      trigger5: false
    };
  }
};
</script>
