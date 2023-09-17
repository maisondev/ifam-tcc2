<template>
<div class="container mx-auto">
  <div class="cotnainer">
    <div class="flex w-full">
      <h1 class="text-2xl font-semibold text-center w-full">Servidor Municipal</h1>
    </div>

    <div class="flex flex-row flex-wrap w-full p-8 gap-8">
      <div class="w-full">
        <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
        <input v-model="nome" type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Insira o nome do servidor" required>
      </div>
      <div class="flex-1">
        <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mês</label>
        <v-select class="w-full" :options="listaMeses" label="label" v-model="mes" :reduce="label => label.mes"></v-select>
      </div>
      <div class="flex-1">
        <label for="nome" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ano</label>
        <v-select class="w-full" :options="listaAnos" label="label" v-model="ano"></v-select>
      </div>
    </div>
    <div>
      <button @click="getServidorMunicipalController" class="bg-green-600 px-4 py-2 rounded"><span class="text-gray-50">Consultar</span></button>
    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "ServidorMunicipio",
  data (){
    return{
      listaAnos:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023].reverse(),
      listaMeses: [{mes: '01', label: "Janeiro"}, {mes: '02', label: "Fevereiro"},{mes: '03', label: "Março"},
        {mes: '04', label: "Abril"},{mes: '05', label: "Maio"},{mes: '06', label: "Junho"},
        {mes: '7', label: "Julho"},{mes: '08', label: "Agosto"},{mes: '09', label: "Setembro"},
        {mes: '10', label: "Outubro"},{mes: '11', label: "Novembro"},{mes: '12', label: "Dezembro"}],
      ano: undefined,
      mes: undefined,
      nome: undefined
    }
  },
  methods:{
    async getServidorMunicipalController(){
      console.log("getServidorMunicipalController");
      const request = {
        servico: "SERVIDORES_PESSOAL",
        cliente: 23,
        numero: 0,
        exercicio: this.ano,
        formato: "",
        mes: this.mes,
        objeto: "",
        criterio: this.nome,
        registros: 10,
        pagina: 1,
        totalregistros: 0
      }
      console.log("request",request);
      const response = await this.$store.dispatch("dashboard/serviceGetConsultaServidorMunicipio",request);
      console.log("RESPONSE",response);

    }
  }
}

</script>


<style scoped>

</style>