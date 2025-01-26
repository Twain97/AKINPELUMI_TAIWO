<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <carousel :items-to-show="1.07"  class="md:hidden z-30 w-full md:w-2/3 mx-auto bg-inherit transition-all ease-in-out delay-300" 
     :autoplay="7000" :wrap-around="true" pagination-color="red" paginationActiveColor="red" >
      <slide v-for="slide in serviceData" :key="slide" class=" border-red-500">
        <div id="Carousel" class="h-80 md:h-80 mx-2 w-72 overflow-hidden relative text-base lg:text-lg rounded-lg" style="background-color:rgb(37, 55, 82);">
           <div class="flex p-2  justify-between border-red-500" >
              <font-awesome-icon :icon="slide.logo" size="lg" />
              <p class="font-serif">{{ slide.title }}</p> 
           </div>
           <ul class="space-y-4 md:space-y-5 mt-3 px-3">
            <li v-for="content in slide.Descrip" :key="content" class="text-left">
              <p class="text-xs md:text-sm"><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/> {{ content }}</p> 
            </li>
           </ul>
            <Vue3Lottie class="absolute -bottom-14 -right-14" :animationData="AnimationJSON" :height="120" :width="120" />
        </div>
      </slide>
  
      <template #addons>
        <pagination />
      </template>
    </carousel>

    <carousel :items-to-show="1"  class="hidden md:block z-30 md:w-2/4 mx-auto bg-inherit transition-all ease-in-out delay-300" 
     :autoplay="7000" :wrap-around="true" >
      <slide v-for="slide in serviceData" :key="slide" class=" border-red-500">
        <div id="Carousel" class="md:h-80 mx-2 w-80 overflow-hidden relative text-base lg:text-lg rounded-lg" style="background-color:rgb(37, 55, 82);">
           <div class="flex p-4  justify-between border-red-500" >
              <font-awesome-icon :icon="slide.logo" size="lg" />
              <p class="font-serif">{{ slide.title }}</p> 
           </div>
           <ul class="space-y-4 md:space-y-5 mt-3 px-3">
            <li v-for="content in slide.Descrip" :key="content" class="text-left">
              <p class="text-xs md:text-sm"><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/> {{ content }}</p> 
            </li>
           </ul>
            <Vue3Lottie class="absolute -bottom-14 -right-14" :animationData="AnimationJSON" :height="120" :width="120" />
        </div>
      </slide>
  
      <template #addons>
        <pagination />
      </template>
    </carousel>
  </template>
  
  <script>
  // If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import { Vue3Lottie } from 'vue3-lottie'
import AnimationJSON from '../animation.json'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
import { mapState } from 'vuex'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'app',
    components: {
      Vue3Lottie,
      Carousel,
      Slide,
      Pagination,
    },
    computed: {
      ...mapState({
        service:"service"
      }),
      serviceData(){
        return this.service
      }
    },
    data(){
      return{
        AnimationJSON,
        color:"white",
      }
    }
  }
  </script>
  <style scoped>
  #Carousel{
    border-right: 3px solid rgb(68, 95, 131);
    border-top: 1px solid rgb(68, 95, 131);
    border-left:3px solid rgb(68, 95, 131);
    border-bottom: 1px solid rgb(68, 95, 131);
  }

  .custom-navigation-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
}

.custom-navigation-button.active {
  background-color: inherit;
}

  </style>