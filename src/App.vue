<script setup>
import LayoutView from './components/LayoutView.vue'
import HeroView from './components/HeroView.vue'
import AboutView from './components/AboutView.vue'
import ProjectsSection from './components/ProjectsSection.vue'
</script>

<template>
  <LayoutView>
    <HeroView />
    <AboutView />
    <ProjectsSection />
  </LayoutView>
</template>

<style>
html,
body {
  margin: 0;
}
</style>
