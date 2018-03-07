<template>
  <div class="app">
    <div class="app-body">

      <main class="main">
        <AppHeader/>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import AppHeader from '../components/header/header.vue'

export default {
  name: 'full',
  components: {
    AppHeader
  }
}
</script>
