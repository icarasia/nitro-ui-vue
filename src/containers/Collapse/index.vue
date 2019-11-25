<template>
    <div>
        <div class="display-4">
            Collapse
        </div>
        <div class="text-muted  u-margin-bottom-xl">
            Some awesome description about.
        </div>

        <h4 class="u-margin-top-xl"> Collapse </h4>
        <Collapse :open="false" aria-id="accordion1" :class="`u-margin-bottom-xl`">
            <niButton
                variant="primary"
                slot="trigger"
                aria-controls="accordion1">
                Show accordion1
            </niButton>
            <Card :class="`u-margin-top-sm`">
                Content accordion1
            </Card>
        </Collapse>

        <Collapse :open="true" aria-id="accordion2" :class="`u-margin-bottom-xl`">
            <niLink
                href="#"
                variant="primary"
                slot="trigger"
                aria-controls="accordion2">
                Show accordion2
            </niLink>
            <Card :class="`u-margin-top-sm`">
                Content accordion2
            </Card>
        </Collapse>

        <h4 class="u-margin-top-xl"> Accordian </h4>
        <Collapse
            v-for="(collapse, index) of collapses"
            :key="index"
            :open="isOpen == index"
            @open="isOpen = index"
            :class="'c-card'"
            accordion
            >
            <niLink
                slot="trigger"
                slot-scope="iconClass"
                role="button">
                    <div class="c-accordion__head  u-flex  u-flex--justify-between">
                        <div>{{ collapse.title }}</div>
                        <NitroIcon :name="iconClass.open ? 'navigation/chevron-up' : 'navigation/chevron-down'" size="s"></NitroIcon>
                        <!-- <div :class="iconClass.open ? 'menu-down' : 'menu-up'">></div> -->
                    </div>
            </niLink>
            <div class="c-accordion__body">
                {{ collapse.text }}
            </div>
        </Collapse>
    </div>
</template>

<script>
import "@nitro-ui/utility-spacing";
import "@nitro-ui/utility-flex";
import "@nitro-ui/component-card";
import niButton from "../../packages/component-button/src/index";
import niLink from "../../packages/component-link/src/index";
import Collapse from "../../packages/component-collapse/src/index";
import Card from "../../packages/component-card/src/index";
export default {
    name: "CollapsePage",
    components: {
        Collapse,
        niButton,
        niLink,
        Card
    },
    data() {
        return {
            isOpen: 0,
            collapses: [
                {
                    title: 'Title 1',
                    text: 'Content for title 1'
                },
                {
                    title: 'Title 2',
                    text: 'Content for title 2'
                },
                {
                    title: 'Title 3',
                    text: 'Content for title 3'
                }
            ]
        }
    }
};
</script>
