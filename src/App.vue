<script setup>
import AddUsers from './components/AddUsers.vue';
import ShowUsers from './components/ShowUsers.vue';
</script>

<template>
<div class="app-container">
    <AddUsers />
    <ShowUsers />
</div>
</template>

<style scoped>
.app-container {
display: flex;
flex-direction: column;
align-items: center;
gap: 2rem;
padding: 2rem;
background-color: #f0f0f0;
min-height: 100vh;
}
</style>
