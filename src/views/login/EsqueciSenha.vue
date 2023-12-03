<template>
  <div class="container mx-auto bg-sky-800 h-full">
    <h1 class="text-gray-50 text-4xl p-8">Calma, vamos te ajudar a recuperar seu acesso.</h1>

    <div>
      <h2 class="text-gray-50 text-4xl p-8">Preencha seus dados abaixo para solicitar a recuperação de senha.</h2>
    </div>
    <div class="container mx-auto">
      <div  class="flex flex-wrap justify-around">
        <div class="w-5/12">
          <label for="email" class="w-full block mb-2 text-sm text-gray-900 text-left font-bold">Email</label>
          <input v-model="email" type="email"  class="w-full form-input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
        </div>
      </div>
      <div>
        <p class="text-gray-50 p-4 font-thin">Você receberá um email no endereço indicado acima contendo o procedimento para criar uma nova senha.</p>
      </div>
      <div>
        <button @click="resetarSenha" class="bg-amber-500 px-8 py-2 rounded text-gray-50 text-lg">Enviar</button>
      </div>


    </div>
  </div>

</template>

<script>
import firebase from "firebase/compat/app";
export default {
  name: "EsqueciSenha",
  data(){
    return{
        email: undefined
    }
  },
  methods:{
    async resetarSenha(){
      await firebase.auth().sendPasswordResetEmail(this.email)
          .then(() => {
            alert("Enviamos um email para "+this.email+" contendo os detalhes da redefinição.");
            this.$router.push({name:"Login"})
          })
          .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorMessage)
          });
    }
  }
}
</script>

<style scoped>

</style>