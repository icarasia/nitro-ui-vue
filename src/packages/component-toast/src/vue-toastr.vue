<template>
  <div
    class="c-toast  u-shadow-4dp show"
    :class="classes"
    @click="clicked()"
    v-on:mouseover="onMouseOver"
    v-on:mouseout="onMouseOut"
  >
    <div class="c-toast__icon">
      <NitroIcon :name="iconName" size="24"></NitroIcon>
    </div>
    <div class="c-toast__body">
      <div class="c-toast__title">
        {{ data.title }}
      </div>
      <div v-html="data.msg"></div>
    </div>
    <a class="c-toast__close">
      <NitroIcon name="action/close" size="16"></NitroIcon>
    </a>
  </div>
</template>

<script>
import "@nitro-ui/component-toast";
export default {
  name: "vue-toastr",
  props: ["data"],
  created() {
    if (this.data.timeout !== undefined && this.data.timeout !== 0) {
      this.setTimeout();
    }
  },
  methods: {
    // Enter Hover
    onMouseOver() {
      if (this.data.onMouseOver !== undefined) {
        this.data.onMouseOver();
      }
      if (!this.data.closeOnHover) {
        clearInterval(this.data.intervalId);
      }
    },
    // Leave Hover
    onMouseOut() {
      if (this.data.onMouseOut !== undefined) {
        this.data.onMouseOut();
      }
      if (!this.data.closeOnHover) {
        this.setTimeout();
      }
    },
    // Set timeout to close
    setTimeout() {
      this.data.intervalId = setTimeout(
        function() {
          this.close();
        }.bind(this),
        this.data.timeout
      );
    },
    // Clicked Toast
    clicked() {
      if (this.data.onClicked !== undefined) {
        this.data.onClicked();
      }
      this.clickClose();
    },
    // Click Close?
    clickClose() {
      if (
        this.data.clickClose !== undefined &&
        this.data.clickClose === false
      ) {
        return;
      }
      this.close();
    },
    // Close Toast
    close() {
      // if toast not manuel closed.
      if (this.$parent !== null) {
        this.$parent.Close(this.data);
      }
    }
  },
  computed: {
    iconName() {
      switch (this.data.type) {
        case "success":
          return "action/check-circle";
        default:
          return `response/${this.data.type}`;
      }
    },
    classes() {
      return [this.data.type ? `c-toast--${this.data.type}` : ""];
    }
  }
};
</script>
