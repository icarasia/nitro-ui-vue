<template>
    <li class="o-list__item" @mouseover="getPosition" @mouseleave="resetPosition"
        @click="$parent.$parent.isOpenedSidebar && (clickedId = (clickedId === itemId) ? null : itemId)">
        <a-link :to="(!menuItem.subItems || !menuItem.subItems.length) ? menuItem.to : null"
                class="u-flex  u-flex--items-center  u-flex--justify-center item-list"
                :class="{'is--active' : isActive}"
        >
            <div class="u-flex  u-flex--items-center"
                 @click="menuItem.callback && $parent.$parent.$emit(menuItem.callback, menuItem.callbackValue)"
            >
                <i :class="{[menuItem.icon] : menuItem.icon}"></i>
                <span class="c-sidebar__label  u-margin-left-sm  u-hidden">{{ menuItem.text }}</span>
            </div>
        </a-link>
        <ul class="c-collapse  collapse  o-list"
            v-if="menuItem.subItems && menuItem.subItems.length"
            :class="{'show' : clickedId}"
        >
            <li class="o-list__item" v-for="subItem in menuItem.subItems"
                @click="subItem.callback && $parent.$parent.$emit(subItem.callback, subItem.callbackValue)">
                <a-link :to="subItem.to"
                        :label="!subItem.useHtml ? subItem.text : ''"
                        class="u-opacity-4  u-relative  u-transition-default"
                        :class="{[linkClass] : linkClass}"
                >
                    <span v-if="subItem.useHtml" v-html="subItem.text"></span>
                </a-link>
            </li>
        </ul>
    </li>
</template>

<script>
    import aLink from '../../../component-link/src';

    export default {
        components : {aLink},
        props : {
            menuItem : {
                type : Object,
                required : true
            },
            linkClass : {
                type : String,
                required : false,
                default : ''
            },
            openedSidebar : {
                type : Boolean,
                required : false,
                default : null
            },
            itemId : {
                type : Number,
                required : false,
                default : null
            },
            hoveredId : {
                type : Number,
                required : false,
                default : null
            }
        },
        data() {
            return {
                clickedId : null
            }
        },
        created() {
            this.$parent.$parent.$on('sidebarClosed', () => {
                this.clickedId = null;
            })
        },
        methods : {
            getPosition($event) {
                this.$emit('update:top', $event.currentTarget.offsetTop);
                this.$emit('update:left', $event.currentTarget.offsetWidth);
                this.$emit('update:index', this.itemId);
            },
            resetPosition() {
                this.$emit('update:index', null);
            }
        },
        computed : {
            isActive : function () {
                return (this.hoveredId !== null && this.hoveredId === this.itemId)
                    || (this.clickedId !== null && this.clickedId === this.itemId);
            }
        }
    }
</script>

<style scoped>
    .item-list{
        height: 45px;
    }
</style>