<template>
  <div class="modal">
    <button
      class="modal__close-btn"
      @click="close"
    >
      ✕
    </button>
    <img
      src='http://placekitten.com/320/205'
      class="modal__photo"
    >
    <CommentSection/>
  </div>
</template>

<script>
import CommentSection from '../components/CommentSection'
export default {
  components: {
    CommentSection
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  &__close-btn {
    position: fixed;
    right: 0;
    top: 0;
    background: transparent;
    outline: none;
    border: none;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    font-size: 18px;
    line-height: 60px;
    cursor: pointer;
    &:hover {
      color: var(--main-color);
    }
  }
  &__photo {
    width: 100%;
    margin-bottom: 25px;
  }
}
</style>
