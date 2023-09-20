<template>
  <div class="container mx-auto">
    <div class="container mx-auto">
      <h1>Servidores do Estado</h1>
    </div>
    <div class="container p-8">
      <div class="flex gap-4">
        <div class="flex-1">
          <label for="">Orgao</label>
          <v-select v-model="orgaoSelecionado" class="w-full" :options="orgaos" label="nome_orgao"></v-select>
        </div>
        <div class="flex-1">
          <label for="">Ano</label>
          <v-select v-model="anoSelecionado" class="w-full" :options="listaAnos"></v-select>
        </div>
      </div>
      <div class="p-4">
        <button @click="getConsultarServidorEstadoController" class="bg-blue-500 text-gray-50 px-4 py-2 rounded"><span>Consultar</span>
        </button>
      </div>
    </div>
    <div>

      <!--      {{listaServidoresEstado}}-->
      <label>Filter by Name:</label>
      <input class="form input" type="text" v-model="filters.nome.value"/>
      <div v-if="dados">

      </div>


      <div class="container mx-auto">
        <div class="container mx-auto flex justify-around p-8 ">
          <smart-pagination class="" v-if="parsed"
                            :currentPage.sync="currentPage"
                            :totalPages="totalPages"
          />

        </div>
        <div v-if="parsed" class="relative sm:rounded-lg p-8 overflow-x-visible">
          <!--        <v-client-table :data="dados" :columns="colunas" :options="options"/>-->
          <v-table :currentPage.sync="currentPage"
                   :pageSize="pageSize" :data="dados" :filters="filters" @totalPagesChanged="totalPages = $event"
                   :hideSortIcons="true"
                   class="relative overflow-x-visible shadow-md sm:rounded-lg p-8 w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead slot="head">
            <tr class="bg-gray-700 text-gray-50">
              <v-th sortKey="nome" class="px-6 py-2">
                NOME
              </v-th>
              <v-th sortKey="lotacao" class="px-6 py-2">
                LOTACAO
              </v-th>
              <v-th sortKey="cargo" class="px-6 py-2">
                CARGO
              </v-th>
              <!--            <th class="px-6 py-3">-->
              <!--              FUNCAO-->
              <!--            </th>-->
              <v-th sortKey="vinculo" class="px-6 py-2">
                VINCULO
              </v-th>
              <v-th sortKey="remuneracao legal total(r$)" class="px-6 py-2">
                REMUNERACAO LEGAL TOTAL
              </v-th>
              <th class="px-6 py-2">
                DESC.TETO
              </th>
              <v-th sortKey="remuneracao legal devida(r$)" class="px-6 py-2">
                REMUNERACAO LEGAL DEVIDA
              </v-th>
              <v-th sortKey="descontos legais(r$)" class="px-6 py-2">
                DESCONTOS LEGAIS
              </v-th>
              <v-th sortKey="liquido disponivel(r$)" class="px-6 py-2">
                LIQUIDO DISPONIVEL
              </v-th>
            </tr>
            </thead>
            <tbody slot="body" slot-scope="{displayData}">
            <tr v-for="(servidor, indice) in displayData"
                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td class="px-6 py-3 inline-flex w-max">
                {{ servidor.nome }}
              </td>
              <td class="px-6 py-3">
                {{ servidor.lotacao }}
              </td>
              <td class="px-6 py-3">
                {{ servidor.cargo }}
              </td>
              <!--            <td class="px-6 py-3">-->
              <!--              {{servidor.FUNCAO}}-->
              <!--            </td>-->
              <td class="px-6 py-3">
                {{ servidor.vinculo }}
              </td>
              <td class="px-6 py-3">
                {{ servidor["remuneracao legal total(r$)"] }}
              </td>
              <td class="px-6 py-3">
                {{ servidor["desc.teto(r$)"] }}
              </td>
              <td class="px-6 py-3">
                {{ servidor["remuneracao legal devida(r$)"] }}
              </td>
              <td class="px-6 py-3">
                {{ servidor["descontos legais(r$)"] }}
              </td>
              <td class="px-6 py-3">
                {{ servidor["liquido disponivel(r$)"] }}
              </td>
            </tr>
            </tbody>
          </v-table>
        </div>

        <div class="container mx-auto flex justify-around p-8">
          <smart-pagination class="my-10" v-if="parsed"
                            :currentPage.sync="currentPage"
                            :totalPages="totalPages"
          />

        </div>
      </div>

    </div>
    <div class="container">
       <Loading :visible="loading"></Loading>
    </div>
  </div>

</template>


<script>
import Loading from "@/components/Loading.vue";
import Papa from 'papaparse';

