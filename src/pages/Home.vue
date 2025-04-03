<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="absolute justify-center w-full">
        <Toast position="bottom-center"  class="mb-20 w-full md:w-wd8 lg:w-wd3 xl:w-wd4 px-4" group="bc" @close="onClose"
        :pt="{
          closeButton:{class:'text-slate-800  ml-3 outline-none '},
          content:{class:'-ml-2'},
          
        }">
          <template #message>
              <div class="w-full m-auto relative flex flex-col items-start rounded-lg pl-4  flex-1 border-l-8 border-slate-700 ">
                  <div class="flex -ml-4 w-full md:w-70 font-salsa">
                      <Avatar :image="logo" shape="circle" class="w-10 h-10" />
                      <span class="ml-0 md:ml-10  my-auto font-bold text-slate-800">Akinpelumi Taiwo</span>
                  </div>
                  <div class="font-semibold text-base h-fit md:text-lg text-slate-600 my-3  w-full">
                    <form class="bg-transparent outline-none text-xs md:text-sm w-full">
                      <p class="text-900">For improvement purpose, please drop a review about this project</p>
                      <textarea v-model.trim="comment" placeholder="Drop review here" class="mt-1 border-y-2 border-x border-slate-600 rounded-lg pt-1  text-black w-full resize-none outline-none h-20 indent-2 bg-transparent"></textarea>
                    </form>
                  </div>
                  <Button class="px-4 py-2 text-xs lg:text-base text-slate-50 bg-blue-950 outline-none border-0 active:outline-none active:border-0" label="Drop Comment" @click="onReply()"></Button>
              </div>
          </template>
      </Toast>
  </div>


    

    <div class=" w-full h-fit pt-0 text-slate-50 relative">
       <!-- sideNav -->
    <sideNav id="sideNav" />
    <!-- sideNav id="sideNav2" -->
      <sideNav2 id="ShowSideNav2" class="" />

      <div @click="closeNav(), closeNav2()" class=" mb-10">
        <div id="home" class="picTextHlder pb-10 border-red-600 flex flex-col md:flex-row-reverse  w-full md:h-fit md:py-20">
          
          <!-- Image holder -->
          <div class="image/circle relative mt-8 mx-auto w-80 h-60 lg:w-96 lg:h-72 overflow-hidden md:my-auto  border-red-600">
            <img :src="PortPic" alt="Porfolio pic" class="absolute z-40 h-full opacity-95 ">
          
            <div class="circle absolute h-40 w-40 z-10 right-6 top-6 rounded-full border-r-4 rotate-45"></div>
            <div class="circleOut absolute h-48 w-48 z-10 right-2 top-2 rounded-full  rotate-45"></div> 
            <div class="circleIn absolute h-32 w-32 z-10 right-10 top-10 rounded-full  rotate-45"></div> 
            
            
            <div class="socialIcons absolute z-50 top-3 right-20">
              <a href="https://wa.me/+2347068858731">
              <font-awesome-icon  :icon="['fab', 'whatsapp']" color="white" class="icon p-1 hover:p-2 transition-all rounded-lg " />
              </a>
            </div>
            <div class="socialIcons absolute z-50 top-12 right-6">
              <a href="https://twitter.com/mrTwain97">
                <font-awesome-icon  :icon="['fab', 'twitter']" size="sm" color="white" class="icon p-1 hover:p-2 transition-all rounded-lg " />
              </a>
            </div>
            <div class="socialIcons absolute z-50 right-4 top-28">
              <a href="https://facebook.com/SammyTwain97">
                <font-awesome-icon :icon="['fab', 'facebook']"  color="white" class="icon p-1 hover:p-2 transition-all rounded-lg " />
              </a>
            </div>
            <div class="socialIcons absolute z-50 right-14 top-40">
              <a href="https://linkedin.com/in/akinpelumi-taiwo-samuel" target="_blank">
                <font-awesome-icon :icon="['fab', 'linkedin']"  color="white" class="icon p-1 hover:p-2 transition-all rounded-lg " />
              </a>
            </div>
          </div>
          
          <div class="texts z-30 flex flex-col -mt-1  mx-auto md:my-auto  border-white md:w-fit md:-mr-20 transition-all ease-in-out">
            <div class=" text-center text-slate-50">
              <h1 class="mx-6 text-3xl lg:text-4xl font-serif">Hi! I'm <br> Akinpelumi Taiwo</h1>
              <p  class="mt-2 text-xs xl:text-base text-slate-400 font-salsa">NodeJs/VueJs Full Stack Web developer.</p>
            </div>

            <DownloadBtn/>
            
          </div>
        </div>
        
        <!-- About section -->
        <div id="about" class="-bottom-3 h-fit  w-full -mt-4 ">
          <div class="my-auto flex  relative">
            <hr class=" w-full absolute top-2/4">
            <div class="about z-10 p-1 rounded-lg m-auto w-fit font-salsa text-sm text-white lg:text-lg ">About Me</div>
          </div>
        </div>

        <div class="section px-4  mt-5">
          <div class="md:mx-10 lg:mx-20  ">
            <p class=" mx-auto font-salsa text-xs md:text-sm lg:text-base">
              My name is Akinpelumi Taiwo, I'm a Higher National Diploma (H.N.D) graduate of Federal Polytechnic, Ado Ekiti with discipline 
              in Computer Science.<br/>
            </p>
            <p class=" mx-auto my-2 font-salsa text-xs md:text-sm">
              My web development journey started in 2019 upon gaining admission into school. I am currently a freelancer and I'm open for both part-time and full-time roles.

            </p>
            <p class=" mx-auto font-salsa text-xs md:text-sm">
              What drives me as a web developer is my undying interest in building things that work, and solving problems in my daily life as well as those of others around me.
              This keen interest has made me learnt and worked on both back-end development as well as front-end development.
              <br/>
              I also have interests in graphic design using Photoshop and Canva which I combine with my web development skills to make the things I build dynamic and user friendly websites.
              In addition, I am proficient with Microsoft Packages(Excel, MS Word and so on) which helps in keeping and managing data and records. 
            </p>
            <div class="px-4 font-salsa w-fit text-sm  lg:text-base py-2 rounded-xl mt-10 mb-6 border-t-2 border-b-2 border-gray-400">
              <p>My Stack <font-awesome-icon :icon="['fas', 'code']" size="lg" class=" m-auto ml-4"/> </p>
            </div>

            <div class="stackContainer mb-6 ">

              <div class=" flex mt-3 ">
                <font-awesome-icon  :icon="['fab', 'node-js']"  color="white" class="stackIcons text-3xl lg:text-3xl lg:-ml-1 p-1 hover:p-2  rounded-lg " />
                <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">Node Js </span> <br/> 
                  A powerful tool for server-side/back-end development, it is used for building efficient, scalable network applications. </p>
              </div>
              <hr class="hr ml-3 -mt-7 lg:-mt-2 w-fit h-20">

              <div class=" flex mt-4 ">
                <font-awesome-icon :icon="['fab', 'envira']" color="white" class="stackIcons text-3xl lg:text-3xl lg:-ml-1 p-1 hover:p-2 rounded-lg " />
                <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">Mongo DB</span> <br/>This is a development platform from Google which handles the backend of mobile and web apps. It offers built-in security for your data and it is easy to integrate.</p>

              </div>
              <hr class="hr ml-3 -mt-6 lg:-mt-2 w-fit h-20">
              
              <div class=" flex mt-4 ">
                <p color="white" class="ex text-xl lg:text-3xl lg:-ml-1 p-1 hover:p-2 rounded-lg ">EX</p>
                <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">Express Js</span> <br/>
                  A node-Js web application framework that provides a robust set of features to develop web and mobile apps, 
                  designed to make building web apps and APIs simpler and more efficient.
                </p>
              </div>
              <hr class="hr ml-3 -mt-6 lg:-mt-2 w-fit h-20">

              <div class=" flex mt-3 ">
                <font-awesome-icon  :icon="['fab', 'vuejs']"  color="white" class="stackIcons text-3xl lg:text-3xl lg:-ml-1 p-1 hover:p-2  rounded-lg " />
                <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">Vue Js 3</span> <br/> A progressive framework which leverage on HTML, CSS and JavaScript. Its based on what the UI looks like and handles updating efficiently when data changes.</p>
              </div>
              <hr class="hr ml-3 -mt-6 lg:-mt-2 w-fit h-20">
             
              <div class=" flex mt-4 ">
                <p color="white" class="ex text-xl lg:text-3xl lg:-ml-1 p-1 hover:p-2 rounded-lg ">EJS</p>
                <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">EJS</span> <br/>
                  Embedded JavaScript (EJS) is a template engine for Node.js.It's used to generate HTML with plain JavaScript, 
                  making it easier to create dynamic pages in web apps.
                </p>
              </div>
              
              <hr class="hr ml-3 -mt-7 lg:-mt-2 w-fit h-20">
              <div class=" flex mt-4 ">
                <font-awesome-icon  :icon="['fas', 'wind']" color="white" class="stackIcons text-3xl lg:text-3xl lg:-ml-1 mb-3 p-1 hover:p-2 rounded-lg " />
                <p class="ml-3 text-xs  md:text-sm lg:text-base"> <span class="text-xl lg:text-2xl font-serif">Tailwind Css </span> <br/> Tailwind, its a 'breeze' in styling CSS. This is a CSS framework that combine both HTML and CSS to make good UI designs. It provide responsive class and its highly flexible</p>
              </div>


              <div class="flex flex-col space-y-4 mt-6">
                <div class="mx-auto px-2 py-1 rounded-lg bg-blue-200 text-blue-900">
                  <h2 class="font-salsa text-base lg:text-lg ">Others</h2>
                </div>

                <div class="flex flex-row flex-wrap justify-evenly text-center text-base lg:text-lg">
                  
                  <div class="flex flex-col m-2  h-24 w-20 border-2 border-blue-300 rounded-xl">
                    <font-awesome-icon  :icon="['fab', 'html5']"  color="white" class="stackIcons text-4xl m-auto p-1 hover:p-2 rounded-lg w-fit" />
                    <p class="mx-auto">HTML 5</p>
                  </div>
                  <div class="flex flex-col m-2  h-24 w-20 border-2 border-blue-300 rounded-xl">
                    <font-awesome-icon  :icon="['fab', 'css3-alt']" color="white" class="stackIcons  text-4xl m-auto p-1 hover:p-2 rounded-lg w-fit " />
                    <p class="mx-auto">CSS 3</p>
                  </div>
                  <div class="flex flex-col m-2 h-24 w-20  border-2 border-blue-300 rounded-xl">
                    <font-awesome-icon  :icon="['fab', 'js']"  color="white" class="stackIcons text-4xl m-auto p-1 hover:p-2 rounded-lg w-fit " />
                    <p class="mx-auto">JS</p>
                  </div>
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

          <!-- mtcvtu -->
          <div class="card flex items-center justify-center md:mx-10 lg:mx-20  ">
              <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                  <template #header>
                      <img alt="mtcvtuPic" src="/mtcvtu.png" class="rounded-lg mx-auto" />
                  </template>
                  <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">M</span>TCVTU</h1></template>
                  <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">Mobile Network Data Website (E-commerce)</p> </template>
                  <template #content>
                      <p class="m-0 font-salsa text-xs lg:text-base">
                          MTCVTU is a mobile network data business website where users make purchases of mobile data of any kind, airtime, pay electricity bills, 
                          cableTV subscriptions as well as students exam result checking scratchcards.<br>
                          The website is equiped with user wallet system for users to keep for future transactions. 
                          The website is also equiped with a payment gateway which creates unique bank account details which is linked directly to user's wallet for users
                           to make transfers to for wallet funding.<br>
                          The website has a reward system that rewards users on each transactions they make on data purchases, this rewards can be withdrawn directly into their wallets
                          when the requires number of transaction is met and be used to make purchases on the system as well.
                      </p>
                      <p class="text-right mt-10 text-blue-300 text-xs md:text-sm">Contract.</p>
                  </template>
                  <template #footer>
                    <div class="w-full flex justify-between border-red-500">
                      <a href="https://mtcvtu.com.ng" target="_blank">
                        <Button icon="pi pi-globe" label="Visit Site" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-indigo-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                      
                      <a href="https://youtu.be/ZTY_27HtLto" target="_blank">
                        <Button icon="pi pi-youtube" label="Watch Demo Video" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-orange-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                    </div>
                  </template>
              </Card>
          </div>
          <!-- Knoor Kitchen -->
          <div class="card flex items-center justify-center md:mx-10 lg:mx-20  ">
              <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                  <template #header>
                      <img alt="knoorPic" :src="knoor" class="rounded-lg mx-auto" />
                  </template>
                  <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">K</span>noor <span class="text-orange-500 text-2xl lg:text-3xl">K</span>itchen</h1> </template>
                  <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">Food Vendor Website (E-commerce)</p> </template>
                  <template #content>
                      <p class="m-0 font-salsa text-xs lg:text-base">
                          Knoor Kitchen is a food vendor website. It is a platform where people can order delicacy of their choice and have it deliver to their doorstep.<br>
                          On it, users are able to create orders, and with payment gateway on it they can make online payment for their order and as well keep track of such order.
                      </p>
                      <p class="text-right mt-10 text-blue-300 text-xs md:text-sm">Contract.</p>
                  </template>
                  <template #footer>
                    <div class="w-full flex justify-between border-red-500">
                      <a href="https://twain97.github.io/knoor/" target="_blank">
                        <Button icon="pi pi-globe" label="Visit Site" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-indigo-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                      
                      <a href="https://youtu.be/JwYOEChhzWs" target="_blank">
                        <Button icon="pi pi-youtube" label="Watch Demo Video" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-orange-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                    </div>
                  </template>
              </Card>
          </div>

             <!-- FPA E-EXAM -->
            <div class="card mt-4 flex items-center justify-center md:mx-10 lg:mx-20  ">
              <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                  <template #header>
                      <img alt="fpaExam" src="/e-exam.png" class="rounded-lg mx-auto" />
                  </template>
                  <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">F</span>pa <span class="text-orange-500 text-2xl lg:text-3xl">E</span>-exam</h1> </template>
                  <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">CBT Exam with Facial Recognition System</p> </template>
                  <template #content>
                    <p class="m-0 font-salsa text-xs lg:text-base">
                      Fpa E-exam is a CBT Exam system equipped with Facial Recognition System of a trained machine learning model developed with TensorFlowJS.<br>
                      The system allows students/exam takers to register on the system after which a date will be communicated to them for face capturing.<br>
                      After Face has been detected, students/exam takers are to provide the last 4 digits of their matric number as extra security measures. Students can also login manually in case of error in face detection.
                    </p>
                    
                    <p class="text-right mt-10 text-blue-300 text-xs md:text-sm">My Final Year Project.</p>
                  </template>
                  <template #footer>
                    <div class="w-full flex justify-between border-red-500">
                      <a href="https://twain97.github.io/FPA-E-EXAM/#/" target="_blank">
                        <Button icon="pi pi-globe" label="Visit Site" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-indigo-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                      
                      <a href="https://youtu.be/hJWbNDfPcsE" target="_blank">
                        <Button icon="pi pi-youtube" label="Watch Demo Video" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-orange-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                    </div>
                  </template>
              </Card>
          </div>


          <!-- Fpa map -->
          <div class="card mt-4 flex items-center justify-center md:mx-10 lg:mx-20  ">
              <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                  <template #header>
                      <img alt="fpa map" src="/Fpa-e-map.png" class="rounded-lg mx-auto" />
                  </template>
                  <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">F</span>pa <span class="text-orange-500 text-2xl lg:text-3xl">M</span>ap</h1> </template>
                  <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">Federal Polytechnic Ado school Map.</p> </template>
                  <template #content>
                      <p class="m-0 font-salsa text-xs lg:text-base">
                          Fpa Map is a detailed map of Federal Polytechnic Ado Ekiti.<br>
                          This map is designed to aid the students, lecturers as well as visitors to locate their destinations and well as key buildings in and around the school.
                      </p>
                      <p class="text-right mt-10 text-blue-300 text-xs md:text-sm">FALOPE ABIGAIL OLUWADAMILOLA (Contract)<br>final year project</p>
                  </template>
                  <template #footer >
                    <div class="w-full flex justify-between border-red-500">
                      <a href="https://twain97.github.io/introToMap/" target="_blank">
                        <Button icon="pi pi-globe" label="Visit Site" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-indigo-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>

                      <a href="https://youtu.be/2jfNwQPziX8" target="_blank">
                        <Button icon="pi pi-youtube" label="Watch Demo Video" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-orange-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                    </div>
                  </template>
              </Card>
          </div>

          <!-- Digital Compendium -->
          <div class="card mt-4 flex items-center justify-center md:mx-10 lg:mx-20  ">
              <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                  <template #header>
                      <img alt="digitalCompendium" src="/digital.png" class="rounded-lg mx-auto" />
                  </template>
                  <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">D</span>igital <span class="text-orange-500 text-2xl lg:text-3xl">C</span>ompedium</h1></template>
                  <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">Digital Compedium of Religious Center In Ekiti.</p> </template>
                  <template #content>
                      <p class="m-0 font-salsa text-xs lg:text-base">
                         This is a detailed Compedium of Religous centers in Ekiti.
                          The website holds the details of religous center in the state, their history, locations, events and programs. <br>
                          New centers are able to CREATE an account, UPLOAD and UPDATE their history, locations, events as well as DELETE them.
                          The Admin has the ability to approve any compendium uploaded before it can be viewed by the visitors on the website and other users.
                      </p>
                      <p class="text-right mt-10 text-blue-300 text-xs md:text-sm">ASHAOLU SUNDAY (Contract)<br>final year project</p>
                  </template>
                  <template #footer >
                    <div class="w-full flex justify-between border-red-500">
                      <a href="https://religion-centre.vercel.app" target="_blank">
                        <Button icon="pi pi-globe" label="Visit Site" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-indigo-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>

                      <a href="https://youtu.be/YbAlkZP--Yg" target="_blank">
                        <Button icon="pi pi-youtube" label="Watch Demo Video" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-orange-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                    </div>
                  </template>
              </Card>
          </div>

          <!-- Hospital management System -->
          <div class="card mt-4 flex items-center justify-center md:mx-10 lg:mx-20  ">
              <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                  <template #header>
                      <img alt="HMS" src="/hospital.png" class="rounded-lg mx-auto" />
                  </template>
                  <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">H</span>ospital <span class="text-orange-500 text-2xl lg:text-3xl">M</span> anagement<span class="text-orange-500 text-2xl lg:text-3xl">S</span>ystem</h1> </template>
                  <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">System For Hospital To Manage Appointments.</p> </template>
                  <template #content>
                      <p class="m-0 font-salsa text-xs lg:text-base">
                          Hospital Management System.<br>
                          This is a functional system developed to make Doctor to Patient interactions easier and flexible.<br>
                          With the system, Patients can now Create an account, book Appointments, select their desired availale docts, view their appointments history, Doctors can also view their appointments with patients <br> 
                          Only Approved Appointemts by the ADMIN can be viewed by the patients else it will display 'pending'
                      </p>
                      <p class="text-right mt-10 text-blue-300 text-xs md:text-sm">AKANMU BABATUNDE MICHAEL (Contract)<br>final year project</p>
                  </template>
                  <template #footer >
                    <div class="w-full flex justify-between border-red-500">
                      <a href="https://hospital-management-system-neon.vercel.app/" target="_blank">
                        <Button icon="pi pi-globe" label="Visit Site" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-indigo-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>

                      <a href="#" target="_blank">
                        <Button icon="pi pi-youtube" label="Watch Demo Video" class="myButton" 
                        :pt="{ 
                          root: { class: 'bg-orange-600 border-white px-4 py-2 text-xs md:text-sm mx-auto lg:text-base' } 
                        }"/>
                      </a>
                    </div>
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
                <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Back-end Development Role.</li>
                <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Front-end Development Role.</li>
                <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Full-stack Development Role.</li>
                <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Implementation of Authentication For Websites</li>
                <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Develop & Implement Database for Websites.</li>
                <li><font-awesome-icon :icon="['fa', 'angles-right']" class="mr-2"/>Peronal Tutor.</li>
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

          <div id="contactMe" class="md:px-10 lg:px-20   mx-auto w-full text-base rounded-lg pt-2 px-2 md:flex md:flex-row" style="background-color:rgb(37, 55, 82);">
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
          <div id="contactMe" class="md:px-10 lg:px-20   mx-auto mt-4 w-full text-sm lg:text-base rounded-lg pt-2 px-2 md:flex md:flex-row" style="background-color:rgb(37, 55, 82);">
            <form class="w-full mx-auto my-4 text-sm space-y-2  md:ml-5 overflow-ellipsis">
              <p class="text-sm lg:text-lg mb-4 font-serif">If you have any project or need help.<br class="md:hidden"/> Contact me</p>
              <div class="flex flex-row space-x-2 ">
                <div style=" background:rgb(36, 50, 71) ;" class="p-2 rounded-xl w-2/4 border-red-500">
                  <h3 class=" font-serif">Name:</h3>
                  <input type="text" v-model="name" class="bg-inherit text-xs lg:text-sm w-full p-2" placeholder="Adigun Zainab Chibuso">
                </div>
                <div style=" background:rgb(36, 50, 71) ;" class="p-2 rounded-xl w-2/4 border-red-500">
                  <h3 class=" font-serif">Email:</h3>
                  <input type="text" v-model="email" class="bg-inherit text-xs lg:text-sm w-full p-2 " placeholder="Your_email_address@gmail.com">
                </div>
              </div>

              <div class="flex flex-col space-y-2">
                <div  class="w-full p-2 rounded-xl  border-red-500" style=" background:rgb(36, 50, 71) ;">
                  <h3 class=" font-serif">Subject:</h3>
                  <input type="text" v-model="subject" class="bg-inherit text-xs lg:text-sm w-full p-2" placeholder="e.g Landing Page....">
                </div>

                <div  class="w-full p-2 rounded-xl  border-red-500" style=" background:rgb(36, 50, 71) ;">
                  <h3 class=" font-serif">Message:</h3>
                  <textarea v-model="message" class="bg-inherit text-xs lg:text-sm w-full p-2" placeholder="e.g I need you to design a landing page for...."></textarea>
                </div>
              </div>


              <div class="flex justify-between">
                <div @click="sendMessage()"
                class="downloadButton rounded-full mt-8 h-fit w-fit text-slate-50 hover:bg-slate-50 hover:text-slate-700 hover:transition-all ">
                  <div class="text-xs space-x-2 py-3 px-4  flex flex-row md:text-sm">
                    <font-awesome-icon :icon="['fas', 'paper-plane']" class="text-base m-auto rotate-12"/>
                    <p class="m-auto font-serif">Send</p>
                  </div>
                </div>

                <a href="https://wa.me/+2347068858731" class="my-auto pt-5">
                  <img :src="whatsapp" alt="whatsapp logo" class="w-16 h-16 hover:opacity-80 rounded-full">
                </a>
              </div>
              
            </form>
          </div>
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
import logo from "../images/Logo.png"
import sideNav from "../views/sideNav.vue"
import sideNav2 from "../views/sideNav2.vue"
import carousel from "../views/carousel.vue"
import DownloadBtn from "@/views/downloadBtn.vue"
import comments from "@/views/comments.vue";
import PortPic from "../images/pic.png"
import knoor from "../images/knoor.png"
import whatsapp from "@/images/whatsapp.png"
import {useStore} from "vuex"
import { ref } from "vue";
import {db} from '@/firebase/index.js'

