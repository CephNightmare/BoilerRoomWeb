<template>
    <div class="tileList">
        <h2 class="tileList__title">{{ listTitle }}</h2>

        <template v-for="item in list">
            <IdeaTile :path="'/Ideas/' + item.ID" :IdeaName="item.ideaName" :ID="item.ID" />
        </template>

        <a v-on:click="$emit('showModal');" class="tileList__tile tile tile--cta">
            <h3 class="tile__title">{{ listAddNew }}</h3>
        </a>
    </div>
</template>

<style lang="scss">
    @import '~abstracts';
    @import '../../Tile/TileList';
    @import '../../Tile/Tile';
</style>

<script src="./IdeaTiles.js"></script>