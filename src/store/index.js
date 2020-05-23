import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cards: [],
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
    currentCard: {},
  },
  mutations: {
    expandCard(state, id) {
      state.currentCard = state.cards.find(card => card.id === id);
    },
    deleteCard(state) {
      state.availableCardIdentifiers.push(state.currentCard.id);
      state.cards = state.cards.filter(
        card => card.id !== state.currentCard.id
      );
      state.currentCard = {};
    },
    createCard(state) {
      if (state.availableCardIdentifiers.length !== 0) {
        state.cards.push({
          id: state.availableCardIdentifiers.shift(),
          color: state.allColors[
            Math.floor(Math.random() * state.allColors.length)
          ],
          text: "",
          fontColor: ""
        });
      }
    },
    changeFontColor(state) {
      if (Object.keys(state.currentCard).length !== 0) {
        state.currentCard.fontColor = state.allColors[
          Math.floor(Math.random() * state.allColors.length)
        ];
      }
    },
    changePostItColor(state) {
      if (Object.keys(state.currentCard).length !== 0) {
        state.currentCard.color = state.allColors[
          Math.floor(Math.random() * state.allColors.length)
        ];
      }
    },
    saveCardAndUpdateView(state) {
      if (Object.keys(state.currentCard).length !== 0) {
        state.currentCard = {};
      }
    }
  },
  actions: {
    expandCard(context, id) {
      context.commit('expandCard', id)
    },
    deleteCard(context) {
      context.commit('deleteCard')
    },
    createCard(context) {
      context.commit('createCard')
    },
    changeFontColor(context) {
      context.commit('changeFontColor')
    },
    changePostItColor(context) {
      context.commit('changePostItColor')
    },
    saveCardAndUpdateView(context) {
      context.commit('saveCardAndUpdateView')
    }
  },
  modules: {
  }
})
