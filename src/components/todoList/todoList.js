import insertDialogue from '../../components/insertDialogue/insertDialogue.vue';

export default {
    name: 'todoList',
    components: {
        insertDialogue
    },
    computed: {
        todos() {
            return this.$store.getters.todos
        }
    },
    beforeMount() {
        this.getTodos();
    },
    methods: {
        getTodos() {
            this.$store.dispatch('getTodos', this.$route.params.id).catch((error) => {

            });
        }
    }
}