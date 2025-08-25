<script setup>
import { ref } from "vue";
import {
  Shield,
  ArrowRight,
  Mail, // Ícone para contato
  Info // Ícone para informações gerais
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

    <!-- Hero da página de Privacidade -->
    <section class="relative overflow-hidden py-20 md:py-32">
      <div class="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Nossa Política de <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Privacidade</span>
        </h1>
        <p class="text-lg text-slate-600 max-w-prose mx-auto">
          Levamos a sua privacidade a sério. Entenda como coletamos, usamos e protegemos seus dados.
        </p>
      </div>
    </section>

    <!-- Conteúdo da Política de Privacidade -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-4xl mx-auto px-4 space-y-8">
        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Info class="w-8 h-8 text-blue-600" /> Introdução
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Esta Política de Privacidade descreve como o MeuWP.com ("nós", "nosso", "a Empresa")
            coleta, usa e compartilha suas informações pessoais quando você visita ou utiliza nossos
            serviços de criação e hospedagem de sites. Ao usar nossa plataforma, você concorda
            com as práticas descritas nesta política.
          </p>
          <p class="text-slate-600 leading-relaxed mt-4">
            **Data de Efetividade: Abril de 2025**
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Shield class="w-8 h-8 text-blue-600" /> Quais dados coletamos?
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Coletamos diferentes tipos de informações para fornecer e melhorar nossos serviços:
          </p>
          <ul class="list-disc list-inside text-slate-600 mt-4 space-y-2 pl-4">
            <li><strong>Informações de Cadastro:</strong> Nome, endereço de e-mail, senha (criptografada).</li>
            <li><strong>Informações de Pagamento:</strong> Dados de cartão de crédito ou outras informações financeiras (processadas por terceiros seguros, não armazenamos diretamente).</li>
            <li><strong>Dados de Uso:</strong> Informações sobre como você interage com nossa plataforma, como páginas visitadas, recursos utilizados e tempo de uso.</li>
            <li><strong>Dados do Site Criado:</strong> Conteúdo que você publica em seu site (textos, imagens, etc.), configurações de design e domínio.</li>
            <li><strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, sistema operacional, provedor de serviços de internet.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Info class="w-8 h-8 text-blue-600" /> Como usamos seus dados?
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Utilizamos suas informações para:
          </p>
          <ul class="list-disc list-inside text-slate-600 mt-4 space-y-2 pl-4">
            <li>Fornecer, operar e manter nossos serviços (criação e hospedagem de sites).</li>
            <li>Processar suas transações e gerenciar sua conta.</li>
            <li>Comunicar-nos com você, incluindo atualizações de serviço, suporte e informações de marketing.</li>
            <li>Melhorar e personalizar sua experiência em nossa plataforma.</li>
            <li>Analisar o uso de nossos serviços para fins de pesquisa e desenvolvimento.</li>
            <li>Detectar, prevenir e resolver problemas técnicos ou de segurança.</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Shield class="w-8 h-8 text-blue-600" /> Compartilhamento de dados
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Não vendemos ou alugamos suas informações pessoais para terceiros.
            Podemos compartilhar seus dados com:
          </p>
          <ul class="list-disc list-inside text-slate-600 mt-4 space-y-2 pl-4">
            <li><strong>Provedores de Serviço:</strong> Terceiros que nos ajudam a operar o negócio (ex: processadores de pagamento, provedores de hospedagem, ferramentas de análise).</li>
            <li><strong>Parceiros de Marketing:</strong> Para fins de publicidade direcionada, apenas com seu consentimento.</li>
            <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para proteger nossos direitos e segurança.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Info class="w-8 h-8 text-blue-600" /> Seus direitos de privacidade
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Você tem direitos sobre seus dados pessoais, incluindo:
          </p>
          <ul class="list-disc list-inside text-slate-600 mt-4 space-y-2 pl-4">
            <li>Acessar, corrigir ou atualizar suas informações.</li>
            <li>Solicitar a exclusão de seus dados pessoais.</li>
            <li>Optar por não receber comunicações de marketing.</li>
          </ul>
          <p class="text-slate-600 leading-relaxed mt-4">
            Para exercer esses direitos, entre em contato conosco através do e-mail <a href="mailto:contato@meuwp.com" class="text-blue-600 hover:underline">contato@meuwp.com</a>.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Shield class="w-8 h-8 text-blue-600" /> Segurança dos dados
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Implementamos medidas de segurança técnicas e organizacionais para proteger
            suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
            No entanto, nenhuma transmissão de dados pela internet é 100% segura.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Info class="w-8 h-8 text-blue-600" /> Alterações nesta Política
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Podemos atualizar nossa Política de Privacidade periodicamente. Notificaremos você
            sobre quaisquer alterações significativas, publicando a nova política nesta página.
            Recomendamos que você revise esta política regularmente.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Mail class="w-8 h-8 text-blue-600" /> Contato
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Se tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco:
          </p>
          <ul class="list-disc list-inside text-slate-600 mt-4 space-y-2 pl-4">
            <li>E-mail: <a href="mailto:contato@meuwp.com" class="text-blue-600 hover:underline">contato@meuwp.com</a></li>
            <li>Telefone: +55 00 0000-0000</li>
          </ul>
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