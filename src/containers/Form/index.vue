<template>
    <div>
        <div class="display-4"></div>
        <div class="text-muted">
            Some awesome description about Form.
        </div>
        <div class="u-margin-top-md">
            <h4></h4>
            <TextInput></TextInput>
        </div>
    </div>
</template>

<script>
import TextInput from "../../packages/component-text-input/src";

export default {
    name: "Page",
    components: {
        TextInput
    },
    data() {
        return {};
    }
};
</script>
