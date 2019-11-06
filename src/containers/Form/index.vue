<template>
    <div>
        <div class="display-4  u-margin-top-lg">Form</div>
        <div class="u-margin-top-lg  text-muted">
            Some awesome description about Form.
        </div>
        <h4 class="u-margin-top-lg">Text input</h4>
        <div class="o-grid">
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormField label="First Name" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInput placeholder="Your first name" v-model="input1" />
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ input1 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormField label="Error state with hint text" invalid message="Message here" hint="Optional" :class="'u-margin-bottom-xxs'">
                    <nInput placeholder="Your first name" v-model="input2" />
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ input2 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormField label="Disabled state" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInput placeholder="Your first name" disabled v-model="input3" />
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ input3 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormField label="Field size large" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInput placeholder="Your first name" size="lg" v-model="input4" />
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ input4}}
                </div>
            </div>
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormField label="Field size small" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInput placeholder="Your first name" size="sm" v-model="input5" />
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ input5 }}
                </div>
            </div>
        </div>

        <h4 class="u-margin-top-xl">Textarea</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Address" message="Key in your full address" :class="'u-margin-bottom-xxs'">
                    <nTextarea placeholder="Your first name" v-model="address" />
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ address }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Textarea with hint text" message="Key in your full address" hint="Optional" :class="'u-margin-bottom-xxs'">
                    <nTextarea placeholder="Your first name" v-model="address2" />
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ address2 }}
                </div>
            </div>
        </div>

        <h4 class="u-margin-top-xl">Select</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Select with placeholder" message="Select your option" :class="'u-margin-bottom-xxs'">
                    <nSelect placeholder="Please select your option" v-model="select">
                        <option
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ select }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Select with first option" message="Select your option" :invalid="true" :class="'u-margin-bottom-xxs'">
                    <nSelect v-model="select2">
                        <option
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ select2 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Select with empty placeholder" message="Select your option" :class="'u-margin-bottom-xxs'">
                    <nSelect emptyPlaceholder v-model="select3">
                        <option
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ select3 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Disabled state" message="Select your option" :class="'u-margin-bottom-xxs'">
                    <nSelect v-model="select4" disabled>
                        <option
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ select4 }}
                </div>
            </div>
        </div>

        <h4 class="u-margin-top-xl">Checkbox</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Default Checkbox" message="Select your options" :class="'u-margin-bottom-xxs'">
                    <nCheckbox
                        v-for="checkboxesitem in checkboxesitems"
                        :key="checkboxesitem.id"
                        :value="checkboxesitem.value"
                        :id="checkboxesitem.id"
                        :name="checkboxesitem.name"
                        :disabled="checkboxesitem.disabled"
                        :checked="checkboxesitem.checked"
                        v-model="checkboxresult1">
                        {{checkboxesitem.label}}
                    </nCheckbox>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ checkboxresult1 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Inline Checkbox" message="Select your options" :class="'u-margin-bottom-xxs'">
                    <div class="c-check-inline">
                        <nCheckbox
                            v-for="checkbox in checkboxes"
                            :key="checkbox.id"
                            :value="checkbox.value"
                            :id="checkbox.id"
                            :name="checkbox.name"
                            :disabled="checkbox.disabled"
                            :checked="checkbox.checked"
                            v-model="checkboxresult2">
                            {{checkbox.label}}
                        </nCheckbox>
                    </div>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ checkboxresult2 }}
                </div>
            </div>
        </div>


        <h4 class="u-margin-top-xl">Radio</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Default Radio" message="Select your option" :class="'u-margin-bottom-xxs'">
                    <nRadio
                        v-for="radioitem in radioitems"
                        :key="radioitem.id"
                        :value="radioitem.value"
                        :id="radioitem.id"
                        :name="radioitem.name"
                        :disabled="radioitem.disabled"
                        :checked="radioitem.checked"
                        v-model="radioresult1">
                        {{radioitem.label}}
                    </nRadio>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ radioresult1 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Inline Radio" message="Select your option" :class="'u-margin-bottom-xxs'">
                    <div class="c-check-inline">
                        <nRadio
                            v-for="radio in radios"
                            :key="radio.id"
                            :value="radio.value"
                            :id="radio.id"
                            :name="radio.name"
                            :disabled="radio.disabled"
                            :checked="radio.checked"
                            v-model="radioresult2">
                            {{radio.label}}
                        </nRadio>
                    </div>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ radioresult2 }}
                </div>
            </div>
        </div>

        <h4 class="u-margin-top-xl">Switch</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Default Switch" message="Turning on / off for above settings" :class="'u-margin-bottom-xxs'">
                    <nCheckbox
                        v-for="switchitem in switchitems"
                        :switches="true"
                        :key="switchitem.id"
                        :value="switchitem.value"
                        :id="switchitem.id"
                        :name="switchitem.name"
                        :disabled="switchitem.disabled"
                        :checked="switchitem.checked"
                        v-model="switchresult1">
                        {{switchitem.label}}
                    </nCheckbox>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ switchresult1 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Right Switch" message="Turning on / off for above settings" :class="'u-margin-bottom-xxs'">
                    <nCheckbox
                        v-for="switchoption in switchoptions"
                        :switches="true"
                        :switchRight="true"
                        :key="switchoption.id"
                        :value="switchoption.value"
                        :id="switchoption.id"
                        :name="switchoption.name"
                        :disabled="switchoption.disabled"
                        :checked="switchoption.checked"
                        v-model="switchresult2">
                        {{switchoption.label}}
                    </nCheckbox>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ switchresult2 }}
                </div>
            </div>
        </div>

        <h4 class="u-margin-top-xl">File Upload</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="File Upload" message="Please upload your file" :class="'u-margin-bottom-xxs'">
                    <nFileUpload v-model="fileupload"/>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ fileupload }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Error state" message="Please upload your file" :invalid="true" :class="'u-margin-bottom-xxs'">
                    <nFileUpload v-model="fileupload1"/>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ fileupload1 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Disabled state" message="Please upload your file" :class="'u-margin-bottom-xxs'">
                    <nFileUpload
                        disabled
                        v-model="fileupload2"
                    />
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ fileupload2 }}
                </div>
            </div>
        </div>

        <h4 class="u-margin-top-xl">Input with button</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormField label="Label" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInputBtn v-model="inputbtnresult">
                        <Button variant="secondary">Button</Button>
                    </nInputBtn>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ inputbtnresult }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormField label="Error State" message="Message here" invalid :class="'u-margin-bottom-xxs'">
                    <nInputBtn v-model="inputbtnresult1">
                        <Button variant="secondary">Button</Button>
                    </nInputBtn>
                </FormField>
                <div class="u-margin-bottom-lg">
                    {{ inputbtnresult1 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormField label="Disabled state" message="Message here" :class="'u-margin-bottom-xs'">
                    <nInputBtn disabled  v-model="inputbtnresult2">
                        <Button variant="secondary">Button</Button>
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
                <FormFieldFloat label="Label" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInput v-model="floatlabelresult" />
                </FormFieldFloat>
                <div class="u-margin-bottom-lg">
                    {{ floatlabelresult }}
                </div>
            </div>

            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormFieldFloat label="Error State" hint="Optional" invalid message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInput v-model="floatlabelresult1" />
                </FormFieldFloat>
                <div class="u-margin-bottom-lg">
                    {{ floatlabelresult1 }}
                </div>
            </div>

            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormFieldFloat label="Disabled State" hint="Optional" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInput disabled v-model="floatlabelresult2" />
                </FormFieldFloat>
                <div class="u-margin-bottom-lg">
                    {{ floatlabelresult2 }}
                </div>
            </div>

            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormFieldFloat label="label" message="Select your option" :class="'u-margin-bottom-xxs'">
                    <nSelect v-model="floatlabelselectresult"  emptyPlaceholder >
                        <option
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormFieldFloat>
                <div class="u-margin-bottom-lg">
                    {{ floatlabelselectresult }}
                </div>
            </div>

            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormFieldFloat label="Error State" invalid  message="Select your option" :class="'u-margin-bottom-xxs'">
                    <nSelect v-model="floatlabelselectresult1">
                        <option
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormFieldFloat>
                <div class="u-margin-bottom-lg">
                    {{ floatlabelselectresult1 }}
                </div>
            </div>

            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormFieldFloat label="Disabled state" message="Select your option" :class="'u-margin-bottom-xxs'">
                    <nSelect disabled emptyPlaceholder>
                        <option
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormFieldFloat>
            </div>


            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormFieldFloat label="Label" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInputBtn v-model="floatlabelinputbtnresult1">
                        <Button variant="secondary">Button</Button>
                    </nInputBtn>
                </FormFieldFloat>
                <div class="u-margin-bottom-lg">
                    {{ floatlabelinputbtnresult1 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormFieldFloat invalid label="Error State" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInputBtn v-model="floatlabelinputbtnresult2">
                        <Button variant="secondary">Button</Button>
                    </nInputBtn>
                </FormFieldFloat>
                <div class="u-margin-bottom-lg">
                    {{ floatlabelinputbtnresult2 }}
                </div>
            </div>
            <div class="o-grid__item  u-width-1/3  u-width-1@mobile">
                <FormFieldFloat label="Disabled State" message="Message here" :class="'u-margin-bottom-xxs'">
                    <nInputBtn disabled v-model="floatlabelinputbtnresult3">
                        <Button variant="secondary">Button</Button>
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
import "@nitro-ui/component-button";
import Button from "../../packages/component-button/src";
import FormField from "../../packages/component-form-field/src/index";
import FormFieldFloat from "../../packages/component-form-field-floatlabel/src/index";
import nInput from "../../packages/component-form-input/src/index";
import nTextarea from "../../packages/component-form-textarea/src/index";
import nSelect from "../../packages/component-form-select/src/index";
import nCheckbox from "../../packages/component-form-checkbox/src/index";
import nRadio from "../../packages/component-form-radio/src/index";
import nFileUpload from "../../packages/component-form-fileupload/src/index";
import nInputBtn from "../../packages/component-form-input-button/src/index";

export default {
    name: "FormPage",
    components: {
        FormField,
        FormFieldFloat,
        nInput,
        nTextarea,
        nSelect,
        nCheckbox,
        nRadio,
        nFileUpload,
        nInputBtn,
        Button
    },
    data() {
        return {
            input1: null,
            input2: null,
            input3: null,
            input4: null,
            input5: null,
            address: null,
            address2: null,
            select: null,
            select2: null,
            select3: null,
            select4: null,
            checkboxresult1: [],
            checkboxresult2: [],
            radioresult1: null,
            radioresult2: null,
            switchresult1: [],
            switchresult2: [],
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
                { value: '01', label: '01' },
                { value: '02', label: '02' },
                { value: '03', label: '03' }
            ],
            checkboxesitems:[
                { value: 'mickey', label: 'Mickey', id: '4', disabled: true, checked: 'checked'},
                { value: 'pooh', label: 'Pooh', id: '5', checked: 'checked'},
                { value: 'tiggar', label: 'Tiggar', id: '6'}
            ],
            checkboxes:[
                { value: 'mickey', label: 'Mickey', id: '10'},
                { value: 'pooh', label: 'Pooh', id: '11', checked: 'checked'},
                { value: 'tiggar', label: 'Tiggar', id: '12'}
            ],
            radioitems:[
                { value: 'jack', label: 'Jack', id: '7', name: 'staff', checked: 'checked'},
                { value: 'john', label: 'John', id: '8', name: 'staff'},
                { value: 'mike', label: 'Mike', id: '9', name: 'staff'}
            ],
            radios:[
                { value: 'jack', label: 'Jack', id: '13', name: 'name', disabled: true, checked: 'checked'},
                { value: 'john', label: 'John', id: '14', name: 'name'},
                { value: 'mike', label: 'Mike', id: '15', name: 'name'}
            ],
            switchitems:[
                { value: 'apple', label: 'Apple', id: '16', name: 'fruits', checked: 'checked'},
                { value: 'orange', label: 'Orange', id: '17', name: 'fruits'},
                { value: 'honeydew', label: 'Honeydew', id: '18', name: 'fruits'}
            ],
            switchoptions:[
                { value: 'allow', label: 'Allow Notification', id: '19', name: 'switch', checked: 'checked'},
                { value: 'show', label: 'Show on Lock Screen', id: '20', name: 'switch'},
                { value: 'banner', label: 'Show as Banner', id: '21', name: 'switch'}
            ],
        };
    }
};
</script>