import{ doc, setDoc} from 'firebase/firestore'
import { useToast } from "primevue/usetoast";
import {onMounted} from "vue"





const toast = useToast();
var visible = ref(false);
const comment = ref()

const store = useStore()
const closeNav = () => store.state.navToggle = true

const closeNav2 = () => store.state.navToggle2 = true

var name = ref()
var email = ref()
var subject = ref()
var message = ref()

// prevent ShowSideNav2 from showing on loading of page
onMounted(() => {
  var ShowSideNav2 = document.getElementById("ShowSideNav2");
  if (ShowSideNav2) {
    ShowSideNav2.style.display = "none";
  }
});

// show comment box as prompt
const showTemplate = () => {
    if (!visible.value) {
        toast.add({ severity: 'success', summary: 'Can you send me the report?', group: 'bc' });
        visible.value = true;
    } 
};

const onReply = () => {
  
    if(comment.value){
      // alert("Not Empty")
      toast.removeGroup('bc');
      setDoc(doc(db, 'myProjectUsers', store.state.user.uid ), {Comment : comment.value, }, { merge:true}),
      toast.add({ severity: 'success', summary: 'Success Message', detail: 'Comment sent successfully', life: 3000 });
      visible.value = false;
      
    }else{
      toast.add({ severity: 'error', summary: 'Empty Input', detail: 'Please fill in the input!', life: 3000 });
      // alert("Empty")
    }
}

