<template>
  <md-card md-with-hover>
    <md-field>
      <label for="post-content">What's on your mind?</label>
      <md-textarea id="post-content" md-counter v-model="value"
        @keyup.enter="processEnter" @keyup.esc="processEsc"
        maxlength="300">
      </md-textarea>
    </md-field>
    <md-card-actions>
      <md-button id="cancel-button"
        class="md-raised" @click="clearPost" :disabled="!canPost">
        Cancel
      </md-button>
      <md-button id="post-button"
        class="md-accent md-raised" @click="addPost" :disabled="!canPost">
        Post
      </md-button>
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
    processEnter () {
      this.addPost()
    },
    processEsc () {
      this.clearPost()
    },
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
      this.clearPost()
    },
    clearPost () {
      this.value = ''
    }
  },
  computed: {
    canPost () {
      // Has something been typed?
      return this.value.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
  .md-card {
    min-width: 400px;
    min-height: 100px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
