export default {
    name: "insertDialogue",
    data () {
        return {
            showCategoryList: false,
            selectedCategoryID: null,
            selectedCategoryTitle: null
        }
    },
    computed: {
        currentIdea() {
            return this.$store.state.route.params['id'];
        },
        todoCategoriesList() {
            return this.$store.getters.todoCategories;
        }
    },
    methods: {
        insertTodo: function (item) {
            let formData = $(".insertDialogue").serialize();

            this.$store.dispatch('insertTodo', [formData, this.currentIdea]).then(() => {
                this.$emit('updateTodos');
                this.$refs.todoTitle.value = null;

            }).catch((error) => {

            });
        }
    }
}