<script setup>
import TimeLight from './TimeLight.vue'
import LinkFab from './LinkFab.vue'
import { site } from '../data/site.js'

const title = site.hero.name
const tagline = site.coreTagline
const subdomains = site.subdomains
</script>

<template>
  <main class="core">
    <TimeLight />

    <div class="core-content">
      <h1 class="core-title">{{ title }}</h1>
      <p class="core-tagline">{{ tagline }}</p>
    </div>

    <LinkFab :links="subdomains" />

    <!-- 边缘压暗，让中央文字更聚焦，不抢背景流光 -->
    <div class="core-vignette" aria-hidden="true"></div>
  </main>
</template>

<style scoped>
.core {
  position: relative;
  z-index: 1;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.core-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 0 24px;
}
.core-title {
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  font-weight: 800;
  letter-spacing: -0.02em;
  text-shadow: 0 2px 30px rgba(0, 0, 0, 0.45);
}
.core-tagline {
  margin-top: 18px;
  font-size: clamp(1rem, 2.4vw, 1.25rem);
  color: var(--text-muted);
}
.core-vignette {
  position: fixed;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: radial-gradient(120% 120% at 50% 42%, transparent 52%, rgba(0, 0, 0, 0.55) 100%);
}
</style>
