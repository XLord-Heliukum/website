<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: String,
  href: String,
  textColor: { type: String, default: '#1f6feb' },
})

const styleObject = computed(() => ({
  '--text-color': props.textColor,
}))
</script>

<template>
  <a class="link" :href="href" :style="styleObject" target="_blank" rel="noopener noreferrer">
    {{ text }}
  </a>
</template>

<style scoped>
.link {
  display: inline-block;
  padding: 0.7rem 0.2rem;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1;
  text-decoration: none;
  color: var(--text-color);
  transition: transform 0.08s ease-in;
}
.link:hover {
  transform: translateY(-0.2rem);
}
</style>
