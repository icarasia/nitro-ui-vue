<template>
  <div>
    <div class="display-4">
      Alert
    </div>
    <div class="text-muted">
      Some awesome description about Alert.
    </div>
    <div class="u-margin-top-md">
      <h4></h4>
      <Alert
        v-for="(message, index) in messages"
        :key="index"
        :type="message.type"
        :dismissable="message.dismissable"
        :auto-dismiss-after="
          message.autoDismissAfter !== undefined ? message.autoDismissAfter : 0
        "
        >{{ message.message }}</Alert
      >
    </div>
  </div>
</template>

<script>
import Alert from "../../packages/component-alert/src/index";

export default {
  name: "AlertPage",
  components: {
    Alert
  },
  data() {
    return {
      messages: [
        {
          type: "info",
          message: "Default alert as Info",
          dismissable: true
        },
        {
          type: "tips",
          message: "Tips alert, not dismissable",
          dismissable: false
        },
        { type: "error", message: "Error alert", dismissable: true },
        {
          type: "success",
          message: "Success alert, Auto dismiss after 5 seconds",
          dismissable: false,
          autoDismissAfter: 5000
        },
        { type: "warning", message: "Warning alert", dismissable: true }
      ]
    };
  }
};
</script>
