<template>
    <div class="flex flex-col w-full h-screen bg-inherit border-4 border-500">
       <div class="m-auto w-fit">
            <div class="">
                <Vue3Lottie class="lg:hidden" :animationData="AnimationJSON" :height="150" :width="150" />
                <Vue3Lottie class="hidden lg:block" :animationData="AnimationJSON" :height="220" :width="220" />
            </div>
            <div class="mx-auto w-fit text-base lg:text-lg">
                <div class="textAnimate ">
                    <h1 class=" font-salsa">Welcome! Please wait ...</h1>
                </div>
            </div>
            <router-link to="/Home">
                <div class="h-10 w-10 bg-red-500">

                </div>
            </router-link>
       </div>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { Vue3Lottie } from 'vue3-lottie'
import AnimationJSON from '../animation.json'
import { useStore } from 'vuex'; 

const store = useStore()

onMounted(() => {
  store.dispatch("signIn")
  setTimeout(() => {
   store.state.signedIn = true
  },5000);

  
})



</script>

<style>
.textAnimate h1 {
  color: rgb(194, 208, 233);
  overflow: hidden; 
  border-right: .15em solid #6887af;
  white-space:nowrap; 
  margin: 0 auto; 
  letter-spacing: .15em;
  animation: 
    typing 2s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #6887af }
}
</style>