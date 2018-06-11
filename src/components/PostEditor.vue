<template>
  <md-card md-with-hover>
    <md-field>
      <label for="post-content">What's on your mind?</label>
      <md-textarea id="post-content" md-counter v-model="value"></md-textarea>
    </md-field>
    <md-card-actions>
      <md-button>Cancel</md-button>
      <md-button @click="addPost">Post</md-button>
    </md-card-actions>
  </md-card>
</template>

<script>

export default {
  name: 'PostEditor',
  props: {
    value: {
      default: '',
      type: String
    }
  },
  methods: {
    addPost () {
      // Create post object
      const post = {
        author: this.$store.getters.currentUser,
        content: this.value,
        id: this.$store.getters.posts.length,
        timestamp: new Date()
      }
      // Dispatch the 'post' event
      this.$store.dispatch('post', post)

      // Reset the input value
      this.value = ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    min-width: 400px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
