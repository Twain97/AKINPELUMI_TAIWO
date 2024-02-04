<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="container w-full h-fit text-slate-50  relative  border-blue-400">
      <div id="home" class="picTextHlder pb-10 border-red-600 flex flex-col md:flex-row-reverse h-4/5 w-full md:h-ht7  ">
        
        <!-- Image holder -->
        <div class="image/circle relative mt-8 mx-auto w-80 h-60  lg:w-96 lg:h-72 overflow-hidden md:my-auto  border-red-600">
          <img :src="PortPic" alt="Porfolio pic" class="absolute z-40 h-full opacity-95 ">
         
          <div class="circle absolute h-40 w-40 z-10 right-6 top-6 rounded-full border-r-4 rotate-45"></div>
          <div class="circleOut absolute h-48 w-48 z-10 right-2 top-2 rounded-full  rotate-45"></div> 
          <div class="circleIn absolute h-32 w-32 z-10 right-10 top-10 rounded-full  rotate-45"></div> 
          
          
          <div class="socialIcons absolute z-50 top-3 right-20">
            <font-awesome-icon  :icon="['fab', 'whatsapp']" color="white" class="icon p-1 hover:p-2 transition-all rounded-lg " />
          </div>
          <div class="socialIcons absolute z-50 top-12 right-6">
            <font-awesome-icon  :icon="['fab', 'twitter']" size="sm" color="white" class="icon p-1 hover:p-2 transition-all rounded-lg " />
          </div>
          <div class="socialIcons absolute z-50 right-4 top-28">
            <font-awesome-icon :icon="['fab', 'facebook']"  color="white" class="icon p-1 hover:p-2 transition-all rounded-lg " />
          </div>
          <div class="socialIcons absolute z-50 right-14 top-40">
            <font-awesome-icon :icon="['fab', 'linkedin']"  color="white" class="icon p-1 hover:p-2 transition-all rounded-lg " />
          </div>
        </div>
        
        <div class="texts z-30 flex flex-col -mt-1  mx-auto md:my-auto  border-white md:w-fit md:-mr-20 transition-all ease-in-out">
          <div class=" text-center text-slate-50">
            <h1 class="mx-6 text-3xl lg:text-4xl font-serif">Hi! I'm <br> Akinpelumi Taiwo</h1>
            <p  class="mt-2 text-xs xl:text-base text-slate-400 font-salsa">VueJs/Firebase Web developer.</p>
          </div>
          <div class="downloadButton rounded-full mt-5 mx-auto text-slate-50 hover:bg-slate-50 hover:text-slate-700 hover:transition-all ">
            <div class="text-xs space-x-3 py-3 px-4  flex flex-row md:text-sm lg:text-lg">
              <font-awesome-icon :icon="['fas', 'download']" class="text-lg m-auto"/>
              <p class="m-auto font-serif">Get my Resume</p>
            </div>
          </div>
        </div>
      </div>
      
      <!-- About section -->
      <div id="about" class="-bottom-3 h-fit  w-full -mt-4 ">
        <div class="my-auto flex  relative">
          <hr class=" w-full absolute top-2/4">
          <div class="about z-10 p-1 rounded-lg m-auto w-fit font-salsa text-sm text-white lg:text-lg ">About Me</div>
        </div>
      </div>

      <div class="section px-4  mt-5 ">
        <p class=" mx-auto font-salsa text-xs md:text-sm lg:text-base">
          My name is Akinpelumi Taiwo, i'm a student of Federal Polytechnic Ado Ekiti with discipline in Computer Science.<br/>
        </p>
        <p class=" mx-auto my-2 font-salsa text-xs md:text-sm">
          My web development journey started in the year 2019 upon gaining admission into school. I am currently a freelancer and i'm opened for full-time roles(preferably remote).
        </p>
        <p class=" mx-auto font-salsa text-xs md:text-sm">
          What drives my motivation as a web developer is my undying interest of building things that work, solving personal problems as well as those of others brought before me.<br/>
          My interests are in graphic design using photoshop, canva which i do make use of during web development to make them dynamic as well as interactive and i am also proficient with Microsoft Packages(Excel, Ms Word and so on) which helps in keeping and managing of data and records. 
        </p>
        <div class="px-4 font-salsa w-fit text-sm  lg:text-base py-2 rounded-xl mt-10 mb-6 border-2 border-gray-400">
          <p>My Stack <font-awesome-icon :icon="['fas', 'code']" size="lg" class=" m-auto ml-4"/> </p>
        </div>

        <div class="stackContainer mb-6 ">
          <div class=" flex mt-3 ">
            <font-awesome-icon  :icon="['fab', 'vuejs']"  color="white" class="stackIcons text-2xl lg:text-3xl lg:-ml-1 p-1 hover:p-2  rounded-lg " />
            <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">Vue Js 3</span> <br/> A progressive framework which leverage on HTML, CSS and JavaScript. Its based on what the UI looks like and handles updating efficiently when data changes.</p>
          </div>
          <hr class="hr ml-3 -mt-6 w-fit h-20">

          <div class=" flex mt-4 ">
            <font-awesome-icon  :icon="['fas', 'fire-flame-curved']" color="white" class="stackIcons text-2xl lg:text-3xl lg:-ml-1 p-1 hover:p-2 rounded-lg " />
            <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">Firebase</span> <br/> A progressive framework which leverage on HTML, CSS and JavaScript. Its based on what the UI looks like and handles updating efficiently when data changes.</p>

          </div>

          <hr class="hr ml-3 -mt-7 w-fit h-20">
          <div class=" flex mt-4 ">
            <font-awesome-icon  :icon="['fas', 'wind']" color="white" class="stackIcons text-2xl lg:text-3xl lg:-ml-1 mb-3 p-1 hover:p-2 rounded-lg " />
            <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">Tailwind Css </span> <br/> Tailwind, its a 'breeze' in styling CSS. This is a CSS framework that combine both HTML and CSS to make good UI designs. It provide responsive class and its highly flexible</p>
          </div>


          <div class="flex flex-col space-y-4 mt-6">
            <div class="mx-auto px-2 py-1 rounded-lg bg-blue-200 text-blue-900">
              <h2 class="font-salsa text-base lg:text-lg ">Others</h2>
            </div>

            <div class="flex flex-row justify-evenly text-center text-base lg:text-lg">
              <div class="flex flex-col h-24 w-20 border-2 border-blue-300 rounded-xl">
                <font-awesome-icon  :icon="['fab', 'html5']"  color="white" class="stackIcons text-4xl m-auto p-1 hover:p-2 rounded-lg w-fit" />
                <p class="mx-auto">HTML 5</p>
              </div>
              <div class="flex flex-col h-24 w-20 border-2 border-blue-300 rounded-xl">
                <font-awesome-icon  :icon="['fab', 'css3-alt']" color="white" class="stackIcons  text-4xl m-auto p-1 hover:p-2 rounded-lg w-fit " />
                <p class="mx-auto">CSS 3</p>
              </div>
              <div class="flex flex-col h-24 w-20  border-2 border-blue-300 rounded-xl">
                <font-awesome-icon  :icon="['fab', 'js']"  color="white" class="stackIcons text-4xl m-auto p-1 hover:p-2 rounded-lg w-fit " />
                <p class="mx-auto">JS</p>
              </div>
            </div>
          </div>
        </div>


        <!-- Recent project section -->
        <div id="project" class="-bottom-3 h-fit  w-full mb-4 mt-12 ">
          <div class="my-auto flex  relative">
            <hr class=" w-full absolute top-2/4 rounded-full">
            <div class="about z-10 p-1 rounded-lg m-auto w-fit font-salsa text-sm text-white lg:text-lg ">Recent Project</div>
          </div>
        </div>

        <div class="card flex items-center justify-center">
            <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                <template #header>
                    <img alt="knoorPic" :src="knoor" class="rounded-lg mx-auto" />
                </template>
                <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">K</span>noor <span class="text-orange-500 text-2xl lg:text-3xl">K</span>itchen</h1> </template>
                <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">Food Vendor Website</p> </template>
                <template #content>
                    <p class="m-0 font-salsa text-xs lg:text-base">
                        Knoor Kitchen is a food vendor website. It is a platform where people can order delicacy of their choice and have it deliver to their doorstep.<br>
                        On it, users are able to create orders, and with payment gateway on it they can make online payment for their order and as well keep track of such order.
                    </p>
                </template>
                <template #footer>
                  <a href="#">
                    <Button icon="pi pi-globe" label="Visit Knoor Kitchen" class="myButton" 
                    :pt="{ 
                      root: { class: 'bg-indigo-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                    }"/>
                  </a>
                </template>
            </Card>
        </div>

        <!-- service offered section -->
        <div id="carousel" class="mt-6 h-fit  w-full my-6 ">
          <div class="my-auto flex  relative">
            <hr class=" w-full absolute top-2/4 rounded-full">
            <div class="about z-10 p-1 rounded-lg m-auto w-fit font-salsa text-sm text-white lg:text-lg">Services Offered</div>
          </div>
        </div>

        <div class="md:flex md:flex-row">
          <carousel/>

          <div class="flex flex-col md:w-2/4 space-y-4 mt-6 md:ml-5 md:mt-0">
            <div class="px-2 py-1 rounded-lg bg-blue-200 text-blue-900">
              <h2 class="font-salsa text-center ">Available for:</h2>
            </div>
            <ul class="space-y-4 py-4 text-sm md:space-y-8">
              <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Web Development Role.</li>
              <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Implementation of Authentication/Database for Websites.</li>
              <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Peronal Tutor.</li>

              <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Graphics Design.</li>
            </ul>
          </div>
        </div>
        

        <div class="flex flex-col space-y-4 mt-6 md:ml-5 md:mt-10">
          <div class="w-fit px-2 py-1 rounded-l text-3xl md:text-4xl ">
            <h2 class="font-salsa ">Satisfied Client's Comments:</h2>
          </div>

          <comments/>

        </div>


              <!-- Contact me section -->
        <div id="contact" class="-bottom-3 h-fit  w-full mb-4 mt-10">
          <div class="my-auto flex  relative">
            <hr class=" w-full absolute top-2/4 rounded-full">
            <div class="about z-10 p-1 rounded-lg m-auto w-fit font-salsa text-sm text-white lg:text-lg ">Contact Me</div>
          </div>
        </div>

        <div id="contactMe" class=" mx-auto w-full text-base rounded-lg pt-2 px-2 md:flex md:flex-row" style="background-color:rgb(37, 55, 82);">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.777833453944!2d5.300224574088412!3d7.599140909731721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1047e5e70c1d8b79%3A0xb5274cb005995a8e!2sFederal%20Polytechnic%20Ado%20Ekiti!5e0!3m2!1sen!2sng!4v1706490727535!5m2!1sen!2sng" 
          class="w-full h-44 rounded-xl mb-4" style="border:4;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          
          <div id="details" class="w-full mx-auto my-4 text-sm lg:text-base space-y-2  md:ml-5">
            <div class="flex flex-row space-x-4 ">
              <div style=" background:rgb(36, 50, 71) ;" class="p-2 rounded-xl  border-red-500">
                <h3 class=" font-serif ">Phone:</h3>
                <p class="text-xs lg:text-sm">08125212907 / 07068858731</p>
              </div>
              <div style=" background:rgb(36, 50, 71) ;" class="p-2 rounded-xl  border-red-500">
                <h3 class=" font-serif">Address:</h3>
                <p class="text-xs lg:text-sm">Federal Polytechnic Ado-Ekiti</p>
              </div>
            </div>

            <div  id="email" class="w-full p-2 rounded-xl  border-red-500" style=" background:rgb(36, 50, 71) ;">
              <h3 class=" font-serif">Email:</h3>
                <p class="text-xs break-words lg:text-sm">akinpelumi.taiwo97@gmail.com /  sammytwain97@gmail.com</p>
            </div>
          </div>
          
        </div>

          <!-- contact me (map and send email section) -->
        <div id="contactMe" class=" mx-auto mt-4 w-full text-sm lg:text-base rounded-lg pt-2 px-2 md:flex md:flex-row" style="background-color:rgb(37, 55, 82);">
          <form action="" class="w-full mx-auto my-4 text-sm space-y-2  md:ml-5 overflow-ellipsis">
            <p class="text-sm lg:text-lg mb-4 font-serif">If you have any project or need help.<br class="md:hidden"/> Contact me</p>
            <div class="flex flex-row space-x-2 ">
              <div style=" background:rgb(36, 50, 71) ;" class="p-2 rounded-xl w-2/4 border-red-500">
                <h3 class=" font-serif">Name:</h3>
                <input type="text" class="bg-inherit text-xs lg:text-sm w-full p-2" placeholder="Adigun Zainab Chibuso">
              </div>
              <div style=" background:rgb(36, 50, 71) ;" class="p-2 rounded-xl w-2/4 border-red-500">
                <h3 class=" font-serif">Email:</h3>
                <input type="text" class="bg-inherit text-xs lg:text-sm w-full p-2 " placeholder="Your_email_address@gmail.com">
              </div>
            </div>

            <div class="flex flex-col space-y-2">
              <div  class="w-full p-2 rounded-xl  border-red-500" style=" background:rgb(36, 50, 71) ;">
                <h3 class=" font-serif">Subject:</h3>
                <input type="text" class="bg-inherit text-xs lg:text-sm w-full p-2" placeholder="e.g Landing Page....">
              </div>

              <div  class="w-full p-2 rounded-xl  border-red-500" style=" background:rgb(36, 50, 71) ;">
                <h3 class=" font-serif">Message:</h3>
                <textarea class="bg-inherit text-xs lg:text-sm w-full p-2" placeholder="e.g I need you to design a landing page for...."></textarea>
              </div>
            </div>


            <div class="flex justify-between">
              <div class="downloadButton rounded-full mt-8 h-fit w-fit text-slate-50 hover:bg-slate-50 hover:text-slate-700 hover:transition-all ">
                <div class="text-xs space-x-2 py-3 px-4  flex flex-row md:text-sm">
                  <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-base m-auto rotate-12"/>
                  <p class="m-auto font-serif">Send</p>
                </div>
              </div>

              <a href="#" class="my-auto pt-5">
                <img :src="whatsapp" alt="whatsapp logo" class="w-16 h-16 hover:opacity-80 rounded-full">
              </a>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  


  <!-- <div class="border rounded-md p-4">
  My content
  <span class="before:content-[''] before:absolute before:left-0 before:text-gray-400 before:h-96 before:border-4 before:border-red-600">
  </span>
</div> -->
</template>

<script setup>
import carousel from "../views/carousel.vue"
import comments from "@/views/comments.vue";
import PortPic from "../images/pic.png"
import knoor from "../images/knoor.png"
import whatsapp from "@/images/whatsapp.png"
// import { onMounted, ref } from "vue";

// const names =ref([])
// onMounted(() => {
  // const fetchData = async () =>{
  //   try{
  //     const response = await fetch('https://randomuser.me/api/?results=5&nat=nz')
  //     const data = await response.json()
  //     return names.value = data.results
  //   }catch(error){
  //     alert(error)
  //   }
  // }

  // console.log(fetchData())
// })

</script>


<style scoped>

hr{
  border: 2px solid rgb(68, 95, 131) ;
}
.hr{
  border-right: 2px  solid rgb(104, 135, 175);
  border-left: 0px;
}
.about{
  border:2px solid rgb(68, 95, 131);
  background-color: rgb(46, 64 ,88 );
}
.picTextHlder{
  background-image: linear-gradient(to bottom right, rgb(31,41, 55 ), rgb(52, 81, 124));
}
.circle{
  border-right: 3px solid rgb(68, 95, 131);
  border-top: 3px solid rgb(68, 95, 131);
  -webkit-animation: spin 5.5s linear infinite;
  animation: spin 5.5s linear infinite;
}
.circleOut{
  border-right: 0.5px solid rgb(68, 95, 131);
  border-top: 0.5px solid rgb(68, 95, 131);
  -webkit-animation: spin 6.5s linear infinite;
  animation: spin 6.5s linear infinite;
}
.circleIn{
  border-right: 0.5px solid rgb(68, 95, 131);
  border-top: 0.5px solid rgb(68, 95, 131);
  -webkit-animation: spin 4.5s linear infinite;
  animation: spin 4.5s linear infinite;
}
 .icon{
  color:rgb(194, 208, 233);
  border:2px solid rgb(104, 135, 175);
  background-color: rgb(57, 81, 112);
}
.downloadButton{
  border: 1px solid rgb(114, 150, 196);
}

.stackIcons{
  color:rgb(194, 208, 233);
  border:2px solid rgb(104, 135, 175);
}

.myButton:focus {
  outline: 2px solid rgb(104, 135, 175);
  box-shadow: 3px -2px 15px rgb(57, 85, 126), -3px 2px 15px rgb(30, 49, 75);
}

#contactMe{
  border-right: 3px solid rgb(68, 95, 131);
    border-top: 1px solid rgb(68, 95, 131);
    border-left:3px solid rgb(68, 95, 131);
    border-bottom: 1px solid rgb(68, 95, 131);
}

#card{
  border-right: 3px solid rgb(68, 95, 131);
    border-top: 1px solid rgb(68, 95, 131);
    border-left:3px solid rgb(68, 95, 131);
    border-bottom: 1px solid rgb(68, 95, 131);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
