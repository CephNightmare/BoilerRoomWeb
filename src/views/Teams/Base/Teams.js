import modal from '../../../components/Modal/Modal.vue';
import modalOverlay from '../../../components/Modal/ModalOverlay.vue';
import teamTiles from '../../../components/TileList/Teams/TeamTiles.vue';
import ColorGrid from '../../../components/ColorGrid/ColorGrid.vue';

export default {
    name: 'teams',
    components: {
        modal,
        modalOverlay,
        teamTiles,
        ColorGrid
    },
    data () {
        return {
            showModal: false,
            teams: null,
            insertTeamSubmitted: false,
            insertTeamSuccess: false,
            notAllowed: false,
            colors: [
                "blue",
                "green",
                "lime",
                "pink",
                "red",
                "yellow"
            ]
        }
    },
    beforeMount(){
        this.getTeams();
    },
    methods: {
        validateBeforeSubmit() {
            this.$validator.validateAll()
        },
        getTeams() {
            this.$store.dispatch('getAllTeams').then((data) => {
                this.teams = data["data"];
            }).catch((error) => {
            });
        },
        insertTeam() {
            this.$validator.validateAll().then((result) => {
                if (result) {
                    let that = this;
                    that.insertTeamSubmitted = true;

                    window.setTimeout(function () {
                        let formData = $(".form").serialize();
                        that.$store.dispatch('insertTeam', formData).then(() => {
                            that.insertTeamSuccess = true;
                            that.getTeams();
                        }).catch((error) => {

                        });
                    }, 2000);
                }
            });
        },
    }
}