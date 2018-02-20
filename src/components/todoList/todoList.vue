<template>
    <div class="todos">
        <insertDialogue v-on:updateTodos="getTodos()"></insertDialogue>

        <div class="todoList">
            <template v-for="todo in todos">
                <div class="todoList__item"><span>{{ todo.todoTitle }}</span></div>
            </template>
        </div>
    </div>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'todoList';
</style>

<script src="./todoList.js"></script>