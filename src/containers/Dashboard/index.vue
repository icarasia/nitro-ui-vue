<template>
    <dashboard :logo="logo"
               menu-open-icon="fas fa-bars"
    >
        <template v-slot:menu>
            <dropdown position="left"
                      title="EN"
                      :items="itemsLang"
                      :toggleable="true"
                      class="u-margin-left-lg u-hidden@mobile"
                      titleClass="u-color-base  u-text-unstyle"
            ></dropdown>
        </template>

        <template v-slot:right-menu>
            <aLink class="u-flex  u-flex--items-center  no--underline">
                <i class="fas fa-coins mr-2"></i>
                <div class="u-text-5  u-text-bold  u-color-dark">20,000</div>
            </aLink>

            <dropdown position="right"
                      title=""
                      :items="itemsNotification"
                      :iconTitle="'fas fa-bell'"
                      :toggleable="true"
                      class="u-margin-left-lg"
                      titleClass="u-color-base  u-text-unstyle"
            ></dropdown>

            <dropdown position="right"
                      title=""
                      :items="itemsProducts"
                      :iconTitle="'fas fa-random'"
                      :toggleable="true"
                      class="u-margin-left-lg u-hidden@mobile"
                      titleClass="u-color-base  u-text-unstyle"
            ></dropdown>

            <dropdown position="right"
                      title=""
                      :items="itemsAccount"
                      :iconTitle="'fas fa-random'"
                      :toggleable="true"
                      class="u-margin-left-lg u-hidden@mobile"
                      titleClass="u-color-base  u-text-unstyle"
            >
                <template v-slot:avatar>
                    <avatar :src="userInfo.avatar" size="32"></avatar>
                </template>
            </dropdown>
        </template>

        <template v-slot:sidebar >
            <sidebar :menuItems="menuItems"
                     menu-open-icon="fas fa-bars"
                     menu-close-icon="fas fa-angle-left"
                     :user-info="userInfo"
                     minimized
            >
                <template v-slot:footer>
                    <img src="/images/logos/default/logo_icarsuite_default.svg" width="106.11" height="16" class="u-margin-bottom-sm"/>
                    <div class="c-copyright  u-text-8 u-color-muted">Copyright © 2019 iCar Asia Sdn Bhd. </div>
                </template>
            </sidebar>
        </template>


        <h4>Dashboard</h4>
    </dashboard>
</template>

<script>
    import Sidebar from '../../packages/component-sidebar/src';
    import Dashboard from '../../packages/module-dashboard/src';
    import Dropdown from '../../packages/component-dropdown/src';
    import aLink from '../../packages/component-link/src';
    import Avatar from '../../packages/component-avatar/src';

    export default {
        components : { Sidebar, Dashboard, Dropdown, aLink, Avatar },
        data()  {
            return {
                userInfo  : {
                    avatar : '/images/avatar/avatar1.jpg',
                    name  : 'Test User',
                    role  : 'moderator'
                },
                menuItems : [
                    {text : 'Dashboard', icon : 'fas fa-home', to : '/'},
                    {text : 'Listing',   icon : 'far fa-list-alt', to : '/'},
                    {text : 'Moderation',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'Bulk Upload',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'Bulk Removal',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'User Management',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'Report',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'lala6',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'lala7',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'lala8',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'lala9',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'lala10',icon : 'fas fa-users-cog', to : null,
                        subItems : [
                            { text: "Pre Moderation", to: '/',},
                            { text: "Post Moderation", to: '/'},
                            { text: "Pre Video Moderation", to: '/'},
                            { text: "Vehicle Approval", to: '/'},
                        ]
                    },
                    {text : 'Language', icon : 'fas fa-language', to : '/', bottom : true,
                        subItems : [
                            { text: "English", to: null, callback : 'changeLanguage', callbackValue : 'en'},
                            { text: "ภาษาไทย", to: null,    callback : 'changeLanguage', callbackValue : 'th'},
                            { text: "中文",  to: null,    callback : 'changeLanguage', callbackValue : 'th'},
                            { text: "Bahasa Indonesia", to: null, callbackValue : 'id', callback : 'changeLanguage',},
                            { text: "Bahasa Malaysia",  to: null, callbackValue : 'my', callback : 'changeLanguage',},
                        ]
                    },
                    {text : 'Switch to...', icon : 'fas fa-random', to : '/', bottom : true,
                        subItems : [
                            { text: '<img src="/images/logos/default/logo_dealership_default.svg" class="u-flex" height="18"/>', to: null, useHtml : true},
                            { text: '<img src="/images/logos/default/logo_bid_default.svg" class="u-flex" height="18"/>', to: null, useHtml : true},
                            { text: '<img src="/images/logos/default/logo_leads_default.svg" class="u-flex" height="18"/>',  to: null, useHtml : true   },
                            { text: '<img src="/images/logos/default/logo_data_default.svg" class="u-flex" height="18"/>', to: null,  useHtml : true},
                        ]
                    },
                    {text : 'Settings', icon : 'fas fa-cogs', to : '/', bottom : true},
                    {text : 'Log out',  icon : 'fas fa-sign-out-alt', to : null, bottom : true, callback : 'logout'},
                ],
                logo : {
                    to : '/',
                    src : '/images/logos/default/logo_icarsuite_default.svg',
                    mobileSrc : '/images/logos/default/logo_icarsuite_default_without_text.svg',
                    name : 'iCarSuite'
                },
                itemsLang : [
                    { title : "English", to: null},
                    { title : "ภาษาไทย", to: null},
                    { title : "中文",  to: null},
                    { title : "Bahasa Indonesia"},
                    { title : "Bahasa Malaysia"},
                ],
                itemsNotification : [
                    { title : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", to: null},
                    { title : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", to: null},
                    { title : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", to: null},
                    { title : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", to: null},
                    { title : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", to: null},
                    { title : " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.", to: null},
                ],
                itemsProducts : [
                    { title: '<img src="/images/logos/default/logo_dealership_default.svg" class="u-flex" height="18"/>', to: null, useHtml : true},
                    { title: '<img src="/images/logos/default/logo_bid_default.svg" class="u-flex" height="18"/>', to: null, useHtml : true},
                    { title: '<img src="/images/logos/default/logo_leads_default.svg" class="u-flex" height="18"/>',  to: null, useHtml : true   },
                    { title: '<img src="/images/logos/default/logo_data_default.svg" class="u-flex" height="18"/>', to: null,  useHtml : true},
                ],
                itemsAccount : [
                    { title : "<i class='fas fa-user-alt'></i> Profile", to: null, useHtml : true},
                    { title : "<i class='fas fa-cog'></i> Settings", to: null, useHtml : true},
                    { title : "<i class='fas fa-sign-out-alt'></i> Log Out", to: null, useHtml : true},
                ]
            }
        },
    }
</script>

<style scoped>

</style>