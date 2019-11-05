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
          >{{ tab.content }}</Tab
        >
      </Tabs>
    </div>
    <div class="u-margin-top-md">
      <h4>Justified Tabs</h4>
      <Tabs justified>
        <Tab
          v-for="(tab, index) in tabs"
          :label="tab.label"
          :key="`TWO-${index}`"
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
            :key="`FIVE-${index}`"
            >{{ tab.content }}</Tab
          >
        </Tabs>
        <Tabs cardable justified buttons variant="secondary">
          <Tab
            v-for="(tab, index) in tabs"
            :label="tab.label"
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
import Tab from "../../packages/component-tabs/src/tab";
import Card from "../../packages/component-card/src/index";

export default {
  name: "TabsPage",
  components: { Card, Tab, Tabs },
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
