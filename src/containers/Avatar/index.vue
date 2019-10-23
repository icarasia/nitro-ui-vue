<template>
    <div>
        <div class="display-4">
            Avatar
        </div>
        <div class="text-muted">
            Some awesome description about Avatar.
        </div>
        <div class="u-margin-top-md">
            Normal and Square
            <div style="display: flex" class="u-margin-top-md">
                <avatar
                    alt="ALT"
                    initial="Test"
                    src="/images/avatar-1.png"
                    marginRight="md"
                ></avatar>
                <avatar
                    alt="ALT"
                    initial="Test"
                    src="/images/avatar-1.png"
                    square
                ></avatar>
            </div>
        </div>
        <div class="u-margin-top-md">
            Sizes
            <div style="display: flex" class="u-margin-top-md">
                <avatar
                    alt="ALT"
                    initial="Test"
                    src="/images/avatar-1.png"
                    marginRight="md"
                    size="24"
                    square
                ></avatar>
                <avatar
                    alt="ALT"
                    initial="Test"
                    src="/images/avatar-2.png"
                    marginRight="md"
                ></avatar>
                <avatar
                    alt="ALT"
                    initial="Test"
                    src="/images/avatar-1.png"
                    marginRight="md"
                    size="64"
                    square
                ></avatar>
                <avatar
                    alt="ALT"
                    initial="Test"
                    src="/images/avatar-2.png"
                    marginRight="md"
                    size="128"
                ></avatar>
            </div>
        </div>
        <div class="u-margin-top-md">
            With text, no images
            <div style="display: flex" class="u-margin-top-md">
                <avatar initial="AB" marginRight="md" size="24" square></avatar>
                <avatar initial="CD" marginRight="md"></avatar>
                <avatar initial="ED" marginRight="md" size="64" square></avatar>
                <avatar initial="GH" marginRight="md" size="128"></avatar>
            </div>
        </div>
    </div>
</template>

<script>
import Avatar from "../../packages/component-avatar/src/index";

export default {
    name: "TooltipPage",
    components: {
        Avatar
    },
    data() {
        return {
            // variants: ['blue','blue-light','green','orange','pink','purple','red','yellow']
        };
    }
};
</script>
