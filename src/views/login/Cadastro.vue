<template>
<div class="container mx-auto bg-green-700 my-10 py-10 rounded">
  <h1 class="text-gray-50 text-2xl uppercase my-8">Cadastro</h1>
  <form>
    <div class="text-center mx-auto">
      <div class="mb-6 mx-10">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-300 text-left font-bold">Email</label>
        <input v-model="email" type="email" id="email" class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required="">
      </div>
      <div class="mb-6 mx-10">
        <label for="password" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-300 text-left font-bold">Senha</label>
        <input v-model="senha" type="password" id="password" class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
      </div>
      <div class="flex items-start mb-6 mx-10">
        <div class="flex items-center h-5">
          <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="">
        </div>
        <div class="ml-3 text-sm">
          <label for="remember" class="font-medium text-gray-50 dark:text-gray-300">Manter conectado</label>
        </div>
      </div>
      <div class="flex justify-around">
        <BaseButton rotulo="Cadastrar" @action="getCadastroController" :corBotao="'bg-blue-500 hover:bg-blue-600'"></BaseButton>
        <button @click="getVoltar" class="bg-yellow-500 px-4 py-2 rounded text-gray-50">Voltar</button>
      </div>

    </div>

  </form>
</div>
</template>

<script>
import BaseButton from "@/components/base/BaseButton.vue";
import firebase from "firebase/compat/app";
export default {
  name: "Cadastro",
  components: {BaseButton},
  data(){
    return {
      email: undefined,
      senha: undefined
    }
  },
  created(){
  },
  methods:{
    getVoltar(){
      this.$router.push("/");
    },
    getCadastroController(){
      console.log("getCadastroController");
      const request = {
        email: this.email,
        password: this.senha
      }
      console.log(request)
      firebase.auth().createUserWithEmailAndPassword(request.email, request.password)
          .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            alert("Usuário Cadastrado com sucesso")
            this.$router.push({name:"Login"})
          })
          .catch((error) => {
            console.log(error.code,error.message);
            alert(error.code,error.message)
          });
    }
  }
}
</script>

<style scoped>

</style>