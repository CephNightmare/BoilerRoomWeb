<template>
    <div class="todos">
        <insertDialogue v-on:updateTodos="getTodos()"></insertDialogue>

        <div class="todoList">
            <template v-for="todoCategory in this.todoCategoriesList">
                <h3 v-if="filteredTodos(todoCategory.ID).length">{{ todoCategory.title }}</h3>
                <template v-for="todo in filteredTodos(todoCategory.ID)">
                    <div class="todoList__item">
                        <label :for="todo.ID" class="todoList__checkWrapper">
                            <input class="todoList__checkbox" :name="todo.ID" type="checkbox" />
                            <span class="todoList__checkIcon"></span>
                        </label>
                        <span>{{ todo.todoTitle }}</span>
                    </div>
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