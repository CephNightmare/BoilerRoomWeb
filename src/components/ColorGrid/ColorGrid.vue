
<template>
    <div class="colorGrid">
    <span v-for="item in list" v-bind:class="{'colorGrid__block--active': isActive(item) }"
          class="colorGrid__block" v-bind:style="{ backgroundColor: item }"
          v-on:click='toggle(item)'></span>
    </div>
</template>

<script src="./ColorGrid.js"></script>

<style lang="scss">
    @import '~abstracts';
    @import 'ColorGrid';
</style>