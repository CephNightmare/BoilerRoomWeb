<template>
    <div class="container">
        <h1>Cards</h1>

        <button @click="showInsertCardCollectionModal = true" class="button">Insert Card Collection</button>

        <div class="tileList">
            <h2 class="tileList__title">Card Collections</h2>

            <template v-for="cardCollection in cards">
                <div class="row">
                    <div class="small-24 column">
                        <h3>{{ cardCollection.collectionName }}</h3>

                        <template v-for="card in cardCollection.cards">
                            <h4>{{card.cardName }}</h4>
                        </template>

                        <h1>{{ cardCollection.cardCollectionID }}</h1>
                        <a href="#" class="button" @click="toggleInsertCardForm(cardCollection.cardCollectionID)">Add a card</a>

                    </div>
                </div>
            </template>
        </div>

        <modal v-if="showInsertCardCollectionModal === true">
            <form @submit.prevent="validateBeforeSubmit" class="form form--modal"
                  :class="{'form--loading': (insertCardCollectionSubmitted && !insertCardCollectionSuccess), 'form--success': (insertCardCollectionSubmitted && insertCardCollectionSuccess)}">
                <div class="form__content">
                    <div class="form__group">
                        <label class="form__label" for="teamName">Collection name</label>
                        <input v-validate="'required'" data-vv-validate-on="blur"
                               :class="{'form__input--warning': errors.has('Collection name') }" class="form__input"
                               name="Collection name" type="text" id="teamName" placeholder="e.g. Deliverables"/>
                        <span class="form__warning" :show="errors.has('Collection name')">{{ errors.first('Collection name') }}</span>
                    </div>

                    <input v-validate="'required'" :value="ideaID" class="form__hidden" type="hidden" name="ideaID" id="ideaID" />

                    <div class="form__group">
                        <button type="submit" class="float-left button form__submit" @click="insertCardCollection()"
                                :disabled="errors.any()">Create card collection
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
                    <div class="checkMark" :class="{'checkMark--active': (insertCardCollectionSubmitted && insertCardCollectionSuccess)}">
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
                            You've created your collection, ready to add some cards?
                        </p>
                    </div>
                    <div class="form__buttons">
                        <a href="#" class="button form__button">Yes please!</a>
                        <a href="#" @click="showInsertCardCollectionModal = false" class="button button--ghost form__button">No thanks</a>
                    </div>
                </div>
            </form>
        </modal>
        <modalOverlay @click.native="showInsertCardCollectionModal = false" v-if="showInsertCardCollectionModal === true"/>

        <modal v-if="showInsertCardModal === true">
            <form @submit.prevent="validateBeforeSubmit" class="form form--modal"
                  :class="{'form--loading': (insertCardSubmitted && !insertCardSuccess), 'form--success': (insertCardSubmitted && insertCardSuccess)}">
                <div class="form__content">
                    <div class="form__group">
                        <label class="form__label" for="teamName">Card content</label>
                        <input v-validate="'required'" data-vv-validate-on="blur"
                               :class="{'form__input--warning': errors.has('Card content') }" class="form__input"
                               name="Card content" type="text" id="cardContent" placeholder="e.g. design team overview"/>
                        <span class="form__warning" :show="errors.has('Card content')">{{ errors.first('Card content') }}</span>
                    </div>

                    <input v-validate="'required'" :value="ideaID" class="form__hidden" type="hidden" name="ideaID" />
                    <input v-validate="'required'" :value="cardCollectionID" class="form__hidden" type="hidden" name="cardCollectionID" />

                    <div class="form__group">
                        <button type="submit" class="float-left button form__submit" @click="insertCard()"
                                :disabled="errors.any()">Insert Card
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
                    <div class="checkMark" :class="{'checkMark--active': (insertCardSubmitted && insertCardSuccess)}">
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
                            You've created your collection, ready to add some cards?
                        </p>
                    </div>
                    <div class="form__buttons">
                        <a href="#" class="button form__button">Yes please!</a>
                        <a href="#" @click="showInsertCardModal = false" class="button button--ghost form__button">No thanks</a>
                    </div>
                </div>
            </form>
        </modal>
        <modalOverlay @click.native="showInsertCardModal = false" v-if="showInsertCardModal === true"/>

    </div>
</template>

<script src="./Cards.js"></script>
