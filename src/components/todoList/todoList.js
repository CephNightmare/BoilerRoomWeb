import insertDialogue from '../../components/insertDialogue/insertDialogue.vue';

export default {
    name: 'todoList',
    components: {
        insertDialogue
    },
    computed: {
        todos() {
            return this.$store.getters.todos
        },
        todoCategoriesList() {
            return this.$store.getters.todoCategories;
        }
    },
    beforeMount() {
        this.getTodos();
    },
    methods: {
        getTodos() {
            this.$store.dispatch('getTodos', this.$route.params.id).catch((error) => {

            });
        },
        filteredTodos(category) {

            let items = (this.todos || []).filter(function (el) {
                return (el.todoCategory || '') === category;
            });

            return items;
        }
    }
}