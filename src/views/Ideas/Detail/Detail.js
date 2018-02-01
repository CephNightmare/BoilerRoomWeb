export default {
    name: 'ideaDetail',
    components: {
    },
    data () {
        return {
            showModal: false,
            ideas: null
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
        }
    }
}