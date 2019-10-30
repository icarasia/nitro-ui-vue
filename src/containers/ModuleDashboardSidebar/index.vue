<template>
    <nitro-sidebar>
        <div class="c-sidebar__profile  u-padding-sides-lg  u-padding-bottom-lg  u-padding-top-none  u-hidden">
            <a class="u-flex  u-flex--items-center  no--underline" href="#">
                <div class="c-avatar  c-avatar--64px  u-margin-right-sm">

                </div>
                <div>
                    <div class="c-sidebar__profile-name  u-text-semibold">
                        Jeremy Chong
                    </div>
                    <div class="u-text-7  u-color-muted">
                        Moderator
                    </div>
                </div>
            </a>
        </div>
    </nitro-sidebar>
</template>

<script>

import NitroSidebar from "../../packages/module-dashboard-sidebar/src";
import NitroSidebarToggle from "../../packages/module-dashboard-sidebar/src/Toggle";

export default {
    name: "ModuleDashboardSidebarPage",
    components: {
        NitroSidebar,
        NitroSidebarToggle
    }
};
</script>
