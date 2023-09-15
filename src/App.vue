<template>
  <div id="app" class="flex flex-col ">
    <Header v-if="estaAutenticado" class="flex flex-row "> </Header>
    <div class="flex flex-row h-max">
      <div v-if="estaAutenticado" class="flex flex-col h-screen">
        <MenuLateralEsquerdo class="h-full"></MenuLateralEsquerdo>
      </div>
      <div class="flex flex-col overflow-x-auto">
        <div class="w-auto">
          <router-view/>
        </div>

      </div>
    </div>
    <Footer class="bottom-0 fixed" v-if="estaAutenticado"></Footer>
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
