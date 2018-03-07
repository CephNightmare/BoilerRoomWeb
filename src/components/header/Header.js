import Logo from "../logo/Logo.vue"

export default {
    name: 'header',
    data() {
        return {
            nav: [
                {name: 'Ideas', path: '/Ideas/Overview'},
                {name: 'Teams', path: '/Teams'}
            ],
            ideaNav: [
                {name: 'Cards', path: 'Cards'},
                {name: 'Todos', path: 'Todos'}
            ]
        }
    },
    components: {
        Logo
    },
    methods: {
        subIsActive(input) {
            const paths = Array.isArray(input) ? input : [input];
            return paths.some(path => {
                console.log(paths);
                console.log(this.$route.path);
                console.log(this.$route.path.indexOf(path) === 0);
                return this.$route.path.indexOf(path) === 0 // current path starts with this path string
            })
        }
    }
}