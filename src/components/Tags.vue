<template>
  <div>
    <McvLoading v-if="isLoading" />
    <McvError 
    v-if="error" 
    :message="'foo is broken'"
    />

    <div class="sidebar" v-if="tag">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="tag in tag"
          :key="tag"
          :to="{name: 'tag', params: {slug: tag}}"
          class="tag-default tag-pill"
        >
          {{ tag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionTypes} from '@/store/modules/tags'
import McvLoading from '@/components/Loading'
import McvError from '@/components/Error'
export default {
  name: 'McvTags',
  computed: {
    ...mapState({
      isLoading: (state) => state.tags.isLoading,
      tag: (state) => state.tags.data,
      error: (state) => state.tags.error,
    }),
  },
  mounted() {
    this.fetchTags()
  },
  methods: {
    fetchTags() {
      this.$store.dispatch(actionTypes.getTag)
    },
  },
  components: {
    McvLoading,
    McvError,
  },
}
</script>

<style lang="scss" scoped>
</style>