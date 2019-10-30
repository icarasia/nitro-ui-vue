<template>
    <div>
        <app-header />
        <div class="container app-body" :class="{ full_container: routeName === 'grid' }">
            <slot />
        </div>
    </div>
</template>

<script>
    import AppHeader from "../components/AppHeader";
    export default {
        name: "LayoutDefault",
        components: { AppHeader },
        computed: {
            routeName() {
                return this.$route.name;
            }
        }
    };
</script>
