<script setup>
import { ref } from "vue";
import {
  Shield,
  Users,
  Award,
  ArrowRight,
  Heart,
  Lightbulb, // Novo ícone para visão
  Target // Novo ícone para missão
} from "lucide-vue-next";

// Função para scroll suave personalizada
const scrollToSection = (sectionId) => {
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
};

// Dados para a seção de valores
const values = [
  {
    icon: Heart,
    title: "Simplicidade",
    description: "Acreditamos que criar um site deve ser simples e acessível para todos."
  },
  {
    icon: Shield,
    title: "Confiabilidade",
    description: "Sites seguros, rápidos e sempre online para seu negócio."
  },
  {
    icon: Users,
    title: "Foco no Cliente",
    description: "Cada decisão é tomada pensando na experiência do usuário final."
  },
  {
    icon: Award,
    title: "Qualidade",
    description: "Não fazemos sites, criamos presenças digitais que geram resultados."
  },
];

// Dados da história da empresa
const historyHighlights = [
  { year: "Abril de 2025", event: "Fundação do MeuWP com a missão de simplificar a criação de sites." },
  { year: "Maio de 2025", event: "Lançamento da versão Beta da plataforma para testes internos." },
  { year: "Junho de 2025", event: "Início das operações e abertura para os primeiros clientes beta." },
  { year: "Julho de 2025", event: "Feedback inicial dos usuários incorporado e primeiras melhorias implementadas." },
  { year: "Agosto de 2025", event: "Lançamento oficial da plataforma ao público geral e campanha de marketing inicial." }
];

const teamMembers = [
  {
    name: "Gabriela Ramires",
    role: "CEO & Fundadora • Líder de Desenvolvimento",
    description: "Responsável por toda a estratégia, desenvolvimento e visão do MeuWP.com, unindo tecnologia e design para criar uma plataforma simples e poderosa.",
    img: "/src/pages/sobre/img/gabriela.jpg" // Adicionado o caminho da imagem
  },
];

