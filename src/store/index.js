import { createStore } from "vuex";
import client1 from "@/images/clients/client1.jpg"
import client2 from "@/images/clients/client2.jpg"
import client3 from "@/images/clients/client3.png"
import client4 from "@/images/clients/client4.jpg"
import client5 from "@/images/clients/client5.png"
import {signInAnonymously} from "firebase/auth"
import {auth} from "@/firebase/index.js"
import {db} from '@/firebase/index.js'
import{ doc, getDoc, setDoc} from 'firebase/firestore'

const store = createStore({
    state:{
        user:'',
        commenterName:'',
        commenterEmail:'',
        commenterSubject:'',
        commenterMessage:'',
        signedIn:false,
        navToggle:true,
        navToggle2:true,
        service:[
            {
                logo:'globe',
                title:"Web Development", 
                Descrip:["Portfolio Website","Crypto Website", "Landing Page","E-commerce Website", "Blogs/News Website", "Membership Website"]
            },
            {
                logo:'palette',
                title:"Graphic Design", 
                Descrip:["Fliers","Posters", "Office Cards", "ID Cards", "Logo/Brand Design"]
            },
            {
                logo:'users-viewfinder',
                title:"Social Media Management", 
                Descrip:["Posting Contents","Brand Development","Brand Graphics Design", "Brand Logo Design"]
            },
        ],
        clients:[
            {   
                photo:client1,
                name:"Mrs Mary ",
                job:"CEO of Knoor Kitchen", 
                comment:"The website you designed for my catering business is both interactive and reliable. Its easy to make payments and track orders too. Thanks!"
            },
            {   
                photo:client3,
                name:"Mr Twain ",
                job:"Owner of MTCVTU.com", 
                comment:"The Authentication and Database you implemeted on my website has been working great with no glitches.  "
            },  
            {
                photo:client2,
                name:"Kemisola",
                job:"Instagram Vendor", 
                comment:"Thanks for the Landing page you designed for my products, the engagements i'm getting has icreased considerably.  "
            },
            {   
                photo:client4,
                name:"Haybeegee",
                job:"Haybeegee Cakes and Cream ", 
                comment:"I love all the graphics designs you made for advertising my business."
            },
            {   
                photo:client5,
                name:"Kenethy01",
                job:"Unknown", 
                comment:"Thanks for helping me out on my project. I'm looking forward to working more with you and learn as well."
            },
        ]
    },
    mutations:{
        setUser(state, user){
            state.user = user
        },
        mutateToggle(state){
            state.navToggle = !state.navToggle
        },
        mutateToggle2(state){
            state.navToggle2 = !state.navToggle2
        }
    },
    actions:{
        counter: ({commit})=>
            commit('increment'),
        toggle: ({commit}) =>
            commit("mutateToggle"),
        toggle2: ({commit}) =>
            commit("mutateToggle2"),
        

    // users actions

    async signIn(){
        try{
            const userCredentials = await signInAnonymously(auth)
            this.state.user = userCredentials.user
            if(userCredentials){
                console.log("signed in Anonymously")
               
            }

            // to stop document from being overriden in the database,do the following

            // get firestore document
            const docSnap = await getDoc(doc(db, 'users', store.state.user.uid))
            if(docSnap.exists()){
                console.log("Document Exists")
            }else{
                setDoc(doc(db, 'myProjectUsers', store.state.user.uid ),
                {
                CommenterName : store.state.commenterName, 
                CommenterEmail: store.state.commenterEmail,
                CommenterSubject: store.state.commenterSubject,
                CommenterMessage: store.state.commenterMessage
                },
                { merge:true})
            }

        }catch(error){
            console.log(error.code)
        }
    }

    },

})

export default store;