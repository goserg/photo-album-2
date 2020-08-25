<template>
  <div
    class="container"
    @click="click"
  >
    <img src='http://placekitten.com/280/171' alt="photo of cute kitten">
  </div>
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
.container {
  display: flex;
  margin-bottom: 30px;
}
</style>
