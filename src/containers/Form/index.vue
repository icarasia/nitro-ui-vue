<template>
    <div>
        <div class="display-4"></div>
        <div class="text-muted">
            Some awesome description about Form.
        </div>
        <div class="u-margin-top-md">
            <h4>Text input</h4>
            <FormField label="First Name" invalid message="Help message" hint="Optional">
                <nInput placeholder="Your first name" v-model="first_name" />
            </FormField>
            {{ first_name }}
        </div>

        <div class="u-margin-top-md">
            <h4>Textarea</h4>
            <FormField label="Address" message="Key in your full address">
                <nTextarea placeholder="Your first name" v-model="address" />
            </FormField>
            {{ address }}
        </div>

        <div class="u-margin-top-md">
            <h4>Select</h4>
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

        <div class="u-margin-top-md">
            <h4>Checkbox</h4>
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


        <div class="u-margin-top-md">
            <h4>Radio</h4>
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
</template>

<script>
import FormField from "../../packages/component-form-field/src/index";
import nInput from "../../packages/component-form-input/src/index";
import nTextarea from "../../packages/component-form-textarea/src/index";
import nSelect from "../../packages/component-form-select/src/index";
import nCheckbox from "../../packages/component-form-checkbox/src/index";
import nRadio from "../../packages/component-form-radio/src/index";

export default {
    name: "FormPage",
    components: {
        FormField,
        nInput,
        nTextarea,
        nSelect,
        nCheckbox,
        nRadio
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
            checkboxes:[
                { value: 'mickey', label: 'Mickey', id: '10'},
                { value: 'pooh', label: 'Pooh', id: '11'},
                { value: 'tiggar', label: 'Tiggar', id: '12'}
            ],
            checkboxesitems:[
                { value: 'mickey', label: 'Mickey', id: '4'},
                { value: 'pooh', label: 'Pooh', id: '5'},
                { value: 'tiggar', label: 'Tiggar', id: '6'}
            ],
            radioitems:[
                { value: 'jack', label: 'Jack', id: '7', name: 'lala'},
                { value: 'john', label: 'John', id: '8', name: 'lala'},
                { value: 'mike', label: 'Mike', id: '9', name: 'lala'}
            ],
            radios:[
                { value: 'jack', label: 'Jack', id: '13', name: 'lala'},
                { value: 'john', label: 'John', id: '14', name: 'lala'},
                { value: 'mike', label: 'Mike', id: '15', name: 'lala'}
            ],
        };
    }
};
</script>
