<template>
  <div class="comment-section">
    <div v-for='comment in comments' :key="comment.date">
      {{ comment.date }}
      {{ comment.text }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      comments: [
        {
          date: '20.20.2020',
          text: 'Очень крутая фотка'
        },
        {
          date: '21.22.2020',
          text: 'Неплохо'
        }
      ]
    }
  }
}
</script>

<style>

</style>
