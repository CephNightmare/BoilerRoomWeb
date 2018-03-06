import modal from '../../../components/Modal/Modal.vue';
import modalOverlay from '../../../components/Modal/ModalOverlay.vue';
import Tile from '../../../components/Tile/Tile.vue';

export default {
    name: 'Cards',
    components: {
        Tile,
        modal,
        modalOverlay
    },
    computed: {
        CardCollectionList() {
            return this.$store.getters.cardCollectionList;
        },
        CardList() {
            return this.$store.getters.cards;
        },
        currentIdea() {
            return this.$store.state.route.params['id'];
        }
    },
    data () {
        return {
            insertCardCollectionSuccess: false,
            insertCardCollectionSubmitted: false,
            showInsertCardCollectionModal: false,
            insertCardSuccess: false,
            insertCardSubmitted: false,
            showInsertCardModal: false,
            ideaID: null,
            cardCollectionID: null,
        }
    },
    created(){
        this.validateIdeaAccess(this.currentIdea);
        this.setIdeaID(this.currentIdea);
        this.getIdeaCardCollections(this.currentIdea);
        this.getIdeaCards(this.currentIdea);
    },
    methods: {
        validateIdeaAccess(ideaID) {
            this.$store.dispatch('validateIdeaAccess', ideaID).then((data) => {
            }).catch((error) => {
                this.$router.push({
                    name: 'Ideas',
                    params: {validation: 'NOT_ALLOWED'}
                });
            });
        },
        setIdeaID(ideaID) {
            this.ideaID = ideaID;
        },
        toggleInsertCardForm(cardCollectionID) {
            this.cardCollectionID = cardCollectionID;
            this.showInsertCardModal = true;
        },
        validateBeforeSubmit() {
            this.$validator.validateAll()
        },
        FilteredCards(category) {
            console.log("filter stated");

            let items = (this.CardList || []).filter(function (el) {
                console.log(el);
                console.log(el.cardCollectionID === category);

                return el.cardCollectionID === category;
            });

            return items;
        },
        insertCardCollection() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let that = this;
                    that.insertCardCollectionSubmitted = true;

                    window.setTimeout(function () {
                        let formData = $(".form").serialize();
                        that.$store.dispatch('insertCardCollection', formData).then(() => {
                            that.insertCardCollectionSuccess = true;
                            that.getIdeaCards(that.$route.params.id);
                        }).catch((error) => {

                        });
                    }, 2000);
                }
            });
        },
        insertCard () {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let that = this;
                    that.insertCardSubmitted = true;

                    window.setTimeout(function () {
                        let formData = $(".form").serialize();

                        that.$store.dispatch('insertCard', [formData, that.currentIdea]).then(() => {
                            that.insertCardSuccess = true;
                            that.getIdeaCards(that.currentIdea);
                        }).catch((error) => {
                            console.log(error);
                        });
                    }, 2000);
                }
            });
        },
        getIdeaCardCollections(ideaID) {
            this.$store.dispatch('getIdeaCardCollections', ideaID).catch((error) => {
            });
        },
        getIdeaCards(ideaID) {
            this.$store.dispatch('getIdeaCards', ideaID).catch((error) => {
            });
        },
    }
}