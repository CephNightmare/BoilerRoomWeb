import modal from '../../../components/Modal/Modal.vue';
import modalOverlay from '../../../components/Modal/ModalOverlay.vue';
import CardList from '../../../components/CardList/CardList.vue';
import Tile from '../../../components/Tile/Tile.vue';

export default {
    name: 'Cards',
    components: {
        CardList,
        Tile,
        modal,
        modalOverlay
    },
    data () {
        return {
            cards: null,
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
    beforeMount(){
        this.validateIdeaAccess(this.$route.params['id']);
        this.setIdeaID(this.$route.params['id']);
        this.getIdeaCards(this.$route.params['id']);
    },
    methods: {
        validateIdeaAccess(ideaID) {

            console.log(this.$route.params);

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
                        that.$store.dispatch('insertCard', formData).then(() => {
                            that.insertCardSuccess = true;
                            that.getIdeaCards(that.$route.params.id);
                        }).catch((error) => {

                        });
                    }, 2000);
                }
            });
        },
        getIdeaCards(ideaID) {
            this.$store.dispatch('getIdeaCards', ideaID).then((data) => {
                this.cards = data["data"];
            }).catch((error) => {
            });
        },
    }
}