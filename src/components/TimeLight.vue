<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 「光阴」动画：深色底上一组缓慢游走、彼此叠加发光的光斑（极光感）。
// 象征时间的流转 —— 不抢内容，只是背景里流动的光。
const canvas = ref(null)
let ctx = null
let raf = null
let blobs = []
let dpr = 1
let w = 0
let h = 0
let running = true

// 与另外两个门户保持品牌一致：accent 蓝 + hub 薄荷 + code 绿
const COLORS = [
  'rgba(76,155,255,', // --accent 蓝
  'rgba(111,238,194,', // hub 薄荷
  'rgba(43,189,134,', // code 绿
  'rgba(124,138,255,', // 偏紫的蓝，补足层次
]

function resize() {
  if (!canvas.value) return
  dpr = Math.min(window.devicePixelRatio || 1, 2)
  w = canvas.value.clientWidth
  h = canvas.value.clientHeight
  canvas.value.width = Math.max(1, Math.floor(w * dpr))
  canvas.value.height = Math.max(1, Math.floor(h * dpr))
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
}

function initBlobs() {
  blobs = COLORS.map((c) => ({
    color: c,
    r: 0.32 + Math.random() * 0.22, // 半径相对较短边
    sx: 0.05 + Math.random() * 0.045, // 横向游走频率
    sy: 0.045 + Math.random() * 0.045, // 纵向游走频率
    px: Math.random() * Math.PI * 2,
    py: Math.random() * Math.PI * 2,
  }))
}

function draw(t) {
  ctx.clearRect(0, 0, w, h)
  ctx.globalCompositeOperation = 'lighter'
  const base = Math.min(w, h)
  for (const b of blobs) {
    const x = w * (0.5 + 0.34 * Math.sin(t * b.sx * 0.001 + b.px))
    const y = h * (0.5 + 0.34 * Math.cos(t * b.sy * 0.001 + b.py))
    const R = base * b.r
    const g = ctx.createRadialGradient(x, y, 0, x, y, R)
    g.addColorStop(0, b.color + '0.38)')
    g.addColorStop(0.5, b.color + '0.12)')
    g.addColorStop(1, b.color + '0)')
    ctx.fillStyle = g
    ctx.beginPath()
    ctx.arc(x, y, R, 0, Math.PI * 2)
    ctx.fill()
  }
  ctx.globalCompositeOperation = 'source-over'
}

function loop(t) {
  if (!running) return
  draw(t)
  raf = requestAnimationFrame(loop)
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  // 部分环境（如 jsdom 测试）没有 2D context，直接跳过动画
  if (!ctx) return
  resize()
  initBlobs()
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (reduce) {
    draw(0)
    return
  }
  raf = requestAnimationFrame(loop)
  window.addEventListener('resize', resize)
  document.addEventListener('visibilitychange', () => {
    running = !document.hidden
    if (running && !reduce && !raf) raf = requestAnimationFrame(loop)
  })
})

onUnmounted(() => {
  running = false
  if (raf) cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas ref="canvas" class="time-light" aria-hidden="true"></canvas>
</template>

<style scoped>
.time-light {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  display: block;
  pointer-events: none;
}
</style>
