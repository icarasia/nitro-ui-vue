<template>
    <div id="app">
        <component :is="layout">
            <router-view class="view"></router-view>
        </component>
    </div>
</template>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>

<script>
import "bootstrap";
import AppHeader from "../../components/AppHeader";

const defaultLayout = "default";

export default {
    name: "App",
    components: { AppHeader },
    computed: {
        routeName() {
            return this.$route.name;
        },
        layout() {
            return 'layout-' + (this.$route.meta.layout || defaultLayout);
        }
    },
    created() {
        // nothing defined here (when this.$route.path is other than "/")
        console.log( this.$route, this.$route.meta.layout );
    },
    updated() {
        // something defined here whatever the this.$route.path
        console.log( this.$route, this.$route.meta.layout );
    }
};
</script>

<style>
.full_container {
    max-width: 100%;
}
</style>
