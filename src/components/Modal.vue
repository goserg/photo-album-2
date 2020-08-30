<template>
  <div class="container" @keyup.esc="close">
    <div class="shadow" @click="close"/>
    <div class="modal">
      <button
        class="modal__close-btn"
        @click="close"
      >
        ✕
      </button>
      <a :href="this.$store.getters.getCurrentPhoto.big" target="_blank">
        <img
          :src="this.$store.getters.getCurrentPhoto.big"
          :alt="`Фото №${this.$store.getters.getCurrentPhoto.id}`"
          class="modal__photo"
        >
      </a>
      <CommentSection/>
      <CommentForm/>
    </div>
  </div>
</template>

<script>
import CommentSection from '../components/CommentSection'
import CommentForm from '../components/CommentForm'
export default {
  components: {
    CommentSection,
    CommentForm
  },
  methods: {
    close () {
      this.$emit('close')
    }
  },
  mounted () {
    // document.querySelector('input').focus({ preventScroll: true })
    for (const pic of document.querySelectorAll('.thumb-btn')) {
      console.log(pic)
      pic.setAttribute('tabindex', '-1')
    }
  },
  beforeDestroy () {
    for (const pic of document.querySelectorAll('.thumb-btn')) {
      console.log(pic)
      pic.setAttribute('tabindex', '0')
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  top: 10;
  left: 10;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  place-content: center;
  z-index: 100;
  .shadow {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.9);
  }
  .modal {
    display: flex;
    position: relative;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background: #FFFFFF;
    overflow-y: auto;
    z-index: 100;
    &__close-btn {
      position: absolute;
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
      &:focus {
        outline: solid 2px var(--main-color);
      }
    }
    &__photo {
      width: 100%;
    }
  }
}

@media (min-width: 600px) {
  .modal {
    max-width: 1200px;
    height: min-content !important;
    max-height: min-content !important;
    margin: 0 auto;
    display: grid !important;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: min-content 1fr;
    .comment-section {
      grid-row: 1 / 3;
      grid-column: 2 / 3;
    }
    &__photo {
      margin: 20px;
      width: calc(100% - 40px) !important;
    }
  }
}
</style>
