<template>
    <main v-bind:class = "(showList)?'list':''">
        <div
            v-for="card in $store.state.cards"
            v-bind:key="card.id"
            v-bind:card="card"
            class="card"
            v-bind:id="card.id"
            v-bind:style="{backgroundColor: card.color}"
            v-on:click="expandCard(card.id)"
        ></div>

        <PostIt v-if="!showGrid&&!showList" />
    </main>
</template>

<script>
import PostIt from "@/components/PostIt";
export default {
    name: "Main",

    components: {
        PostIt
    },

    props: {
        showGrid: Boolean,
        showList: Boolean
    },
    data() {
        return {
            
        };
    },
    methods: {
        expandCard(id) {
            this.$store.dispatch('expandCard',id)
            this.$emit("hide");
        }
    }
};
</script>

<style>
main {
    height: 500px;
    width: 350px;
    min-width: 350px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 20px;
    grid-row-gap: 30px;
}

.list{
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 1fr);
    grid-column-gap: 0;
    grid-row-gap: 12px;
}
.card {
    grid-area: auto;
    border-radius: 3px;
    box-shadow: 4px 4px 5px 0px rgba(135, 135, 135, 1);
    background-color: dodgerblue;
    transition: transform 0.3s ease-out;
}

.card:hover {
    transform: scale(1.1);
    cursor: pointer;
}
</style>