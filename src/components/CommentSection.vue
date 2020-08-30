<template>
  <div class="comment-section">
    <p
      class="comment"
      v-if="$store.getters.getCurrentPhoto.comments.length == 0"
    >Нет комментариев, оставьте первый!</p>
    <div
      v-for='comment in $store.getters.getCurrentPhoto.comments'
      :key="comment.date + comment.text"
      class="comment"
    >
      <p class="comment__name">
        {{ comment.author }}
      <span class="comment__date">
        {{ comment.date.toLocaleString('ru-RU',
            {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric'
            }
          )
        }}
      </span>
      </p>
      <p class="comment__text">
        {{ comment.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
.comment {
  margin: 25px 22px 20px 22px;
  position: relative;
  &__name {
    font-weight: bold;
    color: var(--main-color);
  }
  &__date {
    font-size: 13px;
    font-weight: normal;
    line-height: 15px;
    color: #999999;
    margin-bottom: 5px;
  }
  &__text {
    font-size: 13px;
    line-height: 15px;
  }
}
.comment + .comment::before {
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: -0.8em;
  height: 2px;
  background: rgba(0, 0, 0, 0.05);
}

@media (min-width: 600px) {
  .comment-section {
    overflow-y: auto;
    padding: 2em 2em 0 0;
  }
}
</style>
