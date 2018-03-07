export default {
    name: 'ideaDetail',
    components: {},
    data () {
        return {
            showModal: false,
            ideaDetails: null
        }
    },
    beforeMount(){
        this.validateIdeaAccess(this.$route.params['id']);
        this.getIdeaDetails(this.$route.params['id']);
    },
    methods: {
        validateIdeaAccess(ideaID) {
            this.$store.dispatch('validateIdeaAccess', ideaID).catch((error) => {
                this.$router.push({
                    name: 'Ideas',
                    params: {validation: 'NOT_ALLOWED'}
                });
            });
        },
        getIdeaDetails(ideaID) {
            this.$store.dispatch('getIdeaDetails', ideaID).then((data) => {
                this.ideaDetails = data;
            });
        }
    }
}