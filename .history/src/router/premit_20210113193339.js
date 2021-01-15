import router from "./index"
import store from "../store/index.js"

router.beforeEach((to, from, next) => {
  console.log("to",to)
  console.log("to store.state.uid",store.state.uid)
  if (to.meta.requireAuth) { // 判断跳转的路由是否需要登录
    console.log("store.state.uid````````",store.state.uid)
      if (store.state.uid) { // vuex.state判断uid是否存在
          next() // 已登录
      } else {
          next({
              path: '/',
              // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
          })
      }
  } else {
     next()
  }
})

// router.beforeEach((to,from,next)=>{
//   console.log("store.state.uid111111",store.state.uid)
//   console.log("premit to",to)
//   if(to.name =="Detect"){
//     if(!store.state.uid){
//       next("/")
//     }
//   }else{
//     next()
//   }
//   // if(!store.state.uid){
//   //   next("/")
//   // }
//   // console.log("premit to",to)
//   // console.log("premit from",from)
  
  
// })