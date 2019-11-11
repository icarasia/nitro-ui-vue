<template>
  <div>
    <div class="display-4"></div>
    <div class="text-muted">
      Some awesome description about Form.
    </div>
    <div class="u-margin-top-md  u-width-1/2  u-width-1@mobile">
      <h4>Text input</h4>
      <FormField
        label="First Name"
        invalid
        message="Help message"
        hint="Optional"
      >
        <nInput placeholder="Your first name" v-model="first_name" />
      </FormField>
      {{ first_name }}
    </div>

    <div class="u-margin-top-md  u-width-1/2  u-width-1@mobile">
      <h4>Textarea</h4>
      <FormField label="Address" message="Key in your full address">
        <nTextarea placeholder="Your first name" v-model="address" />
      </FormField>
      {{ address }}
    </div>

    <h4>Select</h4>
    <div class="o-grid  u-margin-top-md">
      <div class="o-grid__item  u-width-1@mobile">
        <FormField label="Select with placeholder" message="Select your option">
          <nSelect placeholder="Please select your option" v-model="select">
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.label }}
            </option>
          </nSelect>
        </FormField>
        {{ select }}
      </div>
      <div class="o-grid__item  u-width-1@mobile">
        <FormField
          label="Select with first option"
          message="Select your option"
        >
          <nSelect v-model="select2">
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.label }}
            </option>
          </nSelect>
        </FormField>
        {{ select2 }}
      </div>
      <div class="o-grid__item  u-width-1@mobile">
        <FormField
          label="Select with empty placeholder"
          message="Select your option"
        >
          <nSelect :emptyPlaceholder="true" v-model="select3">
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.label }}
            </option>
          </nSelect>
        </FormField>
        {{ select3 }}
      </div>
    </div>

    <h4>Checkbox</h4>
    <div class="o-grid  u-margin-top-md">
      <div class="o-grid__item  u-width-1@mobile">
        <FormField
          label="Default Checkbox"
          message="Please select your options"
        >
          <n-checkbox-group v-model="check">
            <n-checkbox
              v-for="checkboxesitem in checkboxesitems"
              :key="checkboxesitem.id"
              :id="`check-${checkboxesitem.id}`"
              :value="checkboxesitem.value"
              :name="checkboxesitem.name"
              :disabled="checkboxesitem.disabled"
            >
              {{ checkboxesitem.label }}
            </n-checkbox>
          </n-checkbox-group>
        </FormField>
        {{ check }}
      </div>
      <div class="o-grid__item  u-width-1@mobile">
        <FormField label="Inline Checkbox" message="Please select your options">
          <n-checkbox-group v-model="check1" inline :items="checkboxesitems">
          </n-checkbox-group>
        </FormField>
        {{ check1 }}
      </div>
      <div class="o-grid__item  u-width-1@mobile">
        <FormField
          label="Buttons Checkbox"
          message="Please select your options"
        >
          <n-checkbox-group v-model="check2" inline buttons>
            <n-checkbox
              v-for="checkboxesitem in checkboxesitems"
              :key="checkboxesitem.id"
              :id="checkboxesitem.id"
              :value="checkboxesitem.value"
              :name="checkboxesitem.name"
              :disabled="checkboxesitem.disabled"
              :icon="checkboxesitem.icon"
            >
              {{ checkboxesitem.label }}
            </n-checkbox>
          </n-checkbox-group>
        </FormField>
        {{ check2 }}
      </div>
    </div>

    <h4>Radio</h4>
    <div class="o-grid  u-margin-top-md">
      <div class="o-grid__item  u-width-1@mobile">
        <FormField label="Default Radio" message="Please select your options">
          <nRadioGroup name="staff1" v-model="radio1">
            <nRadio
              v-for="radioitem in radioitems"
              :key="radioitem.id"
              :value="radioitem.value"
              :id="radioitem.id"
              :disabled="radioitem.disabled"
            >
              {{ radioitem.label }}
            </nRadio>
          </nRadioGroup>
        </FormField>
        {{ radio1 }}
      </div>
      <div class="o-grid__item  u-width-1@mobile">
        <FormField label="Inline Radio" message="Please select your options">
          <nRadioGroup
            name="staff2"
            v-model="radio2"
            inline
            :items="radioitems"
          >
          </nRadioGroup>
        </FormField>
        {{ radio2 }}
      </div>
      <div class="o-grid__item  u-width-1@mobile">
        <FormField
          label="Buttons Inline Radio"
          message="Please select your options"
        >
          <nRadioGroup
            name="staff3"
            v-model="radio3"
            inline
            :items="radioitems"
            buttons
          >
          </nRadioGroup>
        </FormField>
        {{ radio3 }}
      </div>
    </div>

    <h4>Switches</h4>
    <div>
      <div class="o-grid  u-margin-top-md">
        <div class="o-grid__item  u-width-1@mobile">
          <FormField
            label="Default Switch"
            message="Please select your options"
          >
            <n-checkbox-group switches v-model="switch1">
              <n-checkbox
                v-for="switchitem in switchitems"
                :key="switchitem.id"
                :value="switchitem.value"
                :id="switchitem.id"
                :name="switchitem.name"
                :disabled="switchitem.disabled"
              >
                {{ switchitem.label }}
              </n-checkbox>
            </n-checkbox-group>
            {{ switch1 }}
          </FormField>
        </div>
        <div class="o-grid__item  u-width-1@mobile">
          <FormField label="Right Switch" message="Please select your options">
            <n-checkbox-group switches switch-right v-model="switch2">
              <n-checkbox
                v-for="switchitem in switchitems"
                :key="switchitem.id"
                :value="switchitem.value"
                :id="`switch-${switchitem.id}`"
                :name="switchitem.name"
                :disabled="switchitem.disabled"
              >
                {{ switchitem.label }}
              </n-checkbox>
            </n-checkbox-group>
            {{ switch2 }}
          </FormField>
        </div>
      </div>
      <div>
        <div class="o-grid__item  u-width-1@mobile">
          <FormField
            label="Single Normal Switch"
            message="Please select your options"
          >
            <n-checkbox-group switches v-model="switch3">
              <n-checkbox value="test" id="test_switch" name="test_switch">
                Test Switch
              </n-checkbox>
            </n-checkbox-group>
            {{ switch3 }}
          </FormField>
        </div>
      </div>
    </div>

    <h4 class="u-margin-top-xl">File Upload</h4>
    <div class="o-grid  u-margin-top-md">
      <div class="o-grid__item  u-width-1@mobile">
        <FormField
          label="File Upload"
          message="Please upload your file"
          :class="'u-margin-bottom-xxs'"
        >
          <nFileUpload v-model="fileupload" />
        </FormField>
        <div class="u-margin-bottom-lg">
          {{ fileupload }}
        </div>
      </div>
      <div class="o-grid__item  u-width-1@mobile">
        <FormField
          label="Error state"
          message="Please upload your file"
          :invalid="true"
          :class="'u-margin-bottom-xxs'"
        >
          <nFileUpload v-model="fileupload1" />
        </FormField>
        <div class="u-margin-bottom-lg">
          {{ fileupload1 }}
        </div>
      </div>
      <div class="o-grid__item  u-width-1@mobile">
        <FormField
          label="Disabled state"
          message="Please upload your file"
          :class="'u-margin-bottom-xxs'"
        >
          <nFileUpload disabled v-model="fileupload2" />
        </FormField>
        <div class="u-margin-bottom-lg">
          {{ fileupload2 }}
        </div>
      </div>
    </div>

    <h4 class="u-margin-top-xl">Input with button</h4>
    <div class="o-grid  u-margin-top-md">
      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormField
          label="Label"
          message="Message here"
          :class="'u-margin-bottom-xxs'"
        >
          <nInputBtn v-model="inputbtnresult">
            <nButton variant="secondary">Button</nButton>
          </nInputBtn>
        </FormField>
        <div class="u-margin-bottom-lg">
          {{ inputbtnresult }}
        </div>
      </div>
      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormField
          label="Error State"
          message="Message here"
          invalid
          :class="'u-margin-bottom-xxs'"
        >
          <nInputBtn v-model="inputbtnresult1">
            <nButton variant="secondary">Button</nButton>
          </nInputBtn>
        </FormField>
        <div class="u-margin-bottom-lg">
          {{ inputbtnresult1 }}
        </div>
      </div>
      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormField
          label="Disabled state"
          message="Message here"
          :class="'u-margin-bottom-xs'"
        >
          <nInputBtn disabled v-model="inputbtnresult2">
            <nButton variant="secondary">Button</nButton>
          </nInputBtn>
        </FormField>
        <div class="u-margin-bottom-lg">
          {{ inputbtnresult2 }}
        </div>
      </div>
    </div>

    <h4 class="u-margin-top-xl">Floating Label</h4>
    <div class="o-grid  u-margin-top-md  u-margin-bottom-xl">
      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          label="Label"
          message="Message here"
          :class="'u-margin-bottom-xxs'"
        >
          <nInput v-model="floatlabelresult" />
        </FormFieldFloat>
        <div class="u-margin-bottom-lg">
          {{ floatlabelresult }}
        </div>
      </div>

      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          label="Error State"
          hint="Optional"
          invalid
          message="Message here"
          :class="'u-margin-bottom-xxs'"
        >
          <nInput v-model="floatlabelresult1" />
        </FormFieldFloat>
        <div class="u-margin-bottom-lg">
          {{ floatlabelresult1 }}
        </div>
      </div>

      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          label="Disabled State"
          hint="Optional"
          message="Message here"
          :class="'u-margin-bottom-xxs'"
        >
          <nInput disabled v-model="floatlabelresult2" />
        </FormFieldFloat>
        <div class="u-margin-bottom-lg">
          {{ floatlabelresult2 }}
        </div>
      </div>

      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          label="label"
          message="Select your option"
          :class="'u-margin-bottom-xxs'"
        >
          <nSelect v-model="floatlabelselectresult" emptyPlaceholder>
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.label }}
            </option>
          </nSelect>
        </FormFieldFloat>
        <div class="u-margin-bottom-lg">
          {{ floatlabelselectresult }}
        </div>
      </div>

      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          label="Error State"
          invalid
          message="Select your option"
          :class="'u-margin-bottom-xxs'"
        >
          <nSelect v-model="floatlabelselectresult1">
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.label }}
            </option>
          </nSelect>
        </FormFieldFloat>
        <div class="u-margin-bottom-lg">
          {{ floatlabelselectresult1 }}
        </div>
      </div>

      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          label="Disabled state"
          message="Select your option"
          :class="'u-margin-bottom-xxs'"
        >
          <nSelect disabled emptyPlaceholder>
            <option
              v-for="(option, index) in options"
              :value="option.value"
              :key="index"
            >
              {{ option.label }}
            </option>
          </nSelect>
        </FormFieldFloat>
      </div>

      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          label="Label"
          message="Message here"
          :class="'u-margin-bottom-xxs'"
        >
          <nInputBtn v-model="floatlabelinputbtnresult1">
            <nButton variant="primary" v-tooltip="'test'">
              <NitroIcon name="action/add" size="m"></NitroIcon>
            </nButton>
          </nInputBtn>
        </FormFieldFloat>
        <div class="u-margin-bottom-lg">
          {{ floatlabelinputbtnresult1 }}
        </div>
      </div>
      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          invalid
          label="Error State"
          message="Message here"
          :class="'u-margin-bottom-xxs'"
        >
          <nInputBtn v-model="floatlabelinputbtnresult2">
            <nButton variant="secondary">Button</nButton>
          </nInputBtn>
        </FormFieldFloat>
        <div class="u-margin-bottom-lg">
          {{ floatlabelinputbtnresult2 }}
        </div>
      </div>
      <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
        <FormFieldFloat
          label="Disabled State"
          message="Message here"
          :class="'u-margin-bottom-xxs'"
        >
          <nInputBtn disabled v-model="floatlabelinputbtnresult3">
            <nButton variant="secondary">Button</nButton>
          </nInputBtn>
        </FormFieldFloat>
        <div class="u-margin-bottom-lg">
          {{ floatlabelinputbtnresult3 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@nitro-ui/object-grid";
import "@nitro-ui/utility-width";
import FormField from "../../packages/component-form-field/src/index";
import nInput from "../../packages/component-form-input/src/index";
import nTextarea from "../../packages/component-form-textarea/src/index";
import nSelect from "../../packages/component-form-select/src/index";
import nCheckboxGroup from "../../packages/component-form-checkbox-group/src/index";
import nCheckbox from "../../packages/component-form-checkbox/src/index";
import nRadioGroup from "../../packages/component-form-radio-group/src/index";
import nRadio from "../../packages/component-form-radio/src/index";
import nFileUpload from "../../packages/component-form-fileupload/src/index";
import nInputBtn from "../../packages/component-form-input-button/src/index";
import FormFieldFloat from "../../packages/component-form-field-floatlabel/src/index";
import nButton from "../../packages/component-button/src/index";

export default {
  name: "FormPage",
  components: {
    FormField,
    nInput,
    nTextarea,
    nSelect,
    nCheckboxGroup,
    nCheckbox,
    nRadioGroup,
    nRadio,
    nFileUpload,
    nInputBtn,
    nButton,
    FormFieldFloat
  },
  props: {
    picked: String
  },
  data() {
    return {
      first_name: null,
      address: null,
      select: null,
      select2: null,
      select3: null,
      check: [],
      check1: [],
      check2: [],
      radio1: null,
      radio2: null,
      radio3: null,
      switch1: [],
      switch2: [],
      switch3: true,
      fileupload: null,
      fileupload1: null,
      fileupload2: null,
      inputbtnresult: null,
      inputbtnresult1: null,
      inputbtnresult2: null,
      floatlabelresult: null,
      floatlabelresult1: null,
      floatlabelresult2: null,
      floatlabelselectresult: null,
      floatlabelselectresult1: null,
      floatlabelinputbtnresult1: null,
      floatlabelinputbtnresult2: null,
      floatlabelinputbtnresult3: null,
      options: [
        { value: "01", label: "01" },
        { value: "02", label: "02" },
        { value: "03", label: "03" }
      ],
      checkboxesitems: [
        {
          value: "mickey",
          label: "Mickey",
          id: "4",
          icon: "action/check"
        },
        {
          value: "pooh",
          label: "Pooh",
          id: "5",
          icon: "action/check"
        },
        {
          value: "tiggar",
          label: "Tiggar",
          id: "6",
          icon: "action/check"
        }
      ],
      checkboxes: [
        { value: "mickey", label: "Mickey", id: "10" },
        { value: "pooh", label: "Pooh", id: "11", checked: "checked" },
        { value: "tiggar", label: "Tiggar", id: "12" }
      ],
      radioitems: [
        {
          value: "jack",
          label: "Jack",
          id: "7",
          name: "staff",
          checked: "checked",
          icon: "action/check"
        },
        {
          value: "john",
          label: "John",
          id: "8",
          name: "staff",
          icon: "action/check"
        },
        {
          value: "mike",
          label: "Mike",
          id: "9",
          name: "staff",
          disabled: true,
          icon: "action/check"
        }
      ],
      radios: [
        {
          value: "jack",
          label: "Jack",
          id: "13",
          name: "name",
          disabled: true
        },
        { value: "john", label: "John", id: "14", name: "name" },
        { value: "mike", label: "Mike", id: "15", name: "name" }
      ],
      switchitems: [
        {
          value: "apple",
          label: "Apple",
          id: "16",
          name: "fruits",
          checked: "checked"
        },
        { value: "orange", label: "Orange", id: "17", name: "fruits" },
        {
          value: "honeydew",
          label: "Honeydew",
          id: "18",
          name: "fruits"
        }
      ],
      switchoptions: [
        {
          value: "allow",
          label: "Allow Notification",
          id: "19",
          name: "switch",
          checked: "checked"
        },
        {
          value: "show",
          label: "Show on Lock Screen",
          id: "20",
          name: "switch"
        },
        {
          value: "banner",
          label: "Show as Banner",
          id: "21",
          name: "switch"
        }
      ]
    };
  }
};
</script>
