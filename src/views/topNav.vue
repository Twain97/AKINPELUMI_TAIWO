<template>
  <div class="w-wd7">
    <ul class="flex text-sm space-x-2">
      <li @click="goToHomeSection('home')" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
        <font-awesome-icon :icon="['fas', 'house-chimney']" size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">Home</p>
      </li>
      <li @click="goToHomeSection('about')" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
        <font-awesome-icon :icon="['fas', 'question-circle']" size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">About Me</p>
      </li>
      <li @click="goToProjects" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
        <font-awesome-icon :icon="['fas', 'clock-rotate-left']" size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">Projects</p>
      </li>
      <li @click="goToHomeSection('carousel')" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
        <font-awesome-icon :icon="['fas', 'handshake-angle']" size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">Service Offered</p>
      </li>
      <li @click="goToHomeSection('contact')" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
        <font-awesome-icon :icon="['fas', 'phone']" shake size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">Contact Me</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { nextTick } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const goToHomeSection = async (sectionId) => {
  if (route.path !== '/') {
    await router.push('/')
    await nextTick()
  }

  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
}

const goToProjects = () => router.push('/projects')
</script>

<style>
li { color: rgb(197, 208, 233); }
li:hover { background-color: rgba(67, 86, 110, 0.7); }
li:hover .icons {
  border: 2px solid rgb(167, 186, 219);
  transition: all 500ms ease-in-out;
}
.icons {
  color: rgb(194, 208, 233);
  border: 2px solid rgb(58, 80, 109);
}
</style>
