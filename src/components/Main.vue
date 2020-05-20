<template>
    <main v-bind:class = "(showList)?'list':''">
        <div
            v-for="card in cards"
            v-bind:key="card.id"
            v-bind:card="card"
            class="card"
            v-bind:id="card.id"
            v-bind:style="{backgroundColor: card.color}"
            v-on:click="expandCard"
        ></div>

        <PostIt v-if="!showGrid&&!showList" v-bind:currentCard="currentCard" />
    </main>
</template>

<script>
import PostIt from "@/components/PostIt";
export default {
    name: "Main",

    components: {
        PostIt: PostIt
    },

    props: {
        cards: Array,
        showGrid: Boolean,
        showList: Boolean
    },
    data() {
        return {
            currentCard: {}
        };
    },
    methods: {
        expandCard(event) {
            let eventId = parseInt(event.target.id, 10);

            let card = this.cards.find(card => card.id === eventId);

            this.currentCard = {
                id: card.id,
                color: card.color,
                text: card.text,
                fontColor: card.fontColor
            };

            this.$emit("hide", this.currentCard);
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