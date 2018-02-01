<template>
    <div class="container">
        <h1>Cards</h1>

        <CardList v-on:showModal="showModal = true" :list="personalIdeas" />

    </div>
</template>

<script src="./Cards.js"></script>
