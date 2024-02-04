<template>
  <div class=" w-wd7">
    <ul class="flex text-sm space-x-2">
        <li @click="scrollToHome" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm" >
            <font-awesome-icon :icon="['fas', 'house-chimney']" size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">Home</p> 
        </li>
        <li @click="scrollToAbout" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
            <font-awesome-icon :icon="['fas', 'question-circle']" size="lg" class="icons  p-1 rounded-lg m-auto"/><p class="m-auto">About me</p>
        </li>
        <li @click="scrollToProject" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
            <font-awesome-icon :icon="['fas', 'clock-rotate-left']" size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">Recent Project</p>
        </li>
        <li @click="scrollToCarousel" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
            <font-awesome-icon :icon="['fas', 'handshake-angle']" size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">Service Offered</p>
        </li>
        <li @click="scrollToContact" class="flex space-x-2 p-2 hover:transition-all hover:ease-in-out hover:duration-500 hover:rounded-lg rounded-sm">
            <font-awesome-icon :icon="['fas', 'phone']" shake size="lg" class="icons p-1 rounded-lg m-auto"/><p class="m-auto">Contact me</p>
        </li>
    </ul>
  </div>
</template>

<script setup>


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

<style>
li {
  color:rgb(197,208,233);
}
li:hover{
    background-color:rgba(67, 86, 110, 0.7);
}
li:hover .icons{
    border:2px solid rgb(167, 186, 219);
    transition: all 500ms ease-in-out;
}
.icons{
  color:rgb(194, 208, 233);
  border:2px solid rgb(58, 80, 109);
}
</style>