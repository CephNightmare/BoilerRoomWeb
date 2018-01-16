<template>
    <transition name="popup">
        <div class="modal">
            <component :is="dynamicComponent" v-on:closeModal="closeModal()"></component>
        </div>
    </transition>
</template>

<script>
    import InsertIdea from "./Ideas/InsertIdea";

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
            closeModal(){
                this.$emit("closeModal");
            }
        }
    }
</script>
