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
            ideas: null,
            notAllowed: false
        }
    },
    beforeMount(){
        this.getIdeas();

        if(this.$route.params.validation) {
            this.notAllowed = true;
        }
    },
    methods: {
        getIdeas() {
            let ListIdeas;

            this.$store.dispatch('getAllIdeas').then((data) => {
                this.ideas = data["data"];
            }).catch((error) => {
                ListIdeas = "there are no ideas";
            });
        },
        toggleModal() {
            this.showModal != this.showModal;
        }
    }
}