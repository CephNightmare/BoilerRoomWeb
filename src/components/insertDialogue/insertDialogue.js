export default {
    name: "insertDialogue",
    data () {
        return {}
    },
    methods: {
        insertTodo: function (item) {
            let formData = $(".insertDialogue").serialize();

            console.log(this.$route.params);

            this.$store.dispatch('insertTodo', [formData, this.$route.params.id]).then(() => {
            this.$emit('updateTodos');
            this.$refs.todoTitle.value = null;

            }).catch((error) => {

            });
        }
    }
}