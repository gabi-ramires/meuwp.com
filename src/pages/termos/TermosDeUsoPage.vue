<script setup>
import { ref } from "vue";
import {
  Shield,
  ArrowRight,
  Mail, // Ícone para contato
  Gavel, // Ícone para termos
  FileText // Ícone para aceitação/documentos
} from "lucide-vue-next";
import AppHeader from '../../components/AppHeader.vue'; // Importar o novo componente
import AppFooter from '../../components/AppFooter.vue'; // Importar o novo componente

</script>

<template>
  <div class="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900">
    <!-- Header (copiado de HomePage.vue) -->
    <AppHeader />
    <!-- Hero da página de Termos de Uso -->
    <section class="relative overflow-hidden py-20 md:py-32">
      <div class="max-w-4xl mx-auto px-4 text-center space-y-6">
        <h1 class="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
          Nossos <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">Termos de Uso</span>
        </h1>
        <p class="text-lg text-slate-600 max-w-prose mx-auto">
          Ao utilizar o MeuWP, você concorda com os seguintes termos e condições.
        </p>
      </div>
    </section>

    <!-- Conteúdo dos Termos de Uso -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-4xl mx-auto px-4 space-y-8">
        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <FileText class="w-8 h-8 text-blue-600" /> Introdução e Aceitação
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Bem-vindo ao MeuWP.com ("nós", "nosso", "a Empresa"). Estes Termos de Uso
            ("Termos") regem o acesso e uso de todos os serviços de criação e hospedagem
            de sites oferecidos por nós. Ao acessar ou usar qualquer parte dos nossos
            serviços, você concorda em estar vinculado a estes Termos. Se você não concordar
            com estes Termos, não utilize nossos serviços.
          </p>
          <p class="text-slate-600 leading-relaxed mt-4">
            **Data de Efetividade: Abril de 2025**
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Gavel class="w-8 h-8 text-blue-600" /> Serviços Oferecidos
          </h2>
          <p class="text-slate-600 leading-relaxed">
            O MeuWP oferece uma plataforma online para criação de sites profissionais
            e responsivos, hospedagem WordPress otimizada e serviços de consultoria digital.
            Nossos serviços incluem acesso a modelos de design, ferramentas de personalização,
            formulários de contato, otimização SEO básica e suporte técnico.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <FileText class="w-8 h-8 text-blue-600" /> Registro de Conta
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Para acessar e utilizar a maioria dos nossos serviços, você precisará criar uma conta.
            Você concorda em fornecer informações precisas, completas e atualizadas durante o processo
            de registro e em manter essas informações atualizadas. Você é responsável por manter
            a confidencialidade de suas credenciais de login e por todas as atividades que ocorrem
            sob sua conta.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Gavel class="w-8 h-8 text-blue-600" /> Responsabilidades do Usuário
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Ao utilizar nossos serviços, você concorda em não:
          </p>
          <ul class="list-disc list-inside text-slate-600 mt-4 space-y-2 pl-4">
            <li>Publicar ou transmitir qualquer conteúdo ilegal, difamatório, obsceno, ameaçador, invasivo da privacidade de terceiros ou prejudicial.</li>
            <li>Violar quaisquer leis locais, estaduais, nacionais ou internacionais.</li>
            <li>Infringir direitos autorais, marcas registradas ou outros direitos de propriedade intelectual de terceiros.</li>
            <li>Interferir ou interromper a segurança ou a funcionalidade dos nossos serviços.</li>
            <li>Enviar spam, correntes ou qualquer forma de publicidade não solicitada.</li>
          </ul>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <FileText class="w-8 h-8 text-blue-600" /> Propriedade Intelectual
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Todo o conteúdo disponível em nossa plataforma, incluindo textos, gráficos,
            logotipos, ícones, imagens e software, é propriedade do MeuWP.com ou de seus
            licenciadores e é protegido pelas leis de direitos autorais e outras leis
            de propriedade intelectual. Você retém a propriedade sobre o conteúdo que você
            cria e publica em seu site através de nossa plataforma.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Gavel class="w-8 h-8 text-blue-600" /> Pagamento e Planos
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Oferecemos planos gratuitos e pagos. Os detalhes de preços e recursos de cada
            plano são fornecidos em nossa página de Planos. Os planos pagos são cobrados
            em uma base de assinatura e são renovados automaticamente, a menos que você cancele
            conforme as instruções fornecidas. O não pagamento pode resultar na suspensão
            ou rescisão de sua conta e serviços.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <FileText class="w-8 h-8 text-blue-600" /> Limitação de Responsabilidade
          </h2>
          <p class="text-slate-600 leading-relaxed">
            O MeuWP.com não será responsável por quaisquer danos diretos, indiretos,
            incidentais, especiais, consequenciais ou exemplares, incluindo, mas não
            se limitando a, danos por lucros cessantes, boa vontade, uso, dados ou outras
            perdas intangíveis, resultantes do uso ou da incapacidade de usar nossos serviços.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Gavel class="w-8 h-8 text-blue-600" /> Rescisão
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Podemos rescindir ou suspender seu acesso aos nossos serviços imediatamente,
            sem aviso prévio ou responsabilidade, por qualquer motivo, incluindo, sem
            limitação, se você violar estes Termos.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <FileText class="w-8 h-8 text-blue-600" /> Lei Aplicável e Foro
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Estes Termos serão regidos e interpretados de acordo com as leis do Brasil,
            sem levar em consideração seus conflitos de disposições legais.
            Você concorda com a jurisdição exclusiva dos tribunais localizados no Brasil
            para resolver qualquer disputa decorrente destes Termos.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Gavel class="w-8 h-8 text-blue-600" /> Alterações nos Termos
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Reservamos o direito de modificar ou substituir estes Termos a qualquer momento.
            Se uma revisão for material, faremos esforços razoáveis para fornecer um aviso
            com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor.
          </p>
        </div>

        <div>
          <h2 class="text-3xl font-bold mb-4 flex items-center gap-3">
            <Mail class="w-8 h-8 text-blue-600" /> Contato
          </h2>
          <p class="text-slate-600 leading-relaxed">
            Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco:
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
    <AppFooter />
  </div>
</template>

<style scoped>

/* Transição suave para scroll */
html {
  scroll-behavior: auto;
}

/* Animação de fade-in para seções */
section {
  opacity: 1;
  transition: opacity 0.3s ease-in-out;
}

</style>