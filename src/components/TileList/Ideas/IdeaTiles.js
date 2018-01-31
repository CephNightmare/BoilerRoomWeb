import IdeaTile from "../../Tile/Ideas/IdeaTile.vue";

export default {
    name: 'ideaTiles',
    data () {
        return {}
    },
    components: {
        IdeaTile
    },
    props: {
        list: {},
        listTitle: "",
        listAddNew: ""
    },
    methods: {
    }
}