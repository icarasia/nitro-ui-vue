<template>
    <div class="c-btn-group" :class="{ 'c-btn-group--full': full }">
        <slot></slot>
    </div>
</template>

<script>
import "@nitro-ui/component-button";

export default {
    name: "ButtonGroup",
    props: {
        full: Boolean
    }
};
</script>
