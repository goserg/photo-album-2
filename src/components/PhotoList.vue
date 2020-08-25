<template>
  <div class="photo-list">
    <PhotoThumb
    v-for="photo in listOfPhotos"
    :key="photo"
    @click="click(photo)"
    />
  </div>
</template>

<script>
import PhotoThumb from '../components/PhotoThumb'
export default {
  components: {
    PhotoThumb
  },
  data () {
    return {
      listOfPhotos: [1, 2, 3]
    }
  },
  methods: {
    click (photo) {
      this.$emit('click', photo)
    }
  }
}
</script>

<style lang="scss" scoped>
.photo-list {
  display: flex;
  flex-direction: column;
  width: max-content;
  margin: 0 auto;
}
</style>
