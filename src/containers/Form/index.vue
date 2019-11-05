<template>
  <div>
    <div class="display-4"></div>
    <div class="text-muted">
      Some awesome description about Form.
    </div>
    <div class="u-margin-top-md">
      <h4>Text input</h4>
      <FormField label="First Name" invalid message="Help message">
        <nInput placeholder="Your first name" v-model="first_name" />
      </FormField>
      {{ first_name }}
    </div>
    <div class="u-margin-top-md">
      <h4>Textarea</h4>
      <FormField label="Address" message="Key in your full address">
        <nTextarea placeholder="Your first name" v-model="address" />
      </FormField>
      <pre>{{ address }}</pre>
    </div>
  </div>
</template>

<script>
import FormField from "../../packages/component-form-field/src/index";
import nInput from "../../packages/component-input/src/index";
import nTextarea from "../../packages/component-textarea/src/index";

export default {
  name: "FormPage",
  components: {
    FormField,
    nInput,
    nTextarea
  },
  data() {
    return {
      first_name: null,
      address: null
    };
  }
};
</script>
