export default {
    name: 'idea',
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
                console.log("allowed");
            }).catch((error) => {
                console.log("not allowed");
            });
        }
    }
}