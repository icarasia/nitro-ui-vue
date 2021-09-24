<template>
  <component
    :is="anchor ? 'a' : 'button'"
    class="c-btn"
    :class="classes"
    @click="onClick($event)"
  >
    <slot></slot>
  </component>
</template>

<script>
import "@nitro-ui/component-button";

export default {
  name: "niButton",
  props: {
    variant: String,
    href: String,
    size: {
      type: String
    },
    to: {
      default: null,
      type: [String, Object]
    },
    outline: Boolean,
    full: Boolean,
    pill: Boolean,
    loading: Boolean,
    disabled: Boolean,
    anchor: Boolean,
    target: Boolean
  },
  data() {
    return {
      internal_disabled: false
    };
  },
  computed: {
    is_disabled() {
      return this.disabled || this.internal_disabled;
    },
    classes() {
      return [
        this.outline &&
        (this.variant === "primary" || this.variant === "secondary")
          ? `c-btn--${this.variant}-outline`
          : this.variant
          ? `c-btn--${this.variant}`
          : "",
        this.size ? `c-btn--${this.size}` : "",
        { "is--loading": this.loading },
        { "is--disabled": this.is_disabled },
        { "c-btn--full": this.full },
        { "c-btn--pill": this.pill }
      ];
    }
  },
  methods: {
    onClick(event) {
      this.$emit("click", event);
      if (this.is_disabled) return;
      if (this.to) {
        this.routerPush();
      }
      if (this.href) {
        this.target
          ? window.open(this.href)
          : (window.location.href = this.href);
      }
    },
    routerPush() {
      this.internal_disabled = true;
      this.$router.push(this.to).catch(() => {
        this.internal_disabled = false;
      });
    }
  }
};
</script>
