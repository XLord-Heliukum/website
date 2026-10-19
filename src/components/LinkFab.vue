<script setup>
import { ref } from 'vue'

defineProps({
  links: { type: Array, default: () => [] },
})

const open = ref(false)

// 简单的 4 点网格图标（收起态）/ 关闭叉（展开态），内联 SVG，不依赖外部图标库
const gridIcon =
  '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="5" r="2.2"/><circle cx="12" cy="5" r="2.2"/><circle cx="19" cy="5" r="2.2"/><circle cx="5" cy="12" r="2.2"/><circle cx="12" cy="12" r="2.2"/><circle cx="19" cy="12" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="12" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/></svg>'
const closeIcon =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M6 6l12 12M18 6L6 18"/></svg>'
</script>

<template>
  <div class="fab" :class="{ open }">
    <transition name="fab-panel">
      <ul v-if="open" class="fab-panel">
        <li v-for="l in links" :key="l.url">
          <a :href="l.url" target="_blank" rel="noopener noreferrer">
            <span class="fab-dot" :style="{ background: l.color || 'var(--accent)' }"></span>
            <span class="fab-label">{{ l.name }}</span>
          </a>
        </li>
      </ul>
    </transition>

    <button
      class="fab-btn"
      :aria-expanded="open"
      :aria-label="open ? '收起链接' : '展开链接'"
      @click="open = !open"
    >
      <span class="fab-ico" v-html="open ? closeIcon : gridIcon"></span>
    </button>
  </div>
</template>

<style scoped>
.fab {
  position: fixed;
  left: 24px;
  bottom: 24px;
  z-index: 50;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
}

.fab-btn {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: var(--card);
  border: 1px solid var(--line);
  box-shadow: var(--shadow);
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s var(--ease), border-color 0.2s var(--ease), color 0.2s var(--ease);
}
.fab-btn:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  color: var(--accent);
}
.fab-ico {
  width: 22px;
  height: 22px;
  display: flex;
}
.fab-ico :deep(svg) {
  width: 100%;
  height: 100%;
}

.fab-panel {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.fab-panel li a {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;
  min-width: 150px;
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  font-weight: 700;
  font-size: 0.95rem;
  transition: transform 0.2s var(--ease), border-color 0.2s var(--ease);
}
.fab-panel li a:hover {
  transform: translateX(4px);
  border-color: var(--accent);
}
.fab-dot {
  width: 10px;
  height: 10px;
  border-radius: 3px;
  flex-shrink: 0;
}
.fab-label {
  white-space: nowrap;
}

.fab-panel-enter-active,
.fab-panel-leave-active {
  transition: opacity 0.18s var(--ease), transform 0.18s var(--ease);
}
.fab-panel-enter-from,
.fab-panel-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

@media (max-width: 640px) {
  .fab {
    left: 18px;
    bottom: 18px;
  }
  .fab-btn {
    width: 48px;
    height: 48px;
  }
}
</style>
