import { createStore } from "vuex";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import db from "../firebaseConfig";

export default createStore({
  state: {
    usuarios: [],
  },
  mutations: {
    setUsuarios(state, usuarios) {
      state.usuarios = usuarios;
    },
    addUsuario(state, usuario) {
      state.usuarios.push(usuario);
    },
    removeUsuario(state, id) {
      state.usuarios = state.usuarios.filter((usuario) => usuario.id !== id);
    },
  },
  actions: {
    async fetchUsuarios({ commit }) {
      try {
        const querySnapshot = await getDocs(collection(db, "usuarios"));
        const usuarios = [];
        querySnapshot.forEach((doc) => {
          usuarios.push({ id: doc.id, ...doc.data() });
        });
        commit("setUsuarios", usuarios);
      } catch (error) {
        console.error("Error fetching usuarios: ", error);
      }
    },
    async addUsuario({ commit }, usuario) {
      try {
        const docRef = await addDoc(collection(db, "usuarios"), usuario);
        commit("addUsuario", { id: docRef.id, ...usuario });
      } catch (error) {
        console.error("Error adding usuario: ", error);
      }
    },
    async deleteUsuario({ commit }, id) {
      try {
        await deleteDoc(doc(db, "usuarios", id));
        commit("removeUsuario", id);
      } catch (error) {
        console.error("Error deleting usuario: ", error);
      }
    },
  },
});
