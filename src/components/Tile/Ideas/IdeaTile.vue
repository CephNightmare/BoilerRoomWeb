<template>
    <router-link :to="path" :key="ID" class="tileList__tile tile">
        <h3 class="tile__title">{{ IdeaName }}</h3>
    </router-link>
</template>

<script src="./IdeaTile.js"></script>