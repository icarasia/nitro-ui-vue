<template>
  <a v-if="href" :href="href" :target="target" v-on="$listeners">
    <template v-if="label">{{ label }}</template>
    <slot v-else></slot>
  </a>
  <router-link
    :to="to"
    v-else-if="to"
    :target="target"
    v-on="$listeners"
    :active-class="activeClass"
    :exact="exactRouteClass"
  >
    <template v-if="label">{{ label }}</template>
    <slot v-else></slot>
  </router-link>
  <a v-else v-on="$listeners">
    <template v-if="label">{{ label }}</template>
    <slot v-else></slot>
  </a>
</template>

<script>
export default {
  name: "niLink",
  props: {
    href: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: null
    },
    label: String,
    to: {
      type: [Object, String],
      default: null
    },
    activeClass: {
      type: String,
      default: ""
    },
    exactRouteClass: {
      type: Boolean,
      default: true
    }
  }
};
</script>
