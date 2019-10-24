<template>
    <a v-if="href" :href="href" :target="target">
        <template v-if="label">{{ label }}</template>
        <slot v-else></slot>
    </a>
    <router-link :to="to" v-else-if="to" :target="target">
        <template v-if="label">{{ label }}</template>
        <slot v-else></slot>
    </router-link>
    <a v-else>
        <template v-if="label">{{ label }}</template>
        <slot v-else></slot>
    </a>
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
