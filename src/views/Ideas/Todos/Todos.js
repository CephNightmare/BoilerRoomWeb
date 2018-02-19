import insertDialogue from '../../../components/insertDialogue/insertDialogue.vue';
import asideFilter from '../../../components/asideFilter/asideFilter.vue';
import todoList from '../../../components/todoList/todoList.vue';

export default {
    name: 'Cards',
    components: {
        insertDialogue,
        asideFilter,
        todoList
    },
    data () {
        return {
            updateTodoList: false
        }
    },
    beforeMount(){
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