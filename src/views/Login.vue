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
                                   :class="{'form__input--warning': errors.has('first name') }" class="form__input"
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
            </div>

        </div>
    </div>
</template>

<script>
    import SplashLogo from '../components/SplashLogo'
    import {Validator} from 'vee-validate';

    export default {
        name: 'Login',
        data: function () {
            return {
                submitted: false
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
                        var that = this;
                        this.submitted = true;

                        $.ajax({
                            type: 'POST',
                            url: 'http://boilerroomdata.gvandrunen.biz:8080/authenticate-user.php',
                            data: $('.form').serialize(),
                            success: function (data) {

                                var parsedData = JSON.parse(data);

                                if (parsedData["message"] == 1) {
                                    console.log("test");
                                    that.submitted = false;
                                }
                            }
                        });

                        return;
                    }
                });
            }
        },
        created() {
            var getQueryString = function (field, url) {
                var href = url ? url : window.location.href;
                var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
                var string = reg.exec(href);
                return string ? string[1] : null;
            };

            var id = getQueryString('id');
            var hash = getQueryString('hash');

            if (id && hash) {
                $.ajax({
                    type: 'POST',
                    url: 'http://boilerroomdata.gvandrunen.biz:8080/activate-user.php',
                    data: 'id=' + id + '&hash=' + hash,
                    success: function (data) {

                        var parsedData = JSON.parse(data);

                        if (parsedData["message"] === 1) {
                        }
                    }
                });
            }
        }
    }
</script>
