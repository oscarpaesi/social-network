<template>

  <div class="md-layout md-alignment-top-center">
    <md-toolbar id="toolbar">
      <h3 class="md-title" style="flex: 1">Social Network</h3>
      <md-button class="md-icon-button">
        <md-avatar class="md-avatar-icon">
          <md-icon>person</md-icon>
        </md-avatar>
      </md-button>
    </md-toolbar>
    <md-content id="content-area" class="md-layout md-gutter md-layout-item md-size-80">
        <post-editor class="md-layout-item"></post-editor>
        <post class="md-layout-item" v-for="post in posts" :key="post.id" :post="post"></post>
    </md-content>
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
  #toolbar {
    position: sticky;
    top: 1px;
  }
</style>
