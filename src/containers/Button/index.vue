<template>
  <div>
    <div class="display-4">
      Button
    </div>
    <div class="text-muted">
      Some awesome description about Button.
    </div>
    <div class="u-margin-top-md">
      <h4>Colors</h4>
      <Button marginTop="sm" variant="primary">Primary Nitro Button</Button>
      <Button marginTop="sm" variant="primary" outline
        >Outline Primary Nitro Button</Button
      >
      <Button marginTop="sm" variant="secondary">Secondary Nitro Button</Button>
      <Button marginTop="sm" variant="secondary" outline
        >Outline Secondary Nitro Button</Button
      >
      <Button marginTop="sm" variant="action">Action Nitro Button</Button>
      <Button marginTop="sm" variant="negative">Negative Nitro Button</Button>
      <Button marginTop="sm" variant="positive">Positive Nitro Button</Button>
    </div>
    <div class="u-margin-top-md">
      <h4>Sizes</h4>
      <Button marginTop="sm" variant="primary" size="xs"
        >XS Nitro Button</Button
      >
      <Button marginTop="sm" variant="secondary" size="sm"
        >SM Nitro Button</Button
      >
      <Button marginTop="sm" variant="secondary"
        >Default size Nitro Button</Button
      >
      <Button marginTop="sm" variant="action" size="lg">LG Nitro Button</Button>
      <Button marginTop="sm" variant="negative" full
        >Full width Nitro Button</Button
      >
    </div>
    <div class="u-margin-top-md">
      <h4>Pills</h4>
      <Button variant="primary" pill>Nitro Button</Button>
      <Button variant="secondary" pill>Nitro Button</Button>
      <Button variant="action" pill>Nitro Button</Button>
      <Button variant="negative" pill>Nitro Button</Button>
      <Button variant="positive" pill>Nitro Button</Button>
    </div>
    <div class="u-margin-top-md">
      <h4>Features</h4>
      <Button variant="primary" loading>Nitro Button</Button>
      <Button variant="secondary" disabled>Disabled</Button>
      <Button variant="secondary" anchor href="http://www.icarasia.com"
        >Anchor</Button
      >
      <Button variant="secondary" anchor href="http://www.icarasia.com" target
        >Anchor new Tab</Button
      >
      <Button variant="secondary" anchor :to="{ name: 'chips' }" target
        >Router link</Button
      >
    </div>

    <div class="u-margin-top-md">
      <h4 class="u-margin-top-md">Group</h4>
      <ButtonGroup marginTop="sm">
        <Button variant="primary">First</Button>
        <Button variant="secondary">Second</Button>
        <Button variant="action">Third</Button>
        <Button variant="negative">Fourth</Button>
        <Button variant="positive">Fifth</Button>
      </ButtonGroup>
      <h4 class="u-margin-top-md">Full width Group</h4>
      <ButtonGroup marginTop="sm" full>
        <Button variant="primary">First</Button>
        <Button variant="secondary">Second</Button>
        <Button variant="action">Third</Button>
        <Button variant="negative">Fourth</Button>
        <Button variant="positive">Fifth</Button>
      </ButtonGroup>
    </div>
  </div>
</template>

<script>
import Button from "../../packages/component-button/src";
import ButtonGroup from "../../packages/component-button-group/src/index";

export default {
  name: "ButtonPage",
  components: {
    ButtonGroup,
    Button
  }
};
</script>
