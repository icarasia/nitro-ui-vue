<template>
    <a href="#" class="c-btn c-btn--primary" :class="classNameUtilitySpaces">
        <slot></slot>
    </a>
</template>

<script>
    import '@nitro-ui/component-button';
    import Spaces from '../../utility-spaces/src/mixins/Spaces';

    export default {
        name: 'Button',
        props: {
            title: String,
        },
        mixins: [ Spaces ]
    };
</script>