const onClose = () => {
    visible.value = false;
}
const sendMessage = () =>{
  if(name.value && email.value && subject.value &&message.value){
    setDoc(
    doc(db, 'myProjectUsers', store.state.user.uid ),
    {
    CommenterName : name.value, 
    CommenterEmail: email.value,
    CommenterSubject: subject.value,
    CommenterMessage: message.value
    },
    { merge:true}
  )

    name.value=''
    email.value=''
    subject.value=''
    message.value=''

    toast.add({ severity: 'success', summary: 'Message Sent!', detail: 'You will get a reply in your Email Address', life: 3000 });
  }else{
    toast.add({ severity: 'error', summary: 'Empty Input!', detail: 'An input is Empty! Please fill it', life: 3000 });
  }
  
}


setTimeout(() => {
    
    //  store.state.signedIn = true
     if(store.state.signedIn){
      showTemplate()
     }
     
    },30000);

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
  margin-left:17px;
}
.about{
  border:2px solid rgb(68, 95, 131);
  background-color: rgb(46, 64 ,88 );
}
.picTextHlder{
  background-image: linear-gradient(to bottom right, rgb(31,41, 55 ), rgb(52, 81, 124));
}
.circle{
  border-right: 3px solid rgb(147, 169, 199);
  /* border-right: 3px solid red; */
  border-top: 3px solid rgb(147, 169, 199);
  -webkit-animation: spin 5.5s linear infinite;
  animation: spin 6.1s linear infinite;
}
.circleOut{
  border-right: 1px solid rgb(147, 169, 199);
  /* border-right: 3px solid green; */
  border-top: 1px solid rgb(147, 169, 199);
  -webkit-animation: spin-in 6.5s linear infinite;
  animation: spin-in 7.5s linear infinite;
}
.circleIn{
  border-right: 1px solid rgb(147, 169, 199);
  /* border-right: 3px solid yellow; */
  border-top: 1px solid rgb(147, 169, 199);
  -webkit-animation: spin-in 3.5s linear infinite;
  animation: spin-in 3.4s linear infinite;
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
  border-top:2px solid rgb(104, 135, 175);
}
.ex{
  color:rgb(194, 208, 233);
  border-top:2px solid rgb(104, 135, 175);
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
#downloadBtn{
  position: relative;
  margin: 30px auto;
  overflow: hidden;
  border-radius: 100px;
  -webkit-animation:buttonAnimate 3.5s linear infinite;
  animation: buttonAnimate 3.5s linear infinite;
}
/*
#downloadBtn::before{
  content: "";
  position: absolute;
  /* border:2px solid blue; 
  top: 10%;
  left: -10%;
  width: 120%;
  height: 80%; 
  /* transform: rotate(15deg); 
  -webkit-animation:round 4500ms linear infinite;
  animation: round 4500ms linear infinite;
  background: linear-gradient(
    rgb(175, 193, 218)25%,
    rgb(11, 2, 17),
    rgb(175, 193, 218) 25%
  );
}
#downloadBtn::after{
  padding:4px 5px;
  content: "DOWNLOAD MY CV";
  font-family:"young serif";
  font-weight:500;
  position: absolute;
  display:flex;
  justify-content:center;
  align-items:center;
  width: 97%;
  height: 90%;
  border:2px solid green;
  left: 1.5%;
  top: 5%;
  border-radius:20px;
  background-color: rgb(68, 95, 131);
  cursor:pointer;
}*/

@keyframes round {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(-360deg); }
}
@keyframes spin-in {
  0% { 
    transform: rotate(0deg);
   }
  100% { transform: rotate(360deg); }
}

@keyframes buttonAnimate{
  0% { border:1px solid rgb(68, 95, 131); }
  50% { border:3px solid rgb(147, 169, 199); }
  100% { border:1px solid rgb(68, 95, 131);}
}
</style>