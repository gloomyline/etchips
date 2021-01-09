import router from "./index"
import { timers } from "jquery"
router.beforeEach((to,from,next)=>{
  if(store.state.uid){
    next()
  }else{
    next("/")
  }
  console.log("premit to",to)
  console.log("premit from",from)
  
})