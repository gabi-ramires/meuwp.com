<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleNavigation = (path, sectionId) => {
  if (path.startsWith('/#')) {
    // Se o caminho começa com '/#', é um link de seção.
    // Verificamos se a rota atual não é a página inicial.
    if (router.currentRoute.value.path !== '/') {
      // Se não estivermos na página inicial, navegamos para ela primeiro.
      router.push('/').then(() => {
        // Após navegar para a página inicial, adicionamos um pequeno atraso
        // para garantir que o elemento alvo seja renderizado antes de rolar.
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            const targetPosition = element.offsetTop - 80;
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 800;
            let start = null;

            function animation(currentTime) {
              if (start === null) start = currentTime;
              const timeElapsed = currentTime - start;
              const run = ease(timeElapsed, startPosition, distance, duration);
              window.scrollTo(0, run);
              if (timeElapsed < duration) requestAnimationFrame(animation);
            }

            function ease(t, b, c, d) {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
            }

            requestAnimationFrame(animation);
          }
        }, 100); // Atraso de 100ms, ajuste se necessário.
      });
    } else {
      // Se já estivermos na página inicial, apenas rolamos.
      const element = document.getElementById(sectionId);
      if (element) {
        const targetPosition = element.offsetTop - 80;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 800;
        let start = null;

        function animation(currentTime) {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const run = ease(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) requestAnimationFrame(animation);
        }

        function ease(t, b, c, d) {
          t /= d / 2;
          if (t < 1) return c / 2 * t * t + b;
          t--;
          return -c / 2 * (t * (t - 2) - 1) + b;
        }

        requestAnimationFrame(animation);
      }
    }
  } else {
    // Navegar para uma nova página usando vue-router
    router.push(path);
  }
};
</script>


<template>
  <header
    class="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-100">
    <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
      <a href="/" class="flex items-center gap-2" @click.prevent="handleNavigation('/', 'home')">
        <div class="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">
          MW
        </div>
        <span class="font-semibold tracking-tight">MeuWP</span>
      </a>
      <nav class="hidden md:flex items-center gap-6 text-sm">
        <a href="/#sobre" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          @click.prevent="handleNavigation('/#sobre', 'sobre')">Sobree</a>
        <a href="/#servicos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          @click.prevent="handleNavigation('/#servicos', 'servicos')">Serviços</a>
        <a href="/#depoimentos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          @click.prevent="handleNavigation('/#depoimentos', 'depoimentos')">Depoimentos</a>
        <a href="/#blog" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          @click.prevent="handleNavigation('/#blog', 'blog')">Blog</a>
      </nav>
      <div class="flex items-center gap-3">
        <a href="/onboarding"
          class="rounded-2xl px-5 py-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors"
          @click.prevent="handleNavigation('/onboarding')">Criar site
          grátis</a>
        <a href="/planos" class="rounded-2xl px-5 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          @click.prevent="handleNavigation('/planos')">Ver
          planos</a>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Transições suaves para todos os elementos interativos */
a,
button {
  transition: all 0.2s ease-in-out;
}

/* Hover effects melhorados */
a:hover {
  transform: translateY(-1px);
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* Melhor feedback visual para links do menu */
nav a {
  position: relative;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: #2563eb;
  transition: width 0.3s ease;
}

nav a:hover::after {
  width: 100%;
}
</style> 