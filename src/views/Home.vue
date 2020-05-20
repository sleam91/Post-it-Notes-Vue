<template>
    <div class="home">
        <h1>GOODNOTES</h1>
        <nav>
            <img id="grid" src="@/assets/grid.png" alt="Grid" title="Grid View" v-on:click="viewGrid" />
            <img
                id="trash"
                src="@/assets/trash.png"
                alt="Delete"
                title="Delete Post-it"
                v-if="showTrash"
                v-on:click="deleteCard"
            />
            <img
                id="create"
                src="@/assets/create.png"
                alt="Create"
                title="Create Post-it"
                v-if="showCreate"
                v-on:click="createCard"
            />
            <img
                id="penInPaper"
                src="@/assets/pen-in-paper.png"
                alt="List"
                title="List View"
                v-on:click="viewList"
            />
            <img
                id="pen"
                src="@/assets/pen.png"
                alt="Font Color"
                title="Change Font Color"
                v-on:click="changeFontColor"
            />
            <img
                id="marker"
                src="@/assets/marker.png"
                alt="Post-it Color"
                title="Change Post-it Color"
                v-on:click="changePostItColor"
            />
        </nav>
        <h3>GOODNOTES POST-IT NOTES</h3>
        <Main
            v-on:grid="viewGrid"
            v-bind:cards="cards"
            v-bind:showGrid="showGrid"
            v-bind:showList="showList"
            v-on:hide="hideGrid"
        />
    </div>
</template>

<script>
import Main from "@/components/Main";

export default {
    name: "Home",
    components: {
        Main: Main
    },
    data() {
        return {
            currentCard: {},
            showGrid: true,
            showList: false,
            showTrash: false,
            showCreate: true,
            viewMode: "grid",
            availableCardIdentifiers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
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
            (this.viewMode = "grid"), (this.showGrid = true);
            this.showList = false;
            this.saveCardAndUpdateView();
        },
        hideGrid(payload) {
            this.currentCard = payload;
            this.showGrid = false;
            this.showList = false;
            this.showTrash = true;
            this.showCreate = false;
        },

        deleteCard() {
            this.availableCardIdentifiers.push(this.currentCard.id);
            this.cards = this.cards.filter(
                card => card.id !== this.currentCard.id
            );
            this.currentCard = {};

            this.showCreate = true;
            if (this.viewMode === "grid") {
                this.showGrid = true;
            } else {
                this.showList = true;
            }

            this.showTrash = false;
        },
        createCard() {
            if (this.availableCardIdentifiers.length !== 0) {
                this.cards.push({
                    id: this.availableCardIdentifiers.shift(),
                    color: this.allColors[
                        Math.floor(Math.random() * this.allColors.length)
                    ],
                    text: "",
                    fontColor: ""
                });
            }
        },

        viewList() {
            this.viewMode = "list";
            this.showGrid = false;
            this.showList = true;
            this.saveCardAndUpdateView();
        },
        changeFontColor() {
            if (Object.keys(this.currentCard).length !== 0) {
                this.currentCard.fontColor = this.allColors[
                    Math.floor(Math.random() * this.allColors.length)
                ];
            }
        },
        changePostItColor() {
            if (Object.keys(this.currentCard).length !== 0) {
                this.currentCard.color = this.allColors[
                    Math.floor(Math.random() * this.allColors.length)
                ];
            }
        },
        saveCardAndUpdateView() {
            if (Object.keys(this.currentCard).length !== 0) {
                let card = this.cards.find(
                    card => card.id === this.currentCard.id
                );
                card.text = this.currentCard.text;
                card.color = this.currentCard.color;
                card.fontColor = this.currentCard.fontColor;
                this.currentCard = {};
                this.showCreate = true;
                this.showTrash = false;
            }
        }
    }
};
</script>

<style>
.home {
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
