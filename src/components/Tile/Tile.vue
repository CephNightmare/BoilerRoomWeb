<template>
    <router-link :to="path" class="tileList__tile tile">
        <h3 class="tile__title">{{ title }}</h3>
    </router-link>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'TileList';
    @import 'Tile';
</style>

<script src="./Tile.js"></script>