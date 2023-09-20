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

  <div v-if="servidoresEncontrados" class="my-10 relative container overflow-x-visible">
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-blue-100 dark:text-blue-100">
        <thead class="text-xs text-white uppercase bg-blue-800 hover:bg-blue-900 border-b border-blue-400 dark:text-white">
        <tr>
          <th scope="col" class="px-6 py-3">
            Nome
          </th>
          <th scope="col" class="px-6 py-3">
            Matrícula
          </th>
          <th scope="col" class="px-6 py-3">
            CPF
          </th>
          <th scope="col" class="px-6 py-3">
            Vinculo
          </th>
          <th scope="col" class="px-6 py-3">
            Cargo
          </th>
          <th scope="col" class="px-6 py-3">
            Orgão
          </th>
          <th scope="col" class="px-6 py-3">
            Salário Bruto
          </th>
          <th scope="col" class="px-6 py-3">
            Desconto
          </th>
          <th scope="col" class="px-6 py-3">
            Salário líquido
          </th>
        </tr>
        </thead>
        <tbody v-for="servidor in servidoresEncontrados.servidores">
        <tr class="bg-blue-600 border-b border-blue-400 hover:bg-blue-500">
          <th scope="row" class="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100">
            {{ servidor.ServNomeComp.substring(0,20) }}
          </th>
          <td class="px-6 py-4 text-xs">
            {{ servidor.ServMatricula }}
          </td>
          <td class="px-6 py-4 text-xs">
            {{ servidor.ServCpf }}
          </td>
          <td class="px-6 py-4 text-xs">
            {{ servidor.TipoVincDesc }}
          </td>
          <td class="px-6 py-4 text-xs">
            {{ servidor.CargoDsc }}
          </td>
          <td class="px-6 py-4 text-xs">
            {{ servidor.SecNome.substring(0,50) }}
          </td>
          <td class="px-6 py-4">
            {{ servidor.FolhaVlrRemBruta }}
          </td>
          <td class="px-6 py-4">
            {{ servidor.FolhaVlrRemLiq }}
          </td>
          <td class="px-6 py-4">
            {{ servidor.FolhaVlrRemLiq }}
          </td>
        </tr>
        </tbody>
      </table>
    </div>

  </div>

  <div class="py-10">
  </div>
  <div class="container">
    <Loading :visible="loading"></Loading>
  </div>

</div>
</template>

<script>
import Loading from "@/components/Loading.vue";
export default {
  name: "ServidorMunicipio",
  components:{
    Loading
  },
  data (){
    return{
      listaAnos:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023].reverse(),
      listaMeses: [{mes: '01', label: "Janeiro"}, {mes: '02', label: "Fevereiro"},{mes: '03', label: "Março"},
        {mes: '04', label: "Abril"},{mes: '05', label: "Maio"},{mes: '06', label: "Junho"},
        {mes: '7', label: "Julho"},{mes: '08', label: "Agosto"},{mes: '09', label: "Setembro"},
        {mes: '10', label: "Outubro"},{mes: '11', label: "Novembro"},{mes: '12', label: "Dezembro"}],
      ano: undefined,
      mes: undefined,
      nome: undefined,
      servidoresEncontrados: undefined,
      loading: undefined
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
        totalregistros: 0,
      }
      console.log("request",request);
      try{
        this.loading=true;
        this.servidoresEncontrados = await this.$store.dispatch("dashboard/serviceGetConsultaServidorMunicipio",request);

        console.log("RESPONSE",this.servidoresEncontrados.registros);
      }catch (e) {

      }finally {
        this.loading=false;
      }


    }
  }
}

</script>


<style>
@keyframes spin { 100% { transform:rotate(360deg); } }

$orange: #f18b18;

.container {
  position: relative;
}

.pax-loading-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.7);

  &__spinner {
    position: relative;
    width: 80px;
    height: 80px;
    background-color: #fff;
    border-radius: 5px;
    transition: all .3s ease;

    &:after {
      position: absolute;
      top: calc(50% - 20px);
      left: calc(50% - 20px);
      border: 3px solid $orange;
      content: "";
      display: block;
      height: 40px;
      width: 40px;
      border-radius: 290486px;
      border-right-color: transparent;
      border-top-color: transparent;
      animation: spin 0.4s linear infinite;
    }

    .fade-enter &, .fade-leave-to & {
      transform: scale(1.1);
    }
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}

.toggle {
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 10;
}
</style>