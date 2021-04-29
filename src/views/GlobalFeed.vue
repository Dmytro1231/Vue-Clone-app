<template>
  <div class="home-page">
    <McvBanner />
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <McvFeedToggler />
          <McvFeed :apiUrl="apiUrl" />
        </div>
        <div class="col-md-3">
          <McvTags />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '@/components/Feed'
import McvTags from '@/components/Tags'
import McvBanner from '@/components/Banner'
import McvFeedToggler from '@/components/FeedToggler'


export default {
  name: 'McvGlobalFeed',
  components: {
    McvFeed,
    McvTags,
    McvBanner,
    McvFeedToggler
  },
  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>

<style lang="scss" scoped>
</style>