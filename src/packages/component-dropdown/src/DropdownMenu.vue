<template>
    <div v-if="item.is_head" class="c-dropdown__heading">
        {{ item.title }}
    </div>
    <div
        :key="index"
        v-else-if="item.is_divider"
        class="c-dropdown__divider"
    ></div>
    <aLink
        :key="index"
        v-else
        class="c-dropdown__item"
        :target="item.target"
        :href="item.href"
        :to="item.to"
    >
        {{ item.title }}
    </aLink>
</template>

<script>
import "@nitro-ui/component-dropdown";
import ALink from "../../component-link/src/index";

export default {
    name: "Dropdown-menu",
    components: { ALink },
    props: {
        index: {},
        item: {}
    }
};
</script>
