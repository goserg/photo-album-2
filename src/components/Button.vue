<template>
  <button @click="click" class="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  color: white;
  background: var(--main-color);
  outline: none;
  border: none;
  border-radius: 3px;
  font-size: 13px;
  line-height: 30px;
  margin-top: 7px;
  cursor: pointer;
  &:focus {
    box-shadow: 0 0 0 2px var(--main-color-light);
  }
  &::after {
    position: absolute;
    content: '';
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 3px;
    background: rgba(255, 255, 255, 0.1);
    transform: scaleY(0);
    transition: 0.2s ease-in;
    transform-origin: center;
  }
  &:hover::after {
    transform: scaleY(1);
  }
}
</style>
