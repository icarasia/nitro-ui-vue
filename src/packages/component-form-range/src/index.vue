<template>
  <div class="c-range">
    <input
      v-model="range_value"
      class="c-range__input"
      type="range"
      :id="id"
      :disabled="disabled"
      :name="name"
      :required="required"
      :min="min"
      :max="max"
      />
    <div class="c-range__bar" :style="{width: `${range_value / max * 100}%`}"></div>
  </div>
</template>

<script>
export default {
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
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      range_value:  0,
    };
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
  background-color: #0774FE;
  border-radius: 2px;
  height: 4px;
  left: 0;
  position: absolute;
  top: 0;
}

.c-range__input {
  -webkit-appearance: none;
  appearance: none;
  background: #CFD6DF;
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
  background: #0774FE;
  border-radius: 100%;
  cursor: pointer;
  height: 20px;
  width: 20px;
  position: relative;
  z-index: 1;
}

.c-range__input::-moz-range-thumb {
  background: #0774FE;
  border-radius: 100%;
  cursor: pointer;
  height: 20px;
  width: 20px;
  position: relative;
  z-index: 1;
}
</style>
