<template>
    <div>
        <div class="display-4">
            Collapse
        </div>
        <div class="text-muted">
            Some awesome description about .
        </div>
        <Collapse :open="false" aria-id="contentIdForA11y1">
            <niButton
                variant="primary"
                slot="trigger"
                aria-controls="contentIdForA11y1">
                Click me!
            </niButton>
            <div class="notification">
                <div class="content">
                    <h3>
                        Subtitle
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>
                        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. <br/>
                        Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
                    </p>
                </div>
            </div>
        </Collapse>
    </div>
</template>

<script>
import "@nitro-ui/utility-flex";
import niButton from "../../packages/component-button/src/index";
import Collapse from "../../packages/component-collapse/src/index";

export default {
    name: "CollapsePage",
    components: {
        niButton,
        Collapse
    }
};
</script>
