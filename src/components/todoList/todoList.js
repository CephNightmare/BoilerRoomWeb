export default {
    name: 'todoList',
    props: {
        "getTodoList": false
    },
    watch: {
        getTodoList() {
            this.getTodos();
        }
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
                this.$emit('todosUpdated');
            }).catch((error) => {
            });
        }
    }
}