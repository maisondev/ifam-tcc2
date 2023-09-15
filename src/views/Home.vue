<template>
  <div class="px-4 w-full my-4 h-full">
    <form class="flex flex-wrap justify-around w-full" @submit.prevent="getServidorController">
      <div class="block">
        <label class="block text-gray-800 font-bold text-left" for="CPF">CPF:</label>
        <input class="rounded" id="CPF" type="text" v-model="cpf" required>
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
    <div v-if="servidor" class="overflow-x-auto relative border my-4 ">
      <div class="py-2 rounded bg-gray-800 text-gray-50 w-full ">Servidor</div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
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
          <th scope="col" class="py-3 px-6">
            Matrícula
          </th>
          <th scope="col" class="py-3 px-6">
            Estado exercício
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
          <td v-if="servidor" class="py-4 px-6">
            {{servidor.codigoMatriculaFormatado}}
          </td>
          <td v-if="servidor" class="py-4 px-6">
            <span class="mx-1">{{servidor.estadoExercicio.nome}}</span>-<span class="mx-1">{{servidor.estadoExercicio.sigla}}</span>
          </td>

        </tr>
        <tr class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" class="py-3 px-6">
            Possui Afastamento?
          </th>
          <th scope="col" class="py-3 px-6">
            Função
          </th>
          <th scope="col" class="py-3 px-6">
            Orgão Vinculado
          </th>
          <th scope="col" class="py-3 px-6">
            Tipo servidor
          </th>
          <th scope="col" class="py-3 px-6">
            Pensionista
          </th>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th  scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{servidor.flagAfastado}}
          </th>
          <td v-if="servidor" class="py-4 px-6">
            {{servidor.funcao.descricaoFuncaoCargo}}
          </td>
          <td v-if="servidor" class="py-4 px-6">
            <span class="mx-1">{{servidor.orgaoServidorExercicio.nomeOrgaoVinculado}}</span>
          </td>
          <td v-if="servidor" class="py-4 px-6">
            <span class="mx-1">{{servidor.tipoServidor}}</span>
          </td>
          <td v-if="servidor" class="py-4 px-6">
            <span class="mx-1">{{servidor.servidorInativoInstuidorPensao.nome}}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div v-if="cargo" class="overflow-x-auto relative border my-4">
      <div  class="py-2 rounded bg-gray-800 text-gray-50 w-full">Cargo</div>
      <table  class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Cargo
          </th>
          <th scope="col" class="py-3 px-6">
            Classe
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
          <th  scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.classeCargo}}
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
        <tr class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" class="py-3 px-6">
            Data Ingresso Cargo
          </th>
          <th scope="col" class="py-3 px-6">
            Data Ingresso Orgao
          </th>
          <th scope="col" class="py-3 px-6">
            Data Ingresso Servico Publico
          </th>
          <th scope="col" class="py-3 px-6">
            Data Publicacao Documento
          </th>
          <th scope="col" class="py-3 px-6">
            Forma Ingresso
          </th>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th  scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.dataIngressoCargo}}
          </th>
          <th  scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.dataIngressoOrgao}}
          </th>
          <th v-if="cargo" scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.dataIngressoServicoPublico}}
          </th>
          <td v-if="cargo" class="py-4 px-6">
            {{cargo.dataPublicacaoDocumentoIngressoServicoPublico}}
          </td>
          <td v-if="cargo" class="py-4 px-6">
            <span class="mx-1">{{cargo.formaIngresso}}</span>
          </td>
        </tr>
        <tr class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <th scope="col" class="py-3 px-6">
            nivel Cargo
          </th>
          <th scope="col" class="py-3 px-6">
            orgao Exercicio
          </th>
          <th scope="col" class="py-3 px-6">
            orgao Lotacao
          </th>
          <th scope="col" class="py-3 px-6">
            regime Juridico
          </th>
          <th scope="col" class="py-3 px-6">
            situacao Servidor
          </th>
        </tr>
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th  scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.nivelCargo}}
          </th>
          <th  scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.orgaoExercicio}}
          </th>
          <th v-if="cargo" scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {{cargo.orgaoLotacao}}
          </th>
          <td v-if="cargo" class="py-4 px-6">
            {{cargo.regimeJuridico}}
          </td>
          <td v-if="cargo" class="py-4 px-6">
            <span class="mx-1">{{cargo.situacaoServidor}}</span>
          </td>
        </tr>
        <tr class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
        </tr>
        </tbody>
      </table>
    </div>
    <hr class="mt-10">
    <div class="my-20">
