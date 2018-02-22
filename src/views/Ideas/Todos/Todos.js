import asideList from '../../../components/asideList/asideList.vue';
import todoList from '../../../components/todoList/todoList.vue';
import addTodoCategory from '../../../components/addTodoCategory/addTodoCategory.vue';

export default {
    name: 'Cards',
    computed: {
        todoCategoriesList() {
            return this.$store.getters.todoCategories;
        }
    },
    components: {
        asideList,
        todoList,
        addTodoCategory
    },
    created() {
        this.validateIdeaAccess(this.$route.params['id']);
        this.updateTodoCategories();
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
        },
        updateTodoCategories() {
            this.$store.dispatch('updateTodoCategories', this.$route.params.id).catch((error) => {
            });
        }
    }
}