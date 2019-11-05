<template>
    <div>
        <div class="display-4"></div>
        <div class="text-muted">
            Some awesome description about Form.
        </div>
        <div class="u-margin-top-md  u-width-1/2  u-width-1@mobile">
            <h4>Text input</h4>
            <FormField label="First Name" invalid message="Help message" hint="Optional">
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
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormField>
                {{ select }}
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Select with first option" message="Select your option">
                    <nSelect v-model="select2">
                        <option
                            v-for="option in options"
                            :value="option.value">
                            {{ option.label }}
                        </option>
                    </nSelect>
                </FormField>
                {{ select2 }}
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Select with empty placeholder" message="Select your option">
                    <nSelect :emptyPlaceholder="true" v-model="select3">
                        <option
                            v-for="option in options"
                            :value="option.value">
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
                <FormField label="Default Checkbox" message="Please select your options">
                    <nCheckbox
                        v-for="checkboxesitem in checkboxesitems"
                        :key="checkboxesitem.id"
                        :value="checkboxesitem.value"
                        :id="checkboxesitem.id"
                        :name="checkboxesitem.name"
                        :disabled="checkboxesitem.disabled"
                        :checked="checkboxesitem.checked">
                        {{checkboxesitem.label}}
                    </nCheckbox>
                </FormField>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Inline Checkbox" message="Please select your options">
                    <div class="c-check-inline">
                        <nCheckbox
                            v-for="checkbox in checkboxes"
                            :key="checkbox.id"
                            :value="checkbox.value"
                            :id="checkbox.id"
                            :name="checkbox.name"
                            :disabled="checkbox.disabled"
                            :checked="checkbox.checked">
                            {{checkbox.label}}
                        </nCheckbox>
                    </div>
                </FormField>
            </div>
        </div>


        <h4>Radio</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Default Radio" message="Please select your options">
                    <nRadio
                        v-for="radioitem in radioitems"
                        :key="radioitem.id"
                        :value="radioitem.value"
                        :id="radioitem.id"
                        :name="radioitem.name"
                        :disabled="radioitem.disabled"
                        :checked="radioitem.checked">
                        {{radioitem.label}}
                    </nRadio>
                </FormField>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Inline Radio" message="Please select your options">
                    <div class="c-check-inline">
                        <nRadio
                            v-for="radio in radios"
                            :key="radio.id"
                            :value="radio.value"
                            :id="radio.id"
                            :name="radio.name"
                            :disabled="radio.disabled"
                            :checked="radio.checked">
                            {{radio.label}}
                        </nRadio>
                    </div>
                </FormField>
            </div>
        </div>

        <h4>Switch</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Default Switch" message="Please select your options">
                    <nCheckbox
                        v-for="switchitem in switchitems"
                        :switches="true"
                        :key="switchitem.id"
                        :value="switchitem.value"
                        :id="switchitem.id"
                        :name="switchitem.name"
                        :disabled="switchitem.disabled"
                        :checked="switchitem.checked">
                        {{switchitem.label}}
                    </nCheckbox>
                </FormField>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Right Switch" message="Please select your options">
                    <nCheckbox
                        v-for="switchoption in switchoptions"
                        :switches="true"
                        :switchRight="true"
                        :key="switchoption.id"
                        :value="switchoption.value"
                        :id="switchoption.id"
                        :name="switchoption.name"
                        :disabled="switchoption.disabled"
                        :checked="switchoption.checked">
                        {{switchoption.label}}
                    </nCheckbox>
                </FormField>
            </div>
        </div>

        <h4>File Upload</h4>
        <div class="o-grid  u-margin-top-md">
            <div class="o-grid__item  u-width-1/2  u-width-1@mobile">
                <FormField label="File Upload" message="Please upload your file">
                    <nFileUpload/>
                </FormField>
            </div>
            <div class="o-grid__item  u-width-1@mobile">
                <FormField label="Disabled state" message="Please upload your file">
                    <nFileUpload
                    :disabled="true"
                    />
                </FormField>
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
import nCheckbox from "../../packages/component-form-checkbox/src/index";
import nRadio from "../../packages/component-form-radio/src/index";
import nFileUpload from "../../packages/component-form-fileupload/src/index";

export default {
    name: "FormPage",
    components: {
        FormField,
        nInput,
        nTextarea,
        nSelect,
        nCheckbox,
        nRadio,
        nFileUpload
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
                { value: 'jack', label: 'Jack', id: '13', name: 'name', disabled: true},
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
