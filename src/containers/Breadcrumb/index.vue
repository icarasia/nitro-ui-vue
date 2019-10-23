<template>
    <div>
        <div class="display-4">
            Breadcrumb
        </div>
        <div class="text-muted">
            Some awesome description about Breadcrumb.
        </div>
        <div class="u-margin-top-md">
            <breadcrumb :items="items"></breadcrumb>
        </div>
    </div>
</template>

<script>
import Breadcrumb from "../../packages/component-breadcrumb/src";

export default {
    name: "BreadcrumbPage",
    components: {
        Breadcrumb
    },
    data() {
        return {
            items: [
                { label: "First", href: "http://www.google.com" },
                { label: "Second", to: { name: "chips" } },
                { label: "Third" }
            ]
        };
    }
};
</script>
