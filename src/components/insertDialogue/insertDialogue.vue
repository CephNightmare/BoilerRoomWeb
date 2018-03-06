<template>
    <form class="insertDialogue">
        <input class="insertDialogue__input" @keydown.enter.prevent='insertTodo()' id="todoTitle" ref="todoTitle" name="todo Title" placeholder="Add new to-do..." />
        <input type="hidden" id="todoCategoryID" name="todoCategoryID" :value="selectedCategoryID" />

        <a @click="showCategoryList = !showCategoryList" class="insertDialogue__categoryButton">
            <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zm-22.627 45.255L271.196 475.314c-6.243 6.243-16.375 6.253-22.627 0L36.686 263.431A15.895 15.895 0 0 1 32 252.117V48c0-8.822 7.178-16 16-16h204.118c4.274 0 8.292 1.664 11.314 4.686l211.882 211.882c6.238 6.239 6.238 16.39 0 22.628zM144 124c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20m0-28c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"/></svg>
            <span class="insertDialogue__categoryName" v-if="selectedCategoryID != null">{{ selectedCategoryTitle }}</span>
        </a>
        <ul class="insertDialogue__categoryList" v-if="showCategoryList">
            <li class="insertDialogue__categoryListItem" v-for="category in todoCategoriesList" :key="category.ID">
                <a @click="[selectedCategoryID = category.ID, selectedCategoryTitle = category.title]" class="insertDialogue__categoryListLink">{{ category.title }}</a>
            </li>
        </ul>
    </form>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'insertDialogue';
</style>

<script src="./insertDialogue.js"></script>