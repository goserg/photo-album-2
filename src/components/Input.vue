<template>
  <div class="input">
    <input
      type="text"
      placeholder=" "
      v-model="value"
      @change="change"
      @keyup.enter="enter"
    >
    <p class="input__placeholder">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  props: {
    text: String,
    val: String
  },
  methods: {
    change () {
      this.$emit('change', this.value)
    },
    enter () {
      this.$emit('enter')
    }
  },
  watch: {
    val (val) {
      this.value = val
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  position: relative;
  flex-direction: column;
  margin-bottom: 20px;
  input {
    height: 30px;
    padding: 0 11px;
    font-size: 13px;
    line-height: 30px;
    border-radius: 3px;
    border: none;
    outline: none;
    color: #000000;
    box-shadow: 0 0 0 1px #CCCCCC;
    transition: 0.2s;
    &:focus {
      color: var(--main-color);
      box-shadow: 0 0 0 2px var(--main-color);
    }
    &:not(:placeholder-shown)~.input__placeholder{
      line-height: 13px;
      transform: translateY(-50%) scale(0.9);
      background: white;
    }
  }
  &__placeholder {
    position: absolute;
    left: 9px;
    line-height: 30px;
    font-size: 13px;
    letter-spacing: 1px;
    color: #CCCCCC;
    transition: 0.2s;
    transform-origin: left;
    padding: 0 2px;
    user-select: none;
    pointer-events: none;
  }
  &:focus-within &__placeholder {
    line-height: 13px;
    transform: translateY(-50%) scale(0.9);
    background: white;
    color: var(--main-color);
  }
}
</style>
