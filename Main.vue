<template>
    <main>
        <div
            v-for="card in cards"
            v-bind:key="card.id"
            v-bind:card="card"
            class="card"
            v-bind:id="card.id"
            v-bind:style="{backgroundColor: card.color}"
            v-on:click="expandCard"
        ></div>

        <PostIt v-if="currentCardvisible&&!showGrid" v-bind:currentCard="currentCard" />
    </main>
</template>

<script>
import PostIt from "./PostIt";
export default {
    name: "Main",

    components: {
        PostIt: PostIt
    },

    props: {
        cards: Array,
        showGrid: Boolean
    },
    data() {
        return {
            currentCardvisible: false,
            currentCard: {}
        };
    },
    methods: {
        expandCard(event) {
            let eventId = event.target.id;
            console.log(eventId)
            this.currentCard = {
                id: eventId,
                color: this.cards[eventId].color,
                text: this.cards[eventId].text,
                fontColor: this.cards[eventId].fontColor
            };
            this.currentCardvisible = true;
            this.$emit("hide",this.currentCard)
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
.card {
    grid-area: auto;
    border-radius: 3px;
    box-shadow: 4px 4px 5px 0px rgba(135, 135, 135, 1);
    background-color: dodgerblue;
    transition: transform 0.3s ease-out;
    /* display: none; */
}

.card:hover {
    transform: scale(1.1);
    cursor: pointer;
}
</style>