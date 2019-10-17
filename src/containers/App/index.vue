<template>
    <div id="app">
        <app-header></app-header>
        <div class="container app-body">
            <router-view class="view"></router-view>
        </div>
    </div>
</template>

<style src="bootstrap/dist/css/bootstrap.min.css"></style>

<script>

import AppHeader from '../../components/AppHeader';

export default {
    name: 'App',
    components: { AppHeader }
}
</script>
