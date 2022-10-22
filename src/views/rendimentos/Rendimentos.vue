<template>
  <div class="">
    {{resultado}}
    <form class="flex flex-wrap justify-between w-full" @submit.prevent="buscaDadosServidor">
      <div class="flex my-4 flex  items-center">
        <div class="inline-block">
          <label class="block text-gray-800 font-bold text-left" for="CPF">CPF:</label>
          <input class="form-input rounded py-1" id="CPF" type="text" v-model="cpf">
        </div>
      </div>

      <div class="flex w-3/12 my-4">
        <div class="w-full">
          <label for="mes" class="uppercase text-left font-bold text-gray-800">mês</label>
          <v-select class="w-full" :options="listaMeses" label="label" v-model="mes" :reduce="label => label.mes"></v-select>
        </div>
      </div>

      <div class="flex w-2/12 my-4">
        <div class="w-full">
          <label for="mes" class="uppercase text-left font-bold text-gray-800">ano</label>
          <v-select class="w-full" :options="listaAnos" v-model="ano"></v-select>
        </div>
      </div>

      <div class="flex w-full justify-around items-center">
        <button class="bg-green-600 px-4 py-2 rounded inline-flex ">
      <span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M2,20V18C2,15.88 5.31,14.14 9.5,14C9.18,14.78 9,15.62 9,16.5C9,17.79 9.38,19 10,20H2Z" />
</svg></span>
          <span class="text-gray-50">Buscar</span>
        </button>
      </div>
    </form>
    <hr>
    <div class="overflow-x-auto relative">
      <div class="py-2 rounded bg-gray-800 text-gray-50 w-full">Salário</div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            mesAno
          </th>
          <th scope="col" class="py-3 px-6">
            Salário Bruto
          </th>
          <th scope="col" class="py-3 px-6">
            Salário Líquido
          </th>
          <th scope="col" class="py-3 px-6">
            Vantagens
          </th>
          <th scope="col" class="py-3 px-6">
            Descontos
          </th>
          <th scope="col" class="py-3 px-6">
            Total Descontos
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th v-if="remuneracao" scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{remuneracao.mesAnoPorExtenso}}
          </th>
          <th v-if="remuneracao" scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{remuneracao.remuneracaoBasicaBruta}}
          </th>
          <td v-if="remuneracao" class="py-4 px-6">
            <span class="">{{remuneracao.valorTotalRemuneracaoAposDeducoes}}</span>
          </td>
          <td v-for="(desconto,indexVantagem) in descontos" class="py-4 px-6 block">
            <span v-if="indexVantagem>0 && indexVantagem<2" class="block">{{desconto.descricao}} - <span class="font-bold">R$ {{desconto.valor}} </span></span>
          </td>
          <td v-for="(desconto,indexDesconto) in descontos" class="py-1 px-1 block">
            <span v-if="indexDesconto>=2" class="block">{{desconto.descricao}} - <span class="font-bold">R$ {{desconto.valor}} </span></span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import MenuLateralEsquerdo from "../../components/layout/MenuLateralEsquerdo";
export default {
  name: "Rendimentos",
  components: {
    MenuLateralEsquerdo
  },
  data() {
    return {
      mes:undefined,
      ano: undefined,
      cpf: undefined,
      mesAno: undefined,
      pagina: undefined,
      resultado: undefined,
      servidor: undefined,
      remuneracao: undefined,
      descontos: undefined,
      vantagens: undefined,
      rendimento: undefined,
      totalDescontos: undefined,
      listaMeses: [{mes: '01', label: "Janeiro"}, {mes: '02', label: "Fevereiro"},{mes: '03', label: "Março"},
        {mes: '04', label: "Abril"},{mes: '05', label: "Maio"},{mes: '06', label: "Junho"},
        {mes: '07', label: "Julho"},{mes: '08', label: "Agosto"},{mes: '09', label: "Setembro"},
        {mes: '10', label: "Outubro"},{mes: '11', label: "Novembro"},{mes: '12', label: "Dezembro"}],
      listaAnos:[2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022]
    }
  },


  methods:{
    async  buscaDadosServidor() {
      let request = {
        pagina: 1,
        cpf: this.cpf,
        mesAno:this.ano+this.mes
      }
      console.log('request',request)
      this.resultado =  await this.$store.dispatch("dashboard/serviceGetConsultaRemuneracoesServidor", request);
      this.remuneracao = this.resultado[0].remuneracoesDTO[0];
      this.descontos = this.resultado[0].remuneracoesDTO[0].rubricas;
      this.totalDescontos = this.descontos.reduce(function (soma,desconto,indice){
        console.log('soma',soma,'desconto',desconto.valor,'indice',indice)
        console.log('soma',typeof soma,'desconto',typeof desconto.valor,'indice',typeof indice)
        if (indice>0){
          console.log('soma',soma)
          return soma + parseInt(desconto.valor);
        }

      },0)
      console.log("totalDescontos", this.totalDescontos);
    }
  }

}
</script>

<style scoped>

</style>
