<template>
    <div>
        <div class="display-4">
            Sidebar
        </div>

        <sidebar :menuItems="menuItems"
                 menu-open-icon="fas fa-bars"
                 menu-close-icon="fas fa-angle-left"
                 :user-info="userInfo"
                 minimized
        >
            <template v-slot:footer>
                <img src="/images/logos/default/logo_icarsuite_default.svg" width="106.11" height="16" class="u-margin-bottom-sm"/>
                <div class="c-copyright  u-text-8  u-color-muted">Copyright © 2019 iCar Asia Sdn Bhd. </div>
            </template>
        </sidebar>
    </div>
</template>

<script>
    import Sidebar from '../../packages/component-sidebar/src';
    export default {
        components : {Sidebar},
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
                ]
            }
        },
        created() {
            this.$on('logout', function () {
                console.log(123);
            });

            this.$on('changeLanguage', function (language) {
                console.log(language);
            })
        }
    }
</script>

<style scoped>

</style>