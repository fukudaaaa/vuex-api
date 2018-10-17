import Vue from "vue";
import Vuex from "vuex";
// import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    tasks: [
      { text: "腰痛い" },
      { text: "京都行きたい" },
      { text: "お金欲しい", priority: "High" }
    ],
    filter: null
  },
  getters: {
    filteredTask(state) {
      if (!state.filter) {
        return state.tasks;
      }
      return state.tasks.filter(task => task.priority === state.filter);
    }
  },
  mutations: {
    addTask(state, newText) {
      const newtask = { text: newText };
      state.tasks.push(newtask);
    },
    deleteTask(state, index) {
      Vue.delete(state.tasks, index);
    },
    evaluateTask(state, { index, value }) {
      // state.tasks[index].priority = value　リアクティブに変更されない、多分
      Vue.set(state.tasks[index], "priority", value);
    },
    changeFilter(state, { filter }) {
      state.filter = filter;
    }
  }
  // plugins: [createPersistedState()]
});

export default store;
