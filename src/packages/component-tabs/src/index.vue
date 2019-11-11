<template>
  <div :class="{ 'c-card__tabs': cardable }">
    <div class="c-tab" role="tablist" :class="classes">
      <a
        class="c-tab__item"
        :class="[
          {
            'is--active':
              tab.label === (currentTab ? currentTab.label : tabs[0].label)
          },
          buttons ? `c-btn c-btn--${variant}-outline` : ''
        ]"
        data-toggle="tab"
        href="#"
        role="tab"
        v-for="(tab, index) in tabs"
        :key="`tab-header${index}`"
        @click="activate(index)"
      >
        <NitroIcon name="dealerships/car" size="m"></NitroIcon>
        <span>{{ tab.label }}</span>
      </a>
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
