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
          <nCol>
            <Dropdown
              paddingLeft="lg"
              title="Custom slot for dropdown item"
              position="right"
              toggleable
              style="display: inline-block"
            >
              <DropdownItem class="c-dropdown__heading">Test</DropdownItem>
              <DropdownItem :item="{ is_divider: true }"></DropdownItem>
              <DropdownItem class="c-dropdown__item">
                <div
                  class="u-flex  u-flex--items-center  u-flex--justify-between"
                >
                  <div>Showcase</div>
                  <div class="u-text-7  u-color-muted">RUNNING</div>
                </div>
              </DropdownItem>
              <DropdownItem class="c-dropdown__item">
                <div
                  class="u-flex  u-flex--items-center  u-flex--justify-between"
                >
                  <div>Hot Deal</div>
                  <div class="u-text-7  u-color-muted">RUNNING</div>
                </div>
              </DropdownItem>
            </Dropdown>
          </nCol>
        </nRow>
      </Container>
    </div>
  </div>
</template>

<script>
import Dropdown from "../../packages/component-dropdown/src";
import DropdownItem from "../../packages/component-dropdown/src/DropdownItem";
import Container from "../../packages/component-container/src/index";
import nRow from "../../packages/component-row/src/index";
import nCol from "../../packages/component-col/src/index";

export default {
  name: "DropdownPage",
  components: {
    nCol,
    nRow,
    Container,
    Dropdown,
    DropdownItem
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
        },
        {
          title: "First third",
          callback: "changeLanguage",
          callbackParams: {
            lang: "en"
          }
        }
      ]
    };
  }
};
</script>
