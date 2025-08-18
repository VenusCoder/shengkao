<template>
  <div class="not-found">
    <div class="container">
      <div class="glitch" data-text="404">404</div>
      <p class="subtitle">页面离家出走了</p>
      <p class="description">您访问的页面可能已被移除或暂时不可用</p>
      <router-link to="/" class="home-btn">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </svg>
        返回首页
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const particles = ref(
  Array(20)
    .fill(null)
    .map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 0.5 + 0.2,
    })),
)
</script>

<style scoped>
.not-found {
  height: 100vh;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  display: grid;
  place-items: center;
  color: white;
  overflow: hidden;
  position: relative;
}

.container {
  text-align: center;
  z-index: 2;
}

.glitch {
  font-size: 8rem;
  font-weight: 700;
  position: relative;
  animation: glitch 5s infinite;
}

@keyframes glitch {
  0% {
    text-shadow:
      0.05em 0 0 #00fffc,
      -0.05em -0.025em 0 #fc00ff;
  }
  14% {
    text-shadow:
      0.05em 0 0 #00fffc,
      -0.05em -0.025em 0 #fc00ff;
  }
  15% {
    text-shadow:
      -0.05em -0.025em 0 #00fffc,
      0.025em 0.025em 0 #fc00ff;
  }
  49% {
    text-shadow:
      -0.05em -0.025em 0 #00fffc,
      0.025em 0.025em 0 #fc00ff;
  }
  50% {
    text-shadow:
      0.025em 0.05em 0 #00fffc,
      0.05em 0 0 #fc00ff;
  }
  99% {
    text-shadow:
      0.025em 0.05em 0 #00fffc,
      0.05em 0 0 #fc00ff;
  }
  100% {
    text-shadow:
      -0.025em 0 0 #00fffc,
      -0.025em -0.025em 0 #fc00ff;
  }
}

.subtitle {
  font-size: 1.5rem;
  margin: 1rem 0;
  opacity: 0.8;
}

.description {
  max-width: 500px;
  margin: 0 auto 2rem;
  line-height: 1.6;
}

.home-btn {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 50px;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.home-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-3px);
}

.icon {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.5rem;
  fill: currentColor;
}
</style>
