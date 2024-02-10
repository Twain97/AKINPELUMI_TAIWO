<template>
  <div>
    <!-- Toast alert -->
    <div class="">
      <Toast class="hidden md:block w-2/4"
        :pt="{
          icon:{class:'mx-5 w-8 mt-3'},
        }"/>
        <Toast class="w-3/4 text-xs font-extralight md:hidden"
        :pt="{
          icon:{class:'mx-2 w-5 '},
        }"
        />
    </div>
    
    <!-- End of Toast -->


    <div  v-if="signedIn" class="main h-full w-full flex">
     <!-- header small/medium screens -->
     <header id="header" class="fixed z-50 top-0 w-full flex py-2 transition-all ease-in-out delay-150 duration-100 lg:hidden">

      <!-- Menu icon -->
      <div  @click="toggleSideNav2()" 
      class="md:ml-10 my-auto">
        <font-awesome-icon :icon="['fas', 'bars']"  id="sideNavVisible"
        class="hidden icons menuIcon py-1 px-2 rounded-lg" />
      </div>


      <div id="hi" class=" text-white h-fit my-auto ml-10  w-fit transition-all ease-in duration-500 ">
        <img :src="logo" alt="logo" class="w-10 h-9"/>
      </div>

      </header>


      <!-- Header large screen upward -->
      <header id="header2" class="lg:fixed hidden z-50 top-0 w-full lg:flex py-4 transition-all ease-in-out delay-150 duration-100  lg:justify-between pr-20 pl-16 xl:pr-44">
      <!-- Top Navigation for large screens only -->
      <topNav id="topNavVisible" class="hidden transition-all ease-in-out duration-500 xl:ml-24"/>


      <div id="hi" class=" text-white h-fit my-auto ml-10 lg:ml-44 w-fit transition-all ease-in duration-500 xl:ml-52 ">
        <img :src="logo" alt="logo" class="w-10 h-10"/>
      </div>

      </header>



      <!-- <home id="home" class="mb-5 md:w-full lg:mx-auto lg:border-4 lg:shadow-md py-4 lg:w-4/5 xl:w-3/4 rounded-2xl"/> -->
      
      <router-view></router-view>
  
  </div>

  <div v-else>
    <LoadingPage/>
  </div>

  </div>
</template>

<script setup>
import LoadingPage from "@/pages/LoadingPage.vue"
import logo from "@/images/Logo.png"
import topNav from "@/views/topNav.vue"
import {useStore} from "vuex"
import { ref, watch } from "vue"


const store = useStore()
const closeNav = () => store.state.navToggle = true

const closeNav2 = () => store.state.navToggle2 = true

let signedIn = ref(store.state.signedIn)
watch(
  () => store.state.signedIn,
  (newValue) => {
    signedIn.value = newValue;
  },
  { immediate: true }
);


const toggleSideNav2 = ()=> {
var ShowSideNav2 = document.getElementById("ShowSideNav2")

 if(ShowSideNav2.style.display == "none"){
  ShowSideNav2.style.display = "block"
  }
  else{
    ShowSideNav2.style.display = "none"
    closeNav2()
  }

// ShowSideNav2.style.border= "4px solid blue"
}

    window.addEventListener('scroll', function(){
    
  var sideNav = document.getElementById('sideNav')
  var  sideNavVisible = document.getElementById('sideNavVisible')
  var  topNavVisible = document.getElementById('topNavVisible')
  var ShowSideNav2 = document.getElementById("ShowSideNav2")
  var hi = document.getElementById("hi")
  var header = document.getElementById("header")
  var header2 = document.getElementById("header2")


  const isSideNavScrolledUp = sideNav.getBoundingClientRect().bottom < 0;
  if (isSideNavScrolledUp) {
  // Div is scrolled up and not visible
  // console.log('Div is not visible');
  closeNav()
  topNavVisible.style.display = "block"
  sideNavVisible.style.display = "block"
  sideNavVisible.style.backgroundColor = "rgb(52, 81, 124)"
  sideNavVisible.style.transition = "all"
  header.style.backgroundColor = "rgba(31, 41, 55, 0.9)";
  header.style.borderBottom = "3px solid rgb(68, 95, 131)"
  header2.style.backgroundColor = "rgba(31, 41, 55, 0.95)";
  header2.style.borderBottom = "3px solid rgb(68, 95, 131)"
  hi.style.marginLeft = "70%"
  // Perform actions, such as adding classes, triggering events, etc.
} else {
  // Div is visible
  // console.log('Div is visible');
  closeNav2()
  topNavVisible.style.display = "none"
  sideNavVisible.style.display = "none"
  ShowSideNav2.style.display = "none"
  hi.style.marginLeft = "2.35rem"
  header.style.backgroundColor = "rgba(31, 41, 55, 0)"
  header.style.borderBottom = "none"
  header2.style.backgroundColor = "rgba(31, 41, 55, 0)"
  header2.style.borderBottom = "none"
  // Perform actions if needed
}

})

</script>


<style>
#home{
  border-color:rgb(52, 76, 112)  ;
}
.main{
  background:rgb(36, 50, 71) ;
}

.menuIcon{
  border: 2px solid rgb(104, 135, 175);
}

.icons{
  color:rgb(194, 208, 233);
  margin-left: 15px;
  
}


</style>