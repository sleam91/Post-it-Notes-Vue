<template>
    <div class="currentCard" v-bind:style="{backgroundColor: currentCard.color}">
        <textarea v-model="currentCard.text" v-bind:style="{color: currentCard.fontColor}"></textarea>
    </div>
</template>

<script>
export default {
    name: "PostIt",
    props: {
        currentCard: Object
    },
    data() {
        return {
            
        };
    },
    methods: {
        changeFontColor() {},
        changePostItColor() {}
    }
};
</script>

<style>
.currentCard {
    grid-area: 1/1/5/4;
    border-radius: 3px;
    box-shadow: 4px 4px 5px 0px rgba(135, 135, 135, 1);
    background-color: dodgerblue;
    display: flex;
    align-items: center;
    justify-content: center;
}

textarea {
    height: 85%;
    width: 80%;

    align-self: center;
    text-align: center;
    color: white;
    font-family: cursive;
    font-size: x-large;
    font-weight: 900;
    border: none;
    background-color: transparent;
    resize: none;
    outline: none;
    box-shadow: none;
    overflow: hidden;
}
</style>