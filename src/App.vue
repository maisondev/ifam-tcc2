<template>
  <div id="app" class="flex flex-wrap h-full w-full">
    <Header v-if="estaAutenticado" class="w-full"></Header>
    <div v-if="estaAutenticado" class="w-3/12">
      <MenuLateralEsquerdo  class=""></MenuLateralEsquerdo>
    </div>
    <div  class="flex-1 flex justify-around">
      <div class="w-11/12">
        <router-view/>
      </div>

    </div>



    <Footer v-if="estaAutenticado"></Footer>
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
  },
  data(){
    return{
      classeAutenticado: 'w-8/12'
    }
  },
  created() {
    this.$store.commit('setAutenticado',false)
  },
  computed:{
    estaAutenticado(){
      return this.$store.getters.autenticado;
    }
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
