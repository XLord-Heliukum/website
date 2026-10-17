<script setup>
import LinkButton from './LinkButton.vue'
import LinkText from './LinkText.vue'

defineProps({
  links: { type: Array, default: () => [] },
  themeColor: { type: String, default: '#1f6feb' },
})
</script>

<template>
  <div class="links">
    <template v-for="(link, i) in links" :key="i">
      <LinkButton
        v-if="i === 0"
        :text="link[0]"
        :href="link[1]"
        :bg-color="themeColor"
        text-color="#ffffff"
      />
      <LinkText
        v-else
        :text="link[0]"
        :href="link[1]"
        :text-color="themeColor"
      />
    </template>
  </div>
</template>

<style scoped>
.links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.4rem 1rem;
}
</style>
