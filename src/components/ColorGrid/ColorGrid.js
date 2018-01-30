export default {
    name: 'ColorGrid',
    data () {
        return {
            activeMessage: ""
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