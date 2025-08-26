<script setup>
import { ref } from "vue";
import {
  Shield,
  Zap,
  Mail,
  Smartphone,
  Users,
  Award,
  Clock,
  Check,
  Quote,
  Star,
  ArrowRight,
  Globe,
  Heart,
} from "lucide-vue-next";
import AppHeader from '../../components/AppHeader.vue'; // Importar o novo componente
import AppFooter from '../../components/AppFooter.vue'; // Importar o novo componente

// Função para scroll suave personalizada
// REMOVIDA daqui, pois agora está no AppHeader.vue e será chamada pelo componente
/*
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
*/
// Estatísticas da empresa
const stats = [
  { number: "500+", label: "Sites criados" },
  { number: "98%", label: "Clientes satisfeitos" },
  { number: "5min", label: "Tempo médio de criação" },
  { number: "24/7", label: "Suporte disponível" },
];

// Valores da empresa
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

// Serviços oferecidos
const services = [
  {
    title: "Gratuito",
    price: "R$ 0",
    tag: "Para testar",
    cta: "Começar agora",
    features: [
      "1 site completo",
      "Formulário de contato",
      "Site seguro e rápido",
      "Suporte por WhatsApp",
    ],
  },
  {
    title: "Profissional",
    price: "R$ 39/mês",
    tag: "Mais vendido",
    cta: "Upgrade agora",
    features: [
      "1 site + domínio próprio",
      "Design premium incluído",
      "Otimização para Google",
      "Suporte prioritário",
    ],
  },
  {
    title: "Premium",
    price: "R$ 79/mês",
    tag: "Para crescer",
    cta: "Falar com especialista",
    features: [
      "1 site + páginas extras",
      "Camada extra de segurança",
      "Relatórios mensais",
      "Sessão de ajustes mensais",
    ],
  }
];

// Depoimentos institucionais
const testimonials = [
  {
    name: "Carla Silva",
    role: "Psicóloga",
    company: "Clínica Bem-Estar",
    text: "O MeuWP transformou completamente minha presença digital. Em uma semana já estava recebendo pacientes pelo site.",
    rating: 5
  },
  {
    name: "Rafael Costa",
    role: "Advogado",
    company: "Escritório Costa & Associados",
    text: "Profissionalismo e simplicidade. Meu site ficou exatamente como eu queria, sem complicações técnicas.",
    rating: 5
  },
  {
    name: "Fernanda Santos",
    role: "Proprietária",
    company: "Boutique Elegance",
    text: "Desde que criei meu site com o MeuWP, minhas vendas online aumentaram 300%. Recomendo para qualquer empresário.",
    rating: 5
  }
];

