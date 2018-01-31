import InsertIdea from "./Ideas/InsertIdea.vue";
import InsertTeam from "./Teams/InsertTeam.vue";

export default {
    name: 'modal',
    data () {
        return {
        }
    },
    components: {
        InsertIdea,
        InsertTeam
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