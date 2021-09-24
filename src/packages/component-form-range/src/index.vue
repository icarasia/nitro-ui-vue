<template>
  <div class="c-range">
    <input
      class="c-range__input"
      type="range"
      :id="id"
      :disabled="disabled"
      :required="required"
      :min="min"
      :max="max"
      :step="step"
      :value="value"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
      @input="$emit('input', $event.target.value)"
      @click="$emit('click')"
    />
    <div class="c-range__bar" :style="{ width: `${width}%` }"></div>
  </div>
</template>

<script>
export default {
  name: "niRange",
  props: {
    id: {
      type: String,
      required: true
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: [String, Number],
      default: 0
    },
    max: {
      type: [String, Number],
      default: 10
    },
    step: {
      type: [String, Number],
      default: 1
    },
    value: null
  },
  computed: {
    width() {
      return ((this.value - this.min) / (this.max - this.min)) * 100;
    }
  }
};
</script>
<style>
.c-range {
  position: relative;
  width: 100%;
  margin: 12px 0;
}

.c-range__bar {
  background-color: #0774fe;
  border-radius: 2px;
  height: 4px;
  left: 0;
  position: absolute;
  top: 0;
}

.c-range__input {
  -webkit-appearance: none;
  appearance: none;
  background: #cfd6df;
  border-radius: 2px;
  display: block;
  height: 4px;
  outline: none !important;
  width: 100%;
}

.c-range__input:hover {
  opacity: 1;
}

.c-range__input::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  background: #0774fe;
  border-radius: 100%;
  cursor: pointer;
  height: 20px;
  width: 20px;
  position: relative;
  z-index: 1;
}

.c-range__input::-moz-range-thumb {
  background: #0774fe;
  border-radius: 100%;
  cursor: pointer;
  height: 20px;
  width: 20px;
  position: relative;
  z-index: 1;
}
.c-range__input::-moz-focus-outer {
  border: 0;
}
.c-range__input:focus {
  outline: none;
}
</style>
