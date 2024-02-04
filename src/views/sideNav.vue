<template>
  
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo menu z-40 shadow-xl lg:z-40  shadow-slate-700 top-20  lg:left-32 xl:left-52 md:top-12 rounded-r-xl space-y-1 "
    :collapse="store.state.navToggle"
    :color="color"
  >
  
    <el-menu-item index="1" >
      <el-icon :size="size" @click="toggleCollapse">
        <font-awesome-icon icon="house-chimney" size="2xs" 
         :class="{ 'icons p-2 rounded-xl lg:-ml-44': isCollapse || !isCollapse }"/>
      </el-icon>
      <template #title> 
        <div @click="scrollToHome" class="tempText ml-5 w-full h-full text-xs lg:text-base font-semibold flex"><div class="my-auto"> Home </div></div>
      </template>
    </el-menu-item>
    <el-menu-item index="1">
      <el-icon :size="size" @click="toggleCollapse"> 
        <font-awesome-icon icon="question-circle" size="2xs" 
         :class="{ 'icons p-2 rounded-xl lg:ml-24': isCollapse || !isCollapse }"/>
      </el-icon>
      <template #title> 
        <div @click="scrollToAbout" class="tempText ml-5 w-full h-full text-xs lg:text-base font-semibold flex"><div class="my-auto"> About Me </div></div>
      </template>
    </el-menu-item>
    <el-menu-item index="1">
      <el-icon :size="size" @click="toggleCollapse"> 
        <font-awesome-icon icon="clock-rotate-left" size="2xs" 
         :class="{ 'icons p-2 rounded-xl': isCollapse || !isCollapse }"/>
      </el-icon>
      <template #title> 
        <div  @click="scrollToProject" class="tempText ml-5 w-full h-full text-xs lg:text-base font-semibold flex"><div class="my-auto"> Recent Project</div> </div>
      </template>
    </el-menu-item>
    <el-menu-item index="1">
      <el-icon :size="size" @click="toggleCollapse"> 
        <font-awesome-icon icon="handshake-angle" size="2xs" 
         :class="{ 'icons p-2 rounded-xl': isCollapse || !isCollapse }"/>
      </el-icon>
      <template #title> 
        <div  @click="scrollToCarousel" class="tempText ml-5 w-full h-full text-xs lg:text-base font-semibold flex"><div class="my-auto"> Service Offered </div></div>
      </template>
    </el-menu-item>
    
    <el-menu-item index="1">
      <el-icon :size="size" @click="toggleCollapse">
        <font-awesome-icon icon="phone" shake size="2xs"  
         :class="{ 'icons p-2 rounded-xl': isCollapse || !isCollapse }"/>
      </el-icon>
      <template #title> 
        <div @click="scrollToContact" class="tempText ml-5 w-full h-full text-xs lg:text-base font-semibold flex"><div class="my-auto"> Contact Me <font-awesome-icon icon="angles-right" class="ml-4"/></div> </div>
      </template>
    </el-menu-item>
    </el-menu>
</template>

<script  setup>
import { ref } from 'vue';
import {useStore} from "vuex"

const store = useStore()
var toggleValue =  store.state.navToggle
const size = 20
const color = '#409EFC';
const isCollapse = ref(toggleValue);

const toggleCollapse = () => {
  store.dispatch("toggle")
}

const scrollToHome = () =>{ 
  const element = document.getElementById('home');
element.scrollIntoView({ behavior: 'smooth' });
}

const scrollToCarousel = () =>{ 
  const element = document.getElementById('carousel');
element.scrollIntoView({ behavior: 'smooth' });
}

const scrollToAbout = () =>{ 
  const element = document.getElementById('about');
element.scrollIntoView({ behavior: 'smooth' });
}

const scrollToProject = () =>{ 
  const element = document.getElementById('project');
element.scrollIntoView({ behavior: 'smooth' });
}

const scrollToContact = () =>{ 
  const element = document.getElementById('contact');
element.scrollIntoView({ behavior: 'smooth' });
}

</script>

<style scoped>
.tempText {
  color:rgb(197,208,233);
}
.icons{
  color:rgb(194, 208, 233);
  margin-left: 15px;
  border:2px solid rgb(46, 64, 88);
  
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  background-color:rgba(31, 41, 55, 0.8);
  position:absolute;
  padding: 10px 2px;
  margin-left:-20px;
  border-right: 3px solid rgba(68, 95, 131, 08);
  width:fit-content;

}
.el-menu--collapse{
  position: absolute;
  background-color:rgba(31, 41, 55, 0.95);
  padding:  10px 0px;
  margin-left:-20px;
  border-right: 3px solid rgba(68, 95, 131, 08);
  
}
.el-menu-item:hover {
  background-color:rgba(67, 86, 110, 0.7);
}
</style>