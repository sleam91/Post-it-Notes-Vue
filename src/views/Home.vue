<template>
    <div class="home">
        <h1>GOODNOTES</h1>
        <nav>
            <img
                id="grid"
                src="@/assets/grid.png"
                alt="Grid"
                title="Grid View"
                v-on:click="viewGrid"
            />
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
                v-on:click="$store.dispatch('changeFontColor')"
            />
            <img
                id="marker"
                src="@/assets/marker.png"
                alt="Post-it Color"
                title="Change Post-it Color"
                v-on:click="$store.dispatch('changePostItColor')"
            />
        </nav>
        <h3>GOODNOTES POST-IT NOTES</h3>
        <Main v-bind:showGrid="showGrid" v-bind:showList="showList" v-on:hide="hideGrid" />
    </div>
</template>

<script>
import Main from "@/components/Main";

export default {
    name: "Home",
    components: {
        Main
    },
    data() {
        return {
            showGrid: true,
            showList: false,
            showTrash: false,
            showCreate: true,
            viewMode: "grid"
        };
    },
    methods: {
        viewGrid() {
            this.viewMode = "grid";
            this.showGrid = true;
            this.showList = false;
            this.saveCardAndUpdateView();
        },
        hideGrid() {
            this.showGrid = false;
            this.showList = false;
            this.showTrash = true;
            this.showCreate = false;
        },
        viewList() {
            this.viewMode = "list";
            this.showGrid = false;
            this.showList = true;
            this.saveCardAndUpdateView();
        },
        createCard() {
            this.$store.dispatch("createCard");
        },
        deleteCard() {
            this.$store.dispatch("deleteCard");
            this.showCreate = true;
            if (this.viewMode === "grid") {
                this.showGrid = true;
            } else {
                this.showList = true;
            }
            this.showTrash = false;
        },
        saveCardAndUpdateView() {
            this.$store.dispatch("saveCardAndUpdateView");
            this.showCreate = true;
            this.showTrash = false;
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
