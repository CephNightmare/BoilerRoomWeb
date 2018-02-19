<template>
    <div class="todoList">
        <template v-for="todo in todos">
            <h1>{{ todo.todoTitle }}</h1>
        </template>
    </div>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'todoList';
</style>

<script src="./todoList.js"></script>