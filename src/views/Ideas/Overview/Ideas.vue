<template>
    <div class="container">

        <div class="row">
            <div class="small-24 column">
                <tileList v-on:showModal="showModal = true" :list="ideas" />
            </div>
        </div>

        <modal v-on:closeModal="showModal = false" componentName="InsertIdea" v-on:updateList="getIdeas()"
               v-if="showModal === true"/>

        <modalOverlay @click.native="showModal = false" v-if="showModal === true"/>
    </div>
</template>

<script src="./Ideas.js"></script>
