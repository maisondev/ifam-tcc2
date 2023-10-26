<template>
  <div id="app" class="h-full">
    <Header v-if="estaAutenticado" class=""> </Header>
    <div class="flex flex-row h-full w-full">
      <div v-if="estaAutenticado" class="">
        <MenuLateralEsquerdo class=""></MenuLateralEsquerdo>
      </div>
      <div class="flex flex-col  w-full overflow-y-auto">
        <div class="h-full">
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
body{
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, "Font Awesome 6 Free";
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
