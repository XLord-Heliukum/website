<script setup>
import { computed } from 'vue'
import { site } from '../data/site.js'
import { t } from '../composables/useLocale.js'

const visibleSocials = computed(() => site.socials.filter((s) => s.url))
const year = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <div class="footer-top">
        <a class="brand" :href="site.footer.ownerUrl" target="_blank" rel="noopener noreferrer">
          {{ site.shortName }}
        </a>
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
      </div>

      <p class="copyright">
        © {{ year }} {{ site.shortName }} · {{ t(site.footer.copyright) }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--line);
  background: var(--bg-alt);
  padding: 48px 0;
  margin-top: 40px;
}
.footer-inner {
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.footer-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}
.brand {
  font-size: 1.1rem;
  font-weight: 800;
}
.socials {
  display: flex;
  gap: 10px;
}
.social {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  border: 1px solid var(--line);
  background: var(--card);
  color: var(--c, var(--text));
  transition: all 0.2s var(--ease);
}
.social:hover {
  transform: translateY(-2px);
  border-color: var(--c, var(--text-faint));
}
.social-icon {
  width: 20px;
  height: 20px;
}
.social-icon :deep(svg) {
  width: 100%;
  height: 100%;
}
.copyright {
  font-size: 0.9rem;
  color: var(--text-faint);
}
</style>
