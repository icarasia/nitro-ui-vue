<template>
    <main>
        <nav class="c-header  u-bg-white  u-shadow-1dp">
            <div class="o-container  u-flex  u-flex--justify-between  u-flex--items-center  u-height-100">
                <i class="u-flex  u-flex--items-center  u-margin-right-lg  no--underline  u-hidden@tablet-desktop  u-hidden@desktop c-pointer"
                   :class="{[menuOpenIcon] : menuOpenIcon}"
                   role="button"
                   @click.prevent="$emit('sidebarOpen')"></i>

                <a-link :to="logo.to" class="u-margin-right-auto@mobile">
                    <img :src="logo.src" width="187" height="28" :alt="logo.name"  class="u-block  u-hidden@mobile">
                    <img :src="logo.mobileSrc"  width="42.22" height="35" :alt="logo.name"  class="u-block  u-hidden@tablet-desktop">
                </a-link>

                <slot name="menu"></slot>

                <div class="u-flex  u-flex--items-center  u-margin-left-auto  u-margin-none@mobile">
                    <slot name="right-menu"></slot>
                </div>
            </div>
        </nav>


        <slot name="sidebar"></slot>


        <slot></slot>
    </main>
</template>

<script>
    import '@nitro-ui/object-container';
    import '@nitro-ui/utility-background';
    import '@nitro-ui/object-list';
    import '@nitro-ui/utility-display';
    import '@nitro-ui/utility-flex';
    import '@nitro-ui/utility-height';
    import '@nitro-ui/utility-spacing';
    import '@nitro-ui/utility-text';
    import '@nitro-ui/utility-text';
    import '@nitro-ui/utility-position';
    import '@nitro-ui/utility-opacity';
    import '@nitro-ui/utility-overflow';
    import '@nitro-ui/utility-shadow';
    import '@nitro-ui/utility-transition';
    import '@nitro-ui/module-dashboard-toolbar';
    import aLink from '../../component-link/src/index';

    export default {
        components : { aLink },
        props : {
            logo : {
                type : Object,
                required : false,
                default: {}
            },
            menuOpenIcon : {
                type : String,
                required : false,
                default : ''
            }
        },
        mounted() {

        }
    }
</script>


<style scoped>
    .c-pointer{
        cursor: pointer;
    }
</style>