<template>
  <div>
    <div class="display-4">
      Tables
    </div>
    <div class="u-margin-top-md">
      <h4>Basic Table</h4>
      <div class="u-margin-top-md bg-white u-padding-md">
        <n-table
          :headers="headers"
          :items="items"
          @click="test"
          @changedSort="sort"
          highlight-selected
          :selected="selected"
          :iconClass="'icon'"
        >
        </n-table>
      </div>
    </div>

    <div class="u-margin-top-md">
      <h4>Bordered Table</h4>
      <div class="u-margin-top-md bg-white u-padding-md">
        <n-table :headers="headers" :items="items" bordered> </n-table>
      </div>
    </div>

    <div class="u-margin-top-md">
      <h4>Small Paddings</h4>
      <div class="u-margin-top-md bg-white u-padding-md">
        <n-table :headers="headers" :items="items" dense> </n-table>
      </div>
    </div>

    <div class="u-margin-top-md">
      <h4>Stripped</h4>
      <div class="u-margin-top-md bg-white u-padding-md">
        <n-table :headers="headers" :items="items" striped> </n-table>
      </div>
    </div>

    <div class="u-margin-top-md">
      <h4>Stripped & Bordered</h4>
      <div class="u-margin-top-md bg-white u-padding-md">
        <n-table :headers="headers" :items="items" striped bordered> </n-table>
      </div>
    </div>

    <div class="u-margin-top-md">
      <h4>Stripped & Bordered & Small Paddings</h4>
      <div class="u-margin-top-md bg-white u-padding-md">
        <n-table :headers="headers" :items="items" striped bordered dense>
        </n-table>
      </div>
    </div>

    <div class="u-margin-top-md">
      <h4>Custom items via Slot</h4>
      <div class="u-margin-top-md bg-white u-padding-md">
        <n-table :headers="headers" striped bordered dense>
          <template slot="body">
            <tr v-for="(item, index) in items" :key="index">
              <td>{{ item.id }}</td>
              <td>{{ item.first_name }}</td>
              <td>{{ item.last_name }}</td>
              <td class="text-right">{{ item.username }}</td>
            </tr>
          </template>
        </n-table>
      </div>
    </div>
  </div>
</template>

<script>
import NTable from "../../packages/component-table/src/index";

export default {
  name: "TablePage",
  components: {
    NTable
  },
  data() {
    return {
      headers: [
        { text: "#", value: "id" },
        {
          text: "First Name",
          value: "first_name",
          sortable: true,
          sortColumnName: "first_name"
        },
        {
          text: "Last Name",
          value: "last_name",
          sortable: true,
          sortColumnName: "last_name"
        },
        { text: "Username", value: "username", align: "right" }
      ],
      items: [
        {
          id: 1,
          first_name: "Dennise",
          last_name: "Bergkamp",
          username: "@bergkamp10"
        },
        {
          id: 2,
          first_name: "Thierry",
          last_name: "Henry",
          username: "@henry14"
        },
        {
          id: 3,
          first_name: "Patrick",
          last_name: "Viera",
          username: "@viera04"
        },
        {
          id: 4,
          first_name: "Emmanuel",
          last_name: "Petit",
          username: "@petit17"
        },
        {
          id: 4,
          first_name: "Freddrick",
          last_name: "Ljunberg",
          username: "@freddie08"
        }
      ],
      selected: null
    };
  },
  methods: {
    test(event, item, index) {
      this.selected = this.selected === index ? null : index;
    },
    sort() {
      //console.log(params);
    }
  }
};
</script>
