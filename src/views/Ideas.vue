<template>
    <div class="container">

        <draggable class="tileList">
            <a v-for="idea in ideas" href="#" class="tileList__tile tile">
                <span class="tile__caption">Private</span>
                <h3 class="tile__title">{{ idea.IdeaName }}</h3>

                <div class="tile__progress"></div>
                <span class="tile__favorite">*</span>
            </a>
            <a href="#" draggable="false" @click="showModal = !showModal" class="tileList__tile tile tile--cta">
                <h3 class="tile__title">Create an idea</h3>
            </a>
        </draggable>

        <modal v-on:closeModal="showModal = false" componentName="InsertIdea" v-if="showModal === true" />
        <modalOverlay @click.native="getIdeas()" v-if="showModal === true"/>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';
    import modal from './components/Modal/Modal';
    import modalOverlay from './components/Modal/ModalOverlay';

    export default {
        name: 'ideas',
        components: {
            draggable,
            modal,
            modalOverlay
        },
        data () {
            return {
                showModal: false,
                ideas: null
            }
        },
        beforeMount(){
            this.getIdeas()
        },
        methods: {
            getIdeas() {
                this.showModal = false;
                let ListIdeas;

                this.$store.dispatch('getAllIdeas').then((data) => {
                    ListIdeas = data["data"];
                    this.ideas = ListIdeas;
                }).catch((error) => {
                    ListIdeas = "there are no ideas";
                });
            }
        }
    }
</script>
