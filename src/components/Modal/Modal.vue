<template>
    <transition name="popup">
        <div class="modal">
            <component :is="dynamicComponent" v-on:emit="this.emitMethod"></component>
        </div>
    </transition>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'Modal';
</style>

<script src="./Modal.js"></script>