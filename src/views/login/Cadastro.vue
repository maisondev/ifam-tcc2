<template>
  <div class="container mx-auto bg-gray-800 rounded h-1/2 my-24">
    <h1 class="text-gray-50 text-2xl uppercase py-16">Cadastro</h1>
    <form class="container mx-auto lg:px-40">
      <div class="text-center">
        <div class="mb-6 mx-10">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-300 text-left font-bold placeholder-blue-700">Email</label>
          <input v-model="email" type="email" id="email"
                 class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                 placeholder="Escreva seu melhor email" required>
        </div>
        <div class="mb-6 mx-10">
          <label for="password"
                 class="block mb-2 text-sm font-medium text-gray-50 dark:text-gray-300 text-left font-bold">Senha</label>
          <input v-model="senha" type="password" id="password"
                 class="form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 required>
        </div>
        <div class="flex items-start mb-6 mx-10">
        </div>
        <div class="flex justify-around">
          <BaseButton rotulo="Cadastrar" @action="getCadastroController"
                      :corBotao="'bg-blue-500 hover:bg-blue-600'"></BaseButton>
          <button @click="getVoltar" class="bg-yellow-500 px-8 py-2 rounded text-gray-50"><span class="text-lg">Voltar</span></button>
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
  data() {
    return {
      email: undefined,
      senha: undefined
    }
  },
  created() {
  },
  methods: {
    getVoltar() {
      this.$router.push("/");
    },
    getCadastroController() {
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
            this.$router.push({name: "Login"})
          })
          .catch((error) => {
            console.log(error.code, error.message);
            alert(error.code, error.message)
          });
    }
  }
}
</script>

<style scoped>

</style>