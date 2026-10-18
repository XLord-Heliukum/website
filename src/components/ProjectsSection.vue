<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { projects } from '../data/projects.js'
import { site } from '../data/site.js'
import { t } from '../composables/useLocale.js'
import ProjectCard from './ProjectCard.vue'
import ProjectDetail from './ProjectDetail.vue'

const section = ref(null)
const rail = ref(null)
const railInner = ref(null)
const selected = ref(null)

let rafId = null

function paint() {
  if (!railInner.value || !rail.value || !section.value) return
  // 窄屏用原生横向滚动，不做视差位移
  if (window.innerWidth < 768) {
    railInner.value.style.transform = 'translateX(0)'
    return
  }
  const max = Math.max(0, railInner.value.scrollWidth - rail.value.clientWidth)
  const rect = section.value.getBoundingClientRect()
  const vh = window.innerHeight
  // 视差窗口：section 顶部从「刚进入视口底部」(rect.top=vh) 到「接近视口顶部」
  // (rect.top≈0.12vh) 的过程中，轨道从起点平移到终点。这样当 section 仍舒适可见时，
  // 所有卡片就已完整显示，之后继续滚动轨道保持静止，不再提前截断内容。
  const start = vh
  const end = vh * 0.12
  const p = Math.min(1, Math.max(0, (start - rect.top) / (start - end)))
  railInner.value.style.transform = `translateX(${-p * max}px)`
}

function onScroll() {
  if (rafId) cancelAnimationFrame(rafId)
  rafId = requestAnimationFrame(paint)
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('resize', onScroll)
  paint()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('resize', onScroll)
  if (rafId) cancelAnimationFrame(rafId)
})

function open(project) {
  selected.value = project
  document.documentElement.style.overflow = 'hidden'
}
function close() {
  selected.value = null
  document.documentElement.style.overflow = ''
}
</script>

<template>
  <section id="projects" ref="section" class="projects container">
    <p class="eyebrow">02 — {{ t(site.buttons.projects) }}</p>
    <h2 class="section-title">{{ t({ zh: '我做过的一些东西', en: "Some things I've built" }) }}</h2>

    <div ref="rail" class="rail">
      <div ref="railInner" class="rail-inner">
        <ProjectCard
          v-for="p in projects"
          :key="p.slug"
          :project="p"
          @open="open"
        />
      </div>
    </div>

    <p class="hint">{{ t({ zh: '横向滑动查看更多', en: 'Swipe or scroll to explore' }) }}</p>

    <ProjectDetail v-if="selected" :project="selected" @dismiss="close" />
  </section>
</template>

<style scoped>
.projects {
  padding: 120px 0 120px;
}

.eyebrow {
  font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  color: var(--accent);
  margin-bottom: 16px;
}
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.01em;
  margin-bottom: 40px;
}

/* 横向轨道：窄屏原生横滑，宽屏靠视差位移 */
.rail {
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
}
.rail::-webkit-scrollbar {
  display: none;
}
.rail-inner {
  display: inline-flex;
  gap: 22px;
  padding-bottom: 8px;
  will-change: transform;
}

.hint {
  margin-top: 22px;
  font-size: 0.85rem;
  color: var(--text-faint);
}

@media (max-width: 767px) {
  .projects {
    /* 容器在窄屏给轨道留满宽 */
    width: 100%;
    max-width: 100%;
    padding-left: 5%;
    padding-right: 5%;
  }
  .rail-inner {
    gap: 16px;
  }
}

@media (min-width: 768px) {
  .rail {
    overflow: hidden;
  }
}
</style>
