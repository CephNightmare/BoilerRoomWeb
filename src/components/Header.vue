<template>
  <header class="header">
      <div class="row">
          <div class="small-24 medium-12 column">
              <ul class="header__list">
                  <li class="header__listItem">
                      <router-link class="header__listLink header__listLink--active" to="ideas">Ideas</router-link>
                  </li>
                  <li class="header__listItem">
                      <router-link class="header__listLink" to="ideas">Apps</router-link>
                  </li>
              </ul>
          </div>
          <div class="small-24 medium-12 column text-right">

          </div>
      </div>
  </header>
</template>

<script>
  import HeaderDropdown from './HeaderDropdown.vue'

  export default {
    name: 'header',
    components: {
      HeaderDropdown
    },
    methods: {
      sidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-hidden')
      },
      sidebarMinimize (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-minimized')
      },
      mobileSidebarToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('sidebar-mobile-show')
      },
      asideToggle (e) {
        e.preventDefault()
        document.body.classList.toggle('aside-menu-hidden')
      }
    }
  }
</script>
