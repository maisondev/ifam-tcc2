import axios from "../../../axios-auth"
import axiosMunicipio from "../../../axios-municipio"
import axiosEstado from "../../../axios-estado"

const token = process.env.VUE_APP_KEY;

export const actions = {

    async serviceGetConsultaPepsServidor(context, request) {
        console.log('serviceGetConsultaPepsServidor',request)
        const url = "/api-de-dados/peps";
        try{
            return await axios.get(url, {params: {pagina:request.pagina,
                    cpf:request.cpf}})
                .then(function (response) {
                    console.log('response', response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar peps',e)
        }

    },

    // Trecho de código que consome a API REST do Governo do Estado do Amazonas.
    async serviceGetConsultaServidorEstado(context, request) {
        const url = "wp-admin/admin-ajax.php";
        //Passagem de parâmentros por Body params conforme especificação da API
        const params = new URLSearchParams();
        params.append('action', 'get_meses_docs');
        params.append('ano', request.ano);
        params.append('orgao_id', request.orgao_id);
        try{
            //Uso da biblioteca axios que faz parte do ecossistema do VUEjs
            return await axiosEstado.post(url, params)
                .then(function (response) {
                    //Retorno do response
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            // Tratamento de erro.
            console.log('Erro ao consultar peps',e)
        }
    },

    async serviceGetConsultaServidorMunicipio(context, request) {
        console.log('serviceGetConsultaServidorMunicipio',request)
        const url = "/transparencia/servlet/transparencia.getlancamentos";
        const config = {
            headers:{
                "Content-Type": "multipart/form-data",
                "Accept": "*/*",
                "Connection": "keep-alive"
            }

        }
        const form = new FormData();
        form.append('servico', request.servico);
        form.append('cliente', request.cliente);
        form.append('numero', request.numero);
        form.append('exercicio', request.exercicio);
        form.append('formato', request.formato);
        form.append('mes', request.mes);
        form.append('objeto', request.objeto);
        form.append('criterio', request.criterio);
        form.append('registros', request.registros);
        form.append('pagina', request.pagina);
        try{
            return await axiosMunicipio.post(url, form, config)
                .then(function (response) {
                    console.log('response', response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar servidor municipio',e)
        }

    },

    async serviceGetConsultaServidores(context, request) {
        console.log('serviceGetConsultaServidores',request)
        const url = "/api-de-dados/servidores";
        try{
             return await axios.get(url, {params: {pagina:request.pagina,
                 cpf:request.cpf, nome: request.nome}})
                .then(function (response) {
                    console.log('response then', response.data);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar',e)

        }

    },

    async serviceGetConsultaServidoresById(context, request) {
        console.log('serviceGetConsultaServidoresById',request)
        const url = `/api-de-dados/servidores/${request.id}`;
        console.log(typeof token);
        try{
            return await axios.get(url)
                .then(function (response) {
                    console.log('response', response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar servidor pelo id',e)

        }

    },
    async serviceGetConsultaVinculosServidores(context) {
        console.log("serviceGetConsultaVinculosServidores")
        const url = `/api-de-dados/servidores/situacao-vinculos/resultadoGrafico`;
        try{
            return await axios.get(url)
                .then(function (response) {
                    console.log('response', response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar servidor pelo vinculos',e)

        }

    },

    async serviceGetConsultaFuncoesCargos(context, request) {
        console.log('serviceGetConsultaFuncoesCargos',request)
        const url = `/api-de-dados/servidores/funcoes-e-cargos`;
        try{
            return await axios.get(url,{params: {pagina:request.pagina,
                    }} )
                .then(function (response) {
                    console.log('response axios', response.data);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (erro) {
            console.log(
                "Erro ao consultar cargos e funções",erro);

        }

    },

    async serviceGetConsultaServidoresByOrgaos(context, request) {
        console.log('serviceGetConsultaServidoresByOrgaos',request)
        const url = "/api-de-dados/servidores/por-orgao";
        try{
            return await axios.get(url, {params: {licenca:request.licenca?request.licenca: null,
                        orgaoExercicio:request.orgaoExercicio,
                    orgaoLotacao: request.orgaoLotacao,
                    pagina:request.pagina,
                    tipoServidor: request.tipoServidor,
                    tipoVinculo: request.tipoVinculo}})
                .then(function (response) {
                    console.log('response', response.data);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar servidores por orgão',e)

        }

    },



    async serviceGetConsultaRemuneracoesServidor(context, request) {
        console.log('serviceGetConsultaRemuneracoesServidor',request)
        const url = "/api-de-dados/servidores/remuneracao";
        try{
            return await axios.get(url, {params: {cpf: request.cpf,
                    id: request.id,
                    mesAno: request.mesAno,
                    pagina:request.pagina}})
                .then(function (response) {
                    console.log('response', response);
                    return response.data;
                })
                .catch(function (error) {
                    console.log('Erro', error)
                });
        }catch (e) {
            console.log('Erro ao consultar remuneração',e)

        }

    },

}
