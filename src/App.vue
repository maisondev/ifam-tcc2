<template>
  <div id="app" class="flex flex-wrap h-full w-full">
    <Header class="w-full"></Header>
    <div class="w-3/12">
      <MenuLateralEsquerdo class=""></MenuLateralEsquerdo>
    </div>
    <div class="w-9/12 flex">
      <div class="w-11/12 mx-auto">
        <router-view/>
      </div>

    </div>



    <Footer></Footer>
  </div>
</template>


<script>
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MenuLateralEsquerdo from "@/components/layout/MenuLateralEsquerdo";

export default {
  name:'App',
  components:{
    MenuLateralEsquerdo,
    Header,
    Footer
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
}

</style>
