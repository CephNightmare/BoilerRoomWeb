<template>
    <div class="splashForm">
        <div class="splashForm__contentWrapper">
            <div class="splashForm__form">

                <SplashLogo/>

                <div class="splashForm__formContent">
                    <p class="splashForm__intro text-enter">Log in to start building your ideas.</p>

                    <form @submit.prevent="validateBeforeSubmit" class="form">
                        <div class="form__group">
                            <label class="form__label" for="Username">Username</label>
                            <input v-validate="'required'" autocomplete="false"
                                   :class="{'form__input--warning': errors.has('username') }" class="form__input"
                                   name="username" type="text" id="Username" placeholder="John123"/>
                            <span class="form__warning" :show="errors.has('username')">{{ errors.first('username')
                                }}</span>
                        </div>
                        <div class="form__group">
                            <label class="form__label" for="Password">Password</label>
                            <input class="form__input" type="password" v-validate="'required|min:6'" name="password"
                                   :class="{'form__input--warning': errors.has('password') }" id="Password"/>
                            <span class="form__warning" :show="errors.has('password')">{{ errors.first('password')
                                }}</span>
                        </div>
                        <div class="form__group">
                            <button type="submit" class="float-left button form__submit" @click="submitForm()"
                                    :disabled="errors.any()">Submit
                            </button>
                            <div v-if="this.submitted" v-show="this.submitted" class="cube cube--inline">
                                <div class="cube__folding">
                                    <span class="cube__leaf cube__leaf--one"></span>
                                    <span class="cube__leaf cube__leaf--two"></span>
                                    <span class="cube__leaf cube__leaf--three"></span>
                                    <span class="cube__leaf cube__leaf--four"></span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div v-if="this.accountActivated" class="splashForm__formContent">
                    <p class="message message--success">
                        Your account has been activated! Log in to start your new venture!</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import SplashLogo from '../components/SplashLogo'
    import {Validator} from 'vee-validate';
    import {Store} from 'vuex';

    export default {
        name: 'Login',
        data: function () {
            return {
                submitted: false,
                accountActivated: null
            }
        },
        components: {
            SplashLogo
        },
        methods: {
            validateBeforeSubmit() {
                this.$validator.validateAll()
            },
            submitForm() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        this.submitted = true;
                        var formData = $(".form").serialize();
                        this.$store.dispatch('authenticateUser', formData).then(() => {
                            this.registerCompleted = true;
                            this.registerSuccessfull = true;
                        }).catch((error) => {
                            this.registerCompleted = true;
                            this.registerSuccessfull = false;
                        });
                    }
                });
            },
        },
        created() {
            const that = this;
            const getQueryString = function (field, url) {
                const href = url ? url : window.location.href;
                const reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                const string = reg.exec(href);
                return string ? string[1] : null;
            };

            const id = getQueryString('id');
            const hash = getQueryString('hash');

            if (id && hash) {
                const data = 'id=' + id + '&hash=' + hash;
                this.$store.dispatch('activateUser', data).then(() => {
                    console.log("test");
                    this.accountActivated = true;
                }).catch((error) => {
                    console.log("bad");
                });
            }
        }
    }
</script>
