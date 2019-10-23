<template>
    <ul class="c-breadcrumb" :class="classes">
        <li v-for="(item, index) in items" :key="index">
            <Link
                :label="item.label"
                :target="item.target"
                :to="item.to"
                :href="item.href"
            ></Link>
        </li>
    </ul>
</template>

<script>
import "@nitro-ui/component-breadcrumb";
import Spaces from "../../utility-spaces/src/mixins/Spaces";
import Link from "../../component-link/src/index";

export default {
    name: "Breadcrumb",
    components: { Link },
    props: {
        items: Array
    },
    mixins: [Spaces],
    computed: {
        classes() {
            return [...this.classNameUtilitySpaces];
        }
    }
};
</script>
