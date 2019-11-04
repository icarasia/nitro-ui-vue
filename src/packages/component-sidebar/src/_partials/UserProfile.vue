<template>
    <div
        class="c-sidebar__profile  u-padding-sides-lg  u-padding-bottom-lg  u-padding-top-none"
        :class="{ 'u-hidden': !show && userInfo }"
        v-if="userInfo"
    >
        <a class="u-flex  u-flex--items-center  no--underline" href="#">
            <div class="c-avatar  c-avatar--64px  u-margin-right-sm">
                <avatar :src="userInfo.avatar" size="64"></avatar>
            </div>
            <div>
                <div class="c-sidebar__profile-name  u-text-semibold">
                    {{ userInfo.name }}
                </div>
                <div class="u-text-7  u-color-muted">
                    {{ userInfo.role }}
                </div>
            </div>
        </a>
    </div>
</template>
<script>
import Avatar from "../../../component-avatar/src";

export default {
    name: "UserProfile",
    components: { Avatar },
    props: {
        show: {},
        userInfo: {}
    }
};
</script>
