<template>
    <header class="header">
        <div class="row">
            <div class="small-24 medium-12 column">
                <Logo/>

                <ul class="header__list">
                    <li v-for="item in nav" class="header__listItem">
                        <router-link class="header__listLink" :class="{'header__listLink--active': subIsActive(item.path)}" :to="item.path">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="small-24 medium-12 column text-right">

            </div>
        </div>

        <div class="row">
            <div class="small-24 column">
                <ul class="header__list">
                    <li v-for="item in ideaNav" class="header__listItem">
                        <router-link class="header__listLink" :class="{'header__listLink--active': subIsActive(item.path)}" :to="'/Ideas/' + $route.params.id + '/' + item.path">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
        </div>

    </header>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'Header';
</style>

<script src="./Header.js"></script>
