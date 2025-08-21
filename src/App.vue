<script setup>
import { ref } from "vue";
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

// Features
const features = [
  { icon: Shield, label: "SSL grátis" },
  { icon: Zap, label: "Backup diário" },
  { icon: Mail, label: "E-mail profissional" },
  { icon: Smartphone, label: "Site responsivo" },
];

// Steps
const steps = [
  {
    icon: MousePointerClick,
    title: "Crie sua conta",
    text: "Leva menos de 1 minuto. Sem cartão no teste grátis.",
  },
  {
    icon: Palette,
    title: "Escolha um modelo",
    text: "Templates por profissão: psicólogo, advogado, clínica, loja e mais.",
  },
  {
    icon: Rocket,
    title: "Publique em minutos",
    text: "Sem cPanel, sem tecniquês. A gente cuida de tudo pra você.",
  },
];

// Planos
const plans = [
  {
    name: "Básico",
    price: "R$ 15/mês",
    tag: "Para começar",
    cta: "Começar grátis",
    perks: [
      "1 site WordPress pronto",
      "1 e-mail profissional",
      "SSL + Backup automático",
      "Suporte por WhatsApp",
    ],
  },
  {
    name: "Profissional",
    price: "R$ 39/mês",
    tag: "Recomendado",
    cta: "Experimentar 15 dias",
    perks: [
      "1 site + 5 e-mails",
      "Tema premium incluído",
      "Otimização de velocidade",
      "Suporte prioritário",
    ],
  },
  {
    name: "Premium",
    price: "R$ 79/mês",
    tag: "Para crescer",
    cta: "Falar com especialista",
    perks: [
      "1 site + 15 e-mails",
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
    q: "Preciso saber mexer em cPanel, DNS ou coisas técnicas?",
    a: "Não. Nosso painel é feito para quem não é técnico. Você entra, escolhe o modelo e publica. Se precisar, a gente faz por você.",
  },
  {
    q: "Tem teste grátis?",
    a: "Sim. Você pode testar por 7–15 dias sem cartão. Se gostar, segue com o plano. Se não, pode cancelar sem cobrança.",
  },
  {
    q: "Vocês fazem migração do meu site atual?",
    a: "Sim. Migramos gratuitamente sites WordPress, incluindo domínio, e-mails e SSL.",
  },
  {
    q: "Posso ter e-mail profissional?",
    a: "Sim. Mesmo no plano Básico você já tem e-mail com o seu domínio.",
  },
];
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900">
    <!-- Header -->
    <header
      class="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-slate-100"
    >
      <div class="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" class="flex items-center gap-2">
          <div
            class="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold"
          >
            MW
          </div>
          <span class="font-semibold tracking-tight">MeuWP</span>
        </a>
        <nav class="hidden md:flex items-center gap-6 text-sm">
          <a href="#modelos" class="hover:opacity-80">Modelos</a>
          <a href="#planos" class="hover:opacity-80">Planos</a>
          <a href="#como-funciona" class="hover:opacity-80">Como funciona</a>
          <a href="#depoimentos" class="hover:opacity-80">Depoimentos</a>
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
            Hospedagem para quem
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600"
              >não entende</span
            >
            de hospedagem
          </h1>
          <p class="text-lg text-slate-600 max-w-prose">
            Seu site WordPress pronto em minutos, sem cPanel e sem tecniquês.
            Teste grátis, SSL e backup inclusos. Você cuida do seu negócio, a
            gente cuida do seu site.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <button
              class="rounded-2xl px-6 py-4 text-base bg-blue-600 text-white"
            >
              Começar meu teste grátis
            </button>
            <button
              class="rounded-2xl px-6 py-4 text-base border border-slate-200"
            >
              Ver modelos prontos
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
            <span>+120 sites publicados • 4.9/5 de satisfação</span>
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
                  v-for="t in ['Entrar no WordPress', 'Criar e-mail', 'Pagar assinatura']"
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
          <p class="text-slate-600 mt-2">Três passos simples para seu site no ar.</p>
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
    <section id="modelos" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="mb-10 flex items-end justify-between">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
              Modelos por profissão
            </h2>
            <p class="text-slate-600 mt-2">
              Comece com um visual pronto e personalize do seu jeito.
            </p>
          </div>
          <button class="rounded-2xl px-5 py-2 bg-blue-600 text-white">
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
          Planos simples, sem letrinha miúda
        </h2>
        <p class="text-slate-600 mt-2">
          Teste grátis por 7–15 dias • Cancele quando quiser
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
              class="mt-6 w-full rounded-2xl py-4 bg-blue-600 text-white"
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
          Pronto para ter seu site sem complicação?
        </h2>
        <p class="text-lg text-slate-600 mt-3">
          Teste grátis, sem cartão. Se gostar, continue. Se não, cancele sem
          custo.
        </p>
        <div class="flex items-center justify-center gap-3 mt-6">
          <button class="rounded-2xl px-8 py-4 text-base bg-blue-600 text-white">
            Começar meu teste grátis
          </button>
          <button class="rounded-2xl px-8 py-4 text-base border border-slate-200">
            Falar no WhatsApp
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
            Hospedagem e criação de sites WordPress sem complicação. Você cuida
            do seu negócio, a gente cuida do seu site.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6 text-sm">
          <div>
            <div class="font-semibold mb-3">Links</div>
            <ul class="space-y-2 text-slate-600">
              <li><a href="#modelos" class="hover:opacity-80">Modelos</a></li>
              <li><a href="#planos" class="hover:opacity-80">Planos</a></li>
              <li><a href="#como-funciona" class="hover:opacity-80">Como funciona</a></li>
              <li><a href="#depoimentos" class="hover:opacity-80">Depoimentos</a></li>
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

