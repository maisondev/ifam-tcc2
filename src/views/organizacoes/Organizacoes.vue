<template>
  <div class="">
    <form class="flex flex-wrap justify-between  w-full" @submit.prevent="buscaDadosServidorOrgao">
      <div class="flex my-4 flex  items-center">
        <div class="inline-block">
          <label class="block text-gray-800 font-bold text-left" for="CPF">CPF:</label>
          <input class="form-input rounded py-1" id="CPF" type="text" v-model="cpf">
        </div>
      </div>
    </form>
    <div class="flex w-full justify-around items-center">
      <button class="bg-green-600 px-4 py-2 rounded inline-flex ">
      <span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M2,20V18C2,15.88 5.31,14.14 9.5,14C9.18,14.78 9,15.62 9,16.5C9,17.79 9.38,19 10,20H2Z" />
</svg></span>
        <span class="text-gray-50">Buscar</span>
      </button>
    </div>

    <div class="overflow-x-auto relative my-4">
      <div class="py-2 rounded bg-gray-800 text-gray-50 w-full ">Servidores</div>
      {{listaServidores}}
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Servidor
          </th>
          <th scope="col" class="py-3 px-6">
            Situação
          </th>
          <th scope="col" class="py-3 px-6">
            Orgão
          </th>
          <th scope="col" class="py-3 px-6">
            Lotação
          </th>
          <th scope="col" class="py-3 px-6">
            Cargo
          </th>
          <th scope="col" class="py-3 px-6">
            Função
          </th>
        </tr>
        </thead>
        <tbody>

        <tr v-for="servidor in listaServidores" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            {{servidor.servidor.pessoa.nome}}
          </th>
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            {{servidor.servidor.situacao}}
          </th>
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            {{servidor.servidor.orgaoServidorLotacao.nome}}
          </th>
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            {{servidor.fichasCargoEfetivo[0].uorgLotacao}}
          </th>
          <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap">
            {{servidor.fichasCargoEfetivo[0].cargo}}
          </th>

        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import MenuLateralEsquerdo from "../../components/layout/MenuLateralEsquerdo";
export default {
  name: "Organizacoes",
  components: {
    MenuLateralEsquerdo
  },
  data(){
    return{
      organizacao: undefined,
      cpf: undefined,
      listaServidores: undefined
    }
  },
  created() {
    this.organizacao = JSON.parse(localStorage.getItem("orgaoServidor"));
    this.buscaDadosServidorOrgao();
  },
  methods:{
    async  buscaDadosServidorOrgao() {
      console.log('buscaDadosServidorOrgao')
      let request = {
        pagina: 1,
        orgaoServidorExercicio: this.organizacao.codigo,
      }
      console.log('request',request)
      this.listaServidores =  await this.$store.dispatch("dashboard/serviceGetConsultaServidoresOrgaos", request);
      console.log('listaServidores',this.listaServidores)
    }
  }

}
</script>

<style scoped>

</style>
