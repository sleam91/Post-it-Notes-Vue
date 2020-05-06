<template>
<body>
    <h1>GOODNOTES</h1>
    <nav>
        <img id="rutnet" src="./img/grid.png" alt="Grid" title="Grid View" />
        <img id="trash" src="./img/trash.png" alt="Delete" title="Delete Post-it" />
        <img id="create" src="./img/create.png" alt="Create" title="Create Post-it" />
        <img id="penInPapper" src="./img/pen-in-paper.png" alt="List" title="List View" />
        <img id="pen" src="./img/pen.png" alt="Font Color" title="Change Font Color" />
        <img id="marker" src="./img/marker.png" alt="Post-it Color" title="Change Post-it Color" />
    </nav>
    <h3>GOODNOTES POST-IT NOTES</h3>
    <Main />
</body>
</template>

<script>
import Main from "./Main";

export default {
    name: "App",
    components: {
        Main: Main
    },
    data() {
        return {};
    },
    methods: {}
};
</script>

<style>
body {
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