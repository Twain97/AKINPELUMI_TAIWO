<template>
   <div class="downloadButton rounded-full mt-5 mx-auto text-slate-50 hover:bg-slate-50 hover:text-slate-700 hover:transition-all ">
    <div class=" flex justify-center ">
        <Toast position="top-center" group="headless" class="w-wd9 md:w-wd5 lg:w-wd3 xl:w-wd4" @close="visible = false">
            <template #container="{ message}">
                <section class="flex p-3 gap-3 w-full bg-black/50 rounded-lg shadow-md" >
                    <i class="pi pi-cloud-download text-white text-xl md:text-2xl"></i>
                    <div class="flex flex-col gap-3 w-full">
                        <p class="m-0 font-semibold text-sm lg:text-base leading-none text-white">{{ message.summary }}</p>
                        <p class="m-0 text-base leading-none text-surface-700 dark:text-surface-0">{{ message.detail }}</p>
                        <div class="flex flex-col gap-2">
                            <ProgressBar :value="progress" :showValue="false" :style="{ height: '4px' }"></ProgressBar>
                            <label class="text-right text-xs md:text-sm text-white ">{{ progress }}% {{ status}}</label>
                        </div>
                        <div class="flex gap-3 mb-0 text-xs md:text-base ">
                            <Button :disabled="disableBtn" label="Download File" text class="px-4 py-2 bg-slate-800 text-white text-xs lg:text-base" @click="download()"></Button>
                            <Button label="Cancel" text class="text-white py-2 px-4 bg-red-400" @click="close()"></Button>
                        </div>
                    </div>
                </section>
            </template>
        </Toast>
    </div>
    
    
    
        <div @click="downloadPdf()" class="text-xs space-x-3 py-3 px-4  flex flex-row md:text-sm lg:text-lg">
            <font-awesome-icon :icon="['fas', 'download']" class="text-lg m-auto"/>
            <p class="m-auto font-serif">Get my Resume</p>
        </div>
    </div>
</template>

<script>
import {getStorage, ref, getDownloadURL} from "firebase/storage"
// run axios npm 
import axios from 'axios'
// run file-saver npm
import {saveAs} from 'file-saver';


const storage = getStorage()
const starsRef = ref(storage, 'gs://vstore-bb580.appspot.com/Akinpelumi Taiwo CV.pdf');

export default{
    data(){
        return{
            visible:false,
            progress:0,
            status:"fetching file...",
            getlink:'',
            disableBtn:true
        }    
    },
    methods: {
        show(){
            if (!this.visible) {
                this.$toast.add({ severity: 'custom', summary: 'Preparing file...', group: 'headless' });
                this.visible = true;
                this.progress = 0;

                const interval = setInterval(() => {
                    if (this.progress < 100) {
                        this.progress += 20;
                    }else {
                        this.status = "File ready!"
                        this.disableBtn=false
                        clearInterval(interval)
                    }

                    
                }, 950);

            }
        },
        close(){
            this.visible=false
            this.$toast.remove()
            this.progress=0
            this.disableBtn=true
            this.status = "fetching file..."
        },



        // download pdf function
        async downloadPdf(){
            try{
                
                this.getlink = await getDownloadURL(starsRef)
                if(this.getlink != ''){
                    this.show()
                }
                
               
                // when clicked on, create a tag with its own click function to download the file
                // const link = document.createElement('a');
                // link.href = getlink
                // link.download
                // link.click().prevent

                // window.open(getlink,'_download' )

                
            }catch(error){
                console.log("error downloading pdf", error)
            }
        } ,

        download(){
            if(this.getlink != ''){
                 // before proceeding make sure you enable the cors on cloud console
                axios.get(this.getlink, {responseType: 'blob'})
                    .then(response => {
                    saveAs(response.data, 'Akinpelumi Taiwo resume.pdf');
                })
                setTimeout(()=>{
                    this.close()
                }, 1000)
                
            }else{
                this.$toast.add({ severity:'error', summary: 'Error',detail: 'Unable to download file!', life: 3000 });
            }
        }
    },
}


</script>

<style>

</style>