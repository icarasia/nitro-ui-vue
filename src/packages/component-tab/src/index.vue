<template>
  <div class="c-tab__pane is--active" v-if="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "niTab",
  props: {
    label: String,
    active: {
      Type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    activate() {
      this.isActive = true;
    },
    deactivate() {
      this.isActive = false;
    }
  },
  created() {
    this.$parent.tabs.push(this);
  }
};
</script>

<style scoped></style>
