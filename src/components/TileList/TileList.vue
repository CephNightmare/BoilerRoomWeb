<template>
    <div class="tileList">
        <h2 class="tileList__title">Personal ideas</h2>

        <template v-for="item in list">
            <Tile :path="'/idea/' + item.ID" :IdeaName="item.IdeaName" :ID="item.ID" />
        </template>

        <a v-on:click="$emit('showModal');" class="tileList__tile tile tile--cta">
            <h3 class="tile__title">Create an idea</h3>
        </a>
    </div>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'TileList';
</style>

<script src="./TileList.js"></script>