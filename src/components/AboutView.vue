<script setup>
import { site } from '../data/site.js'
import { t } from '../composables/useLocale.js'
</script>

<template>
  <section id="about" class="about container">
    <p class="eyebrow">01 — {{ t(site.about.title) }}</p>
    <div class="intro">
      <p v-for="(p, i) in t(site.about.paragraphs)" :key="i">{{ p }}</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 120px 0 40px;
}

.eyebrow {
  font-family: ui-monospace, 'SFMono-Regular', Menlo, Consolas, monospace;
  font-size: 0.8rem;
  letter-spacing: 0.16em;
  color: var(--accent);
  margin-bottom: 24px;
}

.intro {
  max-width: 720px;
  font-size: 1.2rem;
  line-height: 1.85;
  color: var(--text);
}
.intro p + p {
  margin-top: 1.1rem;
}
.intro p {
  color: var(--text-muted);
}

@media (max-width: 648px) {
  .about {
    padding: 80px 0 20px;
  }
  .intro {
    font-size: 1.05rem;
  }
}
</style>
