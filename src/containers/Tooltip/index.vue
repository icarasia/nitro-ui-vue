<template>
    <div>
        <div class="display-4">
            Tooltip
        </div>
        <div class="text-muted">
            Some awesome description about Tooltip.
        </div>
        <div class="u-margin-top-md">
            <div style="text-align: center">
                <button v-tooltip="'Up tooltip'">Up</button>
            </div>
            <div style="text-align: center">
                <br />
                <button
                    v-tooltip="{ text: 'Down tooltip', position: 'bottom' }"
                >
                    Down
                </button>
            </div>
            <div>
                <button
                    v-tooltip="{ text: 'Left tooltip', position: 'left' }"
                    style="float: left"
                >
                    Left
                </button>
                <button
                    v-tooltip="{ text: 'Right tooltip', position: 'right' }"
                    style="float: right"
                >
                    Right
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TooltipPage"
};
</script>

<style>
@import "~@nitro-ui/component-tooltip";
</style>
