<template>
    <div class="tileList">
        <h2 class="tileList__title">{{ listTitle }}</h2>

        <template v-for="item in list">
            <router-link :to="'/team/' + item.ID" :key="item.ID" class="tileList__tile tile">
                <h3 class="tile__title">{{ item.teamName }}</h3>
            </router-link>
        </template>

        <a v-on:click="$emit('showModal');" class="tileList__tile tile tile--cta">
            <h3 class="tile__title">{{ listAddNew }}</h3>
        </a>
    </div>
</template>

<style lang="scss">
    @import '~abstracts';
    @import '../Tile/TileList';
    @import '../Tile/Tile';
</style>

<script src="./TileList.js"></script>