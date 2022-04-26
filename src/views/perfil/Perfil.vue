<template>
  <div class="">
    <div class="flex h-screen">
      <MenuLateralEsquerdo class="h-full bg-blue-600"></MenuLateralEsquerdo>
      <div class="flex flex-row w-full">
        <div class="flex-1 justify-around">
          <h1 class="bg-blue-500 p-4 text-2xl text-gray-900 font-semibold text-4xl">Perfil</h1>
        </div>


      </div>

    </div>


  </div>

</template>

<script>
import MenuLateralEsquerdo from "../../components/layout/MenuLateralEsquerdo";
export default {
  name: "Perfil",
  components: {
    MenuLateralEsquerdo
  }



}
</script>

<style scoped>

</style>
