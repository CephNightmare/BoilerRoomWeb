<template>
    <div class="container">
        <div class="row">
            <div class="small-24 column">
                <teamTiles v-on:showModal="showModal = true" listTitle="Teams" listAddNew="Create a team" :list="teams" />
            </div>
        </div>

        <modal v-on:closeModal="showModal = false" componentName="InsertTeam" v-on:updateList="getTeams()"
               v-if="showModal === true"/>

        <modalOverlay @click.native="showModal = false" v-if="showModal === true"/>
    </div>
</template>

<script src="./Teams.js"></script>