<!--      <span class="my-20">{{cargosFuncoes}}</span>-->
    </div>
    <div>
      <span>{{remuneracao}}</span>
    </div>
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
      servidorById: undefined,
      servidor: undefined,
      cargo: undefined,
      cargosFuncoes: undefined,
      remuneracao: undefined

    }
  },

  methods: {
    async buscaDadosServidorPeps() {
      const request = {
        pagina: 1,
        cpf: this.cpf
      }
      console.log("request",request);
      this.resultado =  await this.$store.dispatch("dashboard/serviceGetConsultaPepsServidor", request);
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
    },
    async  getServidorController() {
      console.log("getServidorController")
      const request = {
        pagina: 1,
        cpf: this.cpf,
        nome: this.nome
      }
      console.log("request",request);
      const response =  await this.$store.dispatch("dashboard/serviceGetConsultaServidores", request);
      console.log("response",response)
      this.servidor = response[0].servidor;
      console.log("servidor",this.servidor);
      this.cargo=response[0].fichasCargoEfetivo[0];
      console.log("cargo",this.cargo);
      localStorage.setItem("orgaoServidor",JSON.stringify(this.servidor.orgaoServidorExercicio));
     await this.getPesquisarServidorByIdController();
    },

    async getPesquisarServidorByIdController(){
      console.log("getPesquisarServidorByIdController",this.servidor);
      const request = {
        id: this.servidor.idServidorAposentadoPensionista,
      }
      console.log("request",request);
      const response = await this.$store.dispatch("dashboard/serviceGetConsultaServidoresById",request);
      this.servidorById = response;
      console.log("response 2",response);
      await this.getPesquisarFuncoesCargosController();
    },

    async getPesquisarFuncoesCargosController(){
      console.log("getPesquisarFuncoesCargosController");
      const request = {
        pagina: 20,
      }
      console.log("request",request);
      const response = await this.$store.dispatch("dashboard/serviceGetConsultaFuncoesCargos",request);
      this.cargosFuncoes = response;
      console.log("response 3",response);
      await this.getPesquisarServidoresByOrgaosController();
    },

    async getPesquisarServidoresByOrgaosController(){
      console.log("getPesquisarServidoresByOrgaosController",this.servidor);
      const request = {
        pagina: 1,
        licenca: 0,
        orgaoExercicio: this.servidor.orgaoServidorExercicio.codigo,
        orgaoLotacao: this.servidor.orgaoServidorLotacao.codigo,
        tipoServidor: this.servidor.tipoServidor == "Civil" ? 1:2,
      }
      console.log("request",request);
      const response = await this.$store.dispatch("dashboard/serviceGetConsultaServidoresByOrgaos",request);
      this.cargosFuncoes = response;
      console.log("response 4",response);
      this.getRemuneracaoServidorController();
    },

    async  getRemuneracaoServidorController() {
      console.log("getRemuneracaoServidorController");
      const request = {
        cpf: this.cpf,
        id: this.servidor.idServidorAposentadoPensionista?this.servidor.idServidorAposentadoPensionista: undefined,
        mesAno:202307,
        pagina: 1,
      }
      console.log('request',request)
      this.remuneracao =  await this.$store.dispatch("dashboard/serviceGetConsultaRemuneracoesServidor", request);
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