</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900">
    <!-- Header (copiado de HomePage.vue) -->
    <header
      class="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-100">
      <div id='home' class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" class="flex items-center gap-2" @click="scrollToSection('home')">
          <div class="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">
            MW
          </div>
          <span class="font-semibold tracking-tight">MeuWP</span>
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <a href="/#sobre" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            @click="scrollToSection('sobre')">Sobre</a>
          <a href="/#servicos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            @click="scrollToSection('servicos')">Serviços</a>
          <a href="/#depoimentos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            @click="scrollToSection('depoimentos')">Depoimentos</a>
          <a href="/#blog" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer"
            @click="scrollToSection('blog')">Blog</a>
        </nav>
        <div class="flex items-center gap-3">
          <a href="/onboarding"
            class="rounded-2xl px-5 py-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors">Criar site
            grátis</a>
          <a href="/planos" class="rounded-2xl px-5 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors">Ver
            planos</a>
        </div>
      </div>
    </header>

    <!-- Hero da página Sobre -->
    <section class="relative overflow-hidden py-20 md:py-32">
      <div class="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Nossa História, Nossa Missão
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">MeuWP</span>
        </h1>
        <p class="text-lg text-slate-600 max-w-prose mx-auto">
          Desde 2025, dedicamo-nos a transformar ideias em presenças digitais impactantes.
          Conheça quem somos e o que nos move.
        </p>
      </div>
    </section>

    <!-- Nossa Missão -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Target class="w-12 h-12 text-blue-600 mb-4" />
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Nossa Missão
          </h2>
          <p class="text-slate-600 text-lg">
            Democratizar a presença digital, tornando a criação de sites profissionais
            acessível e descomplicada para empresas e profissionais de todos os portes.
            Acreditamos que todo negócio merece uma vitrine online de qualidade.
          </p>
        </div>
        <div class="aspect-video overflow-hidden rounded-3xl shadow-xl">
            <img src="../home/img/hero8.png" alt="Missão MeuWP" class="w-full h-full object-cover" />
        </div>
      </div>
    </section>

    <!-- Nossa Visão -->
    <section class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div class="aspect-video overflow-hidden rounded-3xl shadow-xl md:order-2">
            <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Visão MeuWP" class="w-full h-full object-cover" />
        </div>
        <div class="md:order-1">
          <Lightbulb class="w-12 h-12 text-blue-600 mb-4" />
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Nossa Visão
          </h2>
          <p class="text-slate-600 text-lg">
            Ser a plataforma líder em criação de sites no Brasil, reconhecida pela facilidade de uso,
            excelência no suporte e pela capacidade de gerar resultados reais para nossos clientes.
            Queremos ser a primeira escolha para quem busca uma presença digital de sucesso.
          </p>
        </div>
      </div>
    </section>

    <!-- Nossa História (adaptado de HomePage.vue) -->
    <section id="historia" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Nossa Trajetória
          </h2>
          <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
            Uma linha do tempo de como construímos o MeuWP.
          </p>
        </div>

        <div class="relative max-w-3xl mx-auto">
            <div class="absolute left-1/2 -ml-px h-full w-0.5 bg-slate-200 transform -translate-x-1/2"></div>
            <div class="space-y-12">
                <div v-for="(item, index) in historyHighlights" :key="index" class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                    <div class="hidden md:block w-5/12"></div>
                    <div class="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white shadow-xl absolute left-1/2 transform -translate-x-1/2">
                        <span class="font-bold text-sm">{{ item.year.slice(2) }}</span>
                    </div>
                    <div class="w-full md:w-5/12 p-4 rounded-2xl border border-slate-200 hover:shadow-lg transition-all bg-white relative">
                        <h3 class="font-semibold mb-2 text-lg">{{ item.year }}</h3>
                        <p class="text-sm text-slate-600">{{ item.event }}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>

    <!-- Nossos Valores (reutilizando de HomePage.vue) -->
    <section id="valores" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Nossos Valores
          </h2>
          <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
            Princípios que guiam cada ação e decisão do MeuWP.
          </p>
        </div>

        <div class="grid md:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title"
            class="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all bg-white text-center">
            <component :is="value.icon" class="w-10 h-10 text-blue-600 mb-3 mx-auto" />
            <h4 class="font-semibold mb-2 text-xl">{{ value.title }}</h4>
            <p class="text-sm text-slate-600">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Nossa Equipe (Nova seção) -->
    <section id="equipe" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Conheça Nossa Equipe
          </h2>
          <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
            Pessoas apaixonadas por simplificar o digital e ajudar seu negócio a crescer.
          </p>
        </div>

        <div class="flex justify-center gap-8">
          <div v-for="member in teamMembers" :key="member.name"
            class="p-6 rounded-2xl border border-slate-200 hover:shadow-md transition-all bg-slate-50 text-center max-w-sm">
            <img :src="member.img" :alt="member.name" class="w-24 h-24 rounded-full object-cover mx-auto mb-4" />
            <h4 class="font-semibold mb-1 text-xl">{{ member.name }}</h4>
            <p class="text-blue-600 font-medium mb-3">{{ member.role }}</p>
            <p class="text-sm text-slate-600">{{ member.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Institucional (copiado de HomePage.vue) -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Pronto para transformar sua presença digital?
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          Junte-se a centenas de empresas que já confiam no MeuWP
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/onboarding"
            class="rounded-2xl px-8 py-4 text-base bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
            🚀 Começar grátis
          </a>
          <a href="/planos"
            class="rounded-2xl px-8 py-4 text-base border border-white text-white hover:bg-white hover:text-blue-600 transition-colors">
            💼 Ver planos
          </a>
        </div>
      </div>
    </section>

    <!-- Footer (copiado de HomePage.vue) -->
    <footer class="border-t border-slate-100 py-10 bg-white">
      <div class="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div class="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">
              MW
            </div>
            <span class="font-semibold tracking-tight">MeuWP</span>
          </div>
          <p class="text-slate-600 text-sm">
            Transformando ideias em presenças digitais desde 2025.
          </p>
        </div>

        <div>
          <div class="font-semibold mb-3">Empresa</div>
          <ul class="space-y-2 text-sm text-slate-600">
            <li><a href="/sobre" class="hover:text-slate-900 transition-colors">Sobre nós</a></li>
            <li><a href="/blog" class="hover:text-slate-900 transition-colors">Blog</a></li>
            <li><a href="/contato" class="hover:text-slate-900 transition-colors">Contato</a></li>
            <li><a href="/trabalhe-conosco" class="hover:text-slate-900 transition-colors">Carreiras</a></li>
          </ul>
        </div>

        <div>
          <div class="font-semibold mb-3">Serviços</div>
          <ul class="space-y-2 text-sm text-slate-600">
            <li><a href="/criar-site-gratis" class="hover:text-slate-900 transition-colors">Criar site grátis</a></li>
            <li><a href="/planos" class="hover:text-slate-900 transition-colors">Planos</a></li>
            <li><a href="/hospedagem" class="hover:text-slate-900 transition-colors">Hospedagem</a></li>
            <li><a href="/consultoria" class="hover:text-slate-900 transition-colors">Consultoria</a></li>
          </ul>
        </div>

        <div>
          <div class="font-semibold mb-3">Suporte</div>
          <ul class="space-y-2 text-sm text-slate-600">
            <li><a href="/ajuda" class="hover:text-slate-900 transition-colors">Central de ajuda</a></li>
            <li><a href="/tutoriais" class="hover:text-slate-900 transition-colors">Tutoriais</a></li>
            <li><a href="mailto:contato@meuwp.com" class="hover:text-slate-900 transition-colors">contato@meuwp.com</a>
            </li>
            <li><a href="tel:+550000000000" class="hover:text-slate-900 transition-colors">+55 00 0000-0000</a></li>
          </ul>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-4 pt-8 mt-8 border-t border-slate-100">
        <div class="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
          <p>&copy; 2025 MeuWP. Todos os direitos reservados.</p>
          <div class="flex gap-4 mt-4 md:mt-0">
            <a href="/privacidade" class="hover:text-slate-900 transition-colors">Política de Privacidade</a>
            <a href="/termos" class="hover:text-slate-900 transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
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

/* Transição suave para scroll */
html {
  scroll-behavior: auto;
}

/* Animação de fade-in para seções */
section {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
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