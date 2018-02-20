<template>
    <form class="insertDialogue">
        <input class="insertDialogue__input" @keydown.enter.prevent='insertTodo()' id="todoTitle" ref="todoTitle" name="todo Title" placeholder="Add new to-do..." />
    </form>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'insertDialogue';
</style>

<script src="./insertDialogue.js"></script>