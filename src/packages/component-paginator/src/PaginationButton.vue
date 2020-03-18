<template>
  <li :class="classes">
    <Button
      v-if="useButton"
      :anchor="true"
      variant="secondary-outline"
      :disabled="disabled"
    >
      {{ btnLabel }}
    </Button>
    <a v-else-if="pageNumber" @click="onClick" href="#">
      <template v-if="pageNumber">{{ pageNumber }}</template>
      <slot v-else></slot>
    </a>
  </li>
</template>

<script>
import "@nitro-ui/component-pagination";
import Button from "../../component-button/src/index";

export default {
  name: "Pagination-button",
  components: { Button },
  props: {
    item: Boolean,
    btnLabel: String,
    first: Boolean,
    last: Boolean,
    prev: Boolean,
    next: Boolean,
    useButton: Boolean,
    anchor: Boolean,
    disabled: Boolean,
    variant: String,
    pageNumber: [String, Number]
  },
  methods: {
    onClick() {
      if (this.pageNumber && this.pageNumber !== "...") {
        this.$emit("click", this.pageNumber);
      }
      if (this.disabled) return;
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
      this.$router.push(this.to);
    }
  },
  computed: {
    classes() {
      return [
        this.first ? `c-pagination__first` : "",
        this.last ? `c-pagination__last` : "",
        this.prev ? `c-pagination__previous` : "",
        this.next ? `c-pagination__next` : "",
        this.item ? `c-pagination__item` : ""
      ];
    }
  }
};
</script>
