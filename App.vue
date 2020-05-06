<template>
    <div class="wrapper">
        <h1>GOODNOTES</h1>
        <nav>
            <img id="grid" src="./img/grid.png" alt="Grid" title="Grid View" v-on:click="viewGrid" />
            <img
                id="trash"
                src="./img/trash.png"
                alt="Delete"
                title="Delete Post-it"
                v-on:click="deleteCard"
            />
            <img
                id="create"
                src="./img/create.png"
                alt="Create"
                title="Create Post-it"
                v-on:click="createCard"
            />
            <img
                id="penInPaper"
                src="./img/pen-in-paper.png"
                alt="List"
                title="List View"
                v-on:click="viewList"
            />
            <img
                id="pen"
                src="./img/pen.png"
                alt="Font Color"
                title="Change Font Color"
                v-on:click="changeFontColor"
            />
            <img
                id="marker"
                src="./img/marker.png"
                alt="Post-it Color"
                title="Change Post-it Color"
                v-on:click="changePostItColor"
            />
        </nav>
        <h3>GOODNOTES POST-IT NOTES</h3>
        <Main v-on:grid="viewGrid" 
        v-bind:cards="cards"
        v-bind:showGrid="showGrid"
        v-on:hide="hideGrid"/>
    </div>
</template>

<script>
import Main from "./Main";

export default {
    name: "App",
    components: {
        Main: Main
    },
    data() {
        return {
            showGrid: true,
            availableCardIdentifiers: [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
            allColors: [
                "red",
                "green",
                "blue",
                "black",
                "orange",
                "grey",
                "purple",
                "lightblue",
                "cyan",
                "magenta",
                "lightgreen",
                "violet",
                "olive",
                "teal",
                "plum"
            ],
            cards: []
        };
    },
    methods: {
        viewGrid() {
            
            this.showGrid = true;
        },
        hideGrid(payload) {
            this.cards[payload.id]=payload
            this.showGrid = false;
        },

        deleteCard() {},
        createCard() {
            if (this.availableCardIdentifiers.length !== 0) {
                this.cards.push({
                    id: this.availableCardIdentifiers.shift(),
                    color: this.allColors[
                        Math.floor(Math.random() * this.allColors.length)
                    ],
                    text: "",
                    fontColor:""
                });
            }
        },

        viewList() {},
        changeFontColor() {},
        changePostItColor() {}
    }
};
</script>

<style>
.wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h1,
h3 {
    color: rgb(19, 19, 19);
    font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}

nav {
    width: 450px;
    min-width: 450px;
    display: flex;
    justify-content: space-around;
    border-bottom: 10px solid rgb(184, 184, 184);
    background-color: rgb(230, 230, 230);
    border-radius: 3px;
}

#trash {
    display: none;
}

img:first-of-type {
    margin-left: 3rem;
}
img:last-of-type {
    margin-right: 3rem;
}
img {
    width: 10%;
}
img:hover {
    background-color: rgba(128, 128, 128, 0.452);
    cursor: pointer;
}
</style>