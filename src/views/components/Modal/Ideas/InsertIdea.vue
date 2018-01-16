<template>
    <form @submit.prevent="validateBeforeSubmit" class="form"
          v-bind:class="{'form--loading': (this.submitted && !this.success), 'form--success': (this.submitted && this.success)}">
        <div class="form__content">
            <div class="form__group">
                <label class="form__label" for="IdeaName">Idea name</label>
                <input v-validate="'required|min:3'" data-vv-validate-on="blur"
                       :class="{'form__input--warning': errors.has('Idea name') }" class="form__input"
                       name="Idea name" type="text" id="IdeaName" placeholder="A new flowershop"/>
                <span class="form__warning" :show="errors.has('Idea name')">{{ errors.first('Idea name')
                    }}</span>
            </div>
            <div class="form__group">
                <label class="form__label" for="Category">Category</label>
                <input class="form__input" type="text" v-validate="'required'" name="Category"
                       :class="{'form__input--warning': errors.has('Category') }" id="Category"/>
                <span class="form__warning" :show="errors.has('Category')">{{ errors.first('Category')
                    }}</span>
            </div>
            <div class="form__group">
                <label class="form__label" for="Category">Category color</label>
                <input type="text" name="Category" class="colorGridValue is-hidden"/>

                <div class="colorGrid">
                    <span v-for="item in items" v-bind:class="{'colorGrid__block--active': isActive(item) }"
                          class="colorGrid__block" v-bind:style="{ backgroundColor: item }"
                          v-on:click='toggle(item)'></span>
                </div>

                <span class="form__warning" :show="errors.has('Short Description')">{{ errors.first('Short Description')
                    }}</span>
            </div>
            <div class="form__group">
                <label class="form__label" for="Category">A short description of your idea</label>
                <textarea class="form__textarea" type="text" v-validate="'required'" name="Short Description"
                          :class="{'form__input--warning': errors.has('Short Description') }"
                          id="ShortDescription"></textarea>
                <span class="form__warning" :show="errors.has('Short Description')">{{ errors.first('Short Description')
                    }}</span>
            </div>
            <div class="form__group">
                <button type="submit" class="float-left button form__submit" @click="submitForm()"
                        :disabled="errors.any()">Create idea
                </button>
            </div>
        </div>

        <div class="form__slide form__slide--1">
            <div class="loader">
                <div class="holder">
                    <div class="box"></div>
                </div>
                <div class="holder">
                    <div class="box"></div>
                </div>
                <div class="holder">
                    <div class="box"></div>
                </div>
            </div>
        </div>
        <div class="form__slide form__slide--2">
            <div class="checkMark" v-bind:class="{'checkMark--active': (this.submitted && this.success)}">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 161.2 161.2" enable-background="new 0 0 161.2 161.2" xml:space="preserve">
<path class="checkMark__path" fill="none" stroke="#7DB0D5" stroke-miterlimit="10" d="M425.9,52.1L425.9,52.1c-2.2-2.6-6-2.6-8.3-0.1l-42.7,46.2l-14.3-16.4
	c-2.3-2.7-6.2-2.7-8.6-0.1c-1.9,2.1-2,5.6-0.1,7.7l17.6,20.3c0.2,0.3,0.4,0.6,0.6,0.9c1.8,2,4.4,2.5,6.6,1.4c0.7-0.3,1.4-0.8,2-1.5
	c0.3-0.3,0.5-0.6,0.7-0.9l46.3-50.1C427.7,57.5,427.7,54.2,425.9,52.1z"/>
<circle class="path" fill="none" stroke="#7DB0D5" stroke-width="4" stroke-miterlimit="10" cx="80.6" cy="80.6" r="62.1"/>
<polyline class="path" fill="none" stroke="#7DB0D5" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="113,52.8
	74.1,108.4 48.2,86.4 "/>

<circle class="checkMark__spin" fill="none" stroke="#7DB0D5" stroke-width="4" stroke-miterlimit="10" stroke-dasharray="12.2175,12.2175" cx="80.6" cy="80.6" r="73.9"/>

</svg>
                <p class="checkMark__tagLine">
                    Great Job!
                    <br/>
                    You've created your project, Do you want to go there now?
                </p>
            </div>
            <div class="form__buttons">
                <a href="#" class="button form__button">Yes, let's go!</a>
                <a href="#" @click="closeModal()" class="button button--ghost form__button">No, I want to stay here</a>
            </div>
        </div>
    </form>
</template>

<script>
    import {Validator} from 'vee-validate';
    import {Store} from 'vuex';

    export default {
        name: 'insertIdea',
        data () {
            return {
                activeMessage: "",
                submitted: false,
                success: false,
                items: [
                    "blue",
                    "green",
                    "lime",
                    "pink",
                    "red",
                    "yellow"
                ]
            }
        },
        methods: {
            closeModal() {
                this.$emit('closeModal');
            },
            validateBeforeSubmit() {
                this.$validator.validateAll()
            },
            submitForm() {
                this.$validator.validateAll().then((result) => {
                    if (result) {
                        let that = this;
                        that.submitted = true;

                        window.setTimeout(function () {
                            let formData = $(".form").serialize();
                            that.$store.dispatch('insertIdea', formData).then(() => {
                                that.success = true;
                            }).catch((error) => {
                                console.log("failure");
                            });
                        }, 2000);
                    }
                });
            },
            toggle: function (item) {
                this.activeMessage = item;
            },
            isActive: function (item) {
                return this.activeMessage === item
            }
        }
    }
</script>
