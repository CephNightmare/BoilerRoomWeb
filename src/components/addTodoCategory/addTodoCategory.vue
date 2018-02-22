<template>
    <div>
        <a @click="showInsertField = true" class="addTodoCategoryButton button button--alt">Add category</a>

        <form class="addTodoCategory">
            <input v-if="showInsertField === true" class="addTodoCategory__input" @keydown.enter.prevent='addTodoCategory()' id="title" ref="title" name="title" placeholder="Add new category..." />
        </form>
    </div>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'addTodoCategory';
</style>

<script src="./addTodoCategory.js"></script>
