<template>
  <div class="container mx-auto">
    <div class="flex">
        <div class="w-full h-full border-r-2 ">
          <div class="w-full h-full my-4">
            <h1 class="text-blue-600 font-semibold text-center text-lg my-8">Login</h1>
            <p class="font-bold my-4">Tenha todos os seus dados de remuneração de servidores públicos em um único lugar.</p>
          </div>
          <div class="relative flex py-5 items-center my-4">
            <div class="flex-grow border-t border-gray-400"></div>
            <span class="flex-shrink mx-4 text-gray-500 text-sm">Entre com email e senha</span>
            <div class="flex-grow border-t border-gray-400"></div>
          </div>
            <form>
              <div class="text-center mx-auto">
                <div class="mb-6 mx-10">
                  <label for="email" class="block mb-2 text-sm text-gray-900 dark:text-gray-300 text-left font-bold">Email</label>
                  <input v-model="email" type="email" id="email" class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
                </div>
                <div class="mb-6 mx-10">
                  <label for="password" class="block mb-2 text-sm text-gray-900 dark:text-gray-300 text-left font-bold">Senha</label>
                  <input v-model="senha" type="password" id="password" class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                </div>
                <div class="flex items-start mb-6 mx-10">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800">
                  </div>
                  <div class="ml-3 text-sm">
                    <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Manter conectado</label>
                  </div>
                </div>
                <div class="flex justify-around">
                  <button @click.prevent="getLoginController" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Entrar</button>
                  <BaseButton rotulo="Cadastrar" @action="getFormCadastro" ></BaseButton>
                </div>

              </div>

            </form>
        </div >
        <div class="w-full h-full bg-blue-800 border-l-4">
          <div class="w-full  h-full my-8 p-2">
            <h1 class=" font-medium text-center text-gray-50 font-medium text-2xl py-4">Faça como mais de 1500 servidores públicos brasileiros</h1>
          </div>
          <div class="text-center">
            <div class="flex w-full justify-around my-10">
              <div class="flex mb-5 -space-x-4">
                <img class="w-20 h-20 border-2 border-white rounded-full dark:border-gray-800" src='../../assets/images/foto1.png' alt="Imagen">
                <img class="w-20 h-20 border-2 border-white rounded-full dark:border-gray-800" src="../../assets/images/foto2.png" alt="">
                <img class="w-20 h-20 border-2 border-white rounded-full dark:border-gray-800" src="../../assets/images/foto3.png" alt="">
                <img class="w-20 h-20 border-2 border-white rounded-full dark:border-gray-800" src="../../assets/images/foto4.png" alt="">
              </div>

            </div>
            <div class="flex w-full justify-around my-10">
              <div class="flex -space-x-4">
                <img class="w-20 h-20 border-2 border-white rounded-full dark:border-gray-800" src='../../assets/images/foto5.png' alt="">
                <img class="w-20 h-20 border-2 border-white rounded-full dark:border-gray-800" src='../../assets/images/foto6.png' alt="">
                <img class="w-20 h-20 border-2 border-white rounded-full dark:border-gray-800" src='../../assets/images/foto7.png' alt="">
                <a class="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800" href="#">+99</a>
              </div>
            </div>

          </div>
          <div class="my-4">
            <h2 class="text-gray-50 text-xl font-semibold my-8">Obtenha informações relevantes sobre os dados de remuneração de servidores públicos.</h2>
          </div>
          <div class="my-4">
            <h2 class="text-gray-50 text-base font-medium my-4">Gráficos, insights, comparativos salariais e muito mais.</h2>
          </div>
          <footer class="sticky bottom-auto my-8">
            <p class="text-gray-50 my-4">Planos apartir de R$ 3,99</p>
            <BaseButton rotulo="Assine Agora" @action="getAssinatura"></BaseButton>
          </footer>
        </div>


    </div>

  </div>

</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import firebase from "firebase/compat/app";
export default {
  name: "Login",
  components: {BaseButton},
  data(){
    return{
      email: undefined,
      senha: undefined
    }
  },
  methods:{
    async getLoginController() {
      console.log("getLoginController");
      const request ={
        email: this.email,
        senha: this.senha
      }
      console.log(request);
         firebase.auth().signInWithEmailAndPassword(request.email, request.senha)
            .then((userCredential) => {
              // Signed in
              var user = userCredential.user;
              console.log("user", user);
             this.$store.commit("login/setUsuario",userCredential)
              this.$router.push({name: "Home"})

            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log("Erro ao fazer login",errorCode,errorMessage);
              alert(errorMessage)
            });


    },

    getAssinatura(){
      console.log("getAssinatura");
      this.$router.push("/assinatura");
    },
    getFormCadastro(){
      console.log("getFormCadastro");
      this.$router.push({name:"cadastro"});
    }
  }
}
</script>

<style scoped>

</style>
