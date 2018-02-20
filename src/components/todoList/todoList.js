import insertDialogue from '../../components/insertDialogue/insertDialogue.vue';

export default {
    name: 'todoList',
    components: {
        insertDialogue
    },
    data() {
        return {
            todos: null,
        }
    },
    beforeMount() {
        this.getTodos();
    },
    methods: {
        getTodos() {
            this.$store.dispatch('getTodos', this.$route.params.id).then((data) => {
                this.todos = data["data"];
            }).catch((error) => {
            });
        }
    }
}