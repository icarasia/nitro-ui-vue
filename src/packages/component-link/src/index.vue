<template>
    <a v-if="href" :href="href" :target="target">{{ label }}</a>
    <router-link :to="to" v-else-if="to" :target="target">{{
        label
    }}</router-link>
    <a v-else>{{ label }}</a>
</template>

<script>
export default {
    name: "Link",
    props: {
        href: {
            type: String,
            default: null
        },
        target: {
            type: String,
            default: null
        },
        label: String,
        to: {
            type: [Object, String],
            default: null
        }
    }
};
</script>
