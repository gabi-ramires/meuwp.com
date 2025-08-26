<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleNavigation = (path) => {
  router.push(path);
};
</script>

<template>
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
          <li><a href="/sobre" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/sobre')">Sobre nós</a></li>
          <li><a href="/blog" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/blog')">Blog</a></li>
          <li><a href="/contato" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/contato')">Contato</a></li>
          <li><a href="/trabalhe-conosco" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/trabalhe-conosco')">Carreiras</a></li>
        </ul>
      </div>

      <div>
        <div class="font-semibold mb-3">Serviços</div>
        <ul class="space-y-2 text-sm text-slate-600">
          <li><a href="/criar-site-gratis" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/criar-site-gratis')">Criar site grátis</a></li>
          <li><a href="/planos" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/planos')">Planos</a></li>
          <li><a href="/hospedagem" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/hospedagem')">Hospedagem</a></li>
          <li><a href="/consultoria" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/consultoria')">Consultoria</a></li>
        </ul>
      </div>

      <div>
        <div class="font-semibold mb-3">Suporte</div>
        <ul class="space-y-2 text-sm text-slate-600">
          <li><a href="/ajuda" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/ajuda')">Central de ajuda</a></li>
          <li><a href="/tutoriais" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/tutoriais')">Tutoriais</a></li>
          <li><a href="mailto:contato@meuwp.com" class="hover:text-slate-900 transition-colors">contato@meuwp.com</a></li>
          <li><a href="tel:+550000000000" class="hover:text-slate-900 transition-colors">+55 00 0000-0000</a></li>
        </ul>
      </div>
    </div>

    <div class="max-w-6xl mx-auto px-4 pt-8 mt-8 border-t border-slate-100">
      <div class="flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <p>&copy; 2025 MeuWP. Todos os direitos reservados.</p>
        <div class="flex gap-4 mt-4 md:mt-0">
          <a href="/privacidade" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/privacidade')">Política de Privacidade</a>
          <a href="/termos" class="hover:text-slate-900 transition-colors" @click.prevent="handleNavigation('/termos')">Termos de Uso</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  transition: all 0.2s ease-in-out;
}

a:hover {
  transform: translateY(-1px);
}
</style> 