<template>
    <div class="c-field">
        <label>Example input</label>
        <input
            type="text"
            class="c-input"
            placeholder="example@placeholder.com"
        />
    </div>
</template>

<script>
import "@nitro-ui/component-form";
import Spaces from "../../utility-spaces/src/mixins/Spaces";

export default {
    name: "TextInput",
    props: {
        title: String,
        position: String
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [...this.classNameUtilitySpaces];
        }
    }
};
</script>
