import InsertIdea from "./Ideas/InsertIdea.vue";

export default {
    name: 'modal',
    data () {
        return {
        }
    },
    components: {
        InsertIdea
    },
    props: {
        componentName: "",
        title: ""
    },
    computed: {
        dynamicComponent() {
            return this.componentName;
        }
    },
    methods: {
        emitMethod(methodName){
            this.$emit(methodName);
        }
    }
}