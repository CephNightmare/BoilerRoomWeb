import asideFilter from '../../../components/asideFilter/asideFilter.vue';
import todoList from '../../../components/todoList/todoList.vue';

export default {
    name: 'Cards',
    components: {
        asideFilter,
        todoList
    },
    created() {
        this.validateIdeaAccess(this.$route.params['id']);
    },
    methods: {
        validateIdeaAccess(ideaID) {
            this.$store.dispatch('validateIdeaAccess', ideaID).then((data) => {
            }).catch((error) => {
                this.$router.push({
                    name: 'Ideas',
                    params: {validation: 'NOT_ALLOWED'}
                });
            });
        }
    }
}