import TeamTile from "../../Tile/Teams/TeamTile.vue";

export default {
    name: 'teamTiles',
    data () {
        return {}
    },
    components: {
        TeamTile
    },
    props: {
        list: {},
        listTitle: "",
        listAddNew: ""
    },
    methods: {
    }
}