import modal from '../../../components/Modal/Modal.vue';
import modalOverlay from '../../../components/Modal/ModalOverlay.vue';
import teamTiles from '../../../components/TileList/Teams/TeamTiles.vue';

export default {
    name: 'teams',
    components: {
        modal,
        modalOverlay,
        teamTiles
    },
    data () {
        return {
            showModal: false,
            teams: null,
            notAllowed: false
        }
    },
    beforeMount(){
        this.getTeams();
    },
    methods: {
        getTeams() {
            let ListTeams;

            this.$store.dispatch('getAllTeams').then((data) => {
                this.teams = data["data"];
            }).catch((error) => {
                ListTeams = "there are no teams";
            });
        },
        toggleModal() {
            this.showModal != this.showModal;
        }
    }
}