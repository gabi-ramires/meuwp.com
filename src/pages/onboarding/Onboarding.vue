<script setup>
import { ref } from "vue";
import { Check, User, Mail, Lock, MousePointerClick, Eye, EyeOff } from "lucide-vue-next";

const progresso = ref(1);

// Step 1
const nome = ref("");
const email = ref("");
const senha = ref("");
const mostrarSenha = ref(false);

// Step 2
const modelos = [
    { id: 1, nome: "Modelo Minimal", img: "https://via.placeholder.com/150" },
    { id: 2, nome: "Modelo Moderno", img: "https://via.placeholder.com/150" },
    { id: 3, nome: "Modelo Criativo", img: "https://via.placeholder.com/150" },
];
const modeloSelecionado = ref(null);

// Step 3
const urlType = ref("subdominio"); // 'subdominio' ou 'personalizado'
const subdominio = ref("");
const dominioPersonalizado = ref("");

const steps = [
    { id: 1, label: "Criar conta", icon: User },
    { id: 2, label: "Escolher modelo", icon: MousePointerClick },
    { id: 3, label: "Publicar", icon: Check },
];

const continuar = () => {
    if (progresso.value === 1) {
        if (nome.value && email.value && senha.value) {
            progresso.value = 2;
        } else {
            alert("Preencha todos os campos.");
        }
    } else if (progresso.value === 2) {
        if (modeloSelecionado.value) {
            progresso.value = 3;
        } else {
            alert("Selecione um modelo.");
        }
    } else if (progresso.value === 3) {
        if (urlType.value === "subdominio" && !subdominio.value) {
            alert("Digite um subdomínio válido.");
            return;
        }
        if (urlType.value === "personalizado" && !dominioPersonalizado.value) {
            alert("Digite um domínio personalizado válido.");
            return;
        }
        const siteURL = urlType.value === "subdominio"
            ? `${subdominio.value}.meuwp.com`
            : dominioPersonalizado.value;
        alert(`Site criado com sucesso: ${siteURL}`);
    }
};
</script>

