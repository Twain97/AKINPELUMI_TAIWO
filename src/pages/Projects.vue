<template>
  <div class="projects-page w-full min-h-screen pt-20 pb-10 text-slate-50 relative">
    <sideNav id="sideNav" />
    <sideNav2 id="ShowSideNav2" />
    <main class="px-4 mx-auto max-w-5xl">
          <!-- Recent project section -->
          <div v-reveal id="projects" class="-bottom-3 h-fit  w-full mb-4 mt-12 ">
            <div class="my-auto flex  relative">
              <hr class=" w-full absolute top-2/4 rounded-full">
              <div class="about z-10 p-1 rounded-lg m-auto w-fit font-salsa text-sm text-white lg:text-lg ">Projects</div>
            </div>
          </div>

          
          <!-- MTC-Studio -->
          <div v-reveal class="card flex items-center justify-center mb-5 md:mx-10 lg:mx-20  ">
              <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                  <template #header>
                      <img alt="mtcstudio.img" src="/mtcstudio.png" class="rounded-lg mx-auto" />
                  </template>
                  <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">M</span>TC <span class="text-orange-500 text-2xl lg:text-3xl">S</span>tudio</h1></template>
                  <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">Photography and Videography Studio.</p> </template>
                  <template #content>
                      <p class="m-0 font-salsa text-xs lg:text-base">
                          MTC Studio is a photography and videography studio website where users can book for photoshoot and video shoot sessions.<br>
                      </p>
                      <p class="text-right mt-10 text-blue-300 text-xs md:text-sm">Contract.</p>
                  </template>
                  <template #footer>
                    <div class="w-full flex justify-between border-red-500">
                      <a href="https://studio.mtc9ja.com/" target="_blank">
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


          <!-- Grace Villasng -->
           <div v-reveal class="card flex items-center justify-center mb-5 md:mx-10 lg:mx-20  ">
              <Card id="card" style=" background-color:rgb(37, 55, 82)" class="rounded-lg w-full overflow-hidden text-white pt-4 px-2">
                  <template #header>
                      <img alt="gracevillas.img" src="/gracevillas.png" class="rounded-lg mx-auto" />
                  </template>
                  <template #title> <h1 class="font-lemon text-base lg:text-lg"><span class="text-orange-500 text-2xl lg:text-3xl">G</span>race <span class="text-orange-500 text-2xl lg:text-3xl">V</span>illas</h1></template>
                  <template #subtitle> <p class="text-slate-400  text-xs md:text-sm font-salsa lg:text-base">Luxury Vacation and Stay Apartment (Airbnb)</p> </template>
                  <template #content>
                      <p class="m-0 font-salsa text-xs lg:text-base">
                          Grace Villas is a luxury vacation rental apartment for travelers and holiday visits/stay.<br>
                          The website allows users to browse and book premium accommodations for their stay, layovers or trips, with features like detailed map for seamless location of the apartment, property descriptions, high-quality images, and seamless booking processes.
                      </p>
                      <p class="text-right mt-10 text-blue-300 text-xs md:text-sm">Contract.</p>
                  </template>
                  <template #footer>
                    <div class="w-full flex justify-between border-red-500">
                      <a href="https://gracevillasng.com/" target="_blank">
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


          <!-- mtcvtu -->
          <div v-reveal class="card flex items-center justify-center mb-5 md:mx-10 lg:mx-20  ">
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
                      <a href="https://vtu.mtc9ja.com" target="_blank">
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
          <div v-reveal class="card flex items-center justify-center  md:mx-10 lg:mx-20  ">
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
            <div v-reveal class="card mt-4 flex items-center justify-center md:mx-10 lg:mx-20  ">
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
          <div v-reveal class="card mt-4 flex items-center justify-center md:mx-10 lg:mx-20  ">
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
          <div v-reveal class="card mt-4 flex items-center justify-center md:mx-10 lg:mx-20  ">
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
          <div v-reveal class="card mt-4 flex items-center justify-center md:mx-10 lg:mx-20  ">
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
    </main>
  </div>
</template>

<script setup>
import sideNav from "../views/sideNav.vue"
import sideNav2 from "../views/sideNav2.vue"
import knoor from "../images/knoor.png"
import { onMounted } from "vue"

onMounted(() => {
  const mobileNav = document.getElementById("ShowSideNav2")
  if (mobileNav) mobileNav.style.display = "none"
})
</script>

<style scoped>
hr { border: 2px solid rgb(68, 95, 131); }
.about {
  border: 2px solid rgb(68, 95, 131);
  background-color: rgb(46, 64, 88);
}
#card {
  border-right: 3px solid rgb(68, 95, 131);
  border-top: 1px solid rgb(68, 95, 131);
  border-left: 3px solid rgb(68, 95, 131);
  border-bottom: 1px solid rgb(68, 95, 131);
}
</style>



