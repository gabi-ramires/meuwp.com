<script setup>
import { ref } from 'vue';
import { Check, Info, Shield, Award, Users, Globe, Phone, Mail, FileText, Lock, TrendingUp, Compass, Zap } from "lucide-vue-next";
import AppHeader from '../../components/AppHeader.vue';
import AppFooter from '../../components/AppFooter.vue';

const plans = [
  {
    title: "Básico",
    price: "R$ 0",
    tag: "Para testar",
    cta: "Começar Grátis",
    description: "Ideal para quem está começando e quer testar a plataforma.",
    features: [
      { text: "1 site completo e responsivo", icon: Globe },
      { text: "Hospedagem inclusa", icon: Shield },
      { text: "Certificado SSL (HTTPS)", icon: Lock },
      { text: "Domínio gratuito (subdomínio MeuWP)", icon: Compass },
      { text: "Editor visual intuitivo", icon: Users },
      { text: "Formulário de contato", icon: Mail },
      { text: "Suporte via WhatsApp", icon: Phone },
      { text: "Relatórios básicos de acesso", icon: TrendingUp },
    ],
    highlight: false,
    colorClass: "bg-green-600 hover:bg-green-700"
  },
  {
    title: "Profissional",
    price: "R$ 39/mês",
    tag: "Mais Vendido",
    cta: "Upgrade Agora",
    description: "Perfeito para negócios que buscam crescimento e uma presença profissional.",
    features: [
      { text: "Tudo do Básico, e mais:", icon: Info },
      { text: "Domínio próprio (.com, .com.br, etc.)", icon: Globe },
      { text: "Design premium exclusivo", icon: Award },
      { text: "Otimização SEO para Google", icon: TrendingUp },
      { text: "Integração com Google Analytics", icon: TrendingUp },
      { text: "Suporte prioritário 24/7", icon: Phone },
      { text: "Backup diário do site", icon: FileText },
      { text: "Até 5 páginas extras personalizadas", icon: FileText },
    ],
    highlight: true,
    colorClass: "bg-blue-600 hover:bg-blue-700"
  },
  {
    title: "Premium",
    price: "R$ 79/mês",
    tag: "Para Crescer",
    cta: "Falar com Especialista",
    description: "Solução completa para grandes projetos e empresas que exigem o máximo.",
    features: [
      { text: "Tudo do Profissional, e mais:", icon: Info },
      { text: "Performance otimizada para alto tráfego", icon: Zap },
      { text: "Camada extra de segurança avançada", icon: Shield },
      { text: "Relatórios de desempenho mensais detalhados", icon: TrendingUp },
      { text: "Sessão de ajustes mensais com especialista", icon: Users },
      { text: "Integração com e-commerce (opcional)", icon: Compass },
      { text: "Consultoria estratégica de marketing digital", icon: Award },
      { text: "Suporte VIP com gestor de conta dedicado", icon: Phone },
    ],
    highlight: false,
    colorClass: "bg-indigo-600 hover:bg-indigo-700"
  }
];

const faqs = [
  {
    question: "O que está incluído no plano gratuito?",
    answer: "O plano Gratuito oferece um site completo e responsivo, hospedagem, certificado SSL, um subdomínio MeuWP, editor visual e formulário de contato, ideal para você testar nossa plataforma sem custo."
  },
  {
    question: "Posso usar meu próprio domínio nos planos pagos?",
    answer: "Sim! Nos planos Profissional e Premium, você pode conectar seu próprio domínio (.com, .com.br, etc.) para uma presença digital ainda mais forte e personalizada."
  },
  {
    question: "Qual a diferença entre os planos Profissional e Premium?",
    answer: "O plano Profissional é focado em negócios que buscam crescimento com um site completo e otimizado. Já o Premium é para grandes projetos, oferecendo recursos avançados como segurança extra, consultoria e suporte VIP para escalar seus resultados."
  },
  {
    question: "Como funciona o suporte?",
    answer: "No plano Básico, o suporte é via WhatsApp. Nos planos Profissional e Premium, você tem suporte prioritário 24/7, e no Premium, ainda conta com um gestor de conta dedicado para um atendimento exclusivo."
  }
];

