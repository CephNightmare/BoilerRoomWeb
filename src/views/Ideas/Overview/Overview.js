import modal from '../../../components/Modal/Modal.vue';
import modalOverlay from '../../../components/Modal/ModalOverlay.vue';
import ideaTiles from '../../../components/TileList/Ideas/IdeaTiles.vue';
import ColorGrid from '../../../components/ColorGrid/ColorGrid.vue';

export default {
    name: 'ideaOverview',
    components: {
        modal,
        modalOverlay,
        ideaTiles,
        ColorGrid
    },
    data () {
        return {
            showModal: false,
            insertIdeaSubmitted: false,
            ideaInserted: false,
            insertedIdeaID: null,
            personalIdeas: null,
            teamCollection: null,
            notAllowed: false
        }
    },
    beforeMount(){
        this.getIdeas();
        this.getTeamIdeas();

        if (this.$route.params.validation) {
            this.notAllowed = true;
        }
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll()
        },

        getIdeas() {
            this.$store.dispatch('getPrivateIdeas').then((data) => {
                this.personalIdeas = data["data"];
            }).catch((error) => {
            });
        },

        getTeamIdeas() {

            this.$store.dispatch('getTeamIdeas').then((data) => {
                this.teamCollection = data["data"];
            }).catch((error) => {
            });
        },

        insertIdea() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let that = this;
                    that.insertIdeaSubmitted = true;

                    window.setTimeout(function () {
                        let formData = $(".form").serialize();
                        that.$store.dispatch('insertIdea', formData).then((ideaID) => {

                            that.ideaInserted = true;
                            that.insertedIdeaID = ideaID;

                            that.getIdeas();
                            that.getTeamIdeas();

                        }).catch((error) => {

                        });
                    }, 2000);
                }
            });
        }
    }
}