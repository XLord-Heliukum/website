<script setup>
import { computed } from 'vue'

const props = defineProps({
  text: String,
  href: String,
  bgColor: { type: String, default: '#1f6feb' },
  textColor: { type: String, default: '#ffffff' },
})

const styleObject = computed(() => ({
  '--bg-color': props.bgColor,
  '--text-color': props.textColor,
  '--shadow-color': props.bgColor + '55',
}))
</script>

<template>
  <a class="link-btn" :href="href" :style="styleObject" target="_blank" rel="noopener noreferrer">
    {{ text }}
  </a>
</template>

<style scoped>
.link-btn {
  display: inline-block;
  padding: 0.7rem 1.2rem;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
  color: var(--text-color);
  background: var(--bg-color);
  border-radius: 10px;
  transition: transform 0.08s ease-in, box-shadow 0.08s ease-in;
}
.link-btn:hover {
  transform: translateY(-0.2rem);
  box-shadow: 0 0.4rem 1rem var(--shadow-color);
}
.link-btn:active {
  transform: translateY(0);
  box-shadow: 0 0.2rem 0.5rem var(--shadow-color);
}
</style>
