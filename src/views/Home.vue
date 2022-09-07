<template>
  <div>
    <div class="flex h-screen">
      <MenuLateralEsquerdo class="h-full bg-blue-600"></MenuLateralEsquerdo>
      <div class="flex flex-row flex-wrap w-full">
        <div class="flex-1 justify-around">
          <h1 class="bg-blue-500 p-4 text-2xl text-gray-900 font-semibold text-4xl">Home</h1>
        </div>
        <div class="w-full">
          <div>
            <form @submit.prevent="buscaDadosServidor">
              <div>
                <label for="CPF">CPF</label>
                <input class="" id="CPF" type="text" v-model="cpf">
              </div>
              <button class="bg-green-600 text-gray-50 px-4 py-2 rounded"> Buscar servidor</button>
            </form>
          </div>
          <div>


            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">

              <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Nome
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Tipo
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Situação
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Orgão
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Sigla
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Estado
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Ingresso
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Jornada
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Lotação
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Cargo
                  </th>
                  <th scope="col" class="px-6 py-3">
                    DataIngressoCargo
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Forma de Ingresso
                  </th>

                  <th scope="col" class="px-6 py-3">
                    <span class="sr-only">Edit</span>
                  </th>
                </tr>
                </thead>
                <tbody v-if="resultado">
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td class="px-6 py-4">
                    {{ resultado[0].servidor.pessoa.nome }}
                  </td>
                  <td class="px-6 py-4">
                    {{ resultado[0].servidor.pessoa.tipo }}
                  </td>
                  <td class="px-6 py-4">
                    {{ resultado[0].servidor.situacao }}
                  </td>
                  <td class="px-4 py-4">
                    {{ resultado[0].servidor.orgaoServidorLotacao.nome }}
                  </td>
                  <td class="px-4 py-4">
                    {{ resultado[0].servidor.orgaoServidorLotacao.sigla }}
                  </td>
                  <td class="px-4 py-4">
                    {{ resultado[0].servidor.estadoExercicio.nome }}
                  </td>
                  <td v-if="resultado[0].fichasCargoEfetivo[0]" class="px-4 py-4">
                    {{ resultado[0].fichasCargoEfetivo[0].dataPublicacaoDocumentoIngressoServicoPublico }}
                  </td>
                  <td v-if="resultado[0].fichasCargoEfetivo[0]" class="px-4 py-4">
                    {{ resultado[0].fichasCargoEfetivo[0].jornadaTrabalho }}
                  </td>
                  <td v-if="resultado[0].fichasCargoEfetivo[0]" class="px-4 py-4">
                    {{ resultado[0].fichasCargoEfetivo[0].uorgLotacao }}
                  </td>
                  <td v-if="resultado[0].fichasCargoEfetivo[0]" class="px-4 py-4">
                    {{ resultado[0].fichasCargoEfetivo[0].cargo }}
                  </td>
                  <td v-if="resultado[0].fichasCargoEfetivo[0]" class="px-4 py-4">
                    {{ resultado[0].fichasCargoEfetivo[0].dataIngressoCargo }}
                  </td>
                  <td v-if="resultado[0].fichasCargoEfetivo[0]" class="px-4 py-4">
                    {{ resultado[0].fichasCargoEfetivo[0].formaIngresso }}
                  </td>

                </tr>

                </tbody>
              </table>
            </div>

          </div>
        </div>
      </div>

    </div>


  </div>

</template>

<script>

import MenuLateralEsquerdo from "../components/layout/MenuLateralEsquerdo";

export default {
  name: 'Home',
  components: {MenuLateralEsquerdo},
  data() {
    return {
      cpf: undefined,
      resultado: undefined

    }
  },

  methods: {
    async  buscaDadosServidor() {
      let request = {
        pagina: 1,
        cpf: this.cpf
      }
      this.resultado =  await this.$store.dispatch("dashboard/serviceGetConsultaServidores", request);
      console.log("resultado", this.resultado);
    }

  }
}
</script>
