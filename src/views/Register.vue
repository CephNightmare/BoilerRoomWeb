<template>
    <div class="splashForm">
        <div class="splashForm__contentWrapper">
            <div class="splashForm__form">

                <SplashLogo/>

                <div v-if="!registerCompleted" class="splashForm__formContent">
                    <p class="splashForm__intro text-enter">Start creating new ideas!</p>

                    <form @keyup.enter="submitForm()" @submit.prevent="validateBeforeSubmit" class="form">
                        <div class="form__group">
                            <label class="form__label" for="FirstName">First Name</label>
                            <input v-validate="'required|min:2'" data-vv-validate-on="blur" autocomplete="false"
                                   :class="{'form__input--warning': errors.has('first name') }" class="form__input"
                                   name="first name" type="text" id="FirstName" placeholder="John"/>
                            <span class="form__warning" :show="errors.has('first name')">{{ errors.first('first name')
                                }}</span>
                        </div>
                        <div class="form__group">
                            <label class="form__label" for="LastName">Last Name</label>
                            <input v-validate="'required|min:2'" data-vv-validate-on="blur" autocomplete="false"
                                   :class="{'form__input--warning': errors.has('last name') }" class="form__input"
                                   name="last name" type="text" id="LastName"
                                   placeholder="Doe"/>
                            <span class="form__warning" :show="errors.has('last name')">{{ errors.first('last name')
                                }}</span>
                        </div>
                        <div class="form__group">
                            <label class="form__label" for="Username">User Name</label>
                            <input autocomplete="false" v-validate="'required|min:2|alpha_dash|verify_username'"
                                   :class="{'form__input--warning': errors.has('username') }" class="form__input"
                                   name="username" type="text" id="Username" placeholder="JohnDoe 123"/>
                            <span class="form__warning" :show="errors.has('username')">{{ errors.first('username')
                                }}</span>
                        </div>
                        <div class="form__group">
                            <label class="form__label" for="Email">E-mail address</label>
                            <input v-validate="'required|email|verify_email'" autocomplete="false"
                                   data-vv-validate-on="blur" name="email address"
                                   :class="{'form__input--warning': errors.has('email address') }" class="form__input"
                                   type="email" id="Email" placeholder="john@example.com"/>
                            <span class="form__warning"
                                  :show="errors.has('email address')">{{ errors.first('email address') }}</span>
                        </div>
                        <div class="form__group">
                            <label class="form__label" for="Password">Password</label>
                            <input class="form__input" type="password" v-validate="'required|min:6'"
                                   name="password"
                                   :class="{'form__input--warning': errors.has('password') }" id="Password"
                                   placeholder="Minimum 6 characters"/>
                            <span class="form__warning" :show="errors.has('password')">{{ errors.first('password')
                                }}</span>
                        </div>
                        <div class="form__group">
                            <label class="form__label" for="RepeatPassword">Repeat Password</label>
                            <input class="form__input" type="password" v-validate="'required|confirmed:password'"
                                   name="repeat password"
                                   :class="{'form__input--warning': errors.has('repeat password') }" id="RepeatPassword"
                                   placeholder="Minimum 6 characters"/>
                            <span class="form__warning"
                                  :show="errors.has('repeat password')">{{ errors.first('repeat password') }}</span>
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
                <div v-if="registerSuccessfull" class="splashForm__formContent">
                    <p class="message message--success">
                        Thank you for registering! Check your E-mail to activate your account and start building your ideas!</p>
                </div>
                <div v-if="registerSuccessfull === false" class="splashForm__formContent">
                    <p class="message message--warning">
                        Something seems to have gone wrong. Try again in a new browser, or send us an E-mail.</p>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import SplashLogo from '../components/logo/Logo'
    import {Validator} from 'vee-validate';
    import {Store} from 'vuex';

    export default {
        name: 'Register',
        data: function () {
            return {
                submitted: false,
                registerCompleted: null,
                registerSuccessfull: null,
                registerFailed: null
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
                        this.$store.dispatch('insertUser', $(".form")).then(() => {
                            this.registerCompleted = true;
                            this.registerSuccessfull = true;
                        }).catch((error) => {
                            this.registerCompleted = true;
                            this.registerSuccessfull = false;
                        });
                    }
                });
            }
        },
        created() {
            Validator.extend('verify_username', {
                getMessage: field => `The ${field} has already been taken.`,
                validate: value => new Promise((resolve) => {
                    this.$store.dispatch('verifyUserNonExisting', value).then(() => {
                        resolve({
                            valid: true
                        })
                    }).catch((error) => {
                        resolve({
                            valid: false
                        })
                    });
                })
            });

            Validator.extend('verify_email', {
                getMessage: field => `The ${field} has already been taken.`,
                validate: value => new Promise((resolve) => {
                    this.$store.dispatch('verifyEmail', value).then(() => {
                        resolve({
                            valid: true
                        })
                    }).catch((error) => {
                        resolve({
                            valid: false
                        })
                    });
                })
            });

        }
    }
</script>
