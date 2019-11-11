<template>
  <div>
    <div class="display-4">Dropdown</div>
    <div class="text-muted">
      Some awesome description about Dropdown.
    </div>
    <div class="u-margin-top-md">
      <h4></h4>
      <Container>
        <nRow>
          <nCol>
            <Dropdown
              title="Left toggable menu"
              toggleable
              style="display: inline-block"
              :items="items"
            ></Dropdown>
          </nCol>
          <nCol>
            <Dropdown
              paddingLeft="lg"
              title="Center menu"
              position="center"
              style="display: inline-block"
              :items="items"
            ></Dropdown>
          </nCol>
          <nCol>
            <Dropdown
              paddingLeft="lg"
              title="Right toggable mega menu"
              position="right"
              toggleable
              style="display: inline-block"
              :items="[items, items, items]"
            ></Dropdown>
          </nCol>
        </nRow>
      </Container>
    </div>
  </div>
</template>

<script>
import Dropdown from "../../packages/component-dropdown/src";
import Container from "../../packages/component-container/src/index";
import nRow from "../../packages/component-row/src/index";
import nCol from "../../packages/component-col/src/index";

export default {
  name: "DropdownPage",
  components: {
    nCol,
    nRow,
    Container,
    Dropdown
  },
  data() {
    return {
      items: [
        { title: "First", is_head: true, is_divider: false },
        { is_divider: true },
        {
          title: "First first",
          href: "http://www.google.com",
          target: "_blank"
        },
        {
          title: "First second",
          to: { name: "chips" }
        }
      ]
    };
  }
};
</script>
