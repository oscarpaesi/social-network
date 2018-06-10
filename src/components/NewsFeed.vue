<template>
  <div>

    <md-card md-with-hover>
        <md-field>
            <label for="post-content">What's on your mind?</label>
            <md-textarea id="post-content" md-counter></md-textarea>
        </md-field>
        <md-card-actions>
            <md-button>Cancel</md-button>
            <md-button>Post</md-button>
        </md-card-actions>
    </md-card>

    <md-card md-with-hover>

        <md-card-header>
            <div class="md-title"> Card header </div>
        </md-card-header>

        <md-card-content>
            Card content
        </md-card-content>

        <md-card-actions>
            <md-button>Like</md-button>
            <md-button>Share</md-button>
        </md-card-actions>
    </md-card>
  </div>
</template>

<script>

export default {
  name: 'NewsFeed'
}
</script>

<style lang="scss" scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
