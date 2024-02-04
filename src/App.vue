<template>
  <div class="main h-full w-full flex">
     <!-- header small/medium screens -->
     <header id="header" class="fixed z-50 top-0 w-full flex py-2 transition-all ease-in-out delay-150 duration-100 lg:hidden">

      <!-- Menu icon -->
      <div  @click="toggleSideNav2()" 
      class="md:ml-10">
        <font-awesome-icon :icon="['fas', 'bars']"  id="sideNavVisible"
        class="hidden icons menuIcon py-1 px-2 rounded-lg" />
      </div>


      <div id="hi" class=" bg-red-500 text-white h-fit my-auto ml-10 w-fit transition-all ease-in duration-500 ">
        Hi
      </div>

      </header>


      <!-- Header large screen upward -->
      <header id="header2" class="lg:fixed hidden z-50 top-0 w-full lg:flex py-4 transition-all ease-in-out delay-150 duration-100  lg:justify-between pr-20 pl-16 xl:pr-44">
      <!-- Top Navigation for large screens only -->
      <topNav id="topNavVisible" class="hidden transition-all ease-in-out duration-500 xl:ml-24"/>


      <div id="hi" class=" bg-red-500 text-white h-fit my-auto ml-10 w-fit transition-all ease-in duration-500 xl:ml-52 ">
        Hi
      </div>

      </header>



    <!-- sideNav -->
    <sideNav id="sideNav" />
    <!-- sideNav id="sideNav2" -->
      <sideNav2 id="ShowSideNav2" class="" />



      <home id="home"  @click="closeNav(), closeNav2()" class="mb-5 lg:mx-auto lg:border-4 lg:shadow-md py-4 lg:w-4/5 xl:w-3/4 rounded-2xl"/>
  </div>
</template>

<script setup>
import topNav from "@/views/topNav.vue"
import sideNav from "./views/sideNav.vue"
import sideNav2 from "./views/sideNav2.vue"
import home from "./pages/Home.vue"
import {useStore} from "vuex"
import { onMounted } from "vue"
const store = useStore()
const closeNav = () => store.state.navToggle = true

const closeNav2 = () => store.state.navToggle2 = true

// prevent ShowSideNav2 from showing on loading of page
onMounted(() => {
  var ShowSideNav2 = document.getElementById("ShowSideNav2");
  if (ShowSideNav2) {
    ShowSideNav2.style.display = "none";
  }
});

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
  hi.style.marginLeft = "75%"
  // Perform actions, such as adding classes, triggering events, etc.
} else {
  // Div is visible
  // console.log('Div is visible');
  closeNav2()
  topNavVisible.style.display = "none"
  sideNavVisible.style.display = "none"
  ShowSideNav2.style.display = "none"
  hi.style.marginLeft = "1.25rem"
  header.style.backgroundColor = "rgba(31, 41, 55, 0)"
  header.style.borderBottom = "none"
  header2.style.backgroundColor = "rgba(31, 41, 55, 0)"
  header2.style.borderBottom = "none"
  // Perform actions if needed
}

})

</script>


<style scoped>
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