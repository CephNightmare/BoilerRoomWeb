<template>
    <div class="container">
        <p class="message message--warning" v-if="notAllowed === true">
            You don't seem to have access to the idea..
        </p>

        <div class="row">
            <div class="small-24 column">
                <ideaTiles v-on:showModal="showModal = true" listAddNew="Create an idea" listTitle="Personal ideas" :list="ideas" />
            </div>
        </div>

        <modal v-on:closeModal="showModal = false" componentName="InsertIdea" v-on:updateList="getIdeas()"
               v-if="showModal === true"/>

        <modalOverlay @click.native="showModal = false" v-if="showModal === true"/>
    </div>
</template>

<script src="./Ideas.js"></script>
