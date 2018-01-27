import modal from '../../../components/Modal/Modal.vue';
import modalOverlay from '../../../components/Modal/ModalOverlay.vue';
import tileList from '../../../components/TileList/TileList.vue';

export default {
    name: 'ideas',
    components: {
        modal,
        modalOverlay,
        tileList
    },
    data () {
        return {
            showModal: false,
            ideas: null
        }
    },
    beforeMount(){
        this.getIdeas()
    },
    methods: {
        getIdeas() {
            let ListIdeas;

            this.$store.dispatch('getAllIdeas').then((data) => {
                ListIdeas = data["data"];
                console.log(ListIdeas);
                this.ideas = ListIdeas;
            }).catch((error) => {
                ListIdeas = "there are no ideas";
            });
        },
        toggleModal() {
            console.log("bubbled up, toggling now");
            this.showModal != this.showModal;
        }
    }
}