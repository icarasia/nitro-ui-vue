<template>
    <div>
        <div class="display-4">
            Popover
        </div>
        <div class="text-muted">
            Some awesome description about .
        </div>
        <div class="u-flex  u-flex--justify-center  u-margin-top-md">
            <Popover>
                <template v-slot:label>
                    <Chip variant="blue">Top Popover</Chip>
                </template>
                Top Popover content
            </Popover>
        </div>
        <div class="u-flex  u-flex--justify-between  u-margin-top-md  u-width-1/2  u-margin-sides-auto">
            <Popover position="left">
                <template v-slot:label>
                    <Chip variant="blue">Left Popover</Chip>
                </template>
                Left Popover content
            </Popover>
            <Popover position="right">
                <template v-slot:label>
                    <Chip variant="blue">Right Popover</Chip>
                </template>
                Right Popover content
            </Popover>
        </div>
        <div class="u-flex  u-flex--justify-center  u-margin-top-md">
            <Popover position="bottom">
                <template v-slot:label>
                    <Chip variant="blue">Bottom Popover</Chip>
                </template>
                Bottom Popover content
            </Popover>
        </div>
    </div>
</template>

<script>
import "@nitro-ui/utility-flex";
import "@nitro-ui/utility-width";
import Popover from "../../packages/component-popover/src/index";
import Chip from "../../packages/component-chip/src/index";

export default {
    name: "PopoverPage",
    components: {
        Popover,
        Chip
    },
    data() {
        return {
        };
    }
};
</script>
