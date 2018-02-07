<template>
    <transition name="popup">
        <div class="modal">
            <slot></slot>
        </div>
    </transition>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'Modal';
</style>

<script src="./Modal.js"></script>