<template>
    <div class="container">
        <div class="row">
            <aside class="small-24 medium-8 large-4 column">
                <asideFilter></asideFilter>
            </aside>

            <div class="small-24 medium-16 large-20 column">
                <insertDialogue v-on:updateTodos="updateTodoList = true"></insertDialogue>

                <todoList v-on:todoListUpdated="updateTodoList = false" :getTodoList="updateTodoList"></todoList>
            </div>
        </div>
    </div>
</template>

<script src="./Todos.js"></script>
