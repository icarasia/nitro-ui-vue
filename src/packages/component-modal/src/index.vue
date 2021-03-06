<template>
  <div
    class="c-modal"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    :class="{ shown: this.shown }"
    v-if="shown"
  >
    <div
      class="c-dialog"
      role="document"
      v-on-clickaway="clickOut"
      :class="size ? `c-dialog--${size}` : ''"
    >
      <div class="c-dialog__head" :class="headerClasses" v-if="with_header">
        <slot name="header" :close="close" v-if="$scopedSlots.header"></slot>
        <template v-else>
          <h4 class="c-dialog__title">
            <template v-if="title">{{ title }}</template>
            <template v-else>
              <slot name="title"></slot>
            </template>
          </h4>
          <button
            type="button"
            class="c-dialog__close"
            data-dismiss="modal"
            v-if="with_close_sign"
            @click="close"
          >
            &#10005;
          </button>
        </template>
      </div>
      <slot name="above-body"></slot>
      <div class="c-dialog__body" :class="bodyClasses">
        <slot></slot>
      </div>
      <div class="c-dialog__foot" :class="footerClasses" v-if="with_footer">
        <slot name="footer" :close="close"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import "@nitro-ui/component-modal";
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "niModal",
  props: {
    shown: {
      type: Boolean,
      required: true,
      default: false
    },
    title: String,
    with_close_sign: {
      type: Boolean,
      default: true
    },
    with_footer: {
      type: Boolean,
      default: true
    },
    with_header: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: null
    },
    closeOnOutsideClick: {
      type: Boolean,
      default: true
    },
    headerClasses: {
      type: String,
      default: ""
    },
    bodyClasses: {
      type: String,
      default: ""
    },
    footerClasses: {
      type: String,
      default: ""
    }
  },
  mixins: [clickaway],
  methods: {
    close: function() {
      this.$emit("update:shown", false);
    },
    clickOut: function() {
      if (this.closeOnOutsideClick) this.close();
    }
  }
};
</script>

<style scoped>
.shown {
  background: rgba(0, 0, 0, 0.7);
  display: block;
}
</style>
