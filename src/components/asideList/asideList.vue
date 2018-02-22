<template>
    <ul class="asideList">
        <li class="asideList__listItem" v-for="item in list" :key="item.ID">
            <a href="#" class="asideList__listLink">{{ item.title }}</a>
        </li>
    </ul>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'asideList';
</style>

<script src="./asideList.js"></script>