<template>
  <div id="app">
    <transition name='modal'>
    <Modal
      v-if='showModal'
      @close='closeModal'
    />
    </transition>
    <main>
      <Title/>
      <PhotoList
        @click="click"
      />
    </main>
    <Footer/>
  </div>
</template>

<script>
import Title from './components/Title'
import PhotoList from './components/PhotoList'
import Footer from './components/Footer'
import Modal from './components/Modal'
export default {
  name: 'App',
  components: {
    Title,
    PhotoList,
    Footer,
    Modal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    click (e) {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.modal-enter-active,
.modal-leave-active {
  transition: all .3s ease;
}
.modal-enter, .modal-leave-to {
  transform: translateY(100%);
}
</style>
