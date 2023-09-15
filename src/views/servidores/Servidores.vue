<template>
  <div class="container w-full mx-auto">
    <div class="container w-full">
      <form class="flex flex-row" @submit.prevent="getPesquisarServidorController">
        <div class="w-full p-8">
          <label for="cpf" class="block text-sm font-semibold text-gray-900 dark:text-white text-left uppercase">cpf <span class="w-3 h-3 text-red-600">*</span></label>
          <input v-model="cpf" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="CPF do servidor" required>
        </div>
        <div class="w-full p-8">
          <label for="nome" class="block text-sm font-semibold text-gray-900 dark:text-white text-left uppercase">nome</label>
          <input v-model="nomeServidor" type="text" id="nome" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome do servidor">
        </div>
       <div class="flex items-center">
         <button  type="submit" class="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><span><svg viewBox="0 0 24 24" style="height: 24px; width: 24px;"><path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M2,20V18C2,15.88 5.31,14.14 9.5,14C9.18,14.78 9,15.62 9,16.5C9,17.79 9.38,19 10,20H2Z"></path></svg></span><span class="px-0.5">Pesquisar servidor</span></button>
       </div>
      </form>
    </div>

    <div>
      {{this.servidorEncontrado[0].servidor}}
    </div>

  </div>
</template>

<script>
import dashBoard from "@/views/dashboard/DashBoard.vue";

export default {
  name: 'Servidores',
  data(){
    return{
      cpf: undefined,
      nomeServidor: undefined,
      servidorEncontrado: undefined
    }
  },
  methods:{
    async getPesquisarServidorController(){
      console.log("getPesquisarServidorController",this.cpf);
      const request = {
        pagina: 1,
        cpf: this.cpf,
        nome: this.nomeServidor
      }
      console.log("request",request);
      const response = await this.$store.dispatch("dashboard/serviceGetConsultaServidores",request);
      this.servidorEncontrado = response;
      console.log("response 1",response)
      await this.getPesquisarServidorByIdController();
    },

  }
}
</script>


<style scoped>

</style>