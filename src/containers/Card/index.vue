<template>
  <div>
    <div class="display-4">
      Card
    </div>
    <div class="text-muted">
      Some awesome description about Card.
    </div>
    <div class="text-muted">
      Normal Card
      <card marginTop="md">
        <template v-slot:header>HI</template>
        test
      </card>
    </div>
    <div class="text-muted">
      Menu card
      <card
        marginTop="md"
        menu
        title="Menu"
        :items="[
          { label: 'First', href: 'http://www.google.com' },
          { label: 'Second', to: '/chip' },
          {
            label: 'Third',
            childs: [{ label: 'First First' }, { label: 'First Second' }]
          },
          {
            label: 'Fourth',
            with_divider: true,
            to: { name: 'breadcrumb' }
          }
        ]"
      >
      </card>
    </div>
  </div>
</template>

<script>
import Card from "../../packages/component-card/src";

export default {
  name: "CardPage",
  components: {
    Card
  },
  data() {
    return {
      variants: [
        "blue",
        "blue-light",
        "green",
        "orange",
        "pink",
        "purple",
        "red",
        "yellow"
      ]
    };
  }
};
</script>
