import router from "./index"
import store from "../store/index.js"
import { timers } from "jquery"
router.beforeEach((to,from,next)=>{
  console.log("store.state.uid111111",store.state.uid)
  console.log("premit to",to)
  if(to.name =="Detect"){}
  // if(!store.state.uid){
  //   next("/")
  // }
  // console.log("premit to",to)
  // console.log("premit from",from)
  next()
  
})