<template>
  <div>
    <div class="display-4">
      Tabs
    </div>
    <div class="text-muted">
      Some awesome description about Tab.
    </div>
    <div class="u-margin-top-md">
      <h4>Normal Tabs</h4>
      <Tabs>
        <Tab
          v-for="(tab, index) in tabs"
          :label="tab.label"
          :key="`ONE-${index}`"
          icon="dealerships/car"
          >{{ tab.content }}</Tab
        >
      </Tabs>
    </div>
    <div class="u-margin-top-md">
      <h4>Tabs Without Icon and with right side</h4>
      <Tabs justified-mobile>
        <Tab
          v-for="(tab, index) in tabs"
          :label="tab.label"
          :key="`ONE-${index}`"
          :hide-icon="true"
          >{{ tab.content }}</Tab
        >

        <template v-slot:right-side>
          <div class="d-flex u-margin-bottom-sm">
            <n-input
              placeholder="Search for..."
              class="u-margin-right-sm"
            ></n-input>
            <n-button variant="primary" size="sm">+ Create</n-button>
          </div>
        </template>
      </Tabs>
    </div>
    <div class="u-margin-top-md">
      <h4>Justified Tabs</h4>
      <Tabs justified>
        <Tab
          v-for="(tab, index) in tabs"
          :label="tab.label"
          :key="`TWO-${index}`"
          icon="dealerships/car"
          >{{ tab.content }}</Tab
        >
      </Tabs>
    </div>

    <div class="u-margin-top-md">
      <h4>Normal Button Tabs (Primary variations)</h4>
      <Tabs buttons>
        <Tab
          v-for="(tab, index) in tabs"
          :label="tab.label"
          icon="dealerships/car"
          :key="`THREE-${index}`"
          >{{ tab.content }}</Tab
        >
      </Tabs>
    </div>
    <div class="u-margin-top-md">
      <h4>Justified Button Tabs (Secondary variations)</h4>
      <Tabs justified buttons variant="secondary">
        <Tab
          v-for="(tab, index) in tabs"
          :label="tab.label"
          icon="dealerships/car"
          :key="`FOUR-${index}`"
          >{{ tab.content }}</Tab
        >
      </Tabs>
    </div>
    <div class="u-margin-top-md">
      <h4>With Card</h4>
      <Card no-body>
        <Tabs cardable>
          <Tab
            v-for="(tab, index) in tabs"
            :label="tab.label"
            icon="dealerships/car"
            :key="`FIVE-${index}`"
            >{{ tab.content }}</Tab
          >
        </Tabs>
        <Tabs cardable justified buttons variant="secondary">
          <Tab
            v-for="(tab, index) in tabs"
            :label="tab.label"
            icon="dealerships/car"
            :key="`SIX-${index}`"
            >{{ tab.content }}</Tab
          >
        </Tabs>
      </Card>
    </div>
  </div>
</template>

<script>
import Tabs from "../../packages/component-tabs/src/index";
import Tab from "../../packages/component-tab/src/index";
import Card from "../../packages/component-card/src/index";
import NButton from "../../packages/component-button/src/index";
import NInput from "../../packages/component-form-input/src/index";

export default {
  name: "TabsPage",
  components: { Card, Tab, Tabs, NButton, NInput },
  data() {
    return {
      tabs: [
        { label: "First", content: "First tab content" },
        { label: "Second", content: "Second tab content" },
        { label: "Third", content: "Third tab content" }
      ]
    };
  }
};
</script>
