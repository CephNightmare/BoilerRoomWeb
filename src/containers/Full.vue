<template>
  <div class="app">
    <div class="app-body">

      <main class="main">
        <AppHeader/>
        <router-view></router-view>
      </main>
      <!--<AppAside/>-->
    </div>
  </div>
</template>

<script>
import nav from '../_nav'
import AppHeader from '../components/header/header.vue'

export default {
  name: 'full',
  components: {
    AppHeader
  },
  data () {
    return {
      nav: nav.items
    }
  },
  computed: {
    name () {
      return this.$route.name
    },
    list () {
      return this.$route.matched
    }
  }
}
</script>
