<template>
<div>
    
</div>
</template>

<script>
export default {
    name: "PostIt",
    data() {
        return{

        };
    },
    methods: {}
};
</script>

<style>

.currentCard{
    grid-area: 1/1/4/4;
    border-radius: 3px;
    box-shadow: 4px 4px 5px 0px rgba(135,135,135,1);
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
    overflow:hidden;

}
</style>