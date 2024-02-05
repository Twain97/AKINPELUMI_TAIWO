<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <carousel :items-to-show="1.0"  class="z-10 w-full md:w-full mx-auto bg-inherit transition-all ease-in-out delay-300" 
     :autoplay="0" :wrap-around="true" pagination-color="red" paginationActiveColor="red" >
      <slide v-for="slide in clientComments" :key="slide" class="flex border-red-500">
        <div id="Carousel" class="mt-4 h-44 md:h-44 w-5/6 mb-4 lg:h-52 mx-2 overflow-hidden relative text-base lg:text-lg rounded-lg" style="background-color:rgb(37, 55, 82);">
          <div class="flex justify-between py-2 px-5">
            <img :src="slide.photo" alt="" class="w-10 h-10 lg:h-20 lg:w-20 bg-white rounded-full">
            <div class="flex flex-col font-salsa">
              <p class="text-base lg:text-lg">{{ slide.name }}</p>
              <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">{{ slide.job }}</p>
            </div>
          </div>

          <p class="font-salsa text-sm lg:text-base px-2"><span class="text-4xl lg:text-5xl">"</span>{{ slide.comment }}<span class="text-4xl">"</span></p>
        </div>
      </slide>
  
      <template #addons>
       
          <Navigation />
        
      </template>
    </carousel>
  </template>
  
  <script>
import AnimationJSON from '../animation.json'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { mapState } from 'vuex'
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'app',
    components: {
      Carousel,
      Slide,
      Navigation
    },
    computed: {
      ...mapState({
        clients:"clients"
      }),
      clientComments(){
        return this.clients
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
  <style>
  #Carousel{
    border-right: 3px solid rgb(68, 95, 131);
    border-top: 1px solid rgb(68, 95, 131);
    border-left:3px solid rgb(68, 95, 131);
    border-bottom: 1px solid rgb(68, 95, 131);
    width:95%;
  }

  .carousel__prev,
.carousel__next {
  border-radius:100px;
  background-color:rgb(68, 95, 131);
  border: 2px solid rgb(104, 135, 175);
  color: rgb(194, 208, 233) ;
}
.carousel__prev{
  margin-left: -10px;
}
.carousel__next {
  margin-right: -10px;
}

  </style>