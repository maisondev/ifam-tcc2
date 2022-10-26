<template>
  <div class="px-4 w-full my-4">
    <form class="flex flex-wrap justify-around w-full" @submit.prevent="buscaDadosServidor">
      <div class="block">
        <label class="block text-gray-800 font-bold text-left" for="CPF">CPF:</label>
        <input class="rounded" id="CPF" type="text" v-model="cpf">
      </div>
      <div class="flex items-end">
        <button class="bg-green-600 px-4 py-2 rounded inline-flex items-center">
      <span><svg style="width:24px;height:24px" viewBox="0 0 24 24">
    <path fill="currentColor" d="M15.5,12C18,12 20,14 20,16.5C20,17.38 19.75,18.21 19.31,18.9L22.39,22L21,23.39L17.88,20.32C17.19,20.75 16.37,21 15.5,21C13,21 11,19 11,16.5C11,14 13,12 15.5,12M15.5,14A2.5,2.5 0 0,0 13,16.5A2.5,2.5 0 0,0 15.5,19A2.5,2.5 0 0,0 18,16.5A2.5,2.5 0 0,0 15.5,14M10,4A4,4 0 0,1 14,8C14,8.91 13.69,9.75 13.18,10.43C12.32,10.75 11.55,11.26 10.91,11.9L10,12A4,4 0 0,1 6,8A4,4 0 0,1 10,4M2,20V18C2,15.88 5.31,14.14 9.5,14C9.18,14.78 9,15.62 9,16.5C9,17.79 9.38,19 10,20H2Z" />
</svg></span>
          <span class="text-gray-50">Buscar</span>
        </button>
      </div>

      <div class="flex w-full justify-around">
        <hr class="border w-full border-gray-300 my-4">
      </div>
      <div class="">

      </div>

    </form>


    <div v-if="servidor" class="overflow-x-auto relative border my-2">
      <div class="py-2 rounded bg-gray-800 text-gray-50 w-full">Servidor</div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Nome
          </th>
          <th scope="col" class="py-3 px-6">
            Situação
          </th>
          <th scope="col" class="py-3 px-6">
            Orgão
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th  scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{servidor.pessoa.nome}}
          </th>
          <td v-if="servidor" class="py-4 px-6">
            {{servidor.situacao}}
          </td>
          <td v-if="servidor" class="py-4 px-6">
            <span class="mx-1">{{servidor.orgaoServidorLotacao.nome}}</span>-<span class="mx-1">{{servidor.orgaoServidorLotacao.sigla}}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="cargo" class="overflow-x-auto relative border my-2">
      <div  class="py-2 rounded bg-gray-800 text-gray-50 w-full">Cargo</div>
      <table  class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Cargo
          </th>
          <th scope="col" class="py-3 px-6">
            Ingresso
          </th>
          <th scope="col" class="py-3 px-6">
            Jornada de trabalho
          </th>
          <th scope="col" class="py-3 px-6">
            Lotação
          </th>
        </tr>
        </thead>
        <tbody>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th  scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.cargo}}
          </th>
          <th v-if="cargo" scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.dataIngressoServicoPublico}}
          </th>
          <td v-if="cargo" class="py-4 px-6">
            {{cargo.jornadaTrabalho}}
          </td>
          <td v-if="cargo" class="py-4 px-6">
            <span class="mx-1">{{cargo.uorgLotacao}}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <hr>



  </div>



</template>

<script>


export default {
  name: 'Home',
  components: {},
  data() {
    return {
      cpf: undefined,
      resultado: undefined,
      responseServidorId: undefined,
      servidor: undefined,
      cargo: undefined

    }
  },

  methods: {
    async  buscaDadosServidor() {
      let request = {
        pagina: 1,
        cpf: this.cpf
      }
      this.resultado =  await this.$store.dispatch("dashboard/serviceGetConsultaServidores", request);
      this.servidor = this.resultado[0].servidor;
      this.cargo=this.resultado[0].fichasCargoEfetivo[0];
      localStorage.setItem("orgaoServidor",JSON.stringify(this.servidor.orgaoServidorExercicio));
      console.log("resultado", this.resultado);
      // let request2 = {
      //   pagina:1,
      //   id:this.resultado[0].servidor.idServidorAposentadoPensionista
      // }
      // this.responseServidorId = await this.$store.dispatch("dashboard/serviceGetConsultaServidoresById",request2);
      // console.log(resultadoId)
    }

  }
}
</script>
