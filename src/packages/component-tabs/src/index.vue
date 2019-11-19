<template>
  <div :class="{ 'c-card__tabs': cardable }">
    <div class="c-tab" role="tablist" :class="classes">
      <a
        class="c-tab__item u-order-1@mobile"
        :class="[
          {
            'is--active':
              tab.label === (currentTab ? currentTab.label : tabs[0].label),
            'u-grow-1@mobile': justifiedMobile
          },
          buttons ? `c-btn c-btn--${variant}-outline` : ''
        ]"
        data-toggle="tab"
        role="tab"
        v-for="(tab, index) in tabs"
        :key="`tab-header${index}`"
        @click="activate(index)"
      >
        <NitroIcon
          v-if="!tab.hideIcon"
          :name="tab.icon"
          size="m"
        ></NitroIcon>
        <span>{{ tab.label }}</span>
      </a>

      <div
        class="u-margin-right-none u-margin-left-auto u-order-0@mobile u-margin-right-none@mobile u-width-1@mobile"
      >
        <slot name="right-side"></slot>
      </div>
    </div>

    <div class="c-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import "@nitro-ui/component-tab";
import "@nitro-ui/component-button";

export default {
  name: "niTabs",
  props: {
    activeIndex: {
      default: 0,
      type: [Number, String]
    },
    justified: Boolean,
    justifiedMobile: Boolean,
    buttons: Boolean,
    cardable: Boolean,
    variant: {
      type: String,
      default: "primary"
    }
  },
  watch: {
    activeIndex(index) {
      this.activate(index);
    }
  },
  data() {
    return {
      tabs: [],
      currentTab: null
    };
  },
  mounted() {
    this.activate(this.activeIndex);
  },
  methods: {
    activate(index) {
      if (this.currentTab) this.currentTab.deactivate();
      this.tabs[index].activate();
      this.currentTab = this.tabs[index];
    }
  },
  computed: {
    classes() {
      return [
        { "c-tab--justified": this.justified },
        { "c-tab--buttons": this.buttons }
      ];
    }
  }
};
</script>
