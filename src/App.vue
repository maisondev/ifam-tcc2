<template>
  <div  class="h-full">
    <Header v-if="estaAutenticado" class=""> </Header>
    <div class="flex flex-row h-full w-full">
      <div class="">
        <MenuLateralEsquerdo v-if="estaAutenticado" class=""></MenuLateralEsquerdo>
      </div>
      <div class="flex flex-col  w-full overflow-y-auto">
        <div id="app" class="h-full">
          <router-view/>
        </div>
      </div>
    </div>
    <Footer v-if="estaAutenticado" class="bottom-0 fixed" ></Footer>
  </div>
</template>


<script>
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MenuLateralEsquerdo from "@/components/layout/MenuLateralEsquerdo";
import firebase from "firebase/compat/app";

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
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log("user logado",user)
        // ...
      } else {
        console.log("Deslogado")
      }
    });
  },
  computed:{
    estaAutenticado(){
      return this.$store.getters["login/getUsuario"]
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
