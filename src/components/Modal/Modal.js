import InsertTeam from "./Teams/InsertTeam.vue";

export default {
    name: 'modal',
    data () {
        return {
        }
    },
    components: {
        InsertTeam
    },
    props: {
        componentName: "",
        title: ""
    }
}