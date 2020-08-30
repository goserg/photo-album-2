<template>
  <div class="comment-form">
    <p v-if="error" class="error"> {{ error }} </p>
    <Input
      text="Ваше имя"
      @change="(e) => {name = e}"
      :clear="clear"
      :val="name"
      @enter="commitComment"
    />
    <Input
      text="Ваш комментарий"
      @change="(e) => {comment = e}"
      :val="comment"
      @enter="commitComment"
    />
    <Button @click="commitComment">
      Оставить комментарий
    </Button>
  </div>
</template>

<script>
import Input from '../components/Input'
import Button from '../components/Button'
export default {
  data () {
    return {
      name: '1',
      comment: '',
      error: ''
    }
  },
  components: {
    Input,
    Button
  },
  methods: {
    commitComment () {
      if (this.comment.length < 1 || this.name.length < 1) {
        this.error = 'Укажите имя и комментарий'
      } else {
        this.error = ''
        this.$store.commit('addNewComment', {
          comment: this.comment,
          author: this.name
        }
        )
        this.name = ''
        this.comment = ''
      }
    },
    clear () {
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-form {
  display: flex;
  flex-direction: column;
  margin: 40px 22px 48px 22px;
  .error {
    color: #D50000;
    text-align: right;
  }
}
</style>
