import router from "./index"
import store from "../store/index.js"
import { timers } from "jquery"
router.beforeEach((to,from,next)=>{
  console.log("store.state.uid111111",store)
  if(store.state.uid){
    next()
  }else{
    next("/")
  }
  console.log("premit to",to)
  console.log("premit from",from)
  
})