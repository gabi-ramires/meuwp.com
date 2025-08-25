<script setup>
import { computed } from 'vue'

/**
 * Props
 * - urlDesktop: URL que será exibida no notebook (recomendado: página inicial/hero).
 * - urlMobile:  URL que será exibida no celular (se não passar, usa a mesma do desktop).
 * - frameColor: cor da moldura (tailwind class) – ex: 'bg-white', 'bg-slate-900'.
 * - showAddressBar: exibe uma barra fake de navegador no notebook.
 */
const props = defineProps({
  urlDesktop: { type: String, required: true },
  urlMobile: { type: String, default: '' },
  frameColor: { type: String, default: 'bg-white' },
  showAddressBar: { type: Boolean, default: true },
})

const mobileUrl = computed(() => props.urlMobile || props.urlDesktop)
</script>

<template>
  <!-- Container responsivo para usar direto na HERO -->
  <div class="relative w-full">
    <!-- Glow suave de fundo -->
    <div class="pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-blue-100/70 via-sky-100/40 to-indigo-100/0 blur-2xl"></div>

    <div class="relative grid gap-6 md:grid-cols-[1fr_280px] items-end">
      <!-- Notebook mockup -->
      <div class="relative w-full">
        <!-- Tampa/sombra -->
        <div class="mx-auto h-3 w-11/12 rounded-b-full bg-slate-900/10"></div>

        <div class="relative mx-auto w-full overflow-hidden rounded-[28px] border border-slate-200 shadow-2xl">
          <!-- Bezel superior com câmera -->
          <div class="absolute left-1/2 top-2 z-20 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-300"></div>

          <!-- Barra de navegador fake (opcional) -->
          <div v-if="showAddressBar" class="relative z-10 flex items-center gap-2 border-b border-slate-200/80 bg-slate-50/80 px-4 py-2 text-[11px]">
            <div class="flex items-center gap-1.5">
              <span class="h-2.5 w-2.5 rounded-full bg-red-400/90"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-amber-400/90"></span>
              <span class="h-2.5 w-2.5 rounded-full bg-emerald-400/90"></span>
            </div>
            <div class="ml-2 flex-1 rounded-md border border-slate-200 bg-white/80 px-2 py-1 text-slate-500 truncate">{{ urlDesktop }}</div>
          </div>

          <!-- Área da tela -->
          <div :class="['relative', frameColor, 'aspect-[16/10]']">
            <iframe
              :src="urlDesktop"
              class="absolute inset-0 h-full w-full"
              loading="lazy"
              referrerpolicy="no-referrer"
              sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            ></iframe>
          </div>

          <!-- Base do notebook -->
          <div class="relative z-10 h-4 bg-gradient-to-b from-slate-200 to-slate-300"></div>
        </div>

        <!-- Borda inferior/mesa -->
        <div class="mx-auto mt-2 h-2 w-10/12 rounded-full bg-slate-900/10"></div>
      </div>

      <!-- Celular mockup -->
      <div class="relative mx-auto hidden w-[280px] md:block">
        <div class="relative rounded-[36px] border border-slate-300 bg-slate-200/40 p-2 shadow-xl">
          <!-- Notch / alto-falante -->
          <div class="pointer-events-none absolute left-1/2 top-2 z-20 h-4 w-28 -translate-x-1/2 rounded-b-2xl bg-slate-900/80"></div>

          <div class="relative overflow-hidden rounded-[28px] bg-black aspect-[9/19.5]">
            <iframe
              :src="mobileUrl"
              class="h-full w-full"
              loading="lazy"
              referrerpolicy="no-referrer"
              sandbox="allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
            ></iframe>
          </div>
        </div>

        <div class="mx-auto mt-2 h-1.5 w-44 rounded-full bg-slate-900/10"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/***** Ajustes finos para aliasing suave nas bordas *****/
iframe { 
  background: white; /* evita flicker em sites com fundo transparente */
}
</style>
