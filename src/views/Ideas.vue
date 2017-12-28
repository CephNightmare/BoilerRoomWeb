<template>
    <div class="container">
        <draggable class="tileList">
            <a href="#" class="tileList__tile tile">
                <span class="tile__caption">Privé</span>
                <h3 class="tile__title">Boilerroom</h3>

                <div class="tile__progress"></div>
                <span class="tile__favorite">*</span>
            </a>
            <a href="#" class="tileList__tile tile">
                <span class="tile__caption">Openbaar</span>
                <h3 class="tile__title">Camperplanning</h3>

                <div class="tile__progress"></div>
                <span class="tile__favorite">*</span>
            </a>
            <a href="#" class="tileList__tile tile">
                <span class="tile__caption">Privé</span>
                <h3 class="tile__title">Een mooi idee</h3>

                <div class="tile__progress"></div>
                <span class="tile__favorite">*</span>
            </a>
        </draggable>
    </div>
</template>

<script>
    import draggable from 'vuedraggable';

    export default {
        name: 'ideas',
        components: {
            draggable
        },
        data: function () {
            return {}
        },
        methods: {}
    }
</script>
