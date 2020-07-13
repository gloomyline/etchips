<template lang="html">
  <div class="et-counter-button">
    <el-button v-bind="$attrs" @click="clickHandler" :disabled="isDisabled">{{ btnLabel }}</el-button>
  </div>
</template>

<script>
export default {
  props: {
    counterMax: {
      type: Number,
      default: 60,
    },
    label: {
      type: String,
    },
    isValidated: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      counter: 0,
      counterId: null,
      isDisabled: false,
    };
  },
  destroyed() {
    this.stopCounter();
  },
  computed: {
    btnLabel() {
      return this.counter > 0 ? `${this.counter}s后获取` : this.label;
    },
  },
  methods: {
    startCounter() {
      if (this.counterId) return;
      this.isDisabled = true;
      this.counter = this.counterMax;
      this.counterId = setInterval(() => {
        this.counter -= 1;
        if (this.counter <= 0) {
          this.stopCounter();
        }
      }, 1000);
    },
    stopCounter() {
      this.isDisabled = false;
      /* eslint-disable no-unused-expressions */
      this.counterId && clearInterval(this.counterId);
    },
    clickHandler() {
      this.$emit('on-click');
      /* eslint-disable no-unused-expressions */
      this.isValidated && this.startCounter();
    },
  },
};
</script>
