<template>
  <div class="photo-list">
    <PhotoThumb
    v-for="(photo, i) in this.$store.state.photos"
    :key="i"
    @click="click(photo)"
    :photo="photo"
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

@media (min-width: 600px) {
  .photo-list {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 80%;
    place-content: center;
  }
}
</style>
