<template>
    <header class="header" :class="{'header--expanded': $route.params.id}">
        <div class="header__grid grid grid--collapseAll">
            <div class="grid__col grid__colSpan-24 header__topRow">
                <Logo/>

                <ul class="header__list">
                    <li v-for="item in nav" class="header__listItem">
                        <router-link class="header__listLink" :class="{'header__listLink--active': subIsActive(item.path)}" :to="item.path">{{ item.name }}</router-link>
                    </li>
                </ul>
            </div>
            <div class="grid__col grid__colSpan-24 grid__rowStart-2 header__middleRow">
                <transition enterClass="header__subList--enter" leaveToClass="header__subList--leaveTo">
                    <h1 class="header__title" v-if="$route.params.id">{{ $store.state.ideas.currentIdeaTitle }}</h1>
                </transition>
            </div>
            <div class="grid__col grid__colSpan-24 grid__rowStart-3 header__bottomRow">
                <transition enterClass="header__subList--enter" leaveToClass="header__subList--leaveTo">
                    <ul v-if="$route.params.id" class="header__subList">
                        <li v-for="item in ideaNav" class="header__subListItem">
                            <router-link class="header__subListLink" active-class="header__subListLink--active" :class="{'header__subListLink--active': subIsActive(item.path)}" :to="'/Ideas/' + $route.params.id + '/' + item.path">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </transition>
            </div>

        </div>
    </header>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'Header';
</style>

<script src="./Header.js"></script>
