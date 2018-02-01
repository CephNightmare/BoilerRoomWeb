export default {
    name: 'Cards',
    components: {
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

            console.log(ideaID);

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