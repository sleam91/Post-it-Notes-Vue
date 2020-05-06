<template>
<main>
    <PostIt/>
</main>
</template>

<script>
import PostIt from "./PostIt";
export default {
    name: "Main",
    components: {
        PostIt: PostIt
    },
    data() {
        return{

        };
    },
    methods: {}
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

.card{

    grid-area: auto;
    border-radius: 3px;
    box-shadow: 4px 4px 5px 0px rgba(135,135,135,1);
    background-color: dodgerblue;
    transition: transform 0.3s ease-out;
    /* display: none; */
}

.card:hover{
    transform: scale(1.1);
    cursor: pointer;
}

</style>