<template>
    <div
        class="min-h-screen w-full bg-gradient-to-b from-white to-slate-50 text-slate-900 flex flex-col items-center justify-start py-16">

        <!-- Header -->
        <header class="mb-10 flex items-center gap-3">
            <div class="w-9 h-9 rounded-2xl bg-slate-900 text-white grid place-items-center font-bold">MW</div>
            <span class="font-semibold text-xl">MeuWP</span>
        </header>

        <!-- Barra de progresso -->
        <div class="w-full max-w-md mb-10 relative">
            <div class="absolute top-1/2 transform -translate-y-1/2 w-full h-2 bg-slate-200 rounded-full z-0"></div>
            <div class="flex justify-between relative z-10">
                <div v-for="step in steps" :key="step.id" class="flex flex-col items-center w-1/3">
                    <div class="w-8 h-8 rounded-full flex items-center justify-center transition-all" :class="{
                        'bg-blue-600 text-white': progresso >= step.id,
                        'bg-white text-slate-400 border border-slate-300': progresso < step.id
                    }">
                        <component :is="step.icon" class="w-4 h-4" />
                    </div>
                    <span class="text-xs mt-2 text-center"
                        :class="{ 'font-semibold text-blue-600': progresso >= step.id, 'text-slate-400': progresso < step.id }">
                        {{ step.label }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Conteúdo do step -->
        <div class="w-full max-w-md bg-white rounded-3xl shadow-md p-8">

            <!-- Step 1: Criar conta -->
            <div v-if="progresso === 1" class="space-y-4">
                <div class="text-center mb-6">
                    <MousePointerClick class="w-10 h-10 mx-auto text-blue-600" />
                    <h2 class="text-2xl font-bold mt-2">Crie seu site em 3 cliques</h2>
                    <p class="text-slate-600 mt-1 text-sm">
                        Basta criar sua conta e escolher um modelo pronto.
                    </p>
                </div>

                <div class="space-y-4">
                    <div class="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2">
                        <User class="w-5 h-5 text-slate-400" />
                        <input v-model="nome" type="text" placeholder="Nome" class="flex-1 outline-none" />
                    </div>
                    <div class="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2">
                        <Mail class="w-5 h-5 text-slate-400" />
                        <input v-model="email" type="email" placeholder="E-mail" class="flex-1 outline-none" />
                    </div>
                    <div class="flex items-center gap-2 border border-slate-200 rounded-xl px-4 py-2 relative">
                        <Lock class="w-5 h-5 text-slate-400" />
                        <input :type="mostrarSenha ? 'text' : 'password'" v-model="senha" placeholder="Senha"
                            class="flex-1 outline-none" />
                        <span @click="mostrarSenha = !mostrarSenha" class="absolute right-3 cursor-pointer">
                            <component :is="mostrarSenha ? EyeOff : Eye" class="w-5 h-5 text-slate-400" />
                        </span>
                    </div>
                </div>

                <button @click="continuar"
                    class="w-full mt-4 py-3 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition">
                    Continuar
                </button>
            </div>

            <!-- Step 2: Escolher modelo -->
            <div v-if="progresso === 2">
                <h2 class="text-xl font-bold text-center mb-4">Escolha seu modelo</h2>
                <div class="grid grid-cols-3 gap-4">
                    <div v-for="modelo in modelos" :key="modelo.id" @click="modeloSelecionado = modelo.id"
                        :class="['cursor-pointer rounded-xl border p-2 transition', modeloSelecionado === modelo.id ? 'border-blue-600 bg-blue-50' : 'border-slate-200']">
                        <img :src="modelo.img" alt="" class="w-full rounded-md" />
                        <p class="text-sm text-center mt-1">{{ modelo.nome }}</p>
                    </div>
                </div>

                <div class="flex justify-between mt-6">
                    <button @click="progresso = 1"
                        class="py-3 px-6 border rounded-2xl text-slate-700 hover:bg-slate-100 transition">
                        Voltar
                    </button>
                    <button @click="continuar"
                        class="py-3 px-6 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition">
                        Continuar
                    </button>
                </div>
            </div>

            <!-- Step 3: Publicar / Escolher URL -->
            <div v-if="progresso === 3" class="space-y-8">
                <div class="text-center">
                    <Check class="w-12 h-12 mx-auto text-green-500" />
                    <h2 class="text-2xl font-bold mt-2">Escolha a URL do seu site</h2>
                    <p class="text-slate-600 mt-1 text-sm">
                        Subdomínio grátis ou domínio personalizado pago (R$50/ano)
                    </p>
                </div>

                <div class="flex flex-col gap-4">
                    <!-- Subdomínio grátis -->
                    <div @click="urlType = 'subdominio'"
                        :class="['cursor-pointer rounded-2xl border p-4 transition', urlType === 'subdominio' ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white']">
                        <div class="flex items-center gap-2 mb-2">
                            <input type="radio" v-model="urlType" value="subdominio" class="w-4 h-4" />
                            <span class="font-semibold text-slate-700">Subdomínio grátis:</span>
                        </div>

                        <div class="flex w-full items-center gap-2">
                            <input v-model="subdominio" type="text" placeholder="ex: gabriela"
                                class="flex-1 rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500 min-w-0" />
                            <span class="flex-shrink-0 text-slate-500 font-medium truncate">.meuwp.com</span>
                        </div>

                        <p v-if="subdominio" class="text-sm text-slate-500 mt-2 break-words">
                            Seu site ficará em:
                            <span class="font-medium text-blue-600">{{ subdominio }}.meuwp.com</span>
                        </p>
                    </div>

                    <!-- Domínio personalizado pago -->
                    <div @click="urlType = 'personalizado'"
                        :class="['cursor-pointer rounded-2xl border p-4 transition', urlType === 'personalizado' ? 'border-blue-600 bg-blue-50' : 'border-slate-200 bg-white']">
                        <div class="flex items-center gap-2 mb-2">
                            <input type="radio" v-model="urlType" value="personalizado" class="w-4 h-4" />
                            <span class="font-semibold text-slate-700">Domínio personalizado (R$50/ano):</span>
                        </div>

                        <input v-model="dominioPersonalizado" type="text" placeholder="ex: meusite.com"
                            class="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:ring-1 focus:ring-blue-500" />

                        <p v-if="dominioPersonalizado" class="text-sm text-slate-500 mt-2 break-words">
                            Seu site ficará em: <span class="font-medium text-blue-600">{{ dominioPersonalizado
                                }}</span>
                        </p>
                    </div>
                </div>

                <div class="flex justify-between mt-6">
                    <button @click="progresso = 2"
                        class="py-3 px-6 border rounded-2xl text-slate-700 hover:bg-slate-100 transition">
                        Voltar
                    </button>
                    <button @click="continuar"
                        class="py-3 px-6 bg-blue-600 text-white rounded-2xl font-semibold hover:bg-blue-700 transition">
                        Publicar meu site
                    </button>
                </div>
            </div>






        </div>
    </div>
</template>
