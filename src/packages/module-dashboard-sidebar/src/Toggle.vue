<template>
    <div class="c-sidebar__hamburger u-padding-top-md u-flex u-flex--justify-center">
        <slot></slot>
    </div>
</template>

<script>
    import "@nitro-ui/module-dashboard-sidebar";
    export default {
        name: "ModuleDashboardSidebarToggle"
    };
</script>
