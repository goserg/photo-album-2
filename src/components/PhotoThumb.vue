<template>
  <button
    class="container thumb-btn"
    @click="click"
  >
    <img
      :src="photo.thumb"
      alt="photo of a train"
    >
  </button>
</template>

<script>
export default {
  props: {
    photo: Object
  },
  methods: {
    click () {
      this.$emit('click')
      this.$store.commit('setCurrent', this.photo.id)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  cursor: pointer;
  margin: 15px;
  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  img {
    transition: ease-in-out 0.1s;
  }
  &:focus img {
    outline: solid 2px black;
  }
  &:hover img,
  &:focus img {
    transform: translate(-2px, -2px);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
  }
}

</style>
