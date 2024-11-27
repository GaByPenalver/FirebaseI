<template>
  <div class="show-users-container">
    <h2>Lista de Usuarios</h2>
    <ul class="user-list">
      <li v-for="usuario in usuarios" :key="usuario.id" class="user-item">
        <span>{{ usuario.nombre }} - {{ usuario.correo }}</span>
        <button @click="eliminarUsuario(usuario.id)" class="btn-delete">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    usuarios() {
      return this.$store.state.usuarios;
    },
  },
  methods: {
    eliminarUsuario(id) {
      this.$store.dispatch("deleteUsuario", id);
    },
  },
  created() {
    this.$store.dispatch("fetchUsuarios");
  },
};
</script>

<style scoped>
.show-users-container {
  text-align: center;
  margin: 2rem auto;
  max-width: 600px;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.user-list {
  list-style: none;
  padding: 0;
}
.user-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-bottom: 1px solid #ccc;
}
.btn-delete {
  padding: 0.5rem;
  background-color: #e53935;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 40px;
}
.btn-delete:hover {
  background-color: #d32f2f;
}
</style>
