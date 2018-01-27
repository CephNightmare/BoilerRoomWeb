<template>
    <header class="header">
        <div class="row">
            <div class="small-24 medium-12 column">
                <Logo/>

                <ul class="header__list">
                    <li class="header__listItem">
                        <router-link class="header__listLink header__listLink--active" to="ideas">Ideas</router-link>
                    </li>
                    <li class="header__listItem">
                        <router-link class="header__listLink" to="ideas">Inspiration</router-link>
                    </li>
                    <li class="header__listItem">
                        <router-link class="header__listLink" to="ideas">Teams</router-link>
                    </li>
                </ul>
            </div>
            <div class="small-24 medium-12 column text-right">

            </div>
        </div>
    </header>
</template>

<style lang="scss">
    @import '~abstracts';
    @import 'Header';
</style>

<script src="./Header.js"></script>
