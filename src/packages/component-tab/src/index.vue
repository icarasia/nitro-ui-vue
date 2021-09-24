<template>
  <div class="c-tab__pane is--active" v-if="!keepAlive && isActive">
    <slot></slot>
  </div>
  <keep-alive v-else-if="keepAlive">
    <component :is="'Container'" v-if="isActive">
      <slot></slot>
    </component>
  </keep-alive>
</template>

<script>
import Container from "./TabContainer";
export default {
  name: "niTab",
  components: { Container },
  props: {
    label: String,
    active: {
      Type: Boolean,
      default: false
    },
    hideIcon: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      required: false,
      default: ""
    },
    useHtml: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    keepAlive() {
      return this.$parent.keepAlive;
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
