<template>
  <div id="app">
    <mcv-topbar />
    <router-view></router-view>
  </div>
</template>

<script>
import McvTopbar from '@/components/TopBar.vue'
import {actionTypes} from '@/store/modules/auth'

export default {
  name: 'App',
  components: {
    McvTopbar,
  },
  mounted() {
    this.$store.dispatch(actionTypes.getCurrentUser)
  },
}
</script>

<style >
  body {
    overflow-x: hidden;
  }
</style>
