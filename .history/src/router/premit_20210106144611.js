import router from "./index"
router.beforeEach((to,from,next)=>{
  console.log("premit to",to)
  console.log("premit from",from)
  next()
})