<template>
  <div id="content-area" class="md-layout md-gutter md-alignment-top-space-around">
    <post-editor class="md-layout-item"></post-editor>
    <post class="md-layout-item" v-for="post in posts" :key="post.id" :post="post"></post>
  </div>
</template>

<script>

import Post from './Post.vue'
import PostEditor from './PostEditor.vue'

export default {

  name: 'NewsFeed',
  components: {
    post: Post,
    postEditor: PostEditor
  },
  computed: {
    posts () {
      const posts = this.$store.getters.posts.slice()
      posts.sort((a, b) => {
        return b.timestamp - a.timestamp
      })
      return posts
    },
    postCount () {
      return this.$store.getters.posts.length
    },
    users () {
      return this.$store.getters.users.length
    }
  }
}
</script>

<style lang="scss" scoped>
  #content-area {
    width: 900px;
    justify-content: center;
  }
</style>
