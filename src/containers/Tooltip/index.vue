<template>
    <div>
        <div class="display-4">
            Tooltip
        </div>
        <div class="text-muted">
            Some awesome description about Tooltip.
        </div>
        <div class="u-margin-top-md">
            <Tooltip title="Up"><button>Up</button></Tooltip>
            <Tooltip position="bottom" title="Bottom"
                ><button>Bottom</button></Tooltip
            >
            <Tooltip position="left" title="Left"
                ><button>Left</button></Tooltip
            >
            <Tooltip position="right" title="Right"
                ><button>Right</button></Tooltip
            >
        </div>
    </div>
</template>

<script>
import Tooltip from "../../packages/component-tooltip/src";

export default {
    name: "TooltipPage",
    components: {
        Tooltip
    },
    data() {
        return {
            // variants: ['blue','blue-light','green','orange','pink','purple','red','yellow']
        };
    }
};
</script>
