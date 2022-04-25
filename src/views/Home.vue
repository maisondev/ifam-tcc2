<template>
  <div>
    <MenuLateralEsquerdo class="float-left w-20 h-full bg-blue-500"/>
    <div>
      <h1>Dashboard</h1>
    </div>
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
      <span>{{resultado}}</span>

    </div>
  </div>

</template>

<script>

import MenuLateralEsquerdo from "../components/layout/MenuLateralEsquerdo";

export default {
  name: 'Home',
  data() {
    return {
      cpf: undefined,
      resultado: undefined

    }
  },
  components: {MenuLateralEsquerdo},
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
