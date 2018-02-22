<template>
    <div class="container">
        <div class="row">
            <aside class="small-24 medium-8 large-4 column">
                <asideList :list="todoCategoriesList"></asideList>
                <addTodoCategory></addTodoCategory>

            </aside>

            <div class="small-24 medium-16 large-20 column">
                <todoList></todoList>
            </div>
        </div>
    </div>
</template>

<script src="./Todos.js"></script>
