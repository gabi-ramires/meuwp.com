<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import {
  Shield,
  Zap,
  Mail,
  Smartphone,
  MousePointerClick,
  Palette,
  Rocket,
  Check,
  Quote,
  Star,
  MessageCircle,
} from "lucide-vue-next";

const router = useRouter();

const criarSite = () => {
  router.push("/onboarding");
};

// Função para scroll suave personalizada
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const targetPosition = element.offsetTop - 80; // 80px de offset para o header fixo
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // 800ms para a animação
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Função de easing para movimento suave
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }
};

// Features
const features = [
  { icon: Shield, label: "Site seguro" },
  { icon: Zap, label: "Rápido e otimizado" },
  { icon: Mail, label: "Formulário de contato" },
  { icon: Smartphone, label: "Funciona no celular" },
];

// Steps
const steps = [
  {
    icon: MousePointerClick,
    title: "Crie sua conta",
    text: "Leva menos de 30 segundos. Sem cartão, sem compromisso.",
  },
  {
    icon: Palette,
    title: "Escolha seu modelo",
    text: "Templates por profissão: psicólogo, advogado, clínica, loja e mais.",
  },
  {
    icon: Rocket,
    title: "Publique em 5 minutos",
    text: "Personalize e publique. Seu site fica online na hora.",
  },
];

