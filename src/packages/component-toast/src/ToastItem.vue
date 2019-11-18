<template>
    <div class="c-toast  u-shadow-4dp" :class="classes">
        <div class="c-toast__icon" v-if="showIcon">
            <NitroIcon :name="iconName" size="24"></NitroIcon>
        </div>
        <div class="c-toast__body">
            <div class="c-toast__title" v-if="$slots.title">
                <slot name="title"></slot>
            </div>
            <slot/>
        </div>
      <a
        class="c-toast__close"
        @click="close"
        v-if="dismissable"
      >
        <NitroIcon name="action/close" size="16"></NitroIcon>
    </a>
    </div>
</template>

<script>
import "@nitro-ui/component-toast";

export default {
    name: "niToastItem",
    props: {
        type: {
            type: String,
            default: "info",
            validator: function(value) {
                return (
                    ["info", "tips", "success", "error", "warning"].indexOf(value) !== -1
                );
            }
        },
        dismissable: {
            type: Boolean,
            default: true
        },
        delay: {
            type: Boolean,
            default: false
        },
        autoDismiss: {
            type: Boolean,
            default: false
        },
        autoDismissDuration: {
            type: Number,
            default: 5000
        },
        showIcon: {
            type: Boolean,
            default: true
        },
        visible: {
            type: Boolean
        }
    },
    computed: {
        classes() {
            return [
              this.type ? `c-toast--${this.type}` : "",
              this.visible ? 'show' : 'hide'
            ];
        },
        iconName() {
            let iconName = "";
            if (this.type == "info") {
            iconName = "response/info";
            } else if (this.type == "tips") {
            iconName = "response/tips";
            } else if (this.type == "success") {
            iconName = "action/check-circle";
            } else if (this.type == "error") {
            iconName = "response/error";
            } else if (this.type == "warning") {
            iconName = "response/warning";
            }
            return iconName;
        }
    },
    methods: {
        close() {
            this.$emit('update:visible', false);
        }
    },
    watch: {
        visible: function() {
            if (this.autoDismiss && this.visible) {
                setTimeout(() => {
                  this.$emit("update:visible", false);
                }, this.autoDismissDuration);

                if(this.delay){
                    setTimeout(() => {
                      this.$emit("update:visible", false);
                    }, this.autoDismissDuration);
                }
            }
        }
    }
};
</script>
