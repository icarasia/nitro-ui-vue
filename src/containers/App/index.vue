<template>
    <div id="app">
        <app-header v-if="routeName !== 'dashboard'"></app-header>
        <div
            class="container app-body"
            :class="{ full_container: ['grid', 'dashboard'].indexOf(routeName) !== -1, 'u-padding-none' : routeName === 'dashboard' }"
        >
            <router-view class="view"></router-view>
        </div>
    </div>
</template>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>

<script>
import AppHeader from "../../components/AppHeader";

export default {
    name: "App",
    components: { AppHeader },
    computed: {
        routeName() {
            return this.$route.name;
        }
    }
};
</script>

<style>
.full_container {
    max-width: 100%;
}
</style>
