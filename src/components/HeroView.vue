<script setup>
import { computed } from 'vue'
import { site } from '../data/site.js'
import { t, locale, toggleLocale } from '../composables/useLocale.js'
import { icons } from '../data/icons.js'

const visibleSocials = computed(() => site.socials.filter((s) => s.url))

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header class="hero">
    <!-- 顶栏：左签名，右语言切换 -->
    <div class="topbar container">
      <a class="brand" href="#top" @click.prevent="scrollTo('top')">{{ site.shortName }}</a>
      <button
        class="lang-toggle"
        :title="locale === 'zh' ? 'Switch to English' : '切换到中文'"
        @click="toggleLocale"
      >
        {{ locale === 'zh' ? 'EN' : '中' }}
      </button>
    </div>

    <div class="hero-inner container">
      <div class="hero-text">
        <p class="eyebrow">{{ t(site.hero.eyebrow) }}</p>
        <h1 class="name">{{ site.hero.name }}</h1>

        <p class="roles">
          <template v-for="(role, i) in t(site.hero.roles)" :key="role">
            <span v-if="i > 0" class="sep">·</span>{{ role }}
          </template>
        </p>

        <p class="motto">&ldquo;{{ t(site.hero.motto) }}&rdquo;</p>

        <div class="socials">
          <a
            v-for="s in visibleSocials"
            :key="s.name"
            class="social"
            :href="s.url"
            :title="s.name"
            target="_blank"
            rel="noopener noreferrer"
            :style="{ '--c': s.color }"
          >
            <span class="social-icon" v-html="s.icon"></span>
          </a>
        </div>

        <div class="actions">
          <a class="btn-primary" :href="site.contact.url" target="_blank" rel="noopener noreferrer">
            {{ t(site.contact.label) }}
            <span class="btn-icon" v-html="icons.arrowRight"></span>
          </a>
          <button class="btn-ghost" @click="scrollTo('projects')">
            {{ t(site.buttons.projects) }}
          </button>
        </div>
      </div>

      <div class="hero-avatar">
        <img :src="site.avatar" alt="头像" />
      </div>
    </div>

    <button class="scroll-hint" @click="scrollTo('about')" aria-label="向下滚动">
      <span class="scroll-hint-icon" v-html="icons.arrowDown"></span>
    </button>
  </header>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 28px;
}

.brand {
  font-size: 1.1rem;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.lang-toggle {
  width: 40px;
  height: 40px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text-muted);
  font-size: 0.8rem;
  font-weight: 700;
  transition: all 0.2s var(--ease);
}
.lang-toggle:hover {
  color: var(--text);
  border-color: var(--text-faint);
  transform: translateY(-2px);
}

.hero-inner {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  padding: 40px 0 80px;
}

.hero-text {
  flex: 1;
  max-width: 640px;
}

.eyebrow {
  font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  color: var(--accent);
  margin-bottom: 18px;
}

.name {
  font-size: clamp(2.6rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.01em;
  margin-bottom: 18px;
}

.roles {
  font-size: 1.15rem;
  color: var(--text-muted);
  margin-bottom: 22px;
}
.roles .sep {
  margin: 0 10px;
  color: var(--text-faint);
}

.motto {
  font-size: 1.05rem;
  color: var(--text);
  margin-bottom: 32px;
  max-width: 30em;
}

/* 社交图标 */
.socials {
  display: flex;
  gap: 12px;
  margin-bottom: 32px;
}
.social {
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--c, var(--text));
  transition: all 0.2s var(--ease);
}
.social:hover {
  transform: translateY(-3px);
  border-color: var(--c, var(--text-faint));
  box-shadow: var(--shadow-sm);
}
.social-icon {
  width: 22px;
  height: 22px;
}
.social-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

/* 按钮 */
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
}
.btn-primary,
.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: 999px;
  font-size: 1rem;
  font-weight: 700;
  transition: all 0.2s var(--ease);
}
.btn-primary {
  background: var(--accent);
  color: #fff;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 0.5rem 1.25rem rgba(31, 111, 235, 0.32);
}
.btn-ghost {
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--text);
}
.btn-ghost:hover {
  transform: translateY(-2px);
  border-color: var(--text-faint);
}
.btn-icon {
  width: 18px;
  height: 18px;
  transition: transform 0.2s var(--ease);
}
.btn-primary:hover .btn-icon {
  transform: translateX(4px);
}
.btn-icon :deep(svg) {
  width: 100%;
  height: 100%;
}

/* 头像 */
.hero-avatar {
  flex-shrink: 0;
  width: 260px;
  height: 260px;
  border-radius: 28px;
  overflow: hidden;
  background: var(--bg-alt);
  box-shadow: var(--shadow);
  border: 1px solid var(--line);
}
.hero-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 向下滚动提示 */
.scroll-hint {
  position: absolute;
  left: 50%;
  bottom: 28px;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-faint);
  animation: bob 1.6s var(--ease) infinite;
}
.scroll-hint-icon {
  width: 26px;
  height: 26px;
}
.scroll-hint-icon :deep(svg) {
  width: 100%;
  height: 100%;
}
@keyframes bob {
  0%, 100% { transform: translate(-50%, -3px); }
  50% { transform: translate(-50%, 3px); }
}

/* 响应式 */
@media (max-width: 900px) {
  .hero-inner {
    flex-direction: column-reverse;
    text-align: center;
    gap: 32px;
    padding-top: 24px;
  }
  .hero-text {
    max-width: 100%;
  }
  .motto {
    margin-left: auto;
    margin-right: auto;
  }
  .socials,
  .actions {
    justify-content: center;
  }
  .hero-avatar {
    width: 180px;
    height: 180px;
    border-radius: 24px;
  }
  .scroll-hint {
    display: none;
  }
}
</style>
