<template>
    <div
        class="c-dropdown"
        :class="classes"
        @click="isOpen = !isOpen"
        v-on-clickaway="close"
    >
        <a
            href="#"
            class="c-dropdown__control"
            :data-toggle="toggleable ? 'dropdown' : ''"
            >{{ title }}</a
        >
        <div class="c-dropdown__base">
            <with-root :showIf="isMega">
                <div class="c-dropdown__mega">
                    <div
                        class="c-dropdown__menu"
                        v-for="(all_items, index) in isMega ? items : [items]"
                        :key="index"
                    >
                        <Dropdown-menu
                            v-for="(item, index) in all_items"
                            :index="index"
                            :item="item"
                            :key="index"
                        />
                    </div>
                </div>
            </with-root>
        </div>
    </div>
</template>

<script>
import "@nitro-ui/component-dropdown";
import Spaces from "../../utility-spaces/src/mixins/Spaces";
import DropdownMenu from "./DropdownMenu";
import WithRoot from "../../../helpers/with-root";
import { mixin as clickaway } from "vue-clickaway";

export default {
    name: "Dropdown",
    components: { WithRoot, DropdownMenu },
    props: {
        title: String,
        position: { type: String, default: "" },
        toggleable: {
            type: Boolean,
            default: false
        },
        items: Array
    },
    data() {
        return {
            isOpen: false
        };
    },
    mixins: [Spaces, clickaway],
    computed: {
        classes() {
            return [
                ...this.classNameUtilitySpaces,
                this.position ? `c-dropdown--${this.position}` : "",
                { "is--open": this.toggleable && this.isOpen }
            ];
        },
        isMega() {
            return this.items.length > 0 && Array.isArray(this.items[0]);
        }
    },
    methods: {
        close: function() {
            this.isOpen = false;
        }
    }
};
</script>
