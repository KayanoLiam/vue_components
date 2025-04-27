<template>
  <div id="app">
    <LoginRegister />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginRegister from './components/LoginRegister.vue';

export default defineComponent({
  name: 'App',
  components: {
    LoginRegister
  }
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(90deg, #e2e2e2, #c9d6ff);
}

#app {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
