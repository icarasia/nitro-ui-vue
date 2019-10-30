<template>
    <div class="c-sidebar c-drawer c-drawer--left">
        <div class="c-drawer__content u-bg-haze-light u-flex u-flex--justify-between u-flex--column u-shadow-1dp">
            <div class="c-sidebar__top-menu">
                <a href="#" class="c-sidebar__hamburger  u-padding-top-md  u-flex  u-flex--justify-center">
                    Open
                </a>

                <a href="#" class="c-sidebar__close  u-padding-ends-sm  u-padding-left-lg  u-hidden">
                    Close
                </a>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import "@nitro-ui/component-drawer";
    import "@nitro-ui/component-collapse";
    import "@nitro-ui/component-avatar";
    import "@nitro-ui/object-container";
    import "@nitro-ui/object-list";
    import "@nitro-ui/utility";
    import "@nitro-ui/module-dashboard-sidebar";

    export default {
        name: "ModuleDashboardSidebar",
        methods
    };
</script>
