<template>
  <md-card md-with-hover>
    <md-card-header>
      <md-avatar class="md-avatar-icon">
        <md-icon>person</md-icon>
      </md-avatar>
      <div class="md-title"> {{ post.author.name }} </div>
      <div class="md-subhead"> {{ date }} </div>
    </md-card-header>
    <md-card-content>
      {{ post.content }}
    </md-card-content>
  </md-card>
</template>

<script>

import moment from 'moment'

export default {
  name: 'Post',
  props: ['post'],
  computed: {
    title () {
      return this.post.title
    },
    content () {
      return this.post.content
    },
    date () {
      return this.formatDate(this.post.timestamp)
    }
  },
  methods: {
    formatDate (value) {
      return moment(value).calendar()
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
