<template>
    <div
        class="c-toast  u-shadow-4dp"
        :class="classes"
        :id="id"
        data-autohide="false">
        <div class="c-toast__icon">
            <NitroIcon :name="iconName" size="24"></NitroIcon>
        </div>
        <div class="c-toast__body">
            <div class="c-toast__title" v-if="$slots.title">
                <slot name="title"></slot>
            </div>
            <slot/>
        </div>
        <button class="c-toast__close" :click="toggle">
            <NitroIcon name="action/close" size="16"></NitroIcon>
        </button>
    </div>
</template>

<script>
import "@nitro-ui/component-toast";

export default {
    name: "niToast",
    // components: {
    //   niArrow,
    //   niCard
    // },
    props: {
        variant: {
            type: String,
            default: 'info'
        },
        id: String,
        withIcon:{
            type: Boolean,
            default: true
        },
        show:{
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isShow: this.show
        }
    },
    watch: {
        show(value) {
            this.isShow = value
        }
    },
    computed: {
        classes() {
          return [
              this.variant ? `c-toast--${this.variant}` : "",
              this.show ? 'show' : 'hide'
          ];
        },
        iconName() {
            let iconName = "";
            if (this.variant == "info") {
            iconName = "response/info";
            } else if (this.variant == "tips") {
            iconName = "response/tips";
            } else if (this.variant == "success") {
            iconName = "action/check-circle";
            } else if (this.variant == "error") {
            iconName = "response/error";
            } else if (this.variant == "warning") {
            iconName = "response/warning";
            }
            return iconName;
        }
    },
    methods: {
        toggle() {
            this.isShow = !this.isShow
            this.$emit('update:show', this.isShow)
            this.$emit(this.isShow ? 'show' : 'close')
            console.log('click');
        }
    }
};
</script>
