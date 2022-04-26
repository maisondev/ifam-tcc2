<template>
  <div class="flex h-screen">
    <MenuLateralEsquerdo class="h-full bg-blue-600"/>
    <div class="flex flex-row w-full">
      <div class="flex-1 justify-around">
        <h1 class=" bg-blue-500 p-4 text-2xl text-gray-900 font-semibold text-4xl">Dashboard</h1>
      </div>

    </div>

  </div>

</template>

<script>
import MenuLateralEsquerdo from "../../components/layout/MenuLateralEsquerdo";
export default {
  name: "DashBoard",
  components:{
    MenuLateralEsquerdo
  }
}
</script>

<style scoped>

</style>
