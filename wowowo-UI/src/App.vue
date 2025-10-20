<template>
  <div>
    <Button type="primary" plain ref="buttonRef">Text Button</Button>
  </div>
</template>

<script lang="ts" setup name="App">
import { ref, onMounted } from 'vue';
import Button from './components/Button/Button.vue';
import type { ButtonInstance } from './components/Button/types';

const buttonRef = ref<ButtonInstance | null>(null);

onMounted(() => {
  if(buttonRef.value) {
    console.log(buttonRef.value.ref);
  }
})
</script>

<style scoped>

</style>
