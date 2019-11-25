<template>
  <textarea
    class="c-input"
    :placeholder="placeholder"
    :value="value"
    :rows="rows"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    @input="$emit('input', $event.target.value)"
    @click="$emit('click')"
    :disabled="disabled"
  ></textarea>
</template>

<script>
import "@nitro-ui/component-form";

export default {
  name: "niTextarea",
  props: {
    placeholder: String,
    defaultValue: String,
    value: String,
    rows: {
      type: Number,
      default: 3
    },
    disabled: Boolean
  },
  methods: {
    resizeTextarea(event) {
      event.target.style.height = "auto";
      event.target.style.height = event.target.scrollHeight + "px";
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.setAttribute("style", "height:" + this.$el.scrollHeight + "px;");
    });

    this.$el.addEventListener("input", this.resizeTextarea);
  },
  beforeDestroy() {
    this.$el.removeEventListener("input", this.resizeTextarea);
  }
};
</script>
