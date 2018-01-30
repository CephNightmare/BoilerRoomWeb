import Logo from "../logo/Logo.vue"

export default {
    name: 'header',
    data() {
        return {
            nav: [
                {name: 'Ideas', path: '/Ideas'},
                {name: 'Teams', path: '/Teams'}
            ]
        }
    },
    components: {
        Logo
    },
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input]
            return paths.some(path => {
                return this.$route.path.indexOf(path) === 0 // current path starts with this path string
            })
        }
    }
}