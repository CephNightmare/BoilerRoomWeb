<template>
  <div class="app">
    <div class="app-body">

      <Sidebar :navItems="nav"/>

      <main class="main main--withLeftSidebar">
        <AppHeader/>
        <breadcrumb :list="list"/>
          <router-view></router-view>
      </main>
      <!--<AppAside/>-->
    </div>
  </div>
</template>

<script>
import nav from '../_nav'
import { Header as AppHeader, Sidebar, Aside as AppAside, Breadcrumb } from '../components/'

export default {
  name: 'full',
  components: {
    AppHeader,
    Sidebar,
    AppAside,
    Breadcrumb
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