export default {
  name: "ServidorEstado",
  components:{
    Loading
  },
  data() {
    return {
      loading: undefined,
      pageSize: 30,
      currentPage: 1,
      totalPages: 0,
      filters: {
        nome: {value: '', keys: ['nome']}
      },
      listaAnos: [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023].reverse(),
      orgaos: [{"nome_orgao": "ADAF", "id": "76"}, {
        "nome_orgao": "ADS",
        "id": "445"
      }, {"nome_orgao": "APOSENTADOS - EXECUTIVO", "id": "127"}, {
        "nome_orgao": "APOSENTADOS – ALEAM",
        "id": "10113"
      }, {"nome_orgao": "APOSENTADOS – PGJ", "id": "10108"}, {
        "nome_orgao": "APOSENTADOS – TCE",
        "id": "10106"
      }, {"nome_orgao": "APOSENTADOS – TJA", "id": "10110"}, {
        "nome_orgao": "ARSEPAM",
        "id": "93"
      }, {"nome_orgao": "CASA CIVIL DO GOVERNO", "id": "77"}, {
        "nome_orgao": "CASA MILITAR",
        "id": "94"
      }, {"nome_orgao": "CB-CIVIS", "id": "95"}, {"nome_orgao": "CBMAM", "id": "96"}, {
        "nome_orgao": "CETAM",
        "id": "74"
      }, {"nome_orgao": "CGE", "id": "75"}, {"nome_orgao": "CSC", "id": "97"}, {
        "nome_orgao": "DETRAN",
        "id": "98"
      }, {"nome_orgao": "ERGSP", "id": "99"}, {"nome_orgao": "FAPEAM", "id": "100"}, {
        "nome_orgao": "FCECON",
        "id": "101"
      }, {"nome_orgao": "FEH", "id": "86"}, {"nome_orgao": "FEI", "id": "396"}, {
        "nome_orgao": "FHAJ",
        "id": "102"
      }, {"nome_orgao": "FHEMOAM", "id": "103"}, {"nome_orgao": "FMT-AM", "id": "104"}, {
        "nome_orgao": "FUHAM",
        "id": "92"
      }, {"nome_orgao": "FUNDAÇÃO AMAZONPREV", "id": "87"}, {
        "nome_orgao": "FUNDAÇÃO VILA OLIMPICA",
        "id": "105"
      }, {"nome_orgao": "FUNTEC", "id": "106"}, {"nome_orgao": "FVS", "id": "17"}, {
        "nome_orgao": "IDAM",
        "id": "107"
      }, {"nome_orgao": "IMPRENSA OFICIAL", "id": "108"}, {
        "nome_orgao": "IPAAM",
        "id": "109"
      }, {"nome_orgao": "IPEM-AM", "id": "110"}, {"nome_orgao": "JUCEA", "id": "111"}, {
        "nome_orgao": "OUVIDORIA GERAL",
        "id": "112"
      }, {"nome_orgao": "PENSIONISTAS - EXECUTIVO", "id": "128"}, {
        "nome_orgao": "PENSIONISTAS – ALEAM",
        "id": "10112"
      }, {"nome_orgao": "PENSIONISTAS – PGJ", "id": "10107"}, {
        "nome_orgao": "PENSIONISTAS – TCE",
        "id": "10105"
      }, {"nome_orgao": "PENSIONISTAS – TJA", "id": "10109"}, {
        "nome_orgao": "PGE",
        "id": "80"
      }, {"nome_orgao": "PM-ATIVOS", "id": "113"}, {
        "nome_orgao": "PM-CIVIS",
        "id": "114"
      }, {"nome_orgao": "POLICIA CIVIL", "id": "115"}, {"nome_orgao": "PROCON", "id": "4573"}, {
        "nome_orgao": "PRODAM",
        "id": "136"
      }, {"nome_orgao": "SEAD", "id": "90"}, {
        "nome_orgao": "SEAD-PENSÃO ESPECIAL I",
        "id": "129"
      }, {"nome_orgao": "SEAD-PENSÃO ESPECIAL II", "id": "133"}, {
        "nome_orgao": "SEAD-PENSÃO HANSENIANOS",
        "id": "132"
      }, {"nome_orgao": "SEAP", "id": "73"}, {"nome_orgao": "SEAS", "id": "82"}, {
        "nome_orgao": "SEC",
        "id": "126"
      }, {"nome_orgao": "SECOM", "id": "72"}, {"nome_orgao": "SECT", "id": "122"}, {
        "nome_orgao": "SEDECTI",
        "id": "83"
      }, {"nome_orgao": "SEDEL", "id": "4572"}, {"nome_orgao": "SEDUC", "id": "91"}, {
        "nome_orgao": "SEFAZ",
        "id": "89"
      }, {"nome_orgao": "SEIND", "id": "22"}, {"nome_orgao": "SEINFRA", "id": "116"}, {
        "nome_orgao": "SEJEL",
        "id": "117"
      }, {"nome_orgao": "SEJUSC", "id": "84"}, {"nome_orgao": "SEMA", "id": "81"}, {
        "nome_orgao": "SEPED",
        "id": "118"
      }, {"nome_orgao": "SEPROR", "id": "119"}, {"nome_orgao": "SERFI", "id": "397"}, {
        "nome_orgao": "SERGB",
        "id": "79"
      }, {"nome_orgao": "SES", "id": "88"}, {"nome_orgao": "SETRAB", "id": "120"}, {
        "nome_orgao": "SGVG",
        "id": "78"
      }, {"nome_orgao": "SNPH", "id": "121"}, {"nome_orgao": "SRMM", "id": "71"}, {
        "nome_orgao": "SSP",
        "id": "123"
      }, {"nome_orgao": "SUHAB", "id": "124"}, {"nome_orgao": "UEA", "id": "125"}, {"nome_orgao": "UGPE", "id": "85"}],
      anoSelecionado: undefined,
      orgaoSelecionado: undefined,
      resultado: undefined,
      listaServidoresEstado: undefined,
      CSVTOJSON: undefined,
      parsed: undefined,
      colunas: undefined,
      dados: undefined,
      options: {
        editableColumns: ['nome'],
        sortable: ['nome', 'remuneracao legal total(r$)', 'descontos legais(r$)', 'liquido disponivel(r$)'],
        filterable: ['nome', 'vinculo']
      }

    }
  },
  computed: {},
  methods: {

    async getConsultarServidorEstadoController() {
      console.log("getConsultarServidorEstadoController");
      const request = {
        action: "get_meses_docs",
        ano: this.anoSelecionado,
        orgao_id: this.orgaoSelecionado.id
      }
      console.log("request", request);
      try{
        this.loading=true;
        const response = await this.$store.dispatch("dashboard/serviceGetConsultaServidorEstado", request);
        console.log("response", response);
        this.resultado = response[0].arquivos[1].url;
        console.log(this.resultado)
        let self = this;
        const config = {
          delimiter: "",	// auto-detect
          newline: "",	// auto-detect
          quoteChar: '"',
          escapeChar: '"',
          header: false,
          transformHeader: undefined,
          dynamicTyping: false,
          preview: 0,
          encoding: "",
          worker: false,
          comments: false,
          step: undefined,
          complete: undefined,
          error: undefined,
          download: false,
          downloadRequestHeaders: undefined,
          downloadRequestBody: undefined,
          skipEmptyLines: false,
          chunk: undefined,
          chunkSize: undefined,
          fastMode: undefined,
          beforeFirstChunk: undefined,
          withCredentials: undefined,
          transform: undefined,
          delimitersToGuess: [',', '\t', '|', ';', Papa.RECORD_SEP, Papa.UNIT_SEP]
        }
        Papa.parse(this.resultado, {
          download: true,
          config,
          header: true,
          complete: (result) => {
            this.listaServidoresEstado = result;
            console.log("header", this.listaServidoresEstado.meta.fields);
            this.dados = this.listaServidoresEstado.data
            console.log("dados capturados", this.dados, typeof this.dados);
            console.table(this.dados)
            this.colunas = this.listaServidoresEstado.meta.fields.map(item => {
              return item.toLowerCase().trim();
            })
            this.dados = this.dados.map(item => {
              console.log("item", item, typeof item);
              var key, keys = Object.keys(item);
              var n = keys.length;
              var newobj = {}
              while (n--) {
                key = keys[n];
                if (key.toLowerCase().includes("remunera") || key.toLowerCase().includes("desc") || key.toLowerCase().includes("liquid"))
                  newobj[key.toLowerCase().trim()] = (parseFloat(new String(item[key]).replace(",", ".")))
                else {
                  newobj[key.toLowerCase().trim()] = item[key];
                }


              }
              return newobj;
            })
            console.log("dados", this.dados)
            this.parsed = true;
            console.log("teste dentro", this.CSVTOJSON);
            console.log(typeof this.CSVTOJSON);
            console.log("teste dentro", self.cases);
          }
        });
        console.log("csv", this.csv);
        console.log("teste fora", this.CSVTOJSON);
        console.log("teste fora 2", typeof self.cases, self, self.cases, this.CSVTOJSON, typeof this.CSVTOJSON);
        console.table(this.CSVTOJSON);
      }catch (e) {

      }finally {
        this.loading=false;
      }


    }
  }
}

</script>


<style>
ul.pagination {
  display: flex;
  column-gap: 21px;
}

.page-item {
  color: black;
}

.page-item a {
  float: left;
  padding: 8px 16px;
  text-decoration: none;
}

li.page-item.active {
  background-color: #142d4c; /** Define uma cor de fundo para o botão da página atual **/
  color: #ececec;
  border-radius: 20%;
}

.a.page-link {
  color: #ececec;
}

.vt-sort:before {
  font-family: "Font Awesome 6 Free", sans-serif;
  padding-right: 0.5em;
  width: 1.28571429em;
  display: inline-block;
  text-align: center;
}

.vt-sortable:before {
  content: "\f338";
}

.vt-asc:before {
  content: "\f884";
}

.vt-desc:before {

  content: "\f161";
}
</style>