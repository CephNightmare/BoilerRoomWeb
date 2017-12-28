<template>
    <router-view></router-view>
</template>

<script>
    export default {
        name: 'app',
        created() {
            if(this.$router.currentRoute.name != "Login" && this.$router.currentRoute.name != "Register") {

                this.$store.dispatch('validateUser').catch(() => {
                    this.$router.push('/login');
                });
            }
        }
    }
</script>

<style lang="scss">
    // Import Main styles for this application
    @import './scss/style';
</style>
