<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { icons } from '../data/icons.js'

const scrollRatio = ref(0)
let rafId = null

function onScroll() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(() => {
    scrollRatio.value = Math.min(1, window.scrollY / (window.innerHeight * 0.6))
  })
}

function toTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
})
</script>

<template>
    <div id="top" class="layout">
      <div class="layout-content">
        <slot />
      </div>

      <button class="to-top" :class="{ show: scrollRatio >= 1 }" @click="toTop" aria-label="回到顶部">
      <span class="ico" v-html="icons.arrowUp"></span>
    </button>
  </div>
</template>

<style scoped>
.layout {
  position: relative;
  min-height: 100vh;
}
.layout-content {
  position: relative;
  z-index: 1;
  min-height: 100vh;
}

.to-top {
  position: fixed;
  z-index: 100;
  bottom: 26px;
  right: 22px;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  opacity: 0;
  pointer-events: none;
  transform: translateY(16px);
  transition: all 0.2s var(--ease);
}
.to-top.show {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0);
}
.to-top:hover {
  color: var(--accent);
  border-color: var(--accent);
}
.ico {
  width: 22px;
  height: 22px;
}
.ico :deep(svg) {
  width: 100%;
  height: 100%;
}
</style>
