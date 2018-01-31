<template>
    <router-link :to="path" :key="ID" class="tileList__tile tile">
        <h3 class="tile__title">{{ TeamName }}</h3>
    </router-link>
</template>

<script src="./TeamTile.js"></script>