const openFaq = ref(null);

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index;
};
</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900">
    <AppHeader />

    <!-- Hero Section para Planos -->
    <section class="relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight mb-4">
          Escolha o Plano Perfeito para o Seu Sucesso Online
        </h1>
        <p class="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          Desde a criação do seu primeiro site até soluções robustas para grandes empresas.
          Encontre a opção que acelera seus resultados!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/onboarding"
            class="rounded-2xl px-8 py-4 text-base bg-white text-blue-700 font-semibold hover:bg-blue-100 transition-colors">
            🚀 Começar seu Site Grátis
          </a>
          <a href="#comparacao"
            class="rounded-2xl px-8 py-4 text-base border border-white text-white hover:bg-blue-700 transition-colors">
            🔍 Comparar Todos os Recursos
          </a>
        </div>
      </div>
    </section>

    <!-- Seção de Planos com mais detalhes -->
    <section id="planos" class="py-16 md:py-24">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Nossos Planos de Presença Digital
          </h2>
          <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
            Oferecemos soluções completas para sua presença digital. Escolha o plano que melhor se encaixa nas suas necessidades e comece a transformar suas ideias em resultados!
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 items-stretch">
          <div v-for="(plan, i) in plans" :key="plan.title"
            class="rounded-3xl border border-slate-200 p-6 flex flex-col h-full"
            :class="plan.highlight ? 'ring-4 ring-blue-600 shadow-xl relative' : 'hover:shadow-lg transition-shadow'"
          >
            <div v-if="plan.highlight" class="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Mais popular
            </div>
            <div class="flex items-center justify-between mb-4 mt-2">
              <h3 class="text-2xl font-bold">{{ plan.title }}</h3>
              <span class="text-xs px-3 py-1 rounded-full"
                :class="plan.highlight ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-800'"
              >{{ plan.tag }}</span>
            </div>
            <p class="text-slate-600 text-sm mb-4">{{ plan.description }}</p>
            <div class="text-4xl font-extrabold mb-6">
              {{ plan.price }}<span class="text-lg text-slate-500" v-if="plan.price !== 'R$ 0'">/mês</span>
            </div>

            <h4 class="font-semibold text-slate-800 mb-3">Recursos Incluídos:</h4>
            <ul class="space-y-3 flex-grow mb-6">
              <li v-for="(feature, idx) in plan.features" :key="idx"
                class="flex items-center gap-3 text-sm text-slate-700">
                <component :is="feature.icon" class="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span>{{ feature.text }}</span>
              </li>
            </ul>
            <a href="/onboarding"
              class="mt-auto w-full rounded-2xl py-4 text-white font-semibold transition-colors flex justify-center items-center text-center"
              :class="plan.colorClass"
            >
              {{ plan.cta }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção de Comparação Detalhada (opcional, pode ser adicionada depois se necessário) -->
    <!-- <section id="comparacao" class="py-16 md:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Comparação Detalhada dos Planos
          </h2>
          <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
            Veja em detalhes o que cada plano oferece para escolher com confiança.
          </p>
        </div>
        ... tabela de comparação ...
      </div>
    </section> -->

    <!-- Seção de Perguntas Frequentes (FAQ) -->
    <section class="py-16 md:py-24">
      <div class="max-w-4xl mx-auto px-4">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tight">
            Perguntas Frequentes
          </h2>
          <p class="text-slate-600 mt-4 max-w-2xl mx-auto">
            Respostas para as dúvidas mais comuns sobre nossos planos e serviços.
          </p>
        </div>

        <div class="space-y-4">
          <div v-for="(faq, index) in faqs" :key="index" class="border border-slate-200 rounded-lg">
            <button @click="toggleFaq(index)" class="flex justify-between items-center w-full p-5 text-lg font-semibold text-left text-slate-800">
              {{ faq.question }}
              <svg :class="{'rotate-180': openFaq === index}" class="w-5 h-5 text-slate-500 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div v-if="openFaq === index" class="px-5 pb-5 text-slate-600">
              <p>{{ faq.answer }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Final -->
    <section class="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div class="max-w-4xl mx-auto px-4 text-center">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Pronto para ter seu site profissional?
        </h2>
        <p class="text-xl text-blue-100 mb-8">
          Escolha o plano que mais se adequa aos seus objetivos e comece a construir sua presença digital hoje mesmo!
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/onboarding"
            class="rounded-2xl px-8 py-4 text-base bg-white text-blue-600 font-semibold hover:bg-blue-50 transition-colors">
            Começar Grátis Agora
          </a>
          <a href="#planos"
            class="rounded-2xl px-8 py-4 text-base border border-white text-white hover:bg-blue-700 transition-colors">
            Revisar Planos
          </a>
        </div>
      </div>
    </section>

    <AppFooter />
  </div>
</template>

<style scoped>
html {
  scroll-behavior: auto;
}
</style> 