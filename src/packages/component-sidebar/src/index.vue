<template>
    <section>
        <drawer :shown.sync="show"
                class="c-sidebar" position="left"
        >
            <div class="c-sidebar__top-menu">
                <i class="c-sidebar__hamburger  u-padding-top-md  u-flex  u-flex--justify-center  js-sidebar-menu-btn c-pointer"
                   :class="{[menuOpenIcon] : menuOpenIcon}"
                   role="button"
                   @click.prevent="openSidebar"></i>

                <i class="c-sidebar__close  u-padding-ends-sm  u-padding-left-lg  u-hidden  js-menu-close c-pointer"
                   :class="{[menuCloseIcon] : menuCloseIcon}"
                   @click.prevent="minimizeSidebar"></i>


                <div class="c-sidebar__profile  u-padding-sides-lg  u-padding-bottom-lg  u-padding-top-none  u-hidden">
                    <a class="u-flex  u-flex--items-center  no--underline" href="#">
                        <div class="c-avatar  c-avatar--64px  u-margin-right-sm">
                            <avatar :src="userInfo.avatar" size="64"></avatar>
                        </div>
                        <div>
                            <div class="c-sidebar__profile-name  u-text-semibold">{{ userInfo.name }}</div>
                            <div class="u-text-7  u-color-muted">{{ userInfo.role }}</div>
                        </div>
                    </a>
                </div>

                <ul class="c-drawer__menu  o-list  u-margin-bottom-xl  u-margin-top-lg  u-margin-top-none@mobile  u-padding-top-sm@mobile">
                    <list v-for="(menuItem, key) in topMenuItems"
                          :menu-item="menuItem"
                          :item-id="key"
                          link-class="u-color-white"
                          v-bind:top.sync="top"
                          v-bind:left.sync="left"
                          v-bind:index.sync="itemID"
                          :hovered-id="hoveredID"
                          :key="key"
                    ></list>
                </ul>
            </div>

            <div class="c-sidebar__bottom-menu">
                <ul class="c-drawer__menu  o-list  u-padding-ends-sm  u-hidden@tablet-desktop">
                    <list v-for="(menuItem, key) in bottomMenuItems"
                          :menu-item="menuItem"
                          link-class="u-color-base"
                          :item-id="(key + topMenuItems.length)"
                          v-bind:index.sync="itemID"
                          :hovered-id="hoveredID"
                          :key="key"
                    ></list>
                </ul>

                <div class="c-sidebar__footer  u-padding-sides-lg  u-padding-ends-lg  u-hidden">
                    <slot name="footer"></slot>
                </div>
            </div>
        </drawer>

        <!-- Floating Menu Start Here-->
        <div class="u-hidden@mobile">
            <list-floating  v-for="(menuItem, key) in topMenuItems"
                            :menu-item="menuItem"
                            :index="key"
                            :top="top"
                            :left="left"
                            v-bind:hovered.sync="hoveredID"
                            :key="key"
                            :item-id="itemID"></list-floating>
        </div>
        <!-- Floating Menu End Here-->
    </section>
</template>

<script>
    import Drawer from '../../component-drawer/src'
    import Avatar from '../../component-avatar/src';

    import "@nitro-ui/component-drawer";
    import "@nitro-ui/utility-display";
    import "@nitro-ui/object-list";
    import "@nitro-ui/utility-flex";
    import "@nitro-ui/utility-text"
    import "@nitro-ui/utility-position"
    import "@nitro-ui/module-dashboard-sidebar";

    import List from './_partials/_list';
    import ListFloating from './_partials/_listFloating';

    export default {
        components : { Drawer, List, Avatar, ListFloating },
        props : {
            menuItems : {
                type : Array,
                required : false
            },
            menuOpenIcon : {
                type : String,
                required : false,
                default : ''
            },
            menuCloseIcon : {
                type : String,
                required : false,
                default : ''
            },
            userInfo : {
                type : Object,
                required : false,
                default : ''
            },
            minimized : {
                type : Boolean,
                required : false,
                default : true
            }
        },
        data() {
            return {
                show : true,
                top : 0,
                left:0,
                itemID : null,
                hoveredID : null,
                isOpenedSidebar : false
            }
        },
        methods : {
            openSidebar() {
                this.$emit('sidebarOpened');
                document.body.classList.add('modal-open');
                this.show = true;
                this.isOpenedSidebar = true;
            },
            minimizeSidebar() {
                this.$emit('sidebarClosed');
                document.body.classList.remove('modal-open');
                this.show = false;
                this.isOpenedSidebar = false;
            },
        },
        mounted() {
            this.$parent.$on('sidebarOpen',  () => {
                this.openSidebar();
            });
            if(this.minimized) this.minimizeSidebar();
            this.isOpenedSidebar = !this.minimized;
        },
        computed : {
            topMenuItems() {
                return this.menuItems.filter((item) => !item.bottom);
            },
            bottomMenuItems() {
                return this.menuItems.filter((item) => item.bottom);
            }
        },
        watch : {
            show : function (newVal) {
                if(!newVal) this.$emit('sidebarClosed');
            }
        }
    }
</script>

<style scoped>
    .c-pointer{
        cursor: pointer;
    }
</style>