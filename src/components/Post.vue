<template>
  <md-card md-with-hover>
    <md-card-header>
      <md-avatar class="md-avatar-icon">
        <md-icon>person</md-icon>
      </md-avatar>
      <div class="md-title"> {{ post.author.name }} </div>
      <div class="md-subhead"> {{ post.timestamp }} </div>
    </md-card-header>
    <md-card-content>
      {{ post.content }}
    </md-card-content>
    <!-- <md-card-actions>
      <md-button>Like</md-button>
      <md-button>Share</md-button>
    </md-card-actions> -->
  </md-card>
</template>

<script>

export default {
  name: 'Post',
  props: ['post'],
  computed: {
    title () {
      return this.post.title
    },
    content () {
      return this.post.content
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
