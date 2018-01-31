import modal from '../../../components/Modal/Modal.vue';
import modalOverlay from '../../../components/Modal/ModalOverlay.vue';
import ideaTiles from '../../../components/TileList/Ideas/IdeaTiles.vue';

export default {
    name: 'ideas',
    components: {
        modal,
        modalOverlay,
        ideaTiles
    },
    data () {
        return {
            showModal: false,
            personalIdeas: null,
            teamIdeas: null,
            notAllowed: false
        }
    },
    beforeMount(){
        this.getIdeas();
        this.getTeamIdeas();

        if(this.$route.params.validation) {
            this.notAllowed = true;
        }
    },
    methods: {
        getIdeas() {

            this.$store.dispatch('getPrivateIdeas').then((data) => {
                this.personalIdeas = data["data"];
            }).catch((error) => {
            });
        },
        getTeamIdeas() {

            this.$store.dispatch('getTeamIdeas').then((data) => {
                this.teamIdeas = data["data"];
            }).catch((error) => {
            });
        },
        toggleModal() {
            this.showModal != this.showModal;
        }
    }
}