// Planos
const plans = [
  {
    name: "Gratuito",
    price: "R$ 0",
    tag: "Para testar",
    cta: "Começar agora",
    perks: [
      "1 site completo",
      "Formulário de contato",
      "Site seguro e rápido",
      "Suporte por WhatsApp",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 39/mês",
    tag: "Mais vendido",
    cta: "Upgrade agora",
    perks: [
      "1 site + domínio próprio",
      "Design premium incluído",
      "Otimização para Google",
      "Suporte prioritário",
    ],
  },
  {
    name: "Premium",
    price: "R$ 79/mês",
    tag: "Para crescer",
    cta: "Falar com especialista",
    perks: [
      "1 site + páginas extras",
      "Camada extra de segurança",
      "Relatórios mensais",
      "Sessão de ajustes mensais",
    ],
  },
];

// Depoimentos
const testimonials = [
  {
    name: "Carla – Psicóloga",
    text: "Criei meu site em um dia e comecei a receber contatos já na primeira semana. Não precisei entender nada técnico.",
  },
  {
    name: "Rafael – Advogado",
    text: "MeuWP simplificou tudo. Eu só escolhi o modelo, enviei meu logo e pronto. Atendimento rápido pelo WhatsApp.",
  },
  {
    name: "Fernanda – Loja de Roupas",
    text: "Fiz o teste grátis e decidi na hora. Hoje recebo orçamentos direto do site, 100% no celular.",
  },
];

// FAQ
const faqs = [
  {
    q: "Preciso saber mexer em coisas técnicas?",
    a: "Não. Nosso painel é feito para quem não é técnico. Você entra, escolhe o modelo e publica. Se precisar, a gente faz por você.",
  },
  {
    q: "É realmente grátis?",
    a: "Sim. Você tem 15 dias de teste grátis, sem compromisso. Se não quiser continuar, não paga nada. Sem cartão de crédito.",
  },
  {
    q: "Quanto tempo leva para criar?",
    a: "Menos de 5 minutos. Escolha o modelo, personalize e publique. Seu site fica online na hora.",
  },
  {
    q: "Posso personalizar meu site?",
    a: "Sim. Você pode alterar cores, textos e imagens facilmente pelo painel.",
  },
];

// JSON-LD FAQ rich results
onMounted(() => {
  try {
    const faqJsonLd = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    }
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(faqJsonLd)
    document.head.appendChild(script)
  } catch (e) {}
})
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900">
    <!-- Header -->
    <header
      class="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-100"
    >
      <div id='home' class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#home" class="flex items-center gap-2" @click="scrollToSection('home')">
          <div
            class="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold"
          >
            MW
          </div>
          <span class="font-semibold tracking-tight">MeuWP</span>
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <a href="#como-funciona" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer" @click="scrollToSection('como-funciona')">Como funciona</a>
          <a href="#depoimentos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer" @click="scrollToSection('depoimentos')">Depoimentos</a>
          <a href="#modelos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer" @click="scrollToSection('modelos')">Modelos</a>
          <a href="#planos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer" @click="scrollToSection('planos')">Planos</a>
        </nav>
        <div class="flex items-center gap-3">
          <button class="rounded-2xl px-5 py-2 bg-slate-900 text-white">Entrar</button>
          <button class="rounded-2xl px-5 py-2 bg-blue-600 text-white">Começar grátis</button>
        </div>
      </div>
    </header>

    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div
        class="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center"
      >
        <div class="space-y-6">
          <h1
            class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight"
          >
            Criar site grátis
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600"
              >em 5 minutos</span
            >
          </h1>
          <p class="text-lg text-slate-600 max-w-prose">
            Quer <strong>criar site grátis</strong> hoje mesmo, sem complicação? Escolha um modelo, personalize e publique. 
            <strong>Totalmente grátis para começar.</strong> Você cuida do seu negócio, a gente cuida do seu site.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <button
              @click="criarSite"
              class="rounded-2xl px-6 py-4 text-base bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
            >
              🚀 Criar meu site agora
            </button>
            <button
              class="rounded-2xl px-6 py-4 text-base border border-slate-200 hover:bg-slate-50 transition-colors"
              @click="scrollToSection('modelos')"
            >
              👀 Ver modelos prontos
            </button>
          </div>

          <!-- Features -->
          <div class="flex flex-wrap items-center gap-4 pt-3">
            <div
              v-for="(f, i) in features"
              :key="i"
              class="flex items-center gap-2 px-3 py-2 rounded-2xl bg-white shadow-sm border border-slate-100"
            >
              <component :is="f.icon" class="w-5 h-5" />
              <span class="text-sm">{{ f.label }}</span>
            </div>
          </div>

          <div class="flex items-center gap-3 pt-4 text-sm text-slate-500">
            <Star class="w-4 h-4" />
            <span>+500 sites criados • 4.9/5 de satisfação • Sem cartão de crédito</span>
          </div>
        </div>

        <!-- Preview painel -->
        <div class="relative">
          <div
            class="aspect-video rounded-3xl bg-white shadow-xl border border-slate-100 overflow-hidden"
          >
            <div class="p-6 grid gap-4">
              <div class="h-10 w-48 rounded-2xl bg-slate-100" />
              <div class="grid md:grid-cols-3 gap-4">
                <button
                  v-for="t in ['Criar meu site', 'Personalizar design', 'Publicar online']"
                  :key="t"
                  class="rounded-2xl border border-slate-200 p-4 text-left hover:shadow-md transition-shadow"
                >
                  <div class="font-medium">{{ t }}</div>
                  <div class="text-sm text-slate-500">
                    1 clique • sem complicação
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Como funciona -->
    <section id="como-funciona" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-10">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Como funciona
          </h2>
          <p class="text-slate-600 mt-2">Três passos simples para seu site no ar em 5 minutos.</p>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(s, i) in steps"
            :key="i"
            class="rounded-3xl border border-slate-200 p-6 hover:shadow-md transition-all"
          >
            <div class="flex items-center gap-3">
              <div
                class="w-10 h-10 rounded-2xl bg-slate-900 text-white grid place-items-center"
              >
                <component :is="s.icon" class="w-6 h-6" />
              </div>
              <div class="text-lg font-semibold">{{ s.title }}</div>
            </div>
            <p class="text-slate-600 mt-2">{{ s.text }}</p>
          </div>
        </div>
      </div>
    </section>



    <!-- Modelos -->
    <section id="modelos" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-10 flex items-end justify-between">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
              Modelos por profissão
            </h2>
            <p class="text-slate-600 mt-2">
              Comece com um visual pronto e personalize do seu jeito. Todos grátis.
            </p>
          </div>
          <button class="rounded-2xl px-5 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors" @click="scrollToSection('modelos')">
            Ver todos os modelos
          </button>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="name in ['Psicologia','Advocacia','Clínica de Estética','Pet Shop','Restaurante','Portfólio Autônomo']"
            :key="name"
            class="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white hover:shadow-md transition-all"
          >
            <div class="aspect-video rounded-t-3xl bg-slate-100" />
            <div class="p-4">
              <div class="font-medium">{{ name }}</div>
              <div class="text-sm text-slate-500">
                Pronto para publicar em minutos
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Planos -->
    <section id="planos" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          Comece grátis, cresça quando quiser
        </h2>
        <p class="text-slate-600 mt-2">
          Plano gratuito completo • Sem cartão de crédito • Cancele quando quiser
        </p>

        <div class="grid md:grid-cols-3 gap-6 mt-10">
          <div
            v-for="(p, i) in plans"
            :key="p.name"
            class="rounded-3xl border border-slate-200 p-6"
            :class="i === 1 ? 'ring-2 ring-slate-900' : ''"
          >
            <div class="flex items-center justify-between">
              <div class="text-xl font-semibold">{{ p.name }}</div>
              <span
                class="text-xs px-3 py-1 rounded-full"
                :class="i === 1 ? 'bg-slate-900 text-white' : 'bg-slate-100'"
                >{{ p.tag }}</span
              >
            </div>
            <div class="text-3xl font-extrabold mt-2">{{ p.price }}</div>
            <ul class="space-y-3 mt-4">
              <li
                v-for="perk in p.perks"
                :key="perk"
                class="flex items-center gap-2 text-slate-700"
              >
                <Check class="w-4 h-4" /> {{ perk }}
              </li>
            </ul>
            <button
              @click="criarSite"
              class="mt-6 w-full rounded-2xl py-4 text-white font-semibold transition-colors"
              :class="i === 0 ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'"
            >
              {{ p.cta }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Depoimentos -->
    <section id="depoimentos" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          Clientes que já simplificaram sua presença online
        </h2>
        <p class="text-slate-600 mt-2">
          Histórias reais de quem não queria complicação
        </p>

        <div class="grid md:grid-cols-3 gap-6 mt-10">
          <div
            v-for="t in testimonials"
            :key="t.name"
            class="rounded-3xl border border-slate-200 p-6 text-left"
          >
            <div class="flex items-center gap-3 mb-3">
              <div
                class="w-10 h-10 rounded-full bg-slate-900 text-white grid place-items-center"
              >
                <Quote class="w-4 h-4" />
              </div>
              <div class="text-base font-semibold">{{ t.name }}</div>
            </div>
            <p class="text-slate-700">“{{ t.text }}”</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
          Perguntas frequentes
        </h2>
        <p class="text-slate-600 mt-2">Tire suas dúvidas antes de começar</p>

        <div class="grid md:grid-cols-2 gap-6 mt-10 text-left">
          <div
            v-for="f in faqs"
            :key="f.q"
            class="rounded-3xl border border-slate-200 bg-white p-6"
          >
            <div class="font-semibold">{{ f.q }}</div>
            <div class="text-slate-600 mt-2">{{ f.a }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA final -->
    <section class="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-extrabold tracking-tight">
          Pronto para ter seu site hoje mesmo?
        </h2>
        <p class="text-lg text-slate-600 mt-3">
          Comece grátis agora. Sem cartão, sem compromisso. Seu site em 5 minutos.
        </p>
        <div class="flex items-center justify-center gap-3 mt-6">
          <button 
            @click="criarSite"
            class="rounded-2xl px-8 py-4 text-base bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors">
            🚀 Criar meu site grátis
          </button>
          <button class="rounded-2xl px-8 py-4 text-base border border-slate-200 hover:bg-slate-50 transition-colors">
            💬 Falar no WhatsApp
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-slate-100 py-10">
      <div
        class="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6 items-start"
      >
        <div class="space-y-3">
          <div class="flex items-center gap-2">
            <div
              class="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold"
            >
              MW
            </div>
            <span class="font-semibold tracking-tight">MeuWP</span>
          </div>
          <p class="text-slate-600 text-sm max-w-sm">
            Criação de sites simples sem complicação. Você cuida
            do seu negócio, a gente cuida do seu site.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div class="font-semibold mb-3">Links</div>
            <ul class="space-y-2 text-slate-600">
                          <li><a href="#como-funciona" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer" @click="scrollToSection('como-funciona')">Como funciona</a></li>
            <li><a href="#depoimentos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer" @click="scrollToSection('depoimentos')">Depoimentos</a></li>
            <li><a href="#modelos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer" @click="scrollToSection('modelos')">Modelos</a></li>
            <li><a href="#planos" class="hover:opacity-80 transition-opacity duration-200 cursor-pointer" @click="scrollToSection('planos')">Planos</a></li>
            </ul>
          </div>
          <div>
            <div class="font-semibold mb-3">Contato</div>
            <ul class="space-y-2 text-slate-600">
              <li><a href="mailto:contato@meuwp.com" class="hover:opacity-80">contato@meuwp.com</a></li>
              <li><a href="tel:+550000000000" class="hover:opacity-80">+55 00 0000-0000</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Transições suaves para todos os elementos interativos */
a, button {
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