// Blog posts recentes
const blogPosts = [
  {
    title: "Como criar um site profissional em 5 minutos",
    excerpt: "Guia completo para criar seu primeiro site sem conhecimento técnico.",
    category: "Tutorial",
    readTime: "3 min"
  },
  {
    title: "Por que seu negócio precisa de um site em 2024",
    excerpt: "Descubra como um site pode transformar seus resultados de vendas.",
    category: "Marketing",
    readTime: "5 min"
  },
  {
    title: "5 erros comuns ao criar um site sozinho",
    excerpt: "Evite esses problemas que podem prejudicar sua presença digital.",
    category: "Dicas",
    readTime: "4 min"
  }
];
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900">
    <!-- Header -->
    <AppHeader />

    <!-- Hero Institucional -->
    <section class="relative overflow-hidden">
      <div class="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Transformamos ideias em
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">presenças
              digitais</span>
          </h1>
          <p class="text-lg text-slate-600 max-w-prose">
            Somos especialistas em criar sites que geram resultados reais para empresas e profissionais.
            <strong>Simplicidade, qualidade e suporte</strong> são nossos pilares para transformar sua presença digital.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="/onboarding"
              class="rounded-2xl px-6 py-4 text-base bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors text-center">
              🚀 Começar agora
            </a>
            <a href="/sobre"
              class="rounded-2xl px-6 py-4 text-base border border-slate-200 hover:bg-slate-50 transition-colors text-center">
              👥 Conheça nossa história
            </a>
          </div>

          <!-- Estatísticas -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
            <div v-for="stat in stats" :key="stat.label" class="text-center">
              <div class="text-2xl font-bold text-blue-600">{{ stat.number }}</div>
              <div class="text-sm text-slate-600">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Imagem institucional -->
        <div class="relative">
          <div class="aspect-video overflow-hidden">
            <img src="./img/hero8.png" alt="Sites, hospedagem e suporte em um só lugar"
              class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre a empresa -->
    <section id="sobre" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Sobre o MeuWP
          </h2>
          <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
            Nascemos com a missão de democratizar a presença digital. Acreditamos que toda empresa,
            independente do tamanho, merece ter um site profissional que gere resultados.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 class="text-2xl font-bold mb-4">Nossa História</h3>
            <p class="text-slate-600 mb-4">
              Fundada em 2025, o MeuWP surgiu da frustração de ver pequenos empresários e profissionais
              liberais perdendo oportunidades por não terem uma presença digital adequada.
            </p>
            <p class="text-slate-600 mb-6">
              Hoje, já ajudamos mais de 500 empresas a estabelecerem sua presença online,
              sempre com foco na simplicidade e nos resultados.
            </p>
            <a href="/sobre"
              class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
              Conheça nossa história completa
              <ArrowRight class="w-4 h-4" />
            </a>
          </div>

          <div class="grid grid-cols-2 gap-4">
            <div v-for="value in values" :key="value.title"
              class="p-4 rounded-2xl border border-slate-200 hover:shadow-md transition-all">
              <component :is="value.icon" class="w-8 h-8 text-blue-600 mb-3" />
              <h4 class="font-semibold mb-2">{{ value.title }}</h4>
              <p class="text-sm text-slate-600">{{ value.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Serviços -->
    <section id="servicos" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Nossos Serviços
          </h2>
          <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
            Oferecemos soluções completas para sua presença digital, desde a criação do site
            até a hospedagem e suporte contínuo.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="(service, i) in services" :key="service.title"
            class="rounded-3xl border border-slate-200 p-6"
            :class="i === 1 ? 'ring-2 ring-slate-900' : ''"
          >
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-bold">{{ service.title }}</h3>
              <span class="text-xs px-3 py-1 rounded-full"
                :class="i === 1 ? 'bg-slate-900 text-white' : 'bg-slate-100'"
              >{{ service.tag }}</span>
            </div>
            <div class="text-3xl font-extrabold mt-2">{{ service.price }}</div>
            <ul class="space-y-3 mt-4">
              <li v-for="feature in service.features" :key="feature"
                class="flex items-center gap-2 text-sm text-slate-700">
                <Check class="w-4 h-4 text-green-600" />
                {{ feature }}
              </li>
            </ul>
            <a href="/onboarding"
              class="mt-6 w-full rounded-2xl py-4 text-white font-semibold transition-colors flex justify-center items-center"
              :class="i === 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'"
            >
              {{ service.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section id="depoimentos" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            O que nossos clientes dizem
          </h2>
          <p class="text-slate-600 mt-4">
            Histórias reais de transformação digital
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.name"
            class="bg-slate-50 rounded-3xl p-6 hover:shadow-md transition-all">
            <div class="flex items-center gap-1 mb-4">
              <Star v-for="i in testimonial.rating" :key="i" class="w-4 h-4 fill-yellow-400 text-yellow-400" />
            </div>
            <p class="text-slate-700 mb-4">"{{ testimonial.text }}"</p>
            <div>
              <div class="font-semibold">{{ testimonial.name }}</div>
              <div class="text-sm text-slate-600">{{ testimonial.role }} • {{ testimonial.company }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blog -->
    <section id="blog" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Blog
          </h2>
          <p class="text-slate-600 mt-4">
            Dicas, tutoriais e insights sobre presença digital
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <article v-for="post in blogPosts" :key="post.title"
            class="bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-lg transition-all">
            <div class="p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded-full">{{ post.category }}</span>
                <span class="text-xs text-slate-500">{{ post.readTime }}</span>
              </div>
              <h3 class="font-bold mb-2">{{ post.title }}</h3>
              <p class="text-slate-600 text-sm mb-4">{{ post.excerpt }}</p>
              <a href="/blog" class="text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
                Ler mais →
              </a>
            </div>
          </article>
        </div>

        <div class="text-center mt-8">
          <a href="/blog"
            class="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors">
            Ver todos os artigos
            <ArrowRight class="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- CTA Institucional -->
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
          <a href="#servicos"
            @click="handleNavigation('/#servicos')"
            class="rounded-2xl px-8 py-4 text-base border border-white text-white hover:bg-white hover:text-blue-600 transition-colors">
            💼 Ver planos
          </a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<style scoped>

html {
  scroll-behavior: auto;
}

/* Animação de fade-in para seções */
section {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

</style>
