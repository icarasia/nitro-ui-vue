<template>
  <div>
    <div class="display-4">
      Toast
    </div>
    <div class="text-muted">
      Some awesome description about .
    </div>
    <div class="u-margin-top-lg">
      <ni-button variant="positive" @click="openSuccess"
        >Success Toast</ni-button
      >
      <ni-button variant="negative" @click="openError" class="u-margin-left-sm"
        >Error Toast</ni-button
      >
      <ni-button variant="action" @click="openWarning" class="u-margin-left-sm"
        >Warning Toast</ni-button
      >
      <ni-button variant="primary" @click="openInfo" class="u-margin-left-sm"
        >Info Toast</ni-button
      >
      <ni-button variant="secondary" @click="openTips" class="u-margin-left-sm"
        >Tips Toast</ni-button
      >
      <ni-button variant="positive" @click="rightToastr" class="u-margin-left-sm"
        >Right Toast</ni-button
      >
      <ni-button variant="positive" @click="leftToastr" class="u-margin-left-sm"
        >Left Toast</ni-button
      >
      <ni-button variant="positive" @click="centerToastr" class="u-margin-left-sm"
        >Center Toast</ni-button
      >
    </div>
  </div>
</template>

<script>
import "@nitro-ui/utility-spacing";
import niButton from "../../packages/component-button/src/index";

export default {
  name: "ToastPage",
  components: { niButton },
  data() {
    return {};
  },
  methods: {
    openSuccess() {
      this.$niToast.success("Success Title", "Success content");
    },
    openError() {
      this.$niToast.error("Error Title", "Error content");
    },
    openWarning() {
      this.$niToast.warning("Warning Title", "Warning content");
    },
    openInfo() {
      this.$niToast.info("Info Title", "Info content");
    },
    openTips() {
      this.$niToast.tips("Tip Title", "Tip content");
    },
    leftToastr() {
      this.$niToast.success("Success Title", "Success content", {
        position: "left"
      });
    },
    rightToastr() {
      this.$niToast.success("Success Title", "Success content", {
        position: "right"
      });
    },
    centerToastr() {
      this.$niToast.success("Success Title", "Success content", {
        position: "center"
      });
    }
  }
};
</script>
