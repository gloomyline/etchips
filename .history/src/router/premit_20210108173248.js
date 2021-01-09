import router from "./index"
import { timers } from "jquery"
router.beforeEach((to,from,next)=>{
  if(this.$store.state.uid)
  console.log("premit to",to)
  console.log("premit from",from)
  next()
})