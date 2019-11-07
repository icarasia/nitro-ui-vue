<template>
    <div>
        <div class="display-4">
            Popover
        </div>
        <div class="text-muted">
            Some awesome description about .
        </div>
        <div class="u-margin-top-md">
            <Popover>
                <template v-slot:label>
                    <Chip name="label" variant="blue">Hover</Chip>
                </template>
                lala
            </Popover>
        </div>
    </div>
</template>

<script>
import Popover from "../../packages/component-popover/src/index";
import Chip from "../../packages/component-chip/src/index";
// import PopoverContainer from "../../packages/component-popover/src/PopoverContainer";

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
