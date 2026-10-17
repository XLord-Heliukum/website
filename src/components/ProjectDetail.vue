<script setup>
import { computed } from 'vue'
import { t } from '../composables/useLocale.js'
import { icons } from '../data/icons.js'
import LinkGroup from './LinkGroup.vue'

const props = defineProps({
  project: { type: Object, required: true },
})

const emit = defineEmits(['dismiss'])

const initial = computed(() => {
  const title = t(props.project.title)
  return (title || props.project.slug || '?').charAt(0).toUpperCase()
})

const show = computed(() => true)
</script>

<template>
  <div class="overlay" @click.self="emit('dismiss')">
    <transition name="detail" appear>
      <div v-if="show" class="detail" :style="{ '--theme': project.themeColor }">
        <button class="close" @click="emit('dismiss')" aria-label="关闭">
          <span v-html="icons.close"></span>
        </button>

        <div class="info">
          <div class="mono">{{ initial }}</div>
          <div>
            <h2 class="title">{{ t(project.title) }}</h2>
            <p class="slogan">{{ t(project.slogan) }}</p>
            <div class="stack">
              <span v-for="tech in project.stack" :key="tech" class="tag">{{ tech }}</span>
            </div>
          </div>
        </div>

        <p class="desc">{{ t(project.description) }}</p>

        <LinkGroup :links="project.links" :theme-color="project.themeColor" />
      </div>
    </transition>
  </div>
</template>

<style scoped>
.overlay {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(20, 20, 20, 0.35);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  overflow-y: auto;
  padding: 5vh 16px;
}
.detail {
  position: relative;
  width: 100%;
  max-width: 720px;
  margin: 0 auto;
  padding: 2.5rem;
  background: var(--card);
  border-radius: 24px;
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.18);
}
.detail > * + * {
  margin-top: 1.6rem;
}

.detail-enter-active,
.detail-leave-active {
  transition: opacity 0.22s linear, transform 0.22s var(--ease);
}
.detail-enter-from,
.detail-leave-to {
  opacity: 0;
  transform: translateY(1.5rem);
}

.close {
  position: absolute;
  top: 18px;
  right: 18px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg-alt);
  color: var(--text-muted);
  transition: all 0.2s var(--ease);
}
.close:hover {
  background: var(--line);
  color: var(--text);
}
.close :deep(svg) {
  width: 18px;
  height: 18px;
}

.info {
  display: flex;
  align-items: center;
  gap: 20px;
}
.mono {
  flex-shrink: 0;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  font-weight: 800;
  color: #fff;
  background: var(--theme);
}
.title {
  font-size: 1.6rem;
  font-weight: 800;
  line-height: 1.2;
}
.slogan {
  color: var(--text-muted);
  margin-top: 4px;
}
.stack {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 10px;
}
.tag {
  padding: 3px 10px;
  border-radius: 999px;
  font-size: 0.75rem;
  color: var(--theme);
  background: color-mix(in srgb, var(--theme) 12%, #fff);
}

.desc {
  font-size: 1.05rem;
  line-height: 1.8;
  color: var(--text-muted);
}

@media (max-width: 648px) {
  .detail {
    padding: 1.6rem;
  }
  .info {
    gap: 14px;
  }
  .mono {
    width: 52px;
    height: 52px;
    font-size: 1.4rem;
  }
}
</style>
