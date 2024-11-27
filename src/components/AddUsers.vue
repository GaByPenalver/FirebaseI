<template>
  <div class="add-user-container">
    <h2>Agregar Usuario</h2>
    <form @submit.prevent="agregarUsuario" class="form-container">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input v-model="nombre" id="nombre" placeholder="Ingresa tu nombre" required />
      </div>
      <div class="form-group">
        <label for="correo">Correo:</label>
        <input
          v-model="correo"
          id="correo"
          type="email"
          placeholder="Ingresa tu correo electrónico"
          required
        />
      </div>
      <button type="submit" class="btn-submit">Agregar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: "",
      correo: "",
    };
  },
  methods: {
    agregarUsuario() {
      const usuario = {
        nombre: this.nombre,
        correo: this.correo,
      };
      this.$store.dispatch("addUsuario", usuario);
      this.nombre = "";
      this.correo = "";
    },
  },
};
</script>

<style scoped>
.add-user-container {
  text-align: center;
  margin: 2rem auto;
  max-width: 400px;
  padding: 1.5rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}
.form-container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}
label {
  margin-bottom: 0.5rem;
  font-weight: bold;
}
input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.btn-submit {
  padding: 0.75rem;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}
.btn-submit:hover {
  background-color: #45a049;
}
</style>
