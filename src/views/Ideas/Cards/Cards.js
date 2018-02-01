import CardList from '../../../components/CardList/CardList.vue';

export default {
    name: 'Cards',
    components: {
        CardList
    },
    data () {
        return {
            cards: null
        }
    },
    beforeMount(){
        this.validateIdeaAccess(this.$route.params.id);
    },
    methods: {
        validateIdeaAccess(ideaID) {

            this.$store.dispatch('validateIdeaAccess', ideaID).then((data) => {
            }).catch((error) => {
                this.$router.push({
                    name: 'Ideas',
                    params: { validation: 'NOT_ALLOWED' }
                });
            });

        },
        getTeamIdeas() {

            this.$store.dispatch('getTeamIdeas').then((data) => {
                this.teamCollection = data["data"];
            }).catch((error) => {
            });

        },
    }
}