<template>
    <div>
        <div class="display-4">
            Button
        </div>
        <div class="text-muted">
            Some awesome description about Button.
        </div>
        <div class="">
            <Button marginTop="md">Nitro Button</Button>
        </div>
    </div>
</template>

<script>

import Button from '../../packages/component-button/src';

export default {
    name: 'ButtonPage',
    components: {
        Button
    }
}
</script>
