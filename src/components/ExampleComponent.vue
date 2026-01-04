<template>
  <div class="example-component">
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <button @click="handleClick">Click Me</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Props interface
interface Props {
  title?: string;
}

// Define props with defaults
const props = withDefaults(defineProps<Props>(), {
  title: "Example Component",
});

// Define emits
const emit = defineEmits<{
  (e: "button-clicked", value: string): void;
}>();

// Reactive state
const message = ref<string>("This is an example component");

// Methods
const handleClick = () => {
  emit("button-clicked", "Button was clicked!");
  console.log("Button clicked");
};
</script>

<style scoped>
.example-component {
  padding: 20px;
  border: 2px solid #42b983;
  border-radius: 8px;
  margin: 20px 0;
}

h2 {
  color: #42b983;
  margin-top: 0;
}

button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #35a372;
}
</style>
