export default {
    name: 'ColorGrid',
    data () {
        return {
            activeMessage: "",
            items: [
                "blue",
                "green",
                "lime",
                "pink",
                "red",
                "yellow"
            ]
        }
    },
    props: {
        list: {}
    },
    methods: {
        toggle: function (item) {
            this.activeMessage = item;
        },
        isActive: function (item) {
            return this.activeMessage === item
        }
    }
}