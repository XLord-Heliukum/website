<script setup>
import { computed } from 'vue'
import { t } from '../composables/useLocale.js'
import { icons } from '../data/icons.js'

const props = defineProps({
  project: { type: Object, required: true },
})

const emit = defineEmits(['open'])

// 取首字母做占位图标（没有图片资源时的优雅降级）
const initial = computed(() => {
  const title = t(props.project.title)
  return (title || props.project.slug || '?').charAt(0).toUpperCase()
})
</script>

<template>
  <button class="card" :style="{ '--theme': project.themeColor }" @click="emit('open', project)">
    <div class="card-top">
      <div class="mono">{{ initial }}</div>
      <span class="arrow" v-html="icons.arrowRight"></span>
    </div>
    <h3 class="title">{{ t(project.title) }}</h3>
    <p class="slogan">{{ t(project.slogan) }}</p>
    <div class="stack">
      <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
    </div>
  </button>
</template>

<style scoped>
.card {
  flex: 0 0 auto;
  width: 320px;
  text-align: left;
  padding: 24px;
  border-radius: var(--radius-lg);
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: var(--shadow-sm);
  transition: transform 0.2s var(--ease), box-shadow 0.2s var(--ease), border-color 0.2s var(--ease);
  cursor: pointer;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow);
  border-color: color-mix(in srgb, var(--theme) 50%, var(--line));
}

.card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.mono {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
  background: var(--theme);
}
.arrow {
  width: 20px;
  height: 20px;
  color: var(--text-faint);
  opacity: 0;
  transform: translateX(-6px);
  transition: all 0.2s var(--ease);
}
.arrow :deep(svg) {
  width: 100%;
  height: 100%;
}
.card:hover .arrow {
  opacity: 1;
  transform: translateX(0);
  color: var(--theme);
}

.title {
  font-size: 1.25rem;
  font-weight: 800;
  margin-bottom: 6px;
}
.slogan {
  font-size: 0.95rem;
  color: var(--text-muted);
  margin-bottom: 16px;
  min-height: 2.6em;
}
.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.tag {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--bg-alt);
}

@media (max-width: 648px) {
  .card {
    width: 78vw;
    max-width: 320px;
  }
}
</style>
