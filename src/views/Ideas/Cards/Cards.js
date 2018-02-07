import modal from '../../../components/Modal/Modal.vue';
import modalOverlay from '../../../components/Modal/ModalOverlay.vue';
import CardList from '../../../components/CardList/CardList.vue';

export default {
    name: 'Cards',
    components: {
        CardList,
        modal,
        modalOverlay
    },
    data () {
        return {
            cards: null,
            insertCardSuccess: false,
            insertCardSubmitted: false,
            showModal: false,
            ideaID: null,
        }
    },
    beforeMount(){
        this.validateIdeaAccess(this.$route.params.id);

        this.setFormID(this.$route.params.id);
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
        setFormID(ideaID) {
            this.ideaID = ideaID;
        },
        validateBeforeSubmit() {
            this.$validator.validateAll()
        },
        insertCardCollection() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let that = this;
                    that.insertCardSubmitted = true;

                    window.setTimeout(function () {
                        let formData = $(".form").serialize();
                        that.$store.dispatch('insertCardCollection', formData).then(() => {
                            that.insertCardSuccess = true;
                            that.getIdeaCards();
                        }).catch((error) => {

                        });
                    }, 2000);
                }
            });
        },
        getIdeaCards() {
            // this.$store.dispatch('getIdeaCards').then((data) => {
            //     this.teamCollection = data["data"];
            // }).catch((error) => {
            // });
        },
    }
}