<template>
    <div class="todos">
        <insertDialogue v-on:updateTodos="getTodos()"></insertDialogue>

        <div class="todoList">
            <template v-for="todoCategory in this.todoCategoriesList">
                <h3>{{ todoCategory.title }}</h3>
                <template v-for="todo in filteredTodos(todoCategory.ID)">
                    <div class="todoList__item"><span>{{ todo.todoTitle }}</span></div>
                </template>
            </template>
        </div>
    </div>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'todoList';
</style>

<script src="./todoList.js"></script>