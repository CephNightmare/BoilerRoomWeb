export default {
    name: 'addTodoCategory',
    components: {},
    data() {
        return {
            showInsertField: false
        }
    },
    methods: {
        addTodoCategory() {

            let formData = $(".addTodoCategory").serialize();

            this.$store.dispatch('addTodoCategory', [formData, this.$route.params.id]).then((data) => {
                this.showInsertField = false;
                this.$refs.title.value = null;
                this.updateTodoCategories();
            }).catch((error) => {
            });
        },
        updateTodoCategories() {
            this.$store.dispatch('updateTodoCategories', this.$route.params.id).catch((error) => {
            });
        }
    }
}