<template>
  <div>
     委托订单
  </div>
</template>
<script>
import api from "@/api"
export default {
  async created(){
     //查询检测数据
   await api.userzone.getOrderList()
  }
}
